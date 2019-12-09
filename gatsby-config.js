module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Learning Gatsby from front end masters'
  },
  plugins: [`gatsby-plugin-emotion`, 'gatsby-plugin-react-helmet',
  {
    resolve: 'gatsby-plugin-mdx',
    options: {
      defaultLayouts: {
        default: require.resolve('./src/components/layout.js'),
      }
    }
  }]
}