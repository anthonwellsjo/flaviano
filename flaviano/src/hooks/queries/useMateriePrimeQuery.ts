import { useStaticQuery, graphql } from 'gatsby';

export const useMateriePrimeQuery = () => {
  const materiePrimeData = useStaticQuery(graphql`
  query useMateriePrimeQuery{
    sanityMateriePrimePage {
      albicocceColor {
        hex
      }
      albicocceImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      albicocceText
      albicocceTextMobile
      albicocceTextEng
      albicocceTextMobileEng
      lievitoMadreColor {
        hex
      }
      lievitoMadreImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      lievitoMadreText
      lievitoMadreTextMobile
      lievitoMadreTextEng
      lievitoMadreTextMobileEng
      limoniColor {
        hex
      }
      limoniImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      limoniText
      limoniTextMobile
      limoniTextEng
      limoniTextMobileEng
      melaColor {
        hex
      }
      melaImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      melaText
      melaTextMobile
      melaTextEng
      melaTextMobileEng
      mieleColor {
        hex
      }
      mieleImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      mieleText
      mieleTextMobile
      mieleTextEng
      mieleTextMobileEng
      nocciolaColor {
        hex
      }
      nocciolaImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      nocciolaText
      nocciolaTextMobile
      nocciolaTextEng
      nocciolaTextMobileEng
      nociColor {
        hex
      }
      nociImg {
        asset {
          fluid(maxWidth: 1000) {
            ...GatsbySanityImageFluid
          }
        }
      }
      nociText
      nociTextMobile
      nociTextEng
      nociTextMobileEng
      quoteHeaderText
      quoteHeaderTextEng
    } 
  }
  `
  )
  return materiePrimeData;
}
