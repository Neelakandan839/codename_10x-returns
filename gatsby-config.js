/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `My Gatsby Site`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    //This plugin exists only once but can consume an array of endpoints
    {
      resolve: "gatsby-source-multi-api",
      options: {
        apis: [
          {
            prefix: "httpdump",
            baseUrl:
              "https://httpdump.app/dumps/a911339f-0f49-40d5-9422-dda0dc789f4b",
          },
        ],
      },
    },
  ],
};
