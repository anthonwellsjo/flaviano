import React, { useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../types";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import LayoutHeader from "../LayoutHeader/LayoutHeader"
import PageTitle from "../PageTitle/PageTitle";
import ProductPreviews from "../ProductPage/ProductPreviews/ProductPreviews";
import Quote from "../Quote/Quote";
import Centralizer from "../StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import BackDrop from "../BackDrop/BackDrop";
import AnimLogo from "../AnimLogo/AnimLogo";
import { useHomeQuery } from "../../hooks/queries/useHomeQuery";
import LayoutFrame from "../LayoutFrame/LayoutFrame";

const IndexPageDesktopRender: React.FC = () => {
  const [materiePrimeHover, setMateriePrimeHover] = useState(false);

  const { sanityHomePage }: HomePageQuery = useHomeQuery();

  const materiePrimeBcgStyles = useSpring({
    reverse: materiePrimeHover,
    from: { transform: "scale(0.83)" },
    to: { transform: "scale(0.8)" },
    config: {
      mass: 1,
      tension: 300,
      friction: 100
    }
  });
  const materiePrimeTitleStyles = useSpring({
    reverse: materiePrimeHover,
    from: { transform: "scale(0.95)" },
    to: { transform: "scale(0.9)" },
    config: {
      mass: 1,
      tension: 200,
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
      <LayoutFrame>
        <AnimLogo />
        <LayoutHeader />
        <section style={{ position: "relative", top: "30vh", width: "50vw", left: "40vw", height: "40vh" }}>
          <ParallaxLayer offset={0} speed={0.05}>
            <Quote style={QuoteStyle.italic} fontSize={"Quote-M"}>
              {sanityHomePage.quoteHeaderText}
            </Quote>
          </ParallaxLayer>
        </section>

        <section style={{ position: "relative", left: "0", right: "0", top: "0", marginTop: "8vh", height: "60vw", zIndex: 1 }}>
          <ParallaxLayer offset={0} speed={-0.05}>
            <CategoryCarousel />
          </ParallaxLayer>
        </section>


        {/* ------------------------------BEIGE SECTION */}
        <ParallaxLayer offset={1} speed={1}>
          <div style={{ height: "350vh", width: "100%", zIndex: -1, backgroundColor: "rgba(178, 147, 121, 0.2)", position: "absolute" }}></div>
        </ParallaxLayer>
        <section style={{ position: "relative", height: "100vh" }}>
          <div style={{ height: "40vh" }}>
            <ParallaxLayer offset={0} speed={-0.35}>

              <Centralizer column>
                <div style={{ width: "70vw", marginTop: "-1400px" }}>
                  <Quote style={QuoteStyle.italic} fontSize={"Quote-M"}>
                    {sanityHomePage.quoteBelowCarouselText}
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


        <section onMouseEnter={() => setMateriePrimeHover(true)} onMouseLeave={() => setMateriePrimeHover(false)} style={{ position: "relative", height: "220vh", marginTop: "20vh", zIndex: -1 }}>

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
              <animated.div style={{ cursor: "pointer", position: "absolute", width: "45vw", marginTop: "150vh", right: "10vw" }}>
                <Quote style={QuoteStyle.italic} fontSize={"Quote-M"}>Siamo custodi del nostro territorio. Per questo la nostra produzione si basa sull’attenta e accurata scelta di materie prime pregiate e di prima qualità.</Quote>
              </animated.div>
            </Link>
          </ParallaxLayer>
        </section>

        {/* ------------------------------CONTACT SECTION */}
        <section style={{ position: "relative", height: "90vh", marginTop: "40vh" }}>
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
      </LayoutFrame>
    </Parallax >
  )
}

export default IndexPageDesktopRender;