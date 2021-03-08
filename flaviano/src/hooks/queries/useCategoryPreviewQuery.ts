import { useStaticQuery, graphql } from 'gatsby';

export const useCategoryPreviewQuery = () => {
  const categoryPreviewData = useStaticQuery(graphql`
  query useCategoryPreviewQuery{
    allSanityCategory {
      edges {
        node {
          id
          title
          description
          descriptionEng
          slug{current}
          previewColorBoxColor {
            hex
          }
          categoryParallaxIcon {
            asset {
              fluid(maxWidth: 800){
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
  return categoryPreviewData;
}