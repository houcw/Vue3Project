
const path = require('path')
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
        host: 'localhost',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null, // string | Object
        before: app => { }
    },
    productionSourceMap: false,
    // css相关配置
    css: {
        sourceMap: false,
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/assets/styles/vars.scss";
                @import "@/assets/styles/mixins.scss";
                @import "@/assets/styles/functions.scss";
                `
            }
        }
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
