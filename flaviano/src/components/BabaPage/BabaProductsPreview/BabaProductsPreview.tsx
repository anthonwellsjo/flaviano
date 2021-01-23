import React from 'react';
import { Product, ProductQuery } from '../../../../types';
import { useProductQuery } from '../../../hooks/queries/useProductQuery';
import PageTitle from '../../PageTitle/PageTitle';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';
import classes from './BabaProductsPreview.module.css';

const BabaProductsPreview: React.FC = () => {
  const queryData: ProductQuery = useProductQuery();
  const babas: Array<Product> = queryData.allSanityProduct.edges.filter((p: Product) => p.node.category.title == "Babà");
  console.log("query data", babas);

  return (
    <Centralizer>
      {  babas.map((p: Product) => {
        return (
          <div key={p.node.id} className={classes.productCard} style={{ width: "33.33%", height: "500px", backgroundColor: p.node.backGroundColor.hex, position: "relative" }}>
            <div className={classes.header}>
              <div style={{ height: "3px", width: "2vw", backgroundColor: "black", marginBottom: ".5em" }}></div>
              <PageTitle fontSize={"1.8em"} letterSpacing={".2em"}>Babà</PageTitle>
              <br></br>
              <PageTitle fontSize={"1.8em"} letterSpacing={".2em"}>{p.node.title}</PageTitle>
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
        )
      }
      )
      }
    </Centralizer>
  )
}

export default BabaProductsPreview;