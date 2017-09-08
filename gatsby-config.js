module.exports = {
  siteMetadata: {
    title: `Steffis Krümelkiste`,
  },
  plugins: [
  	`gatsby-plugin-react-helmet`,
  	`gatsby-plugin-glamor`,
    `gatsby-plugin-styled-components`,
  	{
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
