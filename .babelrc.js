module.exports = {
  "presets": ["next/babel"],
  "plugins": [
    [
      "prismjs",
      {
        "languages": [
          'html',
          "javascript",
          "css",
          "bash",
          "docker",
          "json",
          "markdown",
          "php",
          "jsx",
          "tsx",
          "typescript",
        ],
        "plugins": ["show-language"],
        "theme": "okaidia",
        "css": true,
      },
    ],
  ],
};