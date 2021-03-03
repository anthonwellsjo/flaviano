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

const ProductPage = ({ data }: ProductPageDataQuery) => {
  console.log("product data", data)
  let parallax: any;
  return (
    <Parallax pages={2} scrolling={true} ref={ref => parallax = ref}>
      <div style={{ width: "100%", height: "100vh", zIndex: -100, position: "relative" }}>
        <ParallaxLayer factor={0} speed={-1}>
          <LayoutHeader />
          <Centralizer>
            <div style={{ width: "7em", marginTop: "45vh", textAlign: "center" }}>
              <Quote style={QuoteStyle.header}>{data.sanityProduct.category.title.split("").splice(0, 1).join()}</Quote>
            </div>
          </Centralizer>
          <div style={{ position: "absolute", top: "60vh", left: "10%", textAlign:"right"}}>
            <div style={{ height: "3px", width: "50px", backgroundColor: "black", marginBottom: "1em" }}></div>
            <PageTitle fontSize="4.5em" letterSpacing=".15em">{data.sanityProduct.title}</PageTitle>
            <div style={{ height: "3px", width: "50px", backgroundColor: "black", marginTop: "1em", marginLeft: "auto", marginRight: ".5em" }}></div>
          </div>
          <section className={classes.firstPage}>
            <div className={classes.productImg}>
              {(data.sanityProduct.productPhoto != null) && <Img style={{ zIndex: -100 }} fluid={data.sanityProduct.productPhoto.asset.fluid} alt="product photo" />}
            </div>
          </section>
        </ParallaxLayer>
      </div>
      <ParallaxLayer offset={0} speed={0}>
        <section className={classes.secondPage}>
          <ProductDescriptionView
            title={data.sanityProduct.title}
            description={data.sanityProduct.description}
            conservation={data.sanityProduct.conservation}
            ingredients={data.sanityProduct.ingredients}
          />
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
          fluid(maxWidth: 400){
            ...GatsbySanityImageFluid
          }
       }
      }
  }
}`