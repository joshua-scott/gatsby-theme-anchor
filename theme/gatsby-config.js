module.exports = ({ anchorRss, cmsFolder }) => {
  if (!anchorRss) {
    throw new Error(
      'anchorRss not defined inside the options of `gatbsy-theme-anchor`',
    );
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
          modulePath: `${__dirname}/src/cms`,
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
    ],
  };
};
