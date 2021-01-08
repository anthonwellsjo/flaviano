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
      <LayoutHeader />

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
      <ParallaxLayer offset={1} speed={5}>
        <div style={{ height: "450vh", width: "100%", backgroundColor: "rgba(178, 147, 121, 0.2)", position: "absolute" }}></div>
      </ParallaxLayer>
      <section style={{ position: "relative", height: "100vh" }}>
        <div style={{ height: "40vh" }}>
          <ParallaxLayer offset={0} speed={-0.20}>

            <Centralizer column>
              <div style={{ width: "70vw", marginTop: "-700px" }}>
                <Quote>
                  Flaviano nasce dal desiderio di trasmettere l’amore e la passione per l’artigianalità.
                  Siamo artigiani moderni che si pongono l’obiettivo di promuovere la tradizione attraverso
                  la creatività. Siamo custodi delle bontà del nostro territorio.
                </Quote>
              </div>
            </Centralizer>
          </ParallaxLayer>

        </div>
        <div style={{ width: "120px", height: "150px", textAlign: "center", position: "absolute", left: "10vw", bottom: "15vh" }}>
          <Quote style={QuoteStyle.header}>
            P
          </Quote>
        </div>
        <div style={{ width: "150px", height: "150px", textAlign: "center", position: "absolute", right: "35vw", bottom: "5vh" }}>
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


