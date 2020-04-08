// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Edgar Burtnieks',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Example',
        path: 'content/examples/**/*.md',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'FrontendMentorChallenge',
        path: 'content/frontend-mentor-challenges/**/*.md',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin',
      },
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['FrontendMentorChallenge'],
        coverField: 'image',
      },
    }
  ],
  chainWebpack: (config) => {
    // https://stackoverflow.com/a/57097106
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .oneOf('inline')
      .resourceQuery(/inline/)
      .use('svg-url-loader')
      .loader('svg-url-loader')
      .end()
      .end()
      .oneOf('external')
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
  },
};
