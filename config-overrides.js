const {override, fixBabelImports, addLessLoader, addWebpackPlugin} = require('customize-cra');
const webpack = require('webpack');
const path = require('path');

// const addMyPlugin = config => {
//   console.dir(config.plugins);
//   // config.plugins.forEach(element => console.dir(element instanceof webpack.NormalModuleReplacementPlugin));
//   // throw new Error();
//   // config.plugins.push(new webpack.NormalModuleReplacementPlugin('/node_modules\/antd\/lib\/style\/index\.less/', path.resolve(__dirname, 'src/App.less')));
//   return config
// };
module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: 'true'
    }),

    addLessLoader({
      javascriptEnabled: true,
      noIeCompat: true,
      localIdentName: "[local]--[hash:base64:5]"
    })
);


