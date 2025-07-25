import { outdent } from 'outdent'

/**
 * @param {GithubActionContext} githubActionContext - GitHub Action context
 * @param {number} issueNumber - The number of the issue/PR on which to post the comment
 * @param {Comment} comment
 */
export async function comment(
  { github, context, commit },
  issueNumber,
  { titleText, markerText, bodyText }
) {
  const { issues } = github.rest

  /**
   * GitHub issue REST API parameters
   *
   * @satisfies {IssueCommentsListParams}
   */
  const parameters = {
    issue_number: issueNumber,
    owner: context.repo.owner,
    repo: context.repo.repo
  }

  /**
   * GitHub issue comment body
   */
  const body = outdent`
    <!-- ${markerText} -->
    ## ${titleText}

    ${bodyText}

    ---
    ${renderCommentFooter({ context, commit })}
  `

  /**
   * Find GitHub issue comment with marker `<!-- Example -->`
   */
  const comment = await getComment({ github, context }, issueNumber, markerText)

  /**
   * Update GitHub issue comment (or create new)
   */
  await (comment?.id
    ? issues.updateComment({ ...parameters, body, comment_id: comment.id })
    : issues.createComment({ ...parameters, body }))
}

/**
 * @param {Pick<GithubActionContext, "context" | "commit">} githubActionContext
 * @returns {string} - The content for the footer
 */
function renderCommentFooter({ context, commit }) {
  return `[Action run](${githubActionRunUrl(context)}) for ${commit}`
}

/**
 * Generates a URL to the GitHub action run
 *
 * @param {import('@actions/github').context} context - The context of the GitHub action
 * @returns {string} The URL to the "Artifacts" section of the given run
 */
export function githubActionRunUrl(context) {
  const { runId, repo } = context

  return `https://github.com/${repo.owner}/${repo.repo}/actions/runs/${runId}/attempts/${process.env.GITHUB_RUN_ATTEMPT}`
}

/**
 * Find GitHub issue comment with marker `<!-- Example -->`
 *
 * @param {Pick<GithubActionContext, "github" | "context">} githubActionContext
 * @param {number} issueNumber
 * @param {Comment["markerText"]} markerText
 * @returns {Promise<IssueCommentData | undefined>} GitHub comment
 */
export async function getComment({ github, context }, issueNumber, markerText) {
  const { issues } = github.rest

  // Find all GitHub issue comments
  const comments = await github.paginate(issues.listComments, {
    issue_number: issueNumber,
    owner: context.repo.owner,
    repo: context.repo.repo
  })

  // Find first match for marker
  return comments.find(({ body }) => !!body?.includes(markerText))
}

/**
 * Delete GitHub issue comment with marker `<!-- Example -->`
 *
 * @param {Pick<GithubActionContext, "github" | "context">} githubActionContext
 * @param {number} issueNumber
 * @param {Comment["markerText"]} markerText
 */
export async function deleteComment(
  { github, context },
  issueNumber,
  markerText
) {
  const { issues } = github.rest

  // Find first match for marker
  const comment = await getComment({ github, context }, issueNumber, markerText)

  // Delete comment
  if (comment) {
    await issues.deleteComment({
      issue_number: issueNumber,
      owner: context.repo.owner,
      repo: context.repo.repo,
      comment_id: comment.id
    })
  }
}

/**
 * @typedef {object} GithubActionContext
 * @property {import('@octokit/rest').Octokit} github - The pre-authenticated Octokit provided by GitHub actions
 * @property {import('@actions/github').context} context - The context of the GitHub action
 * @property {string} commit - The SHA of the commit that triggered the action
 */

/**
 * @typedef {object} Comment
 * @property {string} markerText - The marker to identify the comment
 * @property {string} titleText - The title of the comment
 * @property {string} bodyText - The body of the comment
 */

/**
 * @import {RestEndpointMethodTypes} from '@octokit/plugin-rest-endpoint-methods'
 * @typedef {RestEndpointMethodTypes["issues"]} IssuesEndpoint
 * @typedef {IssuesEndpoint["listComments"]["parameters"]} IssueCommentsListParams
 * @typedef {IssuesEndpoint["getComment"]["response"]["data"]} IssueCommentData
 */
