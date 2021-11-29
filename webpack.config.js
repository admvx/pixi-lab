const path = require('path');

const outputPath = path.resolve(__dirname, 'dist');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [{
      test: /\.ts$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devServer: {
    port: 8000,
    static: { directory: outputPath }
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: outputPath
  }
};
