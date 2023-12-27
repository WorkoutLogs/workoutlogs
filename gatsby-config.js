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
  },{
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
        "G-J5Z68L7N4P", // Google Analytics / GA
      ],
    },
  }
]
};