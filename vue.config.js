// vue.config.js
module.exports = {
  // 选项...
  publicPath: process.env.NODE_ENV === "production" ? "" : "/",
  // 构建项目生成的目录
  outputDir: process.env.NODE_ENV === "production" ? "dist" : "devDist",
  // 语法的自动检测
  lintOnSave: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~@/styles/main.scss";`
      }
    }
  }
};
