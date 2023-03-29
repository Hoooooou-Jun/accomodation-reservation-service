const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src/pages', '_app.tsx'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  module: {
    rules: [],
  },
  optimization: { minimizer: [] },
};
