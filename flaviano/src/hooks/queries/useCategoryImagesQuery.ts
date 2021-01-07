import { useStaticQuery, graphql } from 'gatsby';

export const useCategoryImagesQuery = () => {
  const categoryImagesData = useStaticQuery(graphql`
    query useCategoryImagesQuery{
      allSanityCategory {
        edges {
          node {
            categoryCarouselImage {
              asset {
                  fluid(maxHeight: 200) {
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
  return categoryImagesData;
}