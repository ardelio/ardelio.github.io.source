/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Ardelio`,
    siteUrl: `https://ardel.io`,
    description: `A window into the mind of Anthony Sceresini`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    'gatsby-transformer-remark'
  ],
}
