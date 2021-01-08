import React, { useState } from 'react';
import classes from './ProductPreview.module.css';
import Img, { FixedObject } from 'gatsby-image';
import { Product } from '../../../../types';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import { animated, useSpring } from 'react-spring';

interface ProductPreviewProps {
  img: FixedObject,
  key: any,
  title: string,
  color: string,
  products?: Array<Product>
}

const ProductPreview = (props: ProductPreviewProps) => {
  const [hover, setHover] = useState(false);
  const styles = useSpring({
    reverse: hover,
    from: { borderRadius: "100px" },
    to: { borderRadius: "0" },
    config:{
      mass: 40,
      tension: 50,
      friction:50
    }
  })

  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <animated.div style={{...styles, backgroundColor: props.color }} className={classes.colorCube} >
          <div className={classes.titleWrapper}>
            <div  className={classes.titleOverLine}></div>
            <span onMouseLeave={()=>setHover(false)} onMouseEnter={()=> setHover(true)} className={classes.title}>{props.title}</span>
            <div className={classes.productsListContainer}>
              {props.products?.map((prod: Product) => <span className={classes.productTitle}>{prod.node.title}</span>)}
            </div>
          </div>
        </animated.div>
        <div className={classes.imageGroupHolder}>
          <div className={classes.line}></div>
          <div className={classes.imageWrapper}>
            <ParallaxLayer offset={0} speed={-0.01 * (Math.floor(Math.random() * 9) + 1)}>
              <Img className={classes.image} fixed={props.img} alt="Product image" />
            </ParallaxLayer>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductPreview;