import { graphql } from 'gatsby';
import React from 'react';
import { MediaPort, ProductPageDataQuery, QuoteStyle } from '../../types';
import ProductPageTemplateDesktopRender from '../components/Desktop/Pages/ProductPageTemplateDesktopRender/ProductPageTemplateDesktopRender';
import SEO from '../components/SEO/SEO';
import useGetMediaPort from '../hooks/useGetMediaPort';
import { useViewport } from '../hooks/useViewPort';

const ProductPage = ({ data }: ProductPageDataQuery) => {
  const { width, height } = useViewport();
  const mediaPort = useGetMediaPort({ height: height, width: width });
  return (
    <>
      <SEO title="Produzione dolciaria artigianale | Biscotti, babà, colombe e panettoni" />
      {mediaPort == MediaPort.xtremeDesktop && <ProductPageTemplateDesktopRender data={data} />}
      {mediaPort == MediaPort.desktop && <ProductPageTemplateDesktopRender data={data} />}
      {mediaPort == MediaPort.mobile && <ProductPageTemplateDesktopRender data={data} />}
      {mediaPort == MediaPort.mobileSmallHeight && <ProductPageTemplateDesktopRender data={data} />}
      {mediaPort == MediaPort.mobileHorizontal && <ProductPageTemplateDesktopRender data={data} />}
    </>
  )
}

export default ProductPage;

export const query = graphql`
query($id: String) {
  sanityProduct(id: {eq: $id}) {
    id
    description
    conservation
    ingredients
    category {
      id
      title
      slug {
        current
      }
    }
    title
    priceEur
    slug {
      current
    }
    productPhoto {
      asset {
          fluid(maxWidth: 1300){
            ...GatsbySanityImageFluid
          }
       }
      }
      productDetailPhoto1 {
        asset {
          fixed(width: 300, height: 300){
            ...GatsbySanityImageFixed
          }
      }
    }
      productDetailPhoto2 {
        asset {
          fixed(width: 300, height: 300){
            ...GatsbySanityImageFixed
          }
      }
    }
      productDetailPhoto3 {
        asset {
          fixed(width: 300, height: 300){
            ...GatsbySanityImageFixed
          }
      }
    }
  }
}`