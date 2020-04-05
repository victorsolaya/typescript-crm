const path = require('path');
const glob = require('glob');

module.exports = [{
    mode: 'development',
    entry: glob.sync('./src/**/*').reduce((acc, path) => {
        const entry = path.replace('/src', '').replace('.ts','')
        acc[entry] = path
        return acc
    }, {}),
    output: {
      filename: "[name].js",
      path: path.resolve(__dirname,'dist'),
    },
    module: {
      rules: [{
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }]
    },
    resolve: {
      extensions: [".ts"]
    },
    devtool: "source-map"
  },
  {
    mode: 'production',
    entry: glob.sync('./src/**/*').reduce((acc, path) => {
        const entry = path.replace('/src', '').replace('.ts','')
        acc[entry] = path
        return acc
    }, {}),
    output: {
      filename: "[name].min.js",
      path: path.resolve(__dirname,'dist'),
    },
    module: {
      rules: [{
        test: /.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }]
    },
    resolve: {
      extensions: [".ts"]
    },
    devtool: "source-map"
  }];
  
  