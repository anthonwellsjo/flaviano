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
          weightGr
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
          ingredientsTwo
          productPhoto {
            asset {
              fluid(maxWidth: 500){
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