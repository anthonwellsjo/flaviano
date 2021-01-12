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
    <div style={{ backgroundColor: props.bcgColor, width: "100%", height: "100vh", zIndex: 100, display: "flex", justifyContent: "space-evenly", alignItems:"center" }}>
      <div style={{ maxWidth: "400px", width: "300px", height: "400px", marginBottom: "10vh" }}>
        <Img fluid={props.fluidImg} alt="product photo" />
      </div>
      <div className={classes.textWrapper}>
        <span>{props.title}</span>
        <span>{props.description}</span>
        <span>{props.ingredients}</span>
        <span>{props.conservation}</span>
      </div>

    </div>
  )
}

export default ProductView;