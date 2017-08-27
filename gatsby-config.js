module.exports = {
  siteMetadata: {
    title: `Steffis Krümelkiste`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	`gatsby-plugin-glamor`,
  	{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
