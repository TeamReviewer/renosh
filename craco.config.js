const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@primary-color': '#FF9700',
              '@link-color': '#6058E5',
            //   '@typography-title-margin-bottom': '1em',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
