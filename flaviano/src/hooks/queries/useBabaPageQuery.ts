import { useStaticQuery, graphql } from 'gatsby';

export const useBabaPageQuery = () => {
  const babaPageData = useStaticQuery(graphql`
      query useBabaPageQuery{
        sanityBabaPage {
          pageText
          pageTextMobile
          headerImg {
            asset {
              fluid(maxWidth: 2000) {
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
