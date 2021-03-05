import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ProductPageDataQuery, QuoteStyle } from '../../types';
import LayoutHeader from '../components/Desktop/LayoutHeaderDesktop/LayoutHeaderDesktop';
import classes from './ProductPage.module.scss';
import ProductDescriptionView from '../components/Desktop/Pages/ProductPage/ProductDescriptionViewDesktop/ProductDescriptionViewDesktop';
import Quote from '../components/Desktop/QuoteDesktop/QuoteDesktop';
import Centralizer from '../components/StructureComponents/Centralizer/Centralizer';
import PageTitle from '../components/Desktop/PageTitleDesktop/PageTitleDesktop';
import LayoutFrameDesktop from '../components/Desktop/LayoutFrameDesktop/LayoutFrameDesktop';

const ProductPage = ({ data }: ProductPageDataQuery) => {
  console.log("product data", data)
  let parallax: any;
  return (
    <Parallax pages={2} scrolling={true} ref={ref => parallax = ref}>
      <LayoutFrameDesktop>
        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <ParallaxLayer factor={0} speed={-1}>
            <section className={classes.firstPage}>
              <div className={classes.productImg}>
                {(data.sanityProduct.productPhoto != null) && <Img style={{ zIndex: -1 }} fluid={data.sanityProduct.productPhoto.asset.fluid} alt="product photo" />}
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer factor={0} speed={-1}>
            <Centralizer>
              <div style={{ width: "7em", marginTop: "45vh", textAlign: "center" }}>
                <Quote rightQuoteX={"15px"} style={QuoteStyle.header}>{data.sanityProduct.category.title.split("").splice(0, 1).join()}</Quote>
              </div>
            </Centralizer>
            <div style={{ position: "absolute", top: "40vh", left: "4%", width: "35%", textAlign: "left" }}>
              <PageTitle fontSize="3em" letterSpacing=".15em">{data.sanityProduct.title}</PageTitle>
              <div style={{ height: "3px", width: "50px", marginLeft: "0px", backgroundColor: "black", marginTop: "1em" }}></div>
            </div>
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={0} speed={0}>
          <section className={classes.secondPage}>
            <ProductDescriptionView
              product={data.sanityProduct}
            />
          </section>
        </ParallaxLayer>
      </LayoutFrameDesktop>
    </Parallax>
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