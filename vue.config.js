module.exports = {
  devServer: {
    port : 3010
  },

  outputDir: '/home/seoly/spring/aplecore/src/main/resources/static',
  indexPath: '/home/seoly/spring/aplecore/src/main/resources/templates/index.html',

  css : {
    loaderOptions : {
      scss : {
        // prependData : `@import "src/style/variables.scss";`
      }
    }
  }
}