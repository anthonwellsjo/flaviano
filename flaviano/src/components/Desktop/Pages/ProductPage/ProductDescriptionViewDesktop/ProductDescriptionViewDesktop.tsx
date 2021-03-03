import React, { FC } from 'react';
import Img from 'gatsby-image';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import classes from './ProductDescriptionViewDesktop.module.scss';

interface pageProps {
  title: string,
  description: string,
  ingredients: string,
  conservation: string
}

const ProductDescriptionViewDesktop = (props: pageProps) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems: "center", flexDirection: "column" }}>
      <div className={classes.textWrapper}>
        <div className={classes.titleWrapper}>
          <span className={classes.title}>{props.title}</span>
        </div>
        <div className={classes.descWrapper}>
          <span className={classes.descriptionTitle}>Descrizione prodotto</span>
          <br></br>
          <span className={classes.description}>{props.description}</span>
        </div>
        <div className={classes.ingredWrapper}>
          <span className={classes.ingredientsTitle}>Ingredienti</span>
          <br></br>
          <span className={classes.ingredients}>{props.ingredients}</span>
        </div>
        <div className={classes.consWrapper}>
          <span className={classes.conservationTitle}>Conservazione</span>
          <br></br>
          <span className={classes.conservation}>{props.conservation}</span>
        </div>
      </div>
      <div className={classes.imgsWrapper}>
        <div className={classes.imgLeft}></div>
        <div className={classes.imgCenter}></div>
        <div className={classes.imgRight}></div>
      </div>
    </div>
  )
}

export default ProductDescriptionViewDesktop;