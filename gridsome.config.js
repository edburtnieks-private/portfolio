// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Edgar Burtnieks',
  siteDescription: 'Full Stack Designer saving time by building easy-to-use web apps',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Example',
        path: 'content/examples/**/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/**/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ContributedProject',
        path: 'content/contributed-projects/**/*.md'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Skill',
        path: 'content/skills.yml'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms-paths',
      options: {
        contentTypes: ['Example', 'Post'],
        coverField: 'image'
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ['@gridsome/remark-prismjs']
    }
  },
  chainWebpack: config => {
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
  }
};
