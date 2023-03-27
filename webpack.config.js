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
    rules: [
      { test: /\.tsx$/, use: ['babel-loader', 'ts-loader'] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public/assets/font/',
            }
          }
        ]
      },
      { test: /\.scss$/, use: ['style-loader', 'css-loader'] },
    ],
  },
  optimization: { minimizer: [] },
};
