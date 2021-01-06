import { useStaticQuery, graphql } from 'gatsby';

export const useCategoryImagesQuery = () => {
  const categoryImagesData = useStaticQuery(graphql`
    query useCategoryImagesQuery{
      allSanityCategory {
      edges {
        node {
          id
        }
      }
    }
  }
  `
  )
  return categoryImagesData;
}