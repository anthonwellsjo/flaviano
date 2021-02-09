import React, { useState } from 'react';
import classes from './ProductPreviewMobile.module.css';
import Img, { FixedObject } from 'gatsby-image';
import { Product } from '../../../../../types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { animated, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';

interface ProductPreviewProps {
  img: FixedObject,
  key: any,
  categoryDescription: string,
  categorySlug: string,
  title: string,
  color: string,
  products?: Array<Product>,
  index: number
}

const ProductPreviewMobile = (props: ProductPreviewProps) => {


  return (
    <div className={classes.wrapper}>
      {/* <Link to={`/categories/${props.categorySlug}`}> */}
      <div style={{ backgroundColor: props.color }} className={classes.colorCube} >
        <Centralizer>
          <div className={classes.imageWrapper}>
            <ParallaxLayer offset={0} speed={0.05}>
              <div className={classes.imgWrap}>
                <Img className={classes.image} fluid={props.img} alt="Product image" />
              </div>
            </ParallaxLayer>
          </div>
        </Centralizer>
      </div>
      {/* </Link> */}
      <div className={classes.titleWrapper}>
        <span className={classes.title}>{props.title}</span>
        <div className={classes.line}></div>
      </div>
    </div >

  )
}

export default ProductPreviewMobile;