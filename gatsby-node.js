const createPosts = require(`./gatsby/createPosts`)

exports.createPages = async ({ actions, graphql }) => {
  // const categories = await graphql(GET_CATEGORIES);
  const recent = await createPosts({ actions, graphql })
  // await createCategories({ actions, graphql, categories, recent });
}
