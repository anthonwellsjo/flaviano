import { useStaticQuery, graphql } from 'gatsby';

export const useBabaPageQuery = () => {
  const babaPageData = useStaticQuery(graphql`
      query useBabaPageQuery{
        sanityBabaPage {
          pageText
          headerImg {
            asset {
              fluid(maxWidth: 1000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          textImg {
            asset{
              fixed(width: 300) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
    }
  `
  )
  return babaPageData;
}
