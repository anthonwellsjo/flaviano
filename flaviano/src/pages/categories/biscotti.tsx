import React, { useContext, useEffect } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Product, ProductQuery, QuoteStyle } from '../../../types';
import LayoutHeader from '../../components/LayoutHeader/LayoutHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Quote from '../../components/Quote/Quote';
import Centralizer from '../../components/StructureComponents/Centralizer/Centralizer';
import { useProductQuery } from '../../hooks/queries/useProductQuery';
import Img from 'gatsby-image';
import ProductView from '../../components/ProductPage/ProductView/ProductView';
import BackDrop from '../../components/BackDrop/BackDrop';
import { PageContext } from '../../contexts/pageContext';

const BiscottiPage: React.FC = () => {
  const [page, setPage] = useContext(PageContext);
  const products: ProductQuery = useProductQuery();
  const biscotti: Array<Product> = products.allSanityProduct.edges.filter((p: Product) => p.node.category.title == "Biscotti");
  let pageNr = 0;
  let parallax;

  useEffect(() => {
    setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }));
  },[])

  return (
    <Parallax pages={3.4} scrolling={true} ref={ref => parallax = ref}>
      {/* ------------HEADER SECTION */}
      <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", zIndex: -100, position: "relative" }}>
        <ParallaxLayer factor={0} speed={-1}>
          <LayoutHeader />
          <section style={{ position: "absolute", left: "0", right: "0", top: "0", height: "100vh" }}>
            <Centralizer>
              <div style={{ position: "absolute", width: "55vw", top: "45vh", marginLeft: "25vw" }}>
                <Quote>Le materie prime utilizzate per i nostri prodotti provengono dalle ricche e generose terre campane che offrono eccellenze riconosciute in tutto il mondo.</Quote>
              </div>
            </Centralizer>
            <div style={{ position: "absolute", width: "6em", marginLeft: "10vw", textAlign: "center", bottom: "30vh" }}>
              <Quote style={QuoteStyle.header}>B</Quote>
            </div>
            <div style={{ position: "absolute", right: "20vw", bottom: "15vh" }}>
              <PageTitle>Biscotti</PageTitle>
            </div>
          </section>
        </ParallaxLayer>
      </div>

      {biscotti.map((p: Product) => {
        console.log(p.node.title);
        pageNr++;
        return (
          <section style={{ position: "relative", width: "100%", height: "100vh" }} key={p.node.id} >
            <ParallaxLayer factor={pageNr} speed={pageNr / 10}>
              <ProductView
                bcgColor={p.node.backGroundColor.hex}
                fluidImg={p.node.productPhoto.asset.fluid}
                title={p.node.title}
                description={p.node.description}
                conservation={p.node.conservation}
                ingredients={p.node.ingredients}
              />
            </ParallaxLayer>
          </section>
        )
      })}
      {pageNr++}
      <section style={{ position: "relative", width: "100%", height: "100vh", marginTop: "30vh" }} >
        <ParallaxLayer factor={pageNr} speed={pageNr / 15}>
          <div style={{ backgroundColor: "white", width: "100%", height: "100vh", zIndex: 100 }}>
          </div>
        </ParallaxLayer>
      </section>
    </Parallax >
  )
}

export default BiscottiPage;