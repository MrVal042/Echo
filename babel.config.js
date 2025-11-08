module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          alias: {
            '@navigation': './app/navigation',
            '@components': './app/components',
            '@constants': './app/constants',
            '@features': './app/features',
            '@styles': './app/@styles',
            '@hooks': './app/hooks',
            '@store': './app/store',
            '@utils': './app/utils',
            '@data': './app/data',
            '@assets': './assets',
            '@env': './env.d.ts',
            '@api': './app/api',
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
      [
        'dotenv-import',
        {
          moduleName: '@env',
          path: '.env',
          safe: false,
          allowUndefined: true,
        },
      ],
    ],
  }
}
