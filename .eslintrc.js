// const path = require("path");

module.exports = {
  plugins: ["react-native", "@typescript-eslint", "simple-import-sort"],
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:react-hooks/recommended",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "react/jsx-curly-brace-presence": ["error", { props: "never", children: "ignore", propElementValues: "always" }],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "promise/always-return": "off",
    "react-native/no-raw-text": ["off", { skip: ["Link", "Text.Link", "Text.Text", "Text"] }],
    "simple-import-sort/imports": [
      "error",
      {
        groups: [
          // External packages
          ["^react", "^@?\\w"],
          // Internal modules
          [
            "^@components",
            "^@store",
            "^@config",
            "^@pages",
            "^@api",
            "^@assets",
            "^@utils",
            "^@navigation",
            "^@styles",
          ],
          // Relative imports
          ["^\\."],
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
      rules: {
        "quotes": ["error", "double"],
        "semi": ["error", "always"],

        "no-console": "error",
        "no-shadow": "off",
        "no-undef": "off",
        "@typescript-eslint/no-shadow": ["error"],
        "react/react-in-jsx-scope": "off",
        "react-native/no-unused-styles": "off",
        "react-hooks/exhaustive-deps": "warn",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-unused-vars": ["error"],
        "@typescript-eslint/return-await": ["error"],
        "promise/always-return": "off",
      },
    },
  ],
  parser: "@babel/eslint-parser",
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true,
  },
};
