import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ProductPageDataQuery, QuoteStyle } from '../../../../../types';
import classes from './ProductPageTemplateXtremeDesktopRender.module.scss';
import ProductDescriptionView from '../ProductPage/ProductDescriptionViewDesktop/ProductDescriptionViewDesktop';
import Quote from '../../QuoteDesktop/QuoteDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import PageTitle from '../../PageTitleDesktop/PageTitleDesktop';
import LayoutFrameDesktop from '../../LayoutFrameDesktop/LayoutFrameDesktop';

const ProductPageTemplateXtremeDesktopRender = ({ data }: ProductPageDataQuery) => {
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
            <Centralizer column>
              <div style={{ position: "absolute", width: "7em", left: "15%", marginTop: "25vh", textAlign: "center" }}>
                <Quote rightQuoteX={"15px"} style={QuoteStyle.header}>{data.sanityProduct.category.title.split("").splice(0, 1).join()}</Quote>
              </div>
              <div style={{ position: "absolute", top: "35vh", width: "35%", textAlign: "left" }}>
                <PageTitle fontSize="3.4em" letterSpacing=".15em">{data.sanityProduct.title}</PageTitle>
                <div style={{ height: "3px", width: "50px", marginLeft: "0px", backgroundColor: "black", marginTop: "1em" }}></div>
              </div>
            </Centralizer>
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

export default ProductPageTemplateXtremeDesktopRender;