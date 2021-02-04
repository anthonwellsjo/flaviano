import React, { useEffect, useRef, useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../../../types";
import CategoryCarousel from "../../../Desktop/CategoryCarousel/CategoryCarousel";
import LayoutHeaderMobile from "../../LayoutHeaderMobile/LayoutHeaderMobile"
import PageTitle from "../../../Desktop/PageTitleDesktop/PageTitleDesktop";
import ProductPreviews from "../../../Desktop/Pages/ProductPage/ProductPreviewsDesktop/ProductPreviewsDesktop";
import Quote from "../../../Desktop/QuoteDesktop/QuoteDesktop";
import Centralizer from "../../../StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import BackDrop from "../../../Desktop/BackDropDesktop/BackDropDesktop";
import AnimLogo from "../../../Logos/AnimLogo/AnimLogo";
import { useHomeQuery } from "../../../../hooks/queries/useHomeQuery";
import LayoutFrame from "../../../Desktop/LayoutFrameDesktop/LayoutFrameDesktop";
import AnimLogoMobile from '../../../Logos/AnimLogoMobile/AnimLogoMobile';
import { useViewport } from '../../../../hooks/useViewPort';
import MobileProductCarousel from '../../ProductCarouselMobile/ProductCarouselMobile';
import ScrollButton from '../../ScrollButtonMobile/ScrollButtonMobile';
import useScroll from '../../../../hooks/useScroll';

const IndexPageMobileRender: React.FC = () => {
  const { width } = useViewport();
  const { sanityHomePage }: HomePageQuery = useHomeQuery();
  let parallax = useRef();
  const [currentScroll] = useScroll(parallax);


  return (
    <Parallax pages={4} scrolling={true} ref={parallax}>
      <BackDrop />
      <LayoutFrame>
        <AnimLogoMobile />
        <LayoutHeaderMobile />

        <section style={{ position: "relative", top: "0", width: "100vw", height: "80vh", marginTop: "-100px", backgroundColor: "white" }}>
          <ParallaxLayer offset={0.09} speed={0.3}>
            <Centralizer>
              <div style={{ width: "70%" }}>
                <Quote mobile style={QuoteStyle.italic} fontSize={"1.4em"} rightQuoteY={"17vh"} >
                  {sanityHomePage.quoteHeaderText}
                </Quote>
              </div>
            </Centralizer>
          </ParallaxLayer>
        </section>




        {/* ------------------------------PRODUCTS SECTION */}

        <section id="products" style={{ position: "relative", width: "100vw" }}>
          <div style={{ zIndex: 1, position: "absolute", width: "100%", backgroundColor: "red" }}>
            <ParallaxLayer offset={0.2} speed={0.7}>
              <div style={{ width: "100%" }} >
                <div style={{ marginTop: "5vh" }}>
                  <ScrollButton to="#products" deactivatePosition={40} currentPosition={currentScroll} reactivePosition={30} />
                </div>
              </div>
            </ParallaxLayer>

            <ParallaxLayer offset={0.85} speed={1.2}>
              <div style={{ marginTop: "0", position: "relative", height: "20vh" }}>
                <div style={{ width: "120px", textAlign: "center", position: "absolute", left: "10vw" }}>
                  <Quote mobile style={QuoteStyle.header}>
                    P
                  </Quote>
                </div>
                <div style={{ width: "150px", textAlign: "center", position: "absolute", left: "50%" }}>
                  <PageTitle fontSize={(width * 0.0035).toString() + "em"}>Prodotti</PageTitle>
                </div>
              </div>
              <MobileProductCarousel />
            </ParallaxLayer>

          </div>

        </section>


        {/* ------------------------------MATERIE PRIME SECTION */}

        <section style={{ position: "absolute", height: "150vh", width: "100vw" }}>
          <div style={{ position: "absolute", zIndex: 3, width: "100%" }}>
            <ParallaxLayer offset={1} speed={0.7}>
              <div id="materieprime" style={{ width: "100%" }} >

                <div style={{ marginTop: "-33vh", width: "100%" }}>
                  <ScrollButton to="#materieprime" deactivatePosition={500} currentPosition={currentScroll} reactivePosition={499} />
                </div>
              </div>
            </ParallaxLayer>
          </div>
          <ParallaxLayer offset={1.1} speed={0.5}>
            <Link to="/materieprime/">
              <div style={{ backgroundColor: "#E3A38B", width: "80vw", height: "80vh", position: "absolute", right: 0 }}></div>
            </Link>
          </ParallaxLayer>
          <ParallaxLayer offset={1.1} speed={0.2}>
            <div style={{ width: "80vw", textAlign: "center", position: "absolute" }}>
              <PageTitle fontSize={(width * 0.004).toString() + "em"}>Materie Prime</PageTitle>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.5} speed={-0.1}>
            <Centralizer>
              <div style={{ width: "80%" }}>
                <Quote mobile style={QuoteStyle.italic} fontSize={"1.2em"} rightQuoteY={"5px"} >
                  Siamo custodi del nostro territorio. Per questo la nostra produzione si basa sull’attenta e accurata scelta di materie prime pregiate e di prima qualità.
                </Quote>
              </div>
            </Centralizer>
          </ParallaxLayer>
        </section>

      </LayoutFrame>
    </Parallax >
  )
}

export default IndexPageMobileRender;