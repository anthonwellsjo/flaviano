import { useStaticQuery, graphql } from 'gatsby';

export const useChiSiamoQuery = () => {
  const chiSiamoData = useStaticQuery(graphql`
      query useChiSiamoQuery{
          sanityChiSiamoPage {
            headerImg {
              asset {
                fluid(maxWidth: 1000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            footerImg {
              asset {
                fluid(maxWidth: 1000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            pageText
            quoteHeaderText
          }
        }        
  `
  )
  return chiSiamoData;
}
