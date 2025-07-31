export default function () {
  return {
    // Don't include pages in this directory in Eleventy collections
    // Prevents it being included in sitemap, global navigation, etc.
    eleventyExcludeFromCollections: true,

    // Set robots meta tag to `noindex, nofollow` on these pages in production
    metadata: {
      noRobots: true
    }
  }
}
