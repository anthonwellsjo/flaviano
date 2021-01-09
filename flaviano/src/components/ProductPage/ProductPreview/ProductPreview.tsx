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
  const lineStyles = useSpring({
    reverse: hover,
    from: { width: "50px" },
    to: { width: "20px" },
    config: {
      mass: 1,
      tension: 300,
      friction: 30
    }
  })
  const previewSyles = useSpring({
    reverse: hover,
    from: { borderRadius: "100px", transform: "scale(1.2)" },
    to: { borderRadius: "0", transform: "scale(1)" },
    config: {
      mass: 1,
      tension: 300,
      friction: 30
    }
  })

  return (
    <div className={classes.wrapper}>
      <div className={classes.innerWrapper}>
        <animated.div onMouseLeave={() => setHover(false)} onMouseEnter={() => setHover(true)} style={{ ...previewSyles, backgroundColor: props.color }} className={classes.colorCube} >
          <div className={classes.titleWrapper}>
            <animated.div style={lineStyles} className={classes.titleOverLine}></animated.div>
            <span className={classes.title}>{props.title}</span>
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