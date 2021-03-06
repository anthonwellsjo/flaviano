import React, { useState } from 'react';
import classes from './ProductPreviewMobile.module.scss';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { Product } from '../../../../../types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { animated, useSpring } from 'react-spring';
import { Link } from 'gatsby';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';

interface ProductPreviewProps {
  img: FluidObject,
  key: any,
  categoryDescription: string,
  categorySlug: string,
  title: string,
  color: string,
  products?: Array<Product>,
  index: number,
  isHorizontal: boolean
}

const ProductPreviewMobile = (props: ProductPreviewProps) => {

  if (props.index == 1) return (
    <div className={classes.wrapper}>
      {/* <Link to={`/categories/${props.categorySlug}`}> */}
      <div style={{ backgroundColor: props.color }} className={classes.colorCube2} >
        <Centralizer>
          <div className={classes.imageWrapper2}>
            {!props.isHorizontal &&
              <ParallaxLayer offset={0} speed={0.05}>
                <div className={classes.imgWrap}>
                  <Img className={classes.image} fluid={props.img} alt="Product image" />
                </div>
              </ParallaxLayer>}
            {props.isHorizontal &&
              <div style={{ transform: "translateY(0)", width: "250px" }}>
                <Img fluid={props.img} alt="Product image" />
              </div>}

          </div>
        </Centralizer>
      </div>
      {/* </Link> */}
      <div className={classes.titleWrapper2}>
        <span className={classes.title}>{props.title}</span>
        <div className={classes.line}></div>
      </div>
    </div >
  )

  return (
    <div className={classes.wrapper}>
      {/* <Link to={`/categories/${props.categorySlug}`}> */}
      <div style={{ backgroundColor: props.color }} className={classes.colorCube} >
        <Centralizer>
          <div className={classes.imageWrapper}>
            {!props.isHorizontal &&
              <ParallaxLayer offset={0} speed={0.05}>
                <div className={classes.imgWrap}>
                  <Img className={classes.image} fluid={props.img} alt="Product image" />
                </div>
              </ParallaxLayer>}
            {props.isHorizontal &&
              <div style={{ transform: "translateY(0)", width: "250px" }}>
                <Img fluid={props.img} alt="Product image" />
              </div>}
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