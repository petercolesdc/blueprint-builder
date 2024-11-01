module.exports = {
  source: ["tokens/primitives.json"],
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
          destination: "primitives.css",
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
          destination: "primitives.scss",
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
          destination: "primitives.less",
          format: "less/variables",
          filter: (token) => !token.private,
        },
      ],
    },
    js: {
      transformGroup: "js",
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
          destination: "primitives.js",
          format: "javascript/module-flat",
          filter: (token) => !token.private,
        },
      ],
    },
  },
};
