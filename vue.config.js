exports = {
    outputDir: 'dist',
    publicPath: '/',
    lintOnSave: true,
    runtimeCompiler: true, //关键点在这  
    chainWebpack: () => { },
    configureWebpack: () => { },
    // 配置 webpack-dev-server 行为。
    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // string | Object
        before: app => { }
    },
    productionSourceMap: false,
    // css相关配置
    css: {
      // 是否使用css分离插件 ExtractTextPlugin
    //   extract: true, 
      // 开启 CSS source maps?
      sourceMap: false,
      // css预设器配置项
      loaderOptions: {
          sass:{
              prependData:`@import'./src/style/main.scss';`
          }
      },
      // 启用 CSS modules for all css / pre-processor files.
      modules: false
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader'
        }, {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'scss-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader',
            ]
        }]
    }
}