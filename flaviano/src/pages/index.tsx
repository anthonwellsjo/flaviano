import * as React from "react"
import { QuoteStyle } from "../../types";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import Layout from "../components/Layout/Layout"
import PageTitle from "../components/PageTitle/PageTitle";
import ProductPreview from "../components/ProductPage/ProductPreview/ProductPreview";
import Quote from "../components/Quote/Quote";
import Centralizer from "../components/structure components/Centralizer/centralizer";



const IndexPage = () => {


  return (
    <Layout>

      <section style={{ position: "relative", top: "30vh", width: "50vw", left: "40vw", height: "40vh" }}>
        <Quote>
          Ci sono sapori e profumi che evocano ricordi in ognuno di noi, ci auguriamo di regalare
          quei momenti di dolcezza ad ognuno di voi.
          </Quote>
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


      <section style={{ position: "relative", height: "90vh", marginTop: "-56px", backgroundColor: "white" }}>
        <ProductPreview />
      </section>



    </Layout>
  )
}

export default IndexPage;


