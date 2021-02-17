import { useStaticQuery, graphql } from 'gatsby';

export const useCategoryCarouselImagesQuery = () => {
  const categoryImagesData = useStaticQuery(graphql`
    query useCategoryImagesQuery{
      allSanityCategory {
        edges {
          node {
            title
            slug{current}
            categoryCarouselImage {
              asset {
                  fluid(maxWidth: 2000) {
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