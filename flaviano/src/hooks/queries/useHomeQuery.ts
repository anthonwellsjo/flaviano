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
              fluid(maxWidth: 2000){
                ...GatsbySanityImageFluid
              }
          }
        }
          }
        }        
  `
  )
  return homeData;
}
