// Load variables from `.env` as soon as possible
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const clientConfig = require("./client-config");
const token = process.env.SANITY_READ_TOKEN;

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    siteUrl: process.env.SITE_URL || "http://localhost:8000",
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          quality: 100,
          breakpoints: [766, 1000],
        }
      }
    },
    `gatsby-transformer-sharp`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    "gatsby-source-sanity-transform-images",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        head: true,
        trackingId: "UA-151971254-1",
        optimizeId: "OPT-NVB8G6S",
      },
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#00000",
        showSpinner: false,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.svg$/,
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ["Raleway:400,700"],
        display: "swap",
      },
    },
    {
      resolve: `gatsby-source-dev`,
      options: {
        username: "ctrleffive",
      },
    },
    "gatsby-plugin-purgecss",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        excludes: [`/resume`],
      },
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        ...clientConfig.sanity,
        token,
        watchMode: !isProd,
        overlayDrafts: !isProd && token,
      },
    },
  ],
};
