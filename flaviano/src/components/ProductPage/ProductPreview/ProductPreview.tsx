import React from 'react';
import classes from './ProductPreview.module.css';
import Img from 'gatsby-image';

interface ProductPreviewProps {
  img: string,
  key: any,
  title: string
}

const ProductPreview = (props: ProductPreviewProps) => {


  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <div className={classes.colorCube}>
          <div className={classes.titleWrapper}>
            <div className={classes.titleOverLine}></div>
            <span className={classes.title}>{props.title}</span>
          </div>
        </div>
        <div className={classes.imageGroupHolder}>
          <div className={classes.line}></div>
          <div className={classes.imageWrapper}>
            <Img fixed={props.img} alt="Product image" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductPreview;