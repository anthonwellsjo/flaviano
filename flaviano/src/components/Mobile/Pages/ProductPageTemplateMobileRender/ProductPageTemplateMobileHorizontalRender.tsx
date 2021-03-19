import Img from 'gatsby-image';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ProductPageDataQuery, QuoteStyle } from '../../../../../types';
import classes from './ProductPageTemplateMobileHorizontalRender.module.scss';
import ProductDescriptionView from '../../../Desktop/Pages/ProductPage/ProductDescriptionViewDesktop/ProductDescriptionViewDesktop';
import Quote from '../../../Desktop/QuoteDesktop/QuoteDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import PageTitle from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';

const ProductPageTemplateMobileHorizontalRender = ({ data }: ProductPageDataQuery) => {
  console.log("product data", data)
  let parallax: any;
  return (
    <LayoutMobile horizontal>
      <Parallax pages={2.5} scrolling={true} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={-.5} >
          <LayoutHeaderMobile horizontal />
        </ParallaxLayer>


        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <ParallaxLayer speed={-0.5}>
              <div className={classes.productImg}>
                {(data.sanityProduct.productPhoto != null) && <Img style={{ zIndex: -1 }} fluid={data.sanityProduct.productPhoto.asset.fluid} alt="product photo" />}
              </div>
          </ParallaxLayer>
          <ParallaxLayer speed={-0.5}>
            <Centralizer>
              <div style={{ position: "absolute", width: "80%", textAlign: "center", marginTop: "40px"}}>
                <PageTitle fontSize="3em" letterSpacing=".15em">{data.sanityProduct.title}</PageTitle>
                <Centralizer>
                  <div style={{ height: "3px", width: "100px", marginLeft: "0px", backgroundColor: "black", marginTop: "1em" }}></div>
                </Centralizer>
              </div>
            </Centralizer>
          </ParallaxLayer>
        </div>


        <ParallaxLayer offset={0} speed={0.5}>
          <section className={classes.secondPage}>
            <ProductDescriptionView horizontal
              product={data.sanityProduct}
            />
          </section>
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default ProductPageTemplateMobileHorizontalRender;