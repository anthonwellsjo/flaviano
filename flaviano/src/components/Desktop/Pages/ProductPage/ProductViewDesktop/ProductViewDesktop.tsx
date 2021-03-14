import React, { FC } from 'react';
import Img from 'gatsby-image';
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';
import classes from './ProductViewDesktop.module.scss';

interface pageProps {
  bcgColor: string,
  fluidImg: any,
  title: string,
  description: string,
  ingredients: string,
  conservation: string
  descriptionEng: string,
  ingredientsEng: string,
  conservationEng: string,
  english: boolean
}

const ProductViewDesktop = (props: pageProps) => {



  if (props.title.toUpperCase() == "LIMONE E ZENZERO") return (
    <div className={classes.container} >
      <div style={{ position: "absolute", backgroundColor: props.bcgColor, width: "100%", height: "100vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <div style={{ maxWidth: "500px", maxHeight: "300px", width: "350px", height: "300px", marginBottom: "10vh" }}>
          <Img className={classes.fluidImg} fluid={props.fluidImg} alt="product photo" />
        </div>
        <div className={classes.textWrapper}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>{props.title}</span>
          </div>
          <div className={classes.textBody}>
            <div>
              <div className={classes.descWrapper}>
                <span className={classes.descriptionTitle}>{props.english ? "Description" : "Descrizione prodotto"} </span>
                <br></br>
                <p className={classes.description}>{props.english ? props.descriptionEng : props.description}</p>
              </div>
              <div className={classes.ingredWrapper}>
                <span className={classes.ingredientsTitle}>{props.english ? "Ingredients" : "Ingredienti"}</span>
                <br></br>
                <p className={classes.ingredients}>{props.english ? props.ingredientsEng : props.ingredients}</p>
              </div>
              <div className={classes.consWrapper}>
                <span className={classes.conservationTitle}>{props.english ? "Conservation" : "Conservazione"}</span>
                <br></br>
                <span className={classes.conservation}>{props.english ? props.conservationEng : props.conservation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ghost}></div>
    </div>
  )
  return (
    <div className={classes.container} >
      <div style={{ position: "absolute", backgroundColor: props.bcgColor, width: "100%", height: "100vh", display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
        <div style={{ maxWidth: "500px", maxHeight: "300px", width: "450px", height: "300px", marginBottom: "10vh" }}>
          <Img className={classes.fluidImg} fluid={props.fluidImg} alt="product photo" />
        </div>
        <div className={classes.textWrapper}>
          <div className={classes.titleWrapper}>
            <span className={classes.title}>{props.title}</span>
          </div>
          <div className={classes.textBody}>
            <div>
              <div className={classes.descWrapper}>
                <span className={classes.descriptionTitle}>{props.english ? "Description" : "Descrizione prodotto"} </span>
                <br></br>
                <p className={classes.description}>{props.english ? props.descriptionEng : props.description}</p>
              </div>
              <div className={classes.ingredWrapper}>
                <span className={classes.ingredientsTitle}>{props.english ? "Ingredients" : "Ingredienti"}</span>
                <br></br>
                <p className={classes.ingredients}>{props.english ? props.ingredientsEng : props.ingredients}</p>
              </div>
              <div className={classes.consWrapper}>
                <span className={classes.conservationTitle}>{props.english ? "Conservation" : "Conservazione"}</span>
                <br></br>
                <span className={classes.conservation}>{props.english ? props.conservationEng : props.conservation}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.ghost}></div>
    </div>
  )
}

export default ProductViewDesktop;