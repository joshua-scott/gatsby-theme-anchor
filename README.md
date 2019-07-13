[![Netlify Status](https://api.netlify.com/api/v1/badges/d472f990-9300-4406-a5a0-388ca0662966/deploy-status)](https://app.netlify.com/sites/gatsby-theme-anchor/deploys)

# Gatsby Theme Anchor

**This theme is not ready yet, please wait a few days more 🙏**

<p align="center">
  <a href="https://gatsby-theme-anchor.netlify.com/">
    <img src="./media/cover.jpeg" alt="Cover" />
  </a>
  <br />
  <i>
    A
    <a href="https://www.gatsbyjs.org/">Gatsby</a>
    Theme to showcase your podcast in
    <a href="https://anchor.fm/">Anchor</a>
  </i>
</p>

## Motivation

## Features

## How to Start

## Screenshot and Design

## Deploying your site

## Customization

## Trouble Shooting 💥

While I was coding this theme I run into some problem so I decided to log them here:

## `Plugin gatsby-source-anchor returned an error Status code 504`

- **Reason**: This is not a problem of Gatsby or of the plugin, the issue relays on Anchor. It seems that those guys they frequently have their server down for some reason and therefore the `rss` is not available, then the whole application doesn't have the data to continue.
- **Solution**: I started to work in a caching implementation, but for the moment the only answer I can give you is to go for a coffe and come back when the servers of Anchor are Ok.

## Contributing

Follow these steps to run the demo locally:

1.  Clone the repo: `git clone https://github.com/EmaSuriano/gatsby-theme-anchor.git`
2.  Install dependencies: `cd gatsby-theme-anchor && yarn`
3.  Start the demo: `yarn workspace demo start`

## License

MIT.
