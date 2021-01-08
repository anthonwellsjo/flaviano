import * as React from "react"
import { QuoteStyle } from "../../types";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import LayoutHeader from "../components/LayoutHeader/LayoutHeader"
import PageTitle from "../components/PageTitle/PageTitle";
import ProductPreviews from "../components/ProductPage/ProductPreviews/ProductPreviews";
import Quote from "../components/Quote/Quote";
import Centralizer from "../components/structure components/Centralizer/centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';





const IndexPage = () => {
  let parallax;
  return (
    <Parallax pages={4} scrolling={true} ref={ref => parallax = ref}>
      <LayoutHeader/>

        <section style={{ position: "relative", top: "30vh", width: "50vw", left: "40vw", height: "40vh" }}>
          <ParallaxLayer offset={0} speed={0.05}>
            <Quote>
              Ci sono sapori e profumi che evocano ricordi in ognuno di noi, ci auguriamo di regalare
              quei momenti di dolcezza ad ognuno di voi.
          </Quote>
          </ParallaxLayer>
        </section>

        <section style={{ position: "relative", left: "0", right: "0", top: "0", marginTop: "100px" }}>
          <CategoryCarousel />
        </section>


        {/* ------------------------------BEIGE SECTION */}
        <section style={{ position: "relative", height: "100vh", backgroundColor: "rgba(178, 147, 121, 0.2)" }}>
          <div style={{ height: "40vh" }}>
            <Centralizer column>
              <div style={{ width: "70vw" }}>
                <Quote>
                  Flaviano nasce dal desiderio di trasmettere l’amore e la passione per l’artigianalità.
                  Siamo artigiani moderni che si pongono l’obiettivo di promuovere la tradizione attraverso
                  la creatività. Siamo custodi delle bontà del nostro territorio.
            </Quote>
              </div>
            </Centralizer>
          </div>

          <div style={{ width: "120px", height: "150px", textAlign: "center", position: "absolute", left: "10vw", bottom: "22vh" }}>
            <Quote style={QuoteStyle.header}>
              P
          </Quote>
          </div>

          <div style={{ width: "150px", height: "150px", textAlign: "center", position: "absolute", right: "35vw", bottom: "8vh" }}>
            <PageTitle>Prodotti</PageTitle>
          </div>

        </section>



        {/* ------------------------------PRODUCTS SECTION */}



        <section style={{ position: "relative", height: "90vh", backgroundColor: "white" }}>

          <ProductPreviews />

        </section>
    </Parallax>
  )
}

export default IndexPage;


