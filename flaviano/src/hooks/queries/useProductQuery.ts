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
              fluid(maxWidth: 1000){
                ...GatsbySanityImageFluid
              }
              fixed(height: 300, width: 150){
                ...GatsbySanityImageFixed
              }
          }
        }
          productDetailPhoto1 {
            asset {
              fixed(width: 200, height: 200){
                ...GatsbySanityImageFixed
              }
          }
        }
          productDetailPhoto2 {
            asset {
              fixed(width: 200, height: 200){
                ...GatsbySanityImageFixed
              }
          }
        }
          productDetailPhoto3 {
            asset {
              fixed(width: 200, height: 200){
                ...GatsbySanityImageFixed
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