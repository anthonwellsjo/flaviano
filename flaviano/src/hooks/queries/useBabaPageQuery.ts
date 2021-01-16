import { useStaticQuery, graphql } from 'gatsby';

export const useBabaPageQuery = () => {
  const babaPageData = useStaticQuery(graphql`
      query useBabaPageQuery{
        sanityBabaPage {
          pageText
          headerImg {
            asset {
              fluid(maxHeight: 500) {
                ...GatsbySanityImageFluid
              }
            }
          }
          textImg {
            asset{
              fixed(height: 400) {
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
