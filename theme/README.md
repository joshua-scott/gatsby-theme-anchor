# Gatsby Theme Anchor

> A Gatsby Theme to showcase your podcast in [Anchor](https://anchor.fm/)

See the [live demo](https://gatsby-theme-anchor.netlify.com/)

## Installation

To use this theme in your Gatsby sites, follow these instructions:

1.  Install the theme

    ```sh
    npm install --save gatsby-theme-anchor
    ```

2.  Add the theme to your `gatsby-config.js`:

    ```js
    module.exports = {
      plugins: [
        {
          resolve: 'gatsby-theme-anchor',
          options: {
            anchorRss: 'YOUR_ANCHOR_RSS_LINK',
            path: __dirname,
          },
        },
      ],
    };
    ```

3.  Start your site
    ```sh
    gatsby develop
    ```

## Full documentation

In order to read the full documentation please refer to the [main project's repository](https://github.com/EmaSuriano/gatsby-theme-anchor).

## License

MIT.
