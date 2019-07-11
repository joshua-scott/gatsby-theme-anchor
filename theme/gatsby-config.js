module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Jam Example Submission",
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    {
      resolve: "gatsby-source-anchor",
      options: {
        rss: "https://anchor.fm/s/4b4180c/podcast/rss",
      },
    },
  ],
}
