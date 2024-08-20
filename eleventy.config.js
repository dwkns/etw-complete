export default async function(eleventyConfig) {
    return {
        dir: {
          input: "src",
          output: "dist",
          includes: "_partials/",
          layouts: "_partials/_layouts",
          data: "_data",
        }
      }
}