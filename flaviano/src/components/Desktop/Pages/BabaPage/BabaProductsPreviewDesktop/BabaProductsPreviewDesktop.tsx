import React, { useState } from 'react';
import { Product, ProductQuery } from '../../../../../../types';
import { useProductQuery } from '../../../../../hooks/queries/useProductQuery';
import PageTitle from '../../../PageTitleDesktop/PageTitleDesktop';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import classes from './BabaProductsPreviewDesktop.module.css';
import { useSpring, animated } from 'react-spring';
import BabaProductPhotosAnimation from '../BabaProductPhotosAnimation/BabaProductPhotosAnimation';
import { useViewport } from '../../../../../hooks/useViewPort';



const BabaProductsPreviewDesktop = () => {
  const { width } = useViewport();
  const [productHover, setProductHover] = useState(false);
  const backDropSpring = useSpring({
    reverse: productHover,
    to: { opacity: 0 },
    from: { opacity: 1 }
  })
  const [photosToShow, setPhotosToShow] = useState({
    leftUp: "",
    leftDown: "",
    middleCenter: "",
    rightUp: "",
    rightDown: ""
  });

  const queryData: ProductQuery = useProductQuery();
  const babas: Array<Product> = queryData.allSanityProduct.edges.filter((p: Product) => p.node.category.title == "Babà");
  console.log("query data", babas);

  const onMouseEnterEventHandler = (index) => {
    if (index == 0) {
      setPhotosToShow({
        leftUp: "",
        leftDown: "",
        middleCenter: "middleCenter",
        rightUp: "rightUp",
        rightDown: "rightDown"
      })
    }
    if (index == 1) {
      setPhotosToShow({
        leftUp: "leftUp",
        leftDown: "leftDown",
        middleCenter: "",
        rightUp: "rightUp",
        rightDown: ""
      })
    }
    if (index == 2) {
      setPhotosToShow({
        leftUp: "leftUp",
        leftDown: "leftDown",
        middleCenter: "middleCenter",
        rightUp: "",
        rightDown: ""
      })
    }

    setProductHover(true);
  }

  const onMouseExitEventHandler = () => {
    setProductHover(false);

    setPhotosToShow({
      leftUp: "",
      leftDown: "",
      middleCenter: "",
      rightUp: "",
      rightDown: ""
    })
  }

  return (
    <Centralizer>
      {babas.map((p: Product, index) => {
        return (
          <>
            <div key={p.node.id} onMouseLeave={() => onMouseExitEventHandler()} onMouseEnter={() => onMouseEnterEventHandler(index)} key={p.node.id} className={classes.productCard} style={{ width: "33.33%", height: "500px", backgroundColor: p.node.backGroundColor.hex, position: "relative", zIndex: 2 }}>
              <div className={classes.header}>
                <div style={{ position: "absolute", height: "2px", width: "20px", backgroundColor: "black", top: "12px" }}></div>
                <PageTitle fontSize={`${width/700}em`} lineHeight={`${width/500000}em`} letterSpacing={`${width/10000}em`}>Babà</PageTitle>
                <br></br>
                <PageTitle fontSize={`${width/700}em`} letterSpacing={`${width/10000}em`}>{p.node.title}</PageTitle>
              </div>
              <div className={classes.body}>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>Ingredienti</PageTitle>
                <p className={classes.text}>{p.node.ingredients}</p>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>Ingredienti Bagna</PageTitle>
                <p className={classes.text}>{p.node.ingredientsTwo}</p>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>Conservazione</PageTitle>
                <p className={classes.text}>{p.node.conservation}</p>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>Peso Netto</PageTitle>
                <p className={classes.text}>{p.node.weightGr}g</p>
              </div>
            </div>
            <animated.div style={{ ...backDropSpring, position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, backgroundColor: "white" }}>
              <Centralizer>
                <BabaProductPhotosAnimation photos={photosToShow} show={productHover} />
              </Centralizer>
            </animated.div>
          </>
        )
      }
      )
      }
    </Centralizer>
  )
}

export default BabaProductsPreviewDesktop;