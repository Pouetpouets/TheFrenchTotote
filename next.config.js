module.exports = {
  webpack: (config, { isServer }) => {
    // Add support for loading MP4 files
    config.module.rules.push({
      test: /\.mp4$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next/static/videos',
          outputPath: 'static/videos',
          name: '[name].[hash].[ext]',
        },
      },
    });

    // Important: return the modified config
    return config;
  },
};
