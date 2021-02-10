import { useStaticQuery, graphql } from 'gatsby';

export const useContactInfoQuery = () => {
  const contactData = useStaticQuery(graphql`
  query useContactInfoData {
    sanityGeneralSettings {
      mailFlaviano
      phoneFlaviano
      urlFacebook
      urlInsta
      urlPinterest
    }
  }
     
  `
  )
  return contactData;
}
