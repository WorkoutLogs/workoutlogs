/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `WorkoutLogs`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `GatsbyJS`,
      short_name: `GatsbyJS`,
      start_url: `/`,
      background_color: `#f7f0eb`,
      theme_color: `#FF312E`,
      display: `standalone`,
      icon: 'src/assets/favicon.png'
    },
  }]
};