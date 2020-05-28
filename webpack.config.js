const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const CopyPlugin = require("copy-webpack-plugin");
module.exports = {
  //入口文件
  entry: "./src/index.js",

  //出口文件
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  //配置loader
  module: {
    rules: [
      { test: /\.txt$/, use: "raw-loader" }, //解析es6
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },

      {
        ///打包css
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"],
      },

      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192 * 100,
              //如果图片小于这个值，会被base64编码为一个字符串，提高效率，减少请求
              name: "[hash:8].[ext]", //打包后的图片名字，截取哈希值的前八位就ok
            },
          },
        ],
      },

      {
        //配置处理vue的loader
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },

  //配置插件
  plugins: [
    new HtmlWebpackPlugin({
      //要配置的html文件
      template: "./src//publie/index.html",
    }),
    new CleanWebpackPlugin(), //自动清理dist相关文件
    new VueLoaderPlugin(), //vue插件
    new CopyPlugin({
      patterns: [
        // {
        //  from:path.resolve(__dirname,'/src/publie'),//拷贝谁
        //  to:path.resolve(__dirname,'/dist'),//拷到哪里
        //  ignore:['index.html']//忽略
        // }
        {
         from: "./src/publie",
          to: path.resolve(__dirname, "dist"),
        //  ignore: ["index.html"],
        }
      ],
    }),
  ],

  devServer: {
    open: true, // 自动打开浏览器
    compress: true, // 启动gzip压缩
    port: 3000, // 端口号
  },

  //可以找出错误的在哪一行
  devtool: "cheap-module-eval-source-map",

  mode: "development",

  resolve: {
    extensions: [".js", ".json", ".vue"], //解决导入省略后缀名称
    alias: {
      //给路径取别名,以后导入vue的时候，默认是在找'vue/dist/vue.esm.js'
      // 'vue$':'vue/dist/vue.esm.js',
      "@": path.resolve(__dirname, "src"), //取别名，让@代替根路径下的src  '/src'
    },
  },
};

