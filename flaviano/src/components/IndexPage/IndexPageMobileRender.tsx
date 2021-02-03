import React, { useEffect, useRef, useState } from 'react';
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
import ScrollButton from '../ScrollButton/ScrollButton';

const IndexPageMobileRender: React.FC = () => {
  const { width } = useViewport();
  const { sanityHomePage }: HomePageQuery = useHomeQuery();
  const [currentScroll, setCurrentScroll] = useState(0);

  let parallax = useRef();


  const onScrollEventHandler = () => {
    setCurrentScroll(parallax.current.current);
    console.log(currentScroll);
  }

  useEffect(() => {
    if (!parallax.current || !parallax.current.container) return
    parallax.current.container.onscroll = onScrollEventHandler
  })


  return (
    <Parallax pages={3} scrolling={true} ref={parallax}>
      <BackDrop />
      <LayoutFrame>
        <AnimLogoMobile />
        <LayoutHeaderMobile />

        <section style={{ position: "relative", top: "0", width: "100vw", height: "80vh", marginTop: "-100px", backgroundColor: "white" }}>
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




        {/* ------------------------------PRODUCTS SECTION */}

        <section id="products" style={{ position: "absolute", height: "150vh", width: "100vw", zIndex: 1 }}>
          <ParallaxLayer offset={0.23} speed={0.2}>
            <div style={{ background: "linear-gradient(180deg, lightgray 80%, white 20%)", height: "100vh", paddingTop: "10vh", marginTop: "-10vh" }}>
              <MobileProductCarousel />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.3} speed={0.7}>
            <div style={{ backgroundColor: "lightgray", width: "100%", height: "25vh" }} >
              <div style={{ marginTop: "-5vh" }}>
                <ScrollButton currentPosition={currentScroll} reactivePosition={20} />
              </div>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={0.6}>
            <div style={{ marginTop: "-15vh" }}>
              <div style={{ width: "120px", height: "150px", textAlign: "center", position: "absolute", left: "10vw" }}>
                <Quote mobile style={QuoteStyle.header}>
                  P
              </Quote>
              </div>
              <div style={{ width: "150px", height: "150px", textAlign: "center", position: "absolute", left: "50%" }}>
                <PageTitle fontSize={(width * 0.003).toString() + "em"}>Prodotti</PageTitle>
              </div>
            </div>
          </ParallaxLayer>

        </section>


        {/* ------------------------------MATERIE PRIME SECTION */}

        {/* <section style={{ position: "absolute", height: "150vh", width: "100vw" }}>
          <ParallaxLayer offset={1} speed={-0.1}>
            <Link to="/materieprime/">
            </Link>
          </ParallaxLayer>

        </section> */}

      </LayoutFrame>
    </Parallax >
  )
}

export default IndexPageMobileRender;