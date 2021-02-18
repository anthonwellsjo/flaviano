import { useStaticQuery, graphql } from 'gatsby';

export const useHomeQuery = () => {
  const homeData = useStaticQuery(graphql`
      query useHomeQuery{
          sanityHomePage {
            quoteHeaderText
            quoteBelowCarouselText
            mobileHeaderText
            contactImg {
            asset {
              fixed(width: 1250){
                ...GatsbySanityImageFixed
              }
          }
        }
          }
        }        
  `
  )
  return homeData;
}
