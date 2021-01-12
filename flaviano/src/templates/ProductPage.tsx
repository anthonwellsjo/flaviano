import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ProductPageDataQuery } from '../../types';
import LayoutHeader from '../components/LayoutHeader/LayoutHeader';
import classes from './ProductPage.module.css';

const ProductPage = ({ data }: ProductPageDataQuery) => {
  console.log("product data", data)
  let parallax;
  return (
    <Parallax pages={2} scrolling={true} ref={ref => parallax = ref}>
      <div style={{ width: "100%", height: "100vh", zIndex: -100, position: "relative" }}>
        <ParallaxLayer factor={0} speed={-1}>
          <LayoutHeader />
          <section className={classes.firstPage}>
            <div className={classes.productImg}>
              {(data.sanityProduct.productPhoto != null) && <Img style={{ zIndex: -100 }} fluid={data.sanityProduct.productPhoto.asset.fluid} alt="product photo" />}
            </div>
          </section>
        </ParallaxLayer>
      </div>
      <ParallaxLayer factor={1} speed={0}>
        <section className={classes.secondPage}>

        </section>
      </ParallaxLayer>
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
          fluid(maxWidth: 400){
            ...GatsbySanityImageFluid
          }
       }
      }
  }
}`