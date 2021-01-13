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
          slug{current}
          previewColorBoxColor {
            hex
          }
          categoryParallaxIcon {
            asset {
              fixed{
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
  return categoryPreviewData;
}