const fs = require('fs');
const path = require('path');
const YAML = require('yaml');

const SRC_PATH = __dirname;
const CMS_DATA = '/src/cms';

const copyFolderSync = (from, to) => {
  if (!fs.existsSync(to)) fs.mkdirSync(to);
  fs.readdirSync(from).forEach(element => {
    if (fs.lstatSync(path.join(from, element)).isFile()) {
      fs.copyFileSync(path.join(from, element), path.join(to, element));
    } else {
      copyFolderSync(path.join(from, element), path.join(to, element));
    }
  });
};

const writeConfigFile = clientPath => {
  const file = fs.readFileSync(`${SRC_PATH}/static/admin/config.yml`, 'utf8');
  const config = YAML.parse(file);

  fs.writeFileSync(
    `${SRC_PATH}/${CMS_DATA}/config.ts`,
    'export default ' + JSON.stringify(config),
  );

  copyFolderSync(`${SRC_PATH}/static`, `${clientPath}/static`);
};

module.exports = ({ anchorRss, path: clientPath }) => {
  if (!anchorRss) {
    throw new Error(
      'anchorRss not defined inside the options of `gatbsy-theme-anchor`',
    );
  }

  if (process.env.NODE_ENV === 'development') {
    writeConfigFile(clientPath);
  }

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
