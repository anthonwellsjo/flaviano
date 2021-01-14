import * as React from "react"
import { QuoteStyle } from "../../types";
import CategoryCarousel from "../components/CategoryCarousel/CategoryCarousel";
import LayoutHeader from "../components/LayoutHeader/LayoutHeader"
import PageTitle from "../components/PageTitle/PageTitle";
import ProductPreviews from "../components/ProductPage/ProductPreviews/ProductPreviews";
import Quote from "../components/Quote/Quote";
import Centralizer from "../components/StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import BackDrop from "../components/BackDrop/BackDrop";


const IndexPage = () => {
  const [materiePrimeHover, setMateriePrimeHover] = React.useState(false);
  const materiePrimeBcgStyles = useSpring({
    reverse: materiePrimeHover,
    from: { transform: "scale(0.9)" },
    to: { transform: "scale(0.8)" },
    config: {
      mass: 1,
      tension: 300,
      friction: 15
    }
  });
  const materiePrimeTitleStyles = useSpring({
    reverse: materiePrimeHover,
    from: { transform: "scale(1)" },
    to: { transform: "scale(0.9)" },
    config: {
      mass: 1,
      tension: 300,
      friction: 40
    }
  });
  const materiePrimeLineStyles = useSpring({
    reverse: materiePrimeHover,
    from: { width: "20vw" },
    to: { width: "8vw" },
    config: {
      mass: 1,
      tension: 300,
      friction: 100
    }
  });

  let parallax;
  return (
    <Parallax pages={6} scrolling={true} ref={ref => parallax = ref}>
      <BackDrop />

      <LayoutHeader />
      <section style={{ position: "relative", top: "30vh", width: "50vw", left: "40vw", height: "40vh", zIndex: -1 }}>
        <ParallaxLayer offset={0} speed={0.05}>
          <Quote>
            Ci sono sapori e profumi che evocano ricordi in ognuno di noi, ci auguriamo di regalare
            quei momenti di dolcezza ad ognuno di voi.
          </Quote>
        </ParallaxLayer>
      </section>

      <section style={{ position: "relative", left: "0", right: "0", top: "0", marginTop: "8vh", height: "60vh" }}>
        <ParallaxLayer offset={0} speed={-0.05}>

          <CategoryCarousel />
        </ParallaxLayer>
      </section>


      {/* ------------------------------BEIGE SECTION */}
      <ParallaxLayer offset={1} speed={1}>
        <div style={{ height: "350vh", width: "100%", backgroundColor: "rgba(178, 147, 121, 0.2)", position: "absolute" }}></div>
      </ParallaxLayer>
      <section style={{ position: "relative", height: "100vh" }}>
        <div style={{ height: "40vh" }}>
          <ParallaxLayer offset={0} speed={-0.10}>

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

      <section style={{ position: "relative", height: "200vh", backgroundColor: "white" }}>
        <ParallaxLayer speed={-0.05}>

          <ProductPreviews />
        </ParallaxLayer>

      </section>
      {/* ------------------------------MATERIE PRIME SECTION */}


      <section onMouseEnter={() => setMateriePrimeHover(true)} onMouseLeave={() => setMateriePrimeHover(false)} style={{ position: "relative", height: "190vh", marginTop: "20vh", zIndex: -1 }}>

        <ParallaxLayer speed={0.2}>
          <Link to="/materieprime/">
            <animated.div style={{ ...materiePrimeBcgStyles, cursor: "pointer", position: "absolute", width: "65vw", height: "75vh", backgroundColor: "#E3A38B", marginTop: "95vh", right: "0" }}>
            </animated.div>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer speed={0.4}>
          <Link to="/materieprime/">
            <animated.div style={{ ...materiePrimeTitleStyles, position: "absolute", marginLeft: "10vw", marginTop: "190vh" }}>
              <PageTitle>Materie Prime</PageTitle>
              <Centralizer>
                <animated.div style={{ ...materiePrimeLineStyles, cursor: "pointer", height: "2px", marginTop: "2.5vh", backgroundColor: "black" }}></animated.div>
              </Centralizer>
            </animated.div>
          </Link>

        </ParallaxLayer>
        <ParallaxLayer speed={0.25}>
          <Link to="/materieprime/">
            <animated.div style={{ cursor: "pointer", position: "absolute", width: "45vw", marginTop: "155vh", right: "10vw" }}>
              <Quote>Siamo custodi del nostro territorio. Per questo la nostra produzione si basa sull’attenta e accurata scelta di materie prime pregiate e di prima qualità.</Quote>
            </animated.div>
          </Link>
        </ParallaxLayer>
      </section>

      {/* ------------------------------CONTACT SECTION */}
      <section style={{ position: "relative", height: "90vh", marginTop: "60vh" }}>
        <ParallaxLayer factor={3} speed={0.35}>
          <div style={{ position: "absolute", backgroundColor: "#F0E9E4", width: "100%", height: "60vh", }}>
          </div>
        </ParallaxLayer>
        <ParallaxLayer factor={3} speed={0.45}>
          <div style={{ position: "absolute", marginTop: "50vh", left: "10vw", top: "25vh" }}>
            <div style={{ height: "2px", width: "2em", marginLeft: "3px", backgroundColor: "black" }}></div>
            <PageTitle>Contatti</PageTitle>
            <div style={{ height: "2px", width: "2em", marginLeft: "3px", marginTop: "4px", backgroundColor: "black" }}></div>
          </div>
        </ParallaxLayer>
      </section>
    </Parallax >
  )
}

export default IndexPage;


