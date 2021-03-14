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
          descriptionEng
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
          conservationEng
          ingredientsEng
          ingredientsTwoEng
          productPhoto {
            asset {
              fluid(maxWidth: 1000){
                ...GatsbySanityImageFluid
              }
              fixed(height: 300, width: 340){
                ...GatsbySanityImageFixed
              }
          }
        }
          productDetailPhoto1 {
            asset {
              fixed(width: 300, height: 300){
                ...GatsbySanityImageFixed
              }
          }
        }
          productDetailPhoto2 {
            asset {
              fixed(width: 300, height: 300){
                ...GatsbySanityImageFixed
              }
          }
        }
          productDetailPhoto3 {
            asset {
              fixed(width: 300, height: 300){
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