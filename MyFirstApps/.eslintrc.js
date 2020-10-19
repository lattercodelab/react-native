module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _expand: './src/components/expand',
          _input: './src/components/input',
          _list: './src/components/list'
        }
      }
    }
  }
};
