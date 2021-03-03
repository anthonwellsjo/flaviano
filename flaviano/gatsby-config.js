require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  pathPrefix: `/flaviano`,
  siteMetadata: {
    title: "Flaviano | Dolci di Qualità",
    description: "produzione di biscotti, babà, colombe e panettoni artigianali, genuini, di qualità, fatti a mano con materie prime tipiche delle terre campane.",
    author: "Carl Anthon Wellsjö",
    keywords: ["Baba", "babà", "babba", "biscotti", "forno", "vasocottura", "colomba", "colombe", "artigiani", "campania", "melannurca",
    "strega", "limoncello", "limoni", "sorrento", "noci", "miele", "lievito", "madre", "albicocche", "lievitati", "panettone",
    "panettoni", "fichi", "dolci da forno", "dolci", "artigianali", "dolci di qualità e pregiati", "dolci fatti a mano",
    "tradizione", "dolciaria", "artigianale"],
    siteUrl: "https://anthonwellsjo.github.io/flaviano/"
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
        ],
        display: 'swap'
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN
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
