import { useStaticQuery, graphql } from 'gatsby';

export const useProductQuery = () => {
  const Products = useStaticQuery(graphql`
  query productQuery {
    allSanityProduct {
      edges {
        node {
          category {
            id
            title
          }
          title
          priceEur
          description
          slug {
            current
          }
          backGroundColor{
            hex
          }
          id
          conservation
          ingredients
          productPhoto {
            asset {
              fluid(maxWidth: 400){
                ...GatsbySanityImageFluid
              }
          }
          }
        }
      }
    }
  }
  `
  )
  return Products;
}