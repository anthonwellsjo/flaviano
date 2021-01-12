import React, { FC } from 'react';
import Img from 'gatsby-image';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';
import classes from './ProductView.module.css';

interface pageProps {
  bcgColor: string,
  fluidImg: any,
  title: string,
  description: string,
  ingredients: string,
  conservation: string
}

const ProductView = (props: pageProps) => {
  return (
    <div style={{ position: "relative", backgroundColor: props.bcgColor, width: "100%", height: "100vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
      <div style={{ maxWidth: "400px", width: "20vw", height: "300px", marginBottom: "10vh" }}>
        <Img className={classes.fluidImg} fluid={props.fluidImg} alt="product photo" />
      </div>
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
    </div>
  )
}

export default ProductView;