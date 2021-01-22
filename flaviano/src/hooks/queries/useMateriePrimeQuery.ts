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
          fluid(maxWidth: 500) {
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
          fluid(maxWidth: 500) {
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
          fluid(maxWidth: 500) {
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
          fluid(maxWidth: 500) {
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
          fluid(maxWidth: 500) {
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
          fluid(maxWidth: 500) {
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
          fluid(maxWidth: 500) {
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
