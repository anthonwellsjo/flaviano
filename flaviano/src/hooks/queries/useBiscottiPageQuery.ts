import { useStaticQuery, graphql } from 'gatsby';

export const useBiscottiPageQuery = () => {
  const biscottiPageData = useStaticQuery(graphql`
      query useBiscottiPageQuery{
        sanityBiscottiPage {
          quoteHeaderText
          quoteHeaderTextEng
        }
    }
  `
  )
  return biscottiPageData;
}
