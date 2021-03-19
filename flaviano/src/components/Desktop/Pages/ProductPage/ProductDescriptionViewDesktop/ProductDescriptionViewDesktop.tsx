import React, { FC } from 'react';
import Img from 'gatsby-image';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import classes from './ProductDescriptionViewDesktop.module.scss';
import { SanityProduct } from '../../../../../../types';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface pageProps {
  product: SanityProduct,
  mobile?: boolean,
  small?: boolean,
  horizontal?: boolean
}

const ProductDescriptionViewDesktop = ({ product, mobile, small, horizontal }: pageProps) => {
  const isMobile = !mobile || mobile == undefined ? false : true;
  const isSmallMobile = !small || small == undefined ? false : true;
  const isHorizontal = !horizontal || horizontal == undefined ? false : true;
  if (isHorizontal) return (
    <div style={{ position: "relative", width: "100%", height: "200vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
      <div className={classes.textWrapperHor} style={{ fontSize: ".9em" }}>
        <div className={classes.titleWrapper}>
          <span className={classes.title}>{product.title}</span>
        </div>
        <div className={classes.descWrapper}>
          <span className={classes.descriptionTitle}>Descrizione</span>
          <br></br>
          <span className={classes.description}>{product.description}</span>
        </div>
        <div className={classes.ingredWrapper}>
          <span className={classes.ingredientsTitle}>Ingredienti</span>
          <br></br>
          <span className={classes.ingredients}>{product.ingredients}</span>
        </div>
        <div className={classes.consWrapper}>
          <span className={classes.conservationTitle}>Conservazione</span>
          <br></br>
          <span className={classes.conservation}>{product.conservation}</span>
        </div>
      </div>
      <Centralizer>
        <div className={classes.imgsWrapperMobile}>
          <Carousel autoPlay={false} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} width={300}>
            <div className={classes.horImg}><Img fixed={product.productDetailPhoto1.asset.fixed} alt="product detail photo" /></div>
            <div className={classes.horImg}><Img fixed={product.productDetailPhoto2.asset.fixed} alt="product detail photo" /></div>
            <div className={classes.horImg}><Img fixed={product.productDetailPhoto3.asset.fixed} alt="product detail photo" /></div>
          </Carousel>
        </div>
      </Centralizer>
    </div>
  )
  if (isSmallMobile) return (
    <div style={{ position: "relative", width: "100%", height: "150vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
      <div className={classes.textWrapperSmallMobile} style={{ fontSize: ".9em" }}>
        <div className={classes.titleWrapper}>
          <span className={classes.title}>{product.title}</span>
        </div>
        <div className={classes.descWrapper}>
          <span className={classes.descriptionTitle}>Descrizione</span>
          <br></br>
          <span className={classes.description}>{product.description}</span>
        </div>
        <div className={classes.ingredWrapper}>
          <span className={classes.ingredientsTitle}>Ingredienti</span>
          <br></br>
          <span className={classes.ingredients}>{product.ingredients}</span>
        </div>
        <div className={classes.consWrapper}>
          <span className={classes.conservationTitle}>Conservazione</span>
          <br></br>
          <span className={classes.conservation}>{product.conservation}</span>
        </div>
      </div>
      <Centralizer>
        <div className={classes.imgsWrapperMobile}>
          <Carousel autoPlay={false} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} width={300}>
            <div className={classes.imgLeft}><Img fixed={product.productDetailPhoto1.asset.fixed} alt="product detail photo" /></div>
            <div className={classes.imgCenter}><Img fixed={product.productDetailPhoto2.asset.fixed} alt="product detail photo" /></div>
            <div className={classes.imgRight}><Img fixed={product.productDetailPhoto3.asset.fixed} alt="product detail photo" /></div>
          </Carousel>
        </div>
      </Centralizer>
    </div>
  )
  if (isMobile) return (
    <div style={{ position: "relative", width: "100%", height: "150vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
      <div className={classes.textWrapperMobile}>
        <div className={classes.titleWrapper}>
          <span className={classes.title}>{product.title}</span>
        </div>
        <div className={classes.descWrapper}>
          <span className={classes.descriptionTitle}>Descrizione prodotto</span>
          <br></br>
          <span className={classes.description}>{product.description}</span>
        </div>
        <div className={classes.ingredWrapper}>
          <span className={classes.ingredientsTitle}>Ingredienti</span>
          <br></br>
          <span className={classes.ingredients}>{product.ingredients}</span>
        </div>
        <div className={classes.consWrapper}>
          <span className={classes.conservationTitle}>Conservazione</span>
          <br></br>
          <span className={classes.conservation}>{product.conservation}</span>
        </div>
      </div>
      <Centralizer>
        <div className={classes.imgsWrapperMobile}>
          <Carousel autoPlay={false} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false} width={300}>
            <div className={classes.imgLeft}><Img fixed={product.productDetailPhoto1.asset.fixed} alt="product detail photo" /></div>
            <div className={classes.imgCenter}><Img fixed={product.productDetailPhoto2.asset.fixed} alt="product detail photo" /></div>
            <div className={classes.imgRight}><Img fixed={product.productDetailPhoto3.asset.fixed} alt="product detail photo" /></div>
          </Carousel>
        </div>
      </Centralizer>
    </div>
  )
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
      <div className={classes.textWrapper}>
        <div className={classes.titleWrapper}>
          <span className={classes.title}>{product.title}</span>
        </div>
        <div className={classes.descWrapper}>
          <span className={classes.descriptionTitle}>Descrizione prodotto</span>
          <br></br>
          <span className={classes.description}>{product.description}</span>
        </div>
        <div className={classes.ingredWrapper}>
          <span className={classes.ingredientsTitle}>Ingredienti</span>
          <br></br>
          <span className={classes.ingredients}>{product.ingredients}</span>
        </div>
        <div className={classes.consWrapper}>
          <span className={classes.conservationTitle}>Conservazione</span>
          <br></br>
          <span className={classes.conservation}>{product.conservation}</span>
        </div>
      </div>
      <Centralizer>
        <div className={classes.imgsWrapper}>
          <div className={classes.imgLeft}><Img fixed={product.productDetailPhoto1.asset.fixed} alt="product detail photo" /></div>
          <div className={classes.imgCenter}><Img fixed={product.productDetailPhoto2.asset.fixed} alt="product detail photo" /></div>
          <div className={classes.imgRight}><Img fixed={product.productDetailPhoto3.asset.fixed} alt="product detail photo" /></div>
        </div>
      </Centralizer>
    </div>
  )
}

export default ProductDescriptionViewDesktop;