const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#2b335b',
              '@link-color': '#dddddd',
            //   '@typography-title-margin-bottom': '1em',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
