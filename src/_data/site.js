export default function () {
  return {
    // The absolute URL of the site
    url:
      process.env.CONTEXT === 'production'
        ? process.env.URL
        : process.env.DEPLOY_PRIME_URL,

    env: {
      // Netlify deploy context
      // Possible values: "dev", "branch-deploy", "deploy-preview", "production"
      CONTEXT: process.env.CONTEXT ?? 'dev',

      // Is this a GitHub pull request?
      // This comes as a string, so casting to a boolean
      PULL_REQUEST: process.env.PULL_REQUEST === 'true',

      // GitHub PR ID
      REVIEW_ID: process.env.REVIEW_ID ?? null
    }
  }
}
