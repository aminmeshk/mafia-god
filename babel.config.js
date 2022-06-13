module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.tsx',
          '.ios.ts',
          '.ios.js',
          '.android.tsx',
          '.android.ts',
          '.android.js',
          '.js',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          '@constants': './src/constants',
          '@context': './src/context',
          '@types': './src/types',
          '@lib': './src/lib',
          '@locale': './src/locale',
          '@hooks': './src/hooks',
          '@components': './src/components',
          '@features': './src/features',
          '@navigation': './src/navigation',
          '@models': './src/models',
          '@test': './src/test',
        },
      },
    ],
  ],
};
