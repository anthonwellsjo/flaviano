import Img from 'gatsby-image';
import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ProductPageDataQuery, QuoteStyle } from '../../../../../types';
import classes from './ProductPageTemplateMobileSmallHeightRender.module.scss';
import ProductDescriptionView from '../../../Desktop/Pages/ProductPage/ProductDescriptionViewDesktop/ProductDescriptionViewDesktop';
import Quote from '../../../Desktop/QuoteDesktop/QuoteDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import PageTitle from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';

const ProductPageTemplateMobileSmallHeightRender = ({ data }: ProductPageDataQuery) => {
  console.log("product data", data)
  let parallax: any;
  return (
    <LayoutMobile>
      <Parallax pages={2.4} scrolling={true} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={-.5} >
          <LayoutHeaderMobile />
        </ParallaxLayer>


        <div style={{ width: "100%", height: "100vh", position: "relative" }}>
          <ParallaxLayer factor={0} speed={-0.5}>
            <section className={classes.firstPage}>
              <div className={classes.productImg}>
                {(data.sanityProduct.productPhoto != null) && <Img style={{ zIndex: -1 }} fluid={data.sanityProduct.productPhoto.asset.fluid} alt="product photo" />}
              </div>
            </section>
          </ParallaxLayer>
          <ParallaxLayer factor={0} speed={-0.5}>
            <Centralizer column>
              <div style={{ position: "absolute", top: "23vh", width: "80%", textAlign: "center" }}>
                <PageTitle fontSize="2em" letterSpacing=".15em">{data.sanityProduct.title}</PageTitle>
                <Centralizer>
                  <div style={{ height: "3px", width: "100px", marginLeft: "0px", backgroundColor: "black", marginTop: "1em" }}></div>
                </Centralizer>
              </div>
            </Centralizer>
          </ParallaxLayer>
        </div>
        <ParallaxLayer offset={0} speed={0.5}>
          <section className={classes.secondPage}>
            <ProductDescriptionView mobile small
              product={data.sanityProduct}
            />
          </section>
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default ProductPageTemplateMobileSmallHeightRender;