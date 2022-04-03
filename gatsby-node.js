exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        distinct(field: frontmatter___tags)
      }
    }
  `)
  data.allMarkdownRemark.distinct.forEach(tag => {
    actions.createPage({
      path: `/blog/tags/${tag}`,
      component: require.resolve(`./src/templates/tag.js`),
      context: { tag },
    })
  })
}