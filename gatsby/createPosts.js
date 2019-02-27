const path = require(`path`)
module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS($first: Int, $after: String) {
    wpgraphql {
      posts(first: $first, after: $after) {
        pageInfo {
          endCursor
          hasNextPage
        }
        nodes {
          id
          uri
          postId
          title
          excerpt
          content
          link
          date
          categories {
            nodes {
              slug
              name
            }
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
  `
  const { createPage, createRedirect } = actions
  const allPosts = []
  let pageNumber = 0
  const fetchPosts = async variables =>
    graphql(GET_POSTS, variables).then(({ data }) => {
      const {
        wpgraphql: {
          posts: {
            nodes,
            pageInfo: { hasNextPage, endCursor },
          },
        },
      } = data

      nodes.forEach(post => {
        let pathArray = post.link.split('/')
        pathArray = pathArray.slice(3)

        let path = ''
        for (i = 0; i < pathArray.length; i++) {
          path += '/'
          path += pathArray[i]
        }
        post.path = path
        allPosts.push(post)
      })

      if (hasNextPage && pageNumber < 5) {
        pageNumber += 1
        return fetchPosts({ first: 100, after: endCursor })
      }
      return allPosts
    })

  await fetchPosts({ first: 100, after: null }).then(posts => {
    const postTemplate = path.resolve(`./src/templates/post.js`)

    posts.forEach((post, key) => {
      if (post.date < '2019-01-01 06:40:26') {
        createRedirect({ fromPath: post.path, toPath: `http://cultbox.co.uk/${post.path}`, isPermanent: true })
      } else {
        createPage({
          path: post.path,
          component: postTemplate,
          context: {
            post,
          },
        })
      }
    })
  })
}
