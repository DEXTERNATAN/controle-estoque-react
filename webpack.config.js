module.exports = {
  entry: "./app/app.js",
  output: {
    path: "/public/",
    filename: "bundle.js"
  },
  devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
  },
  performance: { 
    hints: false 
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
}