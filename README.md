[![Netlify Status](https://api.netlify.com/api/v1/badges/d472f990-9300-4406-a5a0-388ca0662966/deploy-status)](https://app.netlify.com/sites/gatsby-theme-anchor/deploys)

# Gatsby Theme Anchor

<p align="center">
  <a href="https://gatsby-theme-anchor.netlify.com/">
    <img src="./docs/cover.jpeg" alt="Cover" />
  </a>
  <br />
  <i>
    A
    <a href="https://www.gatsbyjs.org/">Gatsby</a>
    Theme to showcase your podcast in
    <a href="https://anchor.fm/">Anchor</a>
  </i>
</p>

[Live Demo](https://gatsby-theme-anchor.netlify.com/)

## Motivation 🤔

When a podcast starts the most difficult part is sharing it with the rest of world, this Gatsby Theme will help to solve that! The idea behind it is to provide a customizable platform where the podcasters can:

- Have a [Landing page](#landing) with the last episodes of the show and more relevant information.
- Add information about the show inside the [About Page](#About)
- Showcase all the podcast inside the [Podcast Page](#Podcast)
- Possibility to add/edit/remove content using a [CMS view](#CMS)

I recorded a really short podcast in which I talked about this project. So in case you want to know more about it and also listen to my first "real" podcast episode, I leave you the link!

<a href="https://anchor.fm/the-es-podcast/episodes/E01---Gatsby-Theme-Anchor-e4p592">
  <img src="./theme/static/img/badges/badge-anchor.png" alt="Listen on Anchor" width="150px"/>
</a>

## Features 🤹

- Gatsby theme 🔥
- Typescript support
- CSS in JS using [Rebass](https://rebassjs.org/)
- Theming with [ThemeProvider](https://www.styled-components.com/docs/advanced)
- Anchor integration
- [Netlify CMS](https://www.netlifycms.org/) integration
- Ready for deployment with [Netlify](https://www.netlify.com/)

## How to Start 👷‍

## Screenshot and Design 👩‍🎨

Before jumping into the screenshots I want to thank all these amazing resources that allowed to make it that good ✨:

- The pallete of the site has been generated using [Material Palette](https://www.materialpalette.com/purple/pink).
- The Illustration were taken from [UnDraw](https://undraw.co/)
- The Social Icons are from [Font Awesome](https://fontawesome.com/)
- The Component library used under the hood is [Rebass](https://rebassjs.org/)

### Landing

| Desktop                                                    | Mobile                                                   |
| ---------------------------------------------------------- | -------------------------------------------------------- |
| ![landing desktop](./docs/screenshots/landing-desktop.png) | ![landing mobile](./docs/screenshots/landing-mobile.png) |

### About

| Desktop                                                | Mobile                                               |
| ------------------------------------------------------ | ---------------------------------------------------- |
| ![about desktop](./docs/screenshots/about-desktop.png) | ![about mobile](./docs/screenshots/about-mobile.png) |

### Episodes

| Desktop                                                            | Mobile                                                           |
| ------------------------------------------------------------------ | ---------------------------------------------------------------- |
| ![episodes desktop](./docs/screenshots/episodes-desktop.png)       | ![episodes mobile](./docs/screenshots/episodes-mobile.png)       |
| ![no episodes desktop](./docs/screenshots/no-episodes-desktop.png) | ![no episodes mobile](./docs/screenshots/no-episodes-mobile.png) |

### 404

| Desktop                                            | Mobile                                           |
| -------------------------------------------------- | ------------------------------------------------ |
| ![404 desktop](./docs/screenshots/404-desktop.png) | ![404 mobile](./docs/screenshots/404-mobile.png) |

### CMS

| Landing                                            | About                                          |
| -------------------------------------------------- | ---------------------------------------------- |
| ![CMS landing](./docs/screenshots/cms-landing.png) | ![CMS about](./docs/screenshots/cms-about.png) |

## Deploying your site 📦

## Customization

## Trouble Shooting 💥

In order to keep the README short I decided to move this section to a [separate file](./docs/TROUBLESHOOTING.md).

## Contributing 💪

This project is using yarn Workspace in order to be able to run a Gatsby project using the source code of the theme. Follow these steps to run the demo locally:

1.  Clone the repo: `git clone https://github.com/EmaSuriano/gatsby-theme-anchor.git`
2.  Install dependencies: `cd gatsby-theme-anchor && yarn`
3.  Start the demo: `yarn workspace demo start`

## License

MIT.
