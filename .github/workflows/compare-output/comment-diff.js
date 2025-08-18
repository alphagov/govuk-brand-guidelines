import { readFile } from 'node:fs/promises'
import { basename } from 'path'

import { comment, deleteComment, githubActionRunUrl } from './comment.js'

/**
 * Posts the content of multiple diffs in parallel on the given GitHub issue
 *
 * @param {GithubActionContext} githubActionContext
 * @param {number} issueNumber
 * @param {DiffComment[]} diffs
 */
export async function commentDiffs(githubActionContext, issueNumber, diffs) {
  const errors = []

  // Run comments in order, but prevent errors stopping other comments
  for (const diff of diffs) {
    try {
      await commentDiff(githubActionContext, issueNumber, diff)
    } catch (error) {
      const filename = basename(diff.path)

      // Defer errors until all comments are attempted
      errors.push(
        new Error(`Failed to post GitHub comment for ${filename}`, {
          cause: error
        })
      )
    }
  }

  // Throw on any deferred errors above
  if (errors.length) {
    throw new Error('Failed to post GitHub comments', {
      cause: errors
    })
  }
}

export async function commentFormattedDiff(
  githubActionContext,
  issueNumber,
  { path, titleText, markerText, skipEmpty }
) {
  // Read diff from previous step
  const diffContent = await readFile(path, 'utf8')

  // Skip or delete comment for empty diff
  if (!diffContent && skipEmpty) {
    console.log(`Skipping GitHub comment for ${basename(path)}`)
    await deleteComment(githubActionContext, issueNumber, markerText)
    return
  }

  try {
    await comment(githubActionContext, issueNumber, {
      markerText,
      titleText,

      // Add a little note if the diff is empty
      bodyText: render(JSON.parse(diffContent))
    })
  } catch (error) {
    console.error(error)

    await comment(githubActionContext, issueNumber, {
      markerText,
      titleText,

      // Unfortunately the best we can do here is a link to the "Artifacts"
      // section as [the upload-artifact action doesn't provide the public
      // URL](https://github.com/actions/upload-artifact/issues/50) :'(
      bodyText: `The diff could not be posted as a comment. You can download it from the [workflow artifacts](${githubActionRunUrl(
        githubActionContext.context
      )}#artifacts).`
    })
  }
}

/**
 * Posts the content of a diff as a comment on a GitHub issue
 *
 * @param {GithubActionContext} githubActionContext
 * @param {number} issueNumber
 * @param {DiffComment} diffComment
 */
export async function commentDiff(
  githubActionContext,
  issueNumber,
  { path, titleText, markerText, skipEmpty }
) {
  // Read diff from previous step
  const diffText = await readFile(path, 'utf8')

  // Skip or delete comment for empty diff
  if (!diffText && skipEmpty) {
    console.log(`Skipping GitHub comment for ${basename(path)}`)
    await deleteComment(githubActionContext, issueNumber, markerText)
    return
  }

  // Add or update comment on PR
  try {
    await comment(githubActionContext, issueNumber, {
      markerText,
      titleText,

      // Add a little note if the diff is empty
      bodyText: diffText
        ? `\`\`\`diff\n${diffText}\n\`\`\``
        : 'No diff changes found.'
    })
  } catch {
    await comment(githubActionContext, issueNumber, {
      markerText,
      titleText,

      // Unfortunately the best we can do here is a link to the "Artifacts"
      // section as [the upload-artifact action doesn't provide the public
      // URL](https://github.com/actions/upload-artifact/issues/50) :'(
      bodyText: `The diff could not be posted as a comment. You can download it from the [workflow artifacts](${githubActionRunUrl(
        githubActionContext.context
      )}#artifacts).`
    })
  }
}

function render(diffContent) {
  const pageChanges = diffContent
    .map(({ path, url, content }) => {
      return `<tr><td>

[${path}](${url})

</td>
<td>
<details>
<summary>Diff for ${path}</summary>

\`\`\`diff\n${content}\n\`\`\`

</details>
</td>
</tr>`
    })
    .join('\n')

  return `
<table>
<caption>Pages with content changes</caption>
<tr>
  <th>Path</th>
  <th>Diff</th>
</tr>
${pageChanges}
</table>
  `
}
