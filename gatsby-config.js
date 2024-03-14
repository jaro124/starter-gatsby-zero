/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Starter Gatsby Zero`,
    titleTemplate: "%s · Starter bolg",
    description: `Gatsby and Tailwindcss starter`,
    keywords: [`gatsby`, `tailwind`, `react`, `tailwindcss`],
    author: `@doe`,
    siteUrl: "https://www.doe.com", // No trailing slash allowed!
    image: "/images/site-image.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@doe",
    lang: "en",
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/w129-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/blog/*`, `/about`],
      },
    },
  ],
};
