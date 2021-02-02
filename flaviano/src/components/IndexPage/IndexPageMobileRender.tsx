import React, { useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../types";
import CategoryCarousel from "../CategoryCarousel/CategoryCarousel";
import LayoutHeaderMobile from "../LayoutHeaderMobile/LayoutHeaderMobile"
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
import AnimLogoMobile from '../AnimLogoMobile/AnimLogoMobile';
import { useViewport } from '../../hooks/useViewPort';
import MobileProductCarousel from '../MobileProductCarousel/MobileProductCarousel';

const IndexPageMobileRender: React.FC = () => {
  const [materiePrimeHover, setMateriePrimeHover] = useState(false);
  const { width } = useViewport();
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
    <Parallax pages={3} scrolling={true} ref={ref => parallax = ref}>
      <BackDrop />
      <LayoutFrame>
        <AnimLogoMobile />
        <LayoutHeaderMobile />

        <section style={{ position: "relative", top: "0", width: "100vw", height: "80vh", marginTop: "-100px", backgroundColor: "white", zIndex: -1 }}>
          <ParallaxLayer offset={0.1} speed={-0.1}>
            <Centralizer>
              <div style={{ width: "80%" }}>
                {width > 750 &&
                  <Quote mobile style={QuoteStyle.italic} fontSize={"1.6em"} rightQuoteY={"40px"} >
                    {sanityHomePage.quoteHeaderText}
                  </Quote>
                }
                {width > 550 && width <= 750 &&
                  <Quote mobile style={QuoteStyle.italic} fontSize={"1.5em"} rightQuoteY={"40px"} >
                    {sanityHomePage.quoteHeaderText}
                  </Quote>
                }
                {width <= 550 &&
                  <Quote mobile style={QuoteStyle.italic} fontSize={"1.2em"} rightQuoteY={"5px"} >
                    {sanityHomePage.quoteHeaderText}
                  </Quote>
                }

              </div>
            </Centralizer>
          </ParallaxLayer>
        </section>



        {/* ------------------------------BEIGE SECTION */}
        <ParallaxLayer offset={0.29} speed={0.7}>
          <div style={{ backgroundColor: "lightgray", width: "100%", height: "30vh" }} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.6}>
          <section style={{ position: "relative", height: "100vh", marginTop: "-10vh", }}>
            <div style={{ width: "120px", height: "150px", textAlign: "center", position: "absolute", left: "10vw" }}>
              <Quote mobile style={QuoteStyle.header}>
                P
              </Quote>
            </div>
            <div style={{ width: "150px", height: "150px", textAlign: "center", position: "absolute", left: "50%" }}>
              <PageTitle fontSize={(width * 0.003).toString() + "em"}>Prodotti</PageTitle>
            </div>
          </section>
        </ParallaxLayer>




        {/* ------------------------------PRODUCTS SECTION */}

        <section style={{ position: "absolute", height: "150vh", width: "100vw", zIndex: -100 }}>
          <ParallaxLayer offset={0.25} speed={0.2}>
            <div style={{ background: "linear-gradient(180deg, lightgray 80%, white 20%)", height: "100vh", paddingTop: "10vh", marginTop: "-10vh" }}>
              <MobileProductCarousel />
            </div>
          </ParallaxLayer>

        </section>
        {/* ------------------------------MATERIE PRIME SECTION */}

        <section style={{ position: "absolute", height: "150vh", width: "100vw", zIndex: -100 }}>
          <ParallaxLayer offset={1} speed={-0.1}>
            <Link to="/materieprime/">
            </Link>
          </ParallaxLayer>

        </section>

      </LayoutFrame>
    </Parallax >
  )
}

export default IndexPageMobileRender;