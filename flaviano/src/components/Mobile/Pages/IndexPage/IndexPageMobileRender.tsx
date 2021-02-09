import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../../../types";
import LayoutHeaderMobile from "../../Components/LayoutHeaderMobile/LayoutHeaderMobile"
import PageTitle from "../../../Desktop/PageTitleDesktop/PageTitleDesktop";
import Quote from "../../../Desktop/QuoteDesktop/QuoteDesktop";
import Centralizer from "../../../StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import BackDrop from "../../../Desktop/BackDropDesktop/BackDropDesktop";
import { useHomeQuery } from "../../../../hooks/queries/useHomeQuery";
import AnimLogoMobile from '../../../Logos/AnimLogoMobile/AnimLogoMobile';
import { useViewport } from '../../../../hooks/useViewPort';
import MobileProductCarousel from '../../Components/ProductCarouselMobile/ProductCarouselMobile';
import ScrollButton from '../../Components/ScrollButtonMobile/ScrollButtonMobile';
import useScroll from '../../../../hooks/useScroll';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import AnimLogoPiccoloMobile from '../../../Logos/AnimLogoPiccoloMobile/AnimLogoPiccoloMobile';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import { PageContext } from '../../../../contexts/pageContext';

const IndexPageMobileRender: React.FC = () => {
  const { width } = useViewport();
  const [page, setPage] = useContext(PageContext);
  const { sanityHomePage }: HomePageQuery = useHomeQuery();
  let parallax = useRef();



  return (
    <>
      <Parallax pages={3} scrolling={!page.burgerMenuOpen} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.1}>
          <LayoutHeaderMobile />
        </ParallaxLayer>


        {/* ------------------------------TOP QUOTE */}
        <div id="top" style={{ position: "absolute", top: "0" }}></div>


        <ParallaxLayer offset={0.09} speed={-0.1}>
          <div style={{ position: "relative", top: "0", width: "100vw", height: "100%", }}>
            <Centralizer>
              <div style={{ width: "85%", height: "50%", marginTop: "30%" }}>
                <QuoteMobile style={QuoteStyle.italic} fontSize={".9em"} rightQuoteX={"-5px"} rightQuoteY={"-10px"} leftQuoteX={"20px"} >
                  {sanityHomePage.mobileHeaderText}
                </QuoteMobile>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>





        {/* ------------------------------PRODUCTS SECTION */}
        {/* ID FOR AUTOSCROLL */}

        <div id="products" style={{ position: "absolute", top: "100%" }}></div>


        <ParallaxLayer offset={0.8} speed={0.1}>
          <section style={{ position: "relative", width: "100vw", height: "100%" }}>
            <div style={{ marginTop: "-70px", position: "relative", height: "18%" }}>
              <div style={{ width: "30px", marginTop: "-15px", textAlign: "center", position: "absolute", left: "20%", zIndex: 1 }}>
                <QuoteMobile leftQuoteX={"-30px"} leftQuoteY={"-20px"} rightQuoteX={"-25px"} rightQuoteY={"-45px"} fontSize={"3.5em"} mobile style={QuoteStyle.header}>
                  P
                </QuoteMobile>
              </div>
              <div style={{ width: "150px", textAlign: "center", position: "absolute", left: "50%" }}>
                <PageTitle fontSize={(width * 0.0035).toString() + "em"}>Prodotti</PageTitle>
              </div>
            </div>
            <div style={{ marginTop: "-5%" }}>
              <MobileProductCarousel />
            </div>
          </section>
        </ParallaxLayer>




        {/* ------------------------------MATERIE PRIME SECTION */}

        {/* ID FOR AUTOSCROLL */}
        <div id="materieprime" style={{ position: "absolute", top: "200%" }}></div>


        <ParallaxLayer offset={2} speed={-0.1}>
          <section style={{ position: "absolute", height: "100%", width: "100vw" }}>
            <Centralizer>
              <div style={{ marginTop: "-30%", width: "100%" }}>
                <div style={{ backgroundColor: "#E3A38B", width: "80vw", height: "40%", position: "absolute", right: 0 }}>
                  <Centralizer>
                    <div style={{ width: "60%", marginTop: "-20%" }}>
                      <Quote mobile style={QuoteStyle.italic} fontSize={"1.2em"} rightQuoteY={"15%"} >
                        Siamo custodi del nostro territorio. Per questo la nostra produzione si basa sull’attenta e accurata scelta di materie prime pregiate e di prima qualità.
                    </Quote>
                    </div>
                  </Centralizer>
                </div>
                <div style={{ width: "80vw", textAlign: "center", position: "absolute", left: "10px", marginTop: "-15%" }}>
                  <PageTitle fontSize={(width * 0.004).toString() + "em"}>Materie Prime</PageTitle>
                </div>
              </div>
            </Centralizer>
          </section>
        </ParallaxLayer>
      </Parallax >
      <BurgerMenu />

    </>
  )
}

export default IndexPageMobileRender;