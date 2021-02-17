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
      quoteHeaderText
    } 
  }
  `
  )
  return materiePrimeData;
}
