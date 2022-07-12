const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./playground/index.js",
  output: {
    path: path.resolve(__dirname, "playground/build"),
    filename: "main.js"
  },
  target: "web",
  devServer: {
    port: "3500",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
        exclude: /node_modules/, //folder to be excluded
        use: ['babel-loader'] //loader which we are going to use
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  }
}
