import React, { useContext, useState } from 'react';
import { Product, ProductQuery } from '../../../../../../types';
import { useProductQuery } from '../../../../../hooks/queries/useProductQuery';
import PageTitle from '../../../PageTitleDesktop/PageTitleDesktop';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import classes from './BabaProductsPreviewDesktop.module.scss';
import { useSpring, animated } from 'react-spring';
import BabaProductPhotosAnimation from '../BabaProductPhotosAnimation/BabaProductPhotosAnimation';
import { useViewport } from '../../../../../hooks/useViewPort';
import { PageContext } from '../../../../../contexts/pageContext';
import { FixedObject } from 'gatsby-image';

interface props {
  bigDesktop?: boolean | undefined
}

interface PhotoBatch {
  leftUp: undefined | FixedObject,
  leftDown: undefined | FixedObject,
  middleCenter: undefined | FixedObject,
  rightUp: undefined | FixedObject,
  rightDown: undefined | FixedObject
}

const BabaProductsPreviewDesktop = ({ bigDesktop }: props) => {
  const bigScreen = bigDesktop === undefined || bigDesktop === false ? false : true;
  const { width } = useViewport();
  const [page, setPage]: any = useContext(PageContext);
  const [productHover, setProductHover] = useState(false);
  const backDropSpring = useSpring({
    reverse: productHover,
    to: { opacity: 0 },
    from: { opacity: 1 }
  })
  const [photosToShow, setPhotosToShow] = useState<PhotoBatch>({
    leftUp: undefined,
    leftDown: undefined,
    middleCenter: undefined,
    rightUp: undefined,
    rightDown: undefined
  });

  const queryData: ProductQuery = useProductQuery();
  const babas: Array<Product> = queryData.allSanityProduct.edges.filter((p: Product) => p.node.category.title == "Babà");
  console.log("query data", babas);

  const onMouseEnterEventHandler = (index: number, p: Product) => {
    if (index == 0) {
      setPhotosToShow({
        leftUp: undefined,
        leftDown: undefined,
        middleCenter: p.node.productDetailPhoto1.asset.fixed,
        rightUp: p.node.productDetailPhoto2.asset.fixed,
        rightDown: p.node.productDetailPhoto3.asset.fixed
      })
    }
    if (index == 1) {
      setPhotosToShow({
        leftUp: p.node.productDetailPhoto1.asset.fixed,
        leftDown: p.node.productDetailPhoto2.asset.fixed,
        middleCenter: undefined,
        rightUp: p.node.productDetailPhoto3.asset.fixed,
        rightDown: undefined
      })
    }
    if (index == 2) {
      setPhotosToShow({
        leftUp: p.node.productDetailPhoto1.asset.fixed,
        leftDown: p.node.productDetailPhoto2.asset.fixed,
        middleCenter: p.node.productDetailPhoto3.asset.fixed,
        rightUp: undefined,
        rightDown: undefined
      })
    }

    setProductHover(true);
  }

  const onMouseExitEventHandler = () => {
    setProductHover(false);

    setPhotosToShow({
      leftUp: undefined,
      leftDown: undefined,
      middleCenter: undefined,
      rightUp: undefined,
      rightDown: undefined
    })
  }

  return (
    <Centralizer>
      {babas.map((p: Product, index) => {
        return (
          <>
            <div key={p.node.id} onMouseLeave={() => onMouseExitEventHandler()} onMouseEnter={() => onMouseEnterEventHandler(index, p)} className={classes.productCard} style={{ width: "33.33%", height: "500px", backgroundColor: p.node.backGroundColor.hex, position: "relative", zIndex: 2 }}>
              <div className={classes.header}>
                <div style={{ position: "absolute", height: "2px", width: "20px", backgroundColor: "black", top: "12px" }}></div>
                <PageTitle fontSize={`2em`} lineHeight={`${width / 500000}em`} letterSpacing={`${width / 10000}em`}>Babà</PageTitle>
                <br></br>
                <PageTitle fontSize={`2em`} letterSpacing={`${width / 10000}em`}>{p.node.title}</PageTitle>
              </div>
              <div className={classes.body}>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>{page.english ? "Ingredients" : "Ingredienti"}</PageTitle>
                <p className={classes.text}>{page.english ? p.node.ingredientsEng : p.node.ingredients}</p>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>{page.english ? "Liquor Ingredients" : "Ingredienti Bagna"}</PageTitle>
                <p className={classes.text}>{page.english ? p.node.ingredientsTwoEng : p.node.ingredientsTwo}</p>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>{page.english ? "Conservation" : "Conservazione"}</PageTitle>
                <p className={classes.text}>{page.english ? p.node.conservationEng : p.node.conservation}</p>
                <PageTitle fontSize={"0.8em"} letterSpacing={".15em"}>{page.english ? "Net Weight" : "Peso Netto"}</PageTitle>
                <p className={classes.text}>{p.node.weightGr}g</p>
              </div>
            </div>
            <animated.div style={{ ...backDropSpring, position: "fixed", width: "100%", height: "100vh", top: 0, left: 0, backgroundColor: "white" }}>
              <Centralizer>
                <BabaProductPhotosAnimation bigDesktop={bigScreen} photos={photosToShow} show={productHover} />
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