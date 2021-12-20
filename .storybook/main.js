// eslint-disable-next-line @typescript-eslint/no-var-requires
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const path = require('path')

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router'],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: async (config) => {
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin({
        extensions: config.resolve.extensions
      })
    ]

    config.module.rules.push({
      test: /\.js?$/,
      include: [
        path.resolve(__dirname, '../node_modules/@react-leaflet/core'),
        path.resolve(__dirname, '../node_modules/react-leaflet')
      ],
      use: {
        loader: 'babel-loader',
        options: {
          plugins: [
            '@babel/plugin-proposal-nullish-coalescing-operator',
            '@babel/plugin-proposal-optional-chaining'
          ],
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    })

    return config
  }
}
