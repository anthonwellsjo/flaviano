import React, { useEffect, useRef, useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../../../types";
import LayoutHeaderMobile from "../../LayoutHeaderMobile/LayoutHeaderMobile"
import PageTitle from "../../../Desktop/PageTitleDesktop/PageTitleDesktop";
import Quote from "../../../Desktop/QuoteDesktop/QuoteDesktop";
import Centralizer from "../../../StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import BackDrop from "../../../Desktop/BackDropDesktop/BackDropDesktop";
import { useHomeQuery } from "../../../../hooks/queries/useHomeQuery";
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

  const Top = React.useRef<HTMLInputElement>(null);


  return (
    <Parallax pages={3} scrolling={true} ref={parallax}>
      <BackDrop />
      <ParallaxLayer offset={0} speed={0.1}>
        <AnimLogoMobile />
        <LayoutHeaderMobile />
      </ParallaxLayer>

      {/* ------------------------------TOP QUOTE */}
      <div id="top" style={{ position: "absolute", top: "0" }}></div>

      <ParallaxLayer offset={0.09} speed={-0.1}>
        <div style={{ position: "relative", top: "0", width: "100vw", height: "100vh" }}>
          <Centralizer>
            <div style={{ width: "70%", height: "50%", marginTop: "10vh" }}>
              <Quote mobile style={QuoteStyle.italic} fontSize={"1.4em"} rightQuoteY={"17vh"} >
                {sanityHomePage.quoteHeaderText}
              </Quote>
            </div>
          </Centralizer>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1}>
        <div style={{ width: "100%", position: "absolute", zIndex: 1 }} >
          <ScrollButton to="#products" deactivatePosition={400} currentPosition={currentScroll} reactivePosition={30} />
        </div>
      </ParallaxLayer>





      {/* ------------------------------PRODUCTS SECTION */}
      {/* ID FOR AUTOSCROLL */}

      <div id="products" style={{ position: "absolute", top: "100vh" }}></div>


      <ParallaxLayer offset={1.1} speed={-0.05}>
        <section style={{ position: "relative", width: "100vw", height: "100vh", zIndex: -1 }}>
          <div style={{ marginTop: "0", position: "relative", height: "18vh" }}>
            <div style={{ width: "120px", textAlign: "center", position: "absolute", left: "10vw", zIndex: 1 }}>
              <Quote mobile style={QuoteStyle.header}>
                P
                </Quote>
            </div>
            <div style={{ width: "150px", textAlign: "center", position: "absolute", left: "50%" }}>
              <PageTitle fontSize={(width * 0.0035).toString() + "em"}>Prodotti</PageTitle>
            </div>
          </div>
          <div style={{ marginTop: "-5vh" }}>
            <MobileProductCarousel />
          </div>
          <div style={{ marginTop: "-5vh", width: "100%" }}>
            <ScrollButton to="#materieprime" deactivatePosition={820} currentPosition={currentScroll} reactivePosition={700} />
          </div>
        </section>
      </ParallaxLayer>




      {/* ------------------------------MATERIE PRIME SECTION */}

      {/* ID FOR AUTOSCROLL */}
      <div id="materieprime" style={{ position: "absolute", top: "200vh" }}></div>


      <ParallaxLayer offset={2}>
        <section style={{ position: "absolute", height: "100vh", width: "100vw" }}>
          <Centralizer>
            <div style={{ marginTop: "-30vh", width: "100%" }}>
              <div style={{ backgroundColor: "#E3A38B", width: "80vw", height: "40vh", position: "absolute", right: 0 }}>
                <Centralizer>
                  <div style={{ width: "60%", marginTop: "-20vh" }}>
                    <Quote mobile style={QuoteStyle.italic} fontSize={"1.2em"} rightQuoteY={"15vh"} >
                      Siamo custodi del nostro territorio. Per questo la nostra produzione si basa sull’attenta e accurata scelta di materie prime pregiate e di prima qualità.
                    </Quote>
                  </div>
                </Centralizer>
              </div>
              <div style={{ width: "80vw", textAlign: "center", position: "absolute", left: "10px", marginTop: "-15vh" }}>
                <PageTitle fontSize={(width * 0.004).toString() + "em"}>Materie Prime</PageTitle>
              </div>
            </div>
          </Centralizer>
          <div style={{ marginTop: "-15vh", width: "100%" }}>
            <ScrollButton up to="#top" deactivatePosition={2000} currentPosition={currentScroll} reactivePosition={700} />
          </div>
        </section>
      </ParallaxLayer>
    </Parallax >
  )
}

export default IndexPageMobileRender;