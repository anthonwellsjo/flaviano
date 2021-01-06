import * as React from "react"
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import Layout from "../components/Layout/Layout"
import Quote from "../components/Quote/Quote";

// markup
const IndexPage = () => {


  return (
    <>
      <Layout />
      <section style={{ position: "relative", top: "100px", width: "50vw", left: "30vw" }}>
        <Quote>Ci sono sapori e profumi che evocano ricordi in ognuno di noi, ci auguriamo di regalare quei momenti di dolcezza ad ognuno di voi.</Quote>
      </section>
      <section>
        <CategoryCarousel/>
      </section>
    </>
  )
}

export default IndexPage;


