module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _view: './src/view',
          _page: './src/components/page'
        }
      }
    }
  }
};
