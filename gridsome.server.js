// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');
const fs = require('fs');

const yaml = require('js-yaml');

module.exports = function(api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/

    const sitePath = path.join(__dirname, 'src/content/site.yml');
    const siteJSON = yaml.safeLoad(fs.readFileSync(sitePath, 'utf8'));
    const site = addCollection('Site');

    siteJSON.forEach((fields) => {
      site.addNode(fields);
    });
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
