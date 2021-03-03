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
      quoteHeaderText
    } 
  }
  `
  )
  return materiePrimeData;
}
