module.exports = ({ anchorRss }) => {
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
      {
        resolve: 'gatsby-source-anchor',
        options: {
          rss: anchorRss,
        },
      },
    ],
  };
};
