module.exports = {
    presets: [['module:metro-react-native-babel-preset', {
        unstable_disableES6Transforms: true
      }]],
    env: {
        production: {
            plugins: [ 'react-native-paper/babel' ]
        }
    },
    plugins: [ 'optional-require' ]
};