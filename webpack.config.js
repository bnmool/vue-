// 由于 webpack 是基于 Node 进行构建，所有 webpack 的配置文件中，任何合法的 node 代码都是支持的
var path = require('path');

// 在内存中，根据指定的模板页面，生成一份内存中的首页，同时自动把打好包的 bundle 注入到页面底部
// 如果要配置插件，需要在导出的对象中，挂载一个 plugin 节点
var htmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

// 当以命令形式运行 webpack 或 webpack-dev-server 的时候，工具发现，我们并没有提供要打包的文件和入口文件，此时，他会检查项目根目录中的配置文件，并读取这个文件，就拿到了导出的这个配置对象，根据这个配置对象，进行打包构建

module.exports = {
    entry: path.join(__dirname, './src/main.js'),// 入口文件
    output: {// 指定输出项
        path: path.join(__dirname, './dist'),// 输出路径
        filename: 'bundle.js'// 指定输出文件的名称
    },

    // 所有 webpack 插件的配置节点
    plugins: [
        new htmlWebpackPlugin({
            // 指定模板文件路径
            template: path.join(__dirname, './src/index.html'),
            // 设置生成的内存页面的名称
            filename: 'index.html'
        }),
        new VueLoaderPlugin()
    ],

    // 配置所有第三方 loader 模块
    module: {
        // 配置第三方模块的匹配规则
        rules: [
            // 处理 css 文件的loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},

            // 处理 less 文件的 loader
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},

            // 处理 sass 文件的 loader
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},

            // 处理图片路径的 loader
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                loader: 'url-loader',
                options: {
                    // limit 给定的值，是图片的大小，单位是 byte 如果我们引用的图片大于或等于给定的limit值，则不会被转为 base64 格式的字符串，如果图片小于给定的 limit 值，则会被转为 base64 的字符串
                    limit: 100000,
                    name: '[name].[ext].[hash:6]'
                }
            },

            // 字体图标组件的 loader
            {
                test: /\.(woff2|woff|svg|ttf|eot)$/,
                loader: 'url-loader',
            },

            // 这个 babel 用来转换高级的 ES 语法
            {
                test: /\.js$/, use:'babel-loader',
                exclude: /node_modules/
            },

            // 处理 .vue 文件的 loader
            {
                test:/\.vue$/,
                use:'vue-loader'
            }


        ],

    },


    resolve:{
        alias:{
            // 修改 vue 被导入的时候的包的路径
            // 'vue$':"vue/dist/vue.js"
        }
    }

};




















