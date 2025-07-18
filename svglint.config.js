/** @type {import('svglint').Config} */
export default {
  rules: {
    // We want valid markup
    valid: true,
    elm: {
      svg: true,
      // Disallow `<image>` elements, usually used to embed raster images
      // into SVGs, making them look scalable but actually not scalable
      image: false
    },
    attr: [
      {
        'rule::selector': 'svg',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: true,
        width: true,
        height: true
      }
    ]
  }
}
