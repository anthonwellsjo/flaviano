import React from 'react';
import classes from './ProductPreview.module.css';
import Img from 'gatsby-image';
import { Product } from '../../../../types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';

interface ProductPreviewProps {
  img: string,
  key: any,
  title: string,
  color: string,
  products?: Array<Product>
}

const ProductPreview = (props: ProductPreviewProps) => {
  if (props.products != null) {
    props.products.forEach(p => {
      console.log("product in component", p.node.title);

    })

  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <div style={{ backgroundColor: props.color }} className={classes.colorCube}>
          <div className={classes.titleWrapper}>
            <div className={classes.titleOverLine}></div>
            <span className={classes.title}>{props.title}</span>
            <div className={classes.productsListContainer}>
              {props.products?.map((prod: Product) => <span className={classes.productTitle}>{prod.node.title}</span>)}
            </div>
          </div>
        </div>
        <div className={classes.imageGroupHolder}>
          <div className={classes.line}></div>
          <div className={classes.imageWrapper}>
            <ParallaxLayer offset={0} speed={-0.04}>
              <Img className={classes.image} fixed={props.img} alt="Product image" />
            </ParallaxLayer>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductPreview;