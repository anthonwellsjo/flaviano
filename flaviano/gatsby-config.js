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
    siteUrl: "https://www.flavianodolci.com/"
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
        projectId: "d1gzutwf",
        dataset: "development",
        token: "skPfXj8BJwa42B0wXKEBzhDSBh5lOPqEubpLhXRBGem8e7cTMXvLqUCwUPylsnyJxm1cV89lRBfMMSZmg4xPvtgQFhkpFEVAqQxEtqomP5fKVEreWMonEbmncGXg0tnufJ0Vp9llelHPvCUdnbpHFZuJUkCb2hbXjicHme0wwStI3DFHnFIw",
        watchMode: true,
      },
    },
    {
      resolve: "gatsby-plugin-sanity-image",
      options: {
        // Sanity project info (required)
        projectId: "d1gzutwf",
        dataset: "development",
        token: "skPfXj8BJwa42B0wXKEBzhDSBh5lOPqEubpLhXRBGem8e7cTMXvLqUCwUPylsnyJxm1cV89lRBfMMSZmg4xPvtgQFhkpFEVAqQxEtqomP5fKVEreWMonEbmncGXg0tnufJ0Vp9llelHPvCUdnbpHFZuJUkCb2hbXjicHme0wwStI3DFHnFIw"
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
    {
      resolve: `gatsby-plugin-google-analytics-gdpr`,
      options: {
        // The property ID; the tracking code won't be generated without it.
        trackingId: "G-746JL64701", 
        // Optional parameter (default false) - Enable analytics in development mode.
        enableDevelopment: true, // default false
        // Optional parameter (default true) - Some countries (such as Germany) require you to use the _anonymizeIP function for Google Analytics. Otherwise you are not allowed to use it.
        anonymizeIP: true,
        // Optional parameter (default false) - Starts google analytics with cookies enabled. In some countries (such as Germany) this is not allowed.
        autoStartWithCookiesEnabled: false, 
        // Optional parameter - Configuration for react-ga and google analytics 
        reactGaOptions: {
            debug: true,
            gaOptions: {
                sampleRate: 10
            }
        }
      },
    },
  ],
};
