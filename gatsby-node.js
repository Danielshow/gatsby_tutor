exports.createPages = async ({ actions, graphql, reporter}) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)

  if (result.errors){
    reporter.panic('failed to create post', result.errors)
  }

  const posts = result.data.allMdx.nodes;

  posts.forEach(element => {
    actions.createPage({
      path: element.frontmatter.slug,
      component: require.resolve('./src/templates/post.js'),
      context: {
        slug: element.frontmatter.slug
      },
    });
  });
}