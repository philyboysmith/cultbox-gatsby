const createPosts = require(`./gatsby/createPosts`)
const createCategories = require(`./gatsby/createCategories`)

exports.createPages = async ({ actions, graphql }) => {
  await createCategories({ actions, graphql })
  await createPosts({ actions, graphql })
}
