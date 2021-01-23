import { useStaticQuery, graphql } from 'gatsby';

export const useHomeQuery = () => {
  const homeData = useStaticQuery(graphql`
      query useHomeQuery{
          sanityHomePage {
            quoteHeaderText
            quoteBelowCarouselText
          }
        }        
  `
  )
  return homeData;
}
