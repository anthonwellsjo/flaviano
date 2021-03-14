import { useStaticQuery, graphql } from 'gatsby';

export const useChiSiamoQuery = () => {
  const chiSiamoData = useStaticQuery(graphql`
      query useChiSiamoQuery{
          sanityChiSiamoPage {
            headerImg {
              asset {
                fluid(maxWidth: 2000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            footerImg {
              asset {
                fluid(maxWidth: 2000) {
                  ...GatsbySanityImageFluid
                }
              }
            }
            pageText
            quoteHeaderText
            pageTextEng
            quoteHeaderTextEng
          }
        }        
  `
  )
  return chiSiamoData;
}
