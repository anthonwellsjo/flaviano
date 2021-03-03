import { useStaticQuery, graphql } from 'gatsby';

export const useContactQuery = () => {
  const contactPageData = useStaticQuery(graphql`
      query useContactQuery{
        sanityContattiPage {
          quoteHeaderText
        } 
        }        
  `
  )
  return contactPageData;
}
