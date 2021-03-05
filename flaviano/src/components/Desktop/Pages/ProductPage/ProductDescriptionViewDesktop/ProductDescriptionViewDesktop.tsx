import React, { FC } from 'react';
import Img from 'gatsby-image';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import classes from './ProductDescriptionViewDesktop.module.scss';
import { SanityProduct } from '../../../../../../types';

interface pageProps {
  product: SanityProduct
}

const ProductDescriptionViewDesktop = ({ product }: pageProps) => {
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