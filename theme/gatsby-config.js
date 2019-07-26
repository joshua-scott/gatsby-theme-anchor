const fs = require('fs');
const YAML = require('yaml');

const SRC_PATH = __dirname;
const CONFIG_PATH = '/static/admin';
const CMS_DATA = '/src/cms';

const writeConfigFile = clientPath => {
  const file = fs.readFileSync(`${SRC_PATH}/${CONFIG_PATH}/config.yml`, 'utf8');
  const config = YAML.parse(file);

  fs.writeFileSync(
    `${SRC_PATH}/${CMS_DATA}/config.ts`,
    'export default ' + JSON.stringify(config),
  );

  fs.copyFileSync(
    `${SRC_PATH}/${CONFIG_PATH}/config.yml`,
    `${clientPath}/${CONFIG_PATH}/config.yml`,
  );
};

module.exports = ({ anchorRss, path: clientPath }) => {
  if (!anchorRss) {
    throw new Error(
      'anchorRss not defined inside the options of `gatbsy-theme-anchor`',
    );
  }

  writeConfigFile(clientPath);

  return {
    siteMetadata: {
      title: 'Gatsby Theme Jam Example Submission',
    },
    plugins: [
      'gatsby-plugin-theme-ui',
      'gatsby-plugin-typescript',
      {
        resolve: 'gatsby-plugin-netlify-cms',
        options: {
          manualInit: true,
          modulePath: `${SRC_PATH}/${CMS_DATA}`,
        },
      },
      {
        resolve: 'gatsby-source-anchor',
        options: {
          rss: anchorRss,
        },
      },
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          path: `${clientPath}/${CMS_DATA}`,
          name: 'data',
        },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-emotion',
      'gatsby-plugin-styled-components',
    ],
  };
};
