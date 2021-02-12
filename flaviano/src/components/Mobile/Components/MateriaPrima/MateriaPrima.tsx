import React from 'react';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import Img, { FluidObject } from 'gatsby-image';
import classes from './MateriaPrima.module.scss';

interface Props {
  title: string,
  fluidImg: FluidObject,
  hexColor: string,
  text: string,
  imgLeft?: boolean,
  imgBehindTitle?: boolean,
  height: string,
  whiteBehindImg?: boolean,
  longTitle?: boolean
}

const MateriaPrima = ({ fluidImg, hexColor, text, title, height, imgLeft, imgBehindTitle, whiteBehindImg, longTitle }: Props) => {

  if (imgLeft) return (
    <div style={{ height: height }} className={classes.container}>
      <div style={{ height: height, backgroundColor: hexColor }} className={classes.colorBox} />
      <div style={{ width: "150px", height: "120px", overflow: "hidden", position: "absolute", left: "10px", marginTop: "-40px" }}>
        <div style={{ width: "220px" }}>
          <Img fluid={fluidImg} alt="Lievtio Madre" />
        </div>
      </div>
      <div className={classes.titleContainer} style={{ right: "-5px", width: longTitle ? "80%" : "12em" }}>
        <div style={{ height: "1px", width: "20px", backgroundColor: "black", position: "absolute", marginTop: "-5px", right: "25px" }}></div>
        <PageTitleDesktop right letterSpacing={".2em"} fontSize={"1.5em"}>{title}</PageTitleDesktop>
      </div>
      <Centralizer>
        <div className={classes.textContainer}>
          <p className={classes.text}>{text}</p>
        </div>
      </Centralizer>
    </div>
  )
  if (imgBehindTitle) return (
    <div style={{ height: height }} className={classes.container}>
      <div style={{ height: height, backgroundColor: hexColor }} className={classes.colorBox} />
      {whiteBehindImg && <div style={{ width: "100%", height: "100px", overflow: "hidden", position: "absolute", marginTop: "0px", backgroundColor: "white" }}></div>}
      <div style={{ width: "100%", height: "100px", overflow: "hidden", position: "absolute", marginTop: "0px", opacity: ".4" }}>
        <div style={{ width: "110vw" }}>
          <Img fluid={fluidImg} alt="Lievtio Madre" />
        </div>
      </div>
      <div className={classes.titleContainer} style={{ marginTop: "5px", width: longTitle ? "15em" : "12em"  }}>
        <div style={{ height: "1px", width: "20px", backgroundColor: "black", position: "absolute", marginTop: "-5px" }}></div>
        <PageTitleDesktop letterSpacing={".2em"} fontSize={"1.5em"}>{title}</PageTitleDesktop>
      </div>
      <Centralizer>
        <div className={classes.textContainer}>
          <p className={classes.text}>{text}</p>
        </div>
      </Centralizer>
    </div>
  )

  return (
    <div style={{ height: height }} className={classes.container}>
      <div style={{ height: height, backgroundColor: hexColor }} className={classes.colorBox} />
      <div style={{ width: "150px", height: "120px", overflow: "hidden", position: "absolute", right: "10px", marginTop: "-50px" }}>
        <div style={{ width: "220px" }}>
          <Img fluid={fluidImg} alt="Lievtio Madre" />
        </div>
      </div>
      <div className={classes.titleContainer}>
        <div style={{ height: "1px", width: "20px", backgroundColor: "black", position: "absolute", marginTop: "-5px" }}></div>
        <PageTitleDesktop letterSpacing={".2em"} fontSize={"1.5em"}>{title}</PageTitleDesktop>
      </div>
      <Centralizer>
        <div className={classes.textContainer}>
          <p className={classes.text}>{text}</p>
        </div>
      </Centralizer>

    </div>
  )
}

export default MateriaPrima;