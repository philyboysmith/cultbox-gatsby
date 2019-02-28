const path = require(`path`)
const createPaginatedPages = require('gatsby-paginate')

module.exports = async ({ actions, graphql }) => {
  const { createPage } = actions

  const GET_CATEGORIES = `
  query GET_CATEGORIES{
    wpgraphql {
      categories {
        nodes {
          id
          name
          slug
          link
          count
          children(first: 100) {
            nodes {
              id
              name
              slug
              link
              count
              posts(first: 100) {
                nodes {
                  id
                  uri
                  postId
                  title
                  excerpt
                  content
                  link
                  date
                  featuredImage {
                    sourceUrl
                    id
                    caption
                  }
                  tags {
                    nodes {
                      slug
                      name
                    }
                  }
                }
              }
            }
          }
          posts(first: 100) {
            nodes {
              id
              uri
              postId
              title
              excerpt
              content
              link
              date
              tags {
                nodes {
                  slug
                  name
                }
              }
              featuredImage {
                sourceUrl
                id
                caption
              }
            }
          }
        }
        
      }
    }
  }
  `

  const allCategoryPosts = []

  const createCategoryPage = async (category, parent) => {
    const categoryTemplate = path.resolve(`./src/templates/category.js`)
    const slug = parent ? `${parent.slug}/${category.slug}` : category.slug
    createPaginatedPages({
      edges: category.posts ? category.posts.nodes : [],
      createPage,
      pageTemplate: categoryTemplate,
      pageLength: 10, // This is optional and defaults to 10 if not used
      pathPrefix: slug, // This is optional and defaults to an empty string if not used
    })
  }
  const fetchCategories = async => graphql(GET_CATEGORIES).then(({ data }) => data.wpgraphql.categories.nodes)
  await fetchCategories().then(categories => {
    categories.forEach(category => {
      createCategoryPage(category, null)
      if (category.children) {
        category.children.nodes.forEach(child => {
          createCategoryPage(child, category)
        })
      }
    })
  })
  return allCategoryPosts.map(post => post.postId)
}
