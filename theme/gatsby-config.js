const fs = require('fs');
const YAML = require('yaml');

const CMS_LOCAL_FOLDER = `${__dirname}/src/cms`;

const writeConfigFile = cmsClientConfig => {
  const file = fs.readFileSync(`${CMS_LOCAL_FOLDER}/config.yml`, 'utf8');
  const config = YAML.parse(file);

  fs.writeFileSync(
    `${CMS_LOCAL_FOLDER}/config.ts`,
    'export default ' + JSON.stringify(config),
  );

  fs.copyFileSync(
    `${CMS_LOCAL_FOLDER}/config.yml`,
    `${cmsClientConfig}/config.yml`,
  );
};

module.exports = ({ anchorRss, cmsFolder, cmsClientConfig }) => {
  if (!anchorRss) {
    throw new Error(
      'anchorRss not defined inside the options of `gatbsy-theme-anchor`',
    );
  }

  writeConfigFile(cmsClientConfig);

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
          modulePath: CMS_LOCAL_FOLDER,
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
          path: `${cmsFolder}`,
          name: 'data',
        },
      },
      'gatsby-transformer-remark',
      'gatsby-plugin-emotion',
    ],
  };
};
