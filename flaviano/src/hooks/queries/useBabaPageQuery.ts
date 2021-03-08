import { useStaticQuery, graphql } from 'gatsby';

export const useBabaPageQuery = () => {
  const babaPageData = useStaticQuery(graphql`
      query useBabaPageQuery{
        sanityBabaPage {
          pageText
          pageTextMobile
          pageTextEng
          pageTextMobileEng
          headerImg {
            asset {
              fluid(maxWidth: 2000) {
                ...GatsbySanityImageFluid
              }
            }
          }
          textImg {
            asset{
              fluid(maxWidth: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
    }
  `
  )
  return babaPageData;
}
