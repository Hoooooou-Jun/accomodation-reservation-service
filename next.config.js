module.exports = {
  webpack: (config, option) => {
    config.module.rules.push(
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8192,
            outputPath: 'static/fonts/',
            publicPath: '/_next/',
            name: '[name].[ext]',
          },
        },
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      },
      { test: /\.tsx$/, use: ['babel-loader', 'ts-loader'] },
      { test: /\.scss$/, use: ['style-loader', 'css-loader'] },
    );
    return config;
  },
  experimental: {
    appDir: false,
  },
};
