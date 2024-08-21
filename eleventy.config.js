export default async function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ "./sanity/dist": "./sanity" });

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