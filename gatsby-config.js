module.exports = {
  siteMetadata: {
    title: `MDX Documentation Site`,
    description: `A documentation site that uses MDX pages for content.`,
    author: `John D'Oriocourt`,
    image: `src/images/gatsby-icon.png`,
    lang: `en`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `site-images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-images`,
        path: `${__dirname}/content/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content-pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {},
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 960,
            },
          },
        ],
        mdxOptions: {
          remarkPlugins: [require(`remark-gfm`)],
        },
      },
    },
    `gatsby-theme-material-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `mdx-documentation-site`,
        short_name: `mdx-doc-site`,
        description: "A documentation site that uses MDX pages for content.",
        lang: "en",
        start_url: `/`,
        background_color: `#121212`,
        theme_color: `#303030`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
