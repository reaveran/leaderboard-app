module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src/"],
        extensions: [".d.ts", ".ts", ".tsx", ".js", "ios.js", ".android.js"],
        alias: {
          "@components": "./src/components",
          "@components/*": "./src/components/*",
          "@store": "./src/store",
          "@store/*": "./src/store/*",
          "@config": "./src/config",
          "@config/*": "./src/config/*",
          "@pages": "./src/pages",
          "@pages/*": "./src/pages/*",
          "@api": "./src/api",
          "@api/*": "./src/api/*",
          "@navigation": "./src/navigation",
          "@utils": "./src/utils",
          "@utils/*": "./src/utils/*",
          "@assets": "./src/assets",
          "@assets/*": "./src/assets/*",
          "@styles": "./src/styles",
          "@styles/*": "./src/styles/*",
          "@hooks": "./src/hooks",
        },
      },
    ],
  ],
};
