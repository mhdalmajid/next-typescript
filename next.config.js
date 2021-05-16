const path = require('path')

module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    // Unset client-side javascript that only works server-side
    config.resolve.fallback = { fs: false, module: false }

    return config
  },
  // target: 'serverless',
  // webpack(config) {
  //   config.module.rules.push(
  //     {
  //       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  //       issuer: {
  //         test: /\.(js|ts)x?$/,
  //       },
  //       use: ['babel-loader', '@svgr/webpack', 'url-loader'],
  //     },
  //     {
  //       test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
  //       loader: 'url-loader',
  //     }
  //   )
  //   return config
  // },
}
