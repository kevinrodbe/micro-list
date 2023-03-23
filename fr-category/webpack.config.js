const path = require('path');
const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'cande',
    projectName: 'fr-category',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    resolve: {
      modules: [path.resolve(__dirname, 'node_modules'), path.resolve(__dirname, './src')],
    },
  });
};
