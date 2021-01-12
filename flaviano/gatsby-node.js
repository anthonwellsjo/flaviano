

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

    // --------------------------------PRODUCTS

  const productQuery = await graphql(`
  {
    allSanityProduct {
      edges {
        node {
          id
          slug{
            current
          }
        }
      }
    }
  }
  `);
  if (productQuery.errors) {
    throw productQuery.errors
  };
  console.log("got products",productQuery);
  const products = productQuery.data.allSanityProduct.edges;
  products.forEach((product, index) => {
    const path = `/products/${product.node.slug.current}`
    createPage({
      path: path,
      component: require.resolve("./src/templates/ProductPage.tsx"),
      context: { id: product.node.id },
    })
  })
}