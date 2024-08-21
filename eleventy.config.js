 import logToConsole from 'eleventy-plugin-console-plus'


export default async  (eleventyConfig)=> {

  // Copy Sanity Studio into build folder
  eleventyConfig.addPassthroughCopy({ "./sanity/dist": "./sanity" });

  eleventyConfig.addPlugin(logToConsole);

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_partials/",
      layouts: "_partials/_layouts",
      data: "_data"
    }
  }
} 