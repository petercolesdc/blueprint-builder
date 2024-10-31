module.exports = {
  source: ["tokens/foundations.js"],
  platforms: {
    css: {
      transformGroup: "css",
      transforms: [
        "size/pxToRem",
        "fontFamily/css",
        "name/kebab",
        "color/hsl-4",
      ],
      prefix: "",
      buildPath: "build/",
      files: [
        {
          destination: "foundations.css",
          format: "css/variables",
          filter: (token) => !token.private,
        },
      ],
    },
    scss: {
      transformGroup: "scss",
      transforms: [
        "size/pxToRem",
        "fontFamily/css",
        "name/kebab",
        "color/hsl-4",
      ],
      prefix: "",
      buildPath: "build/",
      files: [
        {
          destination: "foundations.scss",
          format: "scss/variables",
          filter: (token) => !token.private,
        },
      ],
    },
    less: {
      transformGroup: "less",
      transforms: [
        "size/pxToRem",
        "fontFamily/css",
        "name/kebab",
        "color/hsl-4",
      ],
      prefix: "",
      buildPath: "build/",
      files: [
        {
          destination: "foundations.less",
          format: "less/variables",
          filter: (token) => !token.private,
        },
      ],
    },
    json: {
      transformGroup: "web",
      transforms: [
        "size/pxToRem",
        "fontFamily/css",
        "name/kebab",
        "color/hsl-4",
      ],
      prefix: "",
      buildPath: "build/",
      files: [
        {
          destination: "foundations.json",
          format: "json/flat",
          filter: (token) => !token.private,
        },
      ],
    },
  },
};
