/* eslint-disable global-require */
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    [
      'postcss-preset-env',
      {
        stage: 3,
        features: {
          'nesting-rules': true,
        },
        autoprefixer: true,
      },
    ],
  ],
}
