module.exports = {
  siteMetadata: {
    title: `MDX Documentation Site`,
    description: `A documentation site that uses MDX pages for content.`,
    author: `John D'Oriocourt`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site-images`,
        path: `${__dirname}/src/images/site`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-images`,
        path: `${__dirname}/src/images/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `mdx`,
        path: `${__dirname}/src/mdx-pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {},
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mdx-documentation-site`,
        short_name: `mdx-doc-site`,
        description:
          "A documentation site that uses MDX pages for content.",
        lang: "en",
        start_url: `/`,
        background_color: `#303030`,
        theme_color: `#424242`,
        display: `minimal-ui`,
        icon: `src/images/site/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-theme-material-ui`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
