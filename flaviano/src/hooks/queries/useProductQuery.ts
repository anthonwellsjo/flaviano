import { useStaticQuery, graphql } from 'gatsby';

export const useProductQuery = () => {
  const Products = useStaticQuery(graphql`
    query useCategoryImagesQuery{
      allSanityProduct {
        nodes {
          categories {
            title
          }
          title
          slug {
            current
          }
          priceEur
          description
        }
      }
  }
  `
  )
  return Products;
}