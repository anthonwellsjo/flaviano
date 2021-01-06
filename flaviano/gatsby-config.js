module.exports = {
  siteMetadata: {
    title: "flaviano",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `HomepageBaukasten`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "d1gzutwf",
        dataset: "development",
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "d1gzutwf",
        dataset: "development",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
