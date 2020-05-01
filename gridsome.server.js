// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/

    // Examples pages
    createPage({
      path: '/examples',
      component: './src/templates/Examples.vue',
    });

    const { data: examplesData } = await graphql(`
      {
        examples: allExample {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `);

    examplesData.examples.edges.forEach(({ node }) => {
      createPage({
        path: `/examples/${node.slug}`,
        component: './src/templates/Example.vue',
        context: {
          id: node.id,
          breadcrumbs: [
            {
              path: 'examples',
              to: '/examples/',
              text: 'Examples',
            },
            {
              path: `examples/${node.slug}`,
              to: `/examples/${node.slug}/`,
              text: node.title,
            },
          ],
        },
      });
    });

    // Frontend Mentor Challenges pages
    createPage({
      path: '/examples/fm-challenges',
      component: './src/templates/FrontendMentorChallenges.vue',
      context: {
        breadcrumbs: [
          {
            path: 'examples',
            to: '/examples/',
            text: 'Examples',
          },
          {
            path: 'examples/fm-challenges',
            to: '/examples/fm-challenges/',
            text: 'Frontend Mentor Challenges',
          },
        ],
      },
    });

    const { data: frontendMentorChallengesData } = await graphql(`
      {
        frontendMentorChallenges: allFrontendMentorChallenge {
          edges {
            node {
              id
              slug
              title
            }
          }
        }
      }
    `);

    frontendMentorChallengesData.frontendMentorChallenges.edges.forEach(({ node }) => {
      createPage({
        path: `/examples/fm-challenges/${node.slug}`,
        component: './src/templates/FrontendMentorChallenge.vue',
        context: {
          id: node.id,
          breadcrumbs: [
            {
              path: 'examples',
              to: '/examples/',
              text: 'Examples',
            },
            {
              path: 'examples/fm-challenges',
              to: '/examples/fm-challenges/',
              text: 'Frontend Mentor Challenges',
            },
            {
              path: `examples/fm-challenges/${node.slug}`,
              to: `/examples/fm-challenges/${node.slug}/`,
              text: node.title,
            },
          ],
        },
      });
    });
  });
};
