import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../../../types";
import LayoutHeaderMobile from "../../Components/LayoutHeaderMobile/LayoutHeaderMobile"
import PageTitle from "../../../Desktop/PageTitleDesktop/PageTitleDesktop";
import { Link } from 'gatsby';
import Quote from "../../../Desktop/QuoteDesktop/QuoteDesktop";
import Centralizer from "../../../StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import BackDrop from "../../../Desktop/BackDropDesktop/BackDropDesktop";
import { useHomeQuery } from "../../../../hooks/queries/useHomeQuery";
import AnimLogoMobile from '../../../Logos/AnimLogoMobile/AnimLogoMobile';
import { useViewport } from '../../../../hooks/useViewPort';
import MobileProducts from '../../Components/MobileProducts/MobileProducts';
import ScrollButton from '../../Components/ScrollButtonMobile/ScrollButtonMobile';
import useScroll from '../../../../hooks/useScroll';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import AnimLogoPiccoloMobile from '../../../Logos/AnimLogoPiccoloMobile/AnimLogoPiccoloMobile';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import { PageContext } from '../../../../contexts/pageContext';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';
import ContactBarMobileSmall from '../../Components/ContactBarMobileSmall/ContactBarMobileSmall';
import SEO from '../../../SEO/SEO';

const IndexPageMobileRender: React.FC = () => {
  const { width } = useViewport();
  const [page, setPage]: any = useContext(PageContext);
  const { sanityHomePage }: HomePageQuery = useHomeQuery();
  let parallax: any = useRef();
  const currentScroll = useScroll(parallax);

  useEffect(() => {
    if (currentScroll < 10) {
      setPage((prev: any) => ({ ...prev, hideMobileNavbarLogo: true }))
    } else {
      setPage((prev: any) => ({ ...prev, hideMobileNavbarLogo: false }))
    }
    return (() => {
      setPage((prev: any) => ({ ...prev, hideMobileNavbarLogo: false }))
    })
  }, [currentScroll]);


  return (
    <LayoutMobile>
      <Parallax pages={2.8} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.4}>
          <LayoutHeaderMobile home />
        </ParallaxLayer>
        {/* ------------------------------TOP QUOTE */}
        <div id="top" style={{ position: "absolute", top: "0" }}></div>


        <ParallaxLayer offset={0.09} speed={-0.1}>
          <div style={{ position: "relative", top: "0", width: "100vw", height: "100%", }}>
            <Centralizer>
              <div style={{ width: "85%", height: "50%", marginTop: "30%" }}>
                <QuoteMobile style={QuoteStyle.italic} fontSize={"1.3em"} rightQuoteX={"-5px"} rightQuoteY={"50px"} leftQuoteX={"20px"} >
                  {page.english ? sanityHomePage.mobileHeaderTextEng : sanityHomePage.mobileHeaderText}
                </QuoteMobile>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>





        {/* ------------------------------PRODUCTS SECTION */}
        {/* ID FOR AUTOSCROLL */}

        <div style={{ position: "absolute", top: "100%" }}></div>

        <ParallaxLayer offset={0.9} speed={-0.005}>
          <section style={{ position: "relative", width: "100vw" }}>
            <div style={{ marginTop: "-30px", position: "relative", height: "18%" }}>
              <div style={{ width: "30px", marginTop: "-15px", textAlign: "center", position: "absolute", left: "20%", zIndex: 1 }}>
                <QuoteMobile leftQuoteX={"-30px"} leftQuoteY={"-20px"} rightQuoteX={"-25px"} rightQuoteY={"-45px"} fontSize={"3.5em"} style={QuoteStyle.header}>
                  P
                </QuoteMobile>
              </div>
              <div style={{ textAlign: "center", position: "absolute", right: "5%" }}>
                <PageTitle right fontSize={"1.6em"}>{page.english ? "Products" : "Prodotti"}</PageTitle>
              </div>
            </div>
          </section>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={-0.005}>
          <div style={{ position: "absolute" }}>
            <MobileProducts />
          </div>
        </ParallaxLayer>






        {/* ------------------------------MATERIE PRIME SECTION */}

        {/* ID FOR AUTOSCROLL */}
        <div id="materieprime" style={{ position: "absolute", top: "200%" }}></div>


        <ParallaxLayer offset={2.05} speed={0.2}>
          <Link to={"/materieprime"}>
            <section style={{ position: "absolute", width: "100vw" }}>
              <Centralizer>
                <div style={{ marginTop: "-30%", width: "100%" }}>
                  <div style={{ textAlign: "center", position: "absolute", right: "5%", marginTop: "-15%", width: "300px" }}>
                    <PageTitle right fontSize={"1.8em"}>{page.english ? "Raw Materials" : "Materie Prime"}</PageTitle>
                  </div>
                  <div style={{ backgroundColor: "#E3A38B", width: "90%", height: "220px", position: "absolute", right: "2.5%" }}>
                    <Centralizer>
                      <div style={{ width: "90%", marginTop: "-100px" }}>
                        <QuoteMobile left style={QuoteStyle.italic} fontSize={"1.3em"} leftQuoteX={"20px"} rightQuoteY={"45px"} rightQuoteX={"-20px"}>
                          {page.english ? sanityHomePage.materiePrimeBannerQuoteTextEng : sanityHomePage.materiePrimeBannerQuoteText}
                        </QuoteMobile>
                      </div>
                    </Centralizer>
                  </div>
                </div>
              </Centralizer>
            </section>
          </Link>
        </ParallaxLayer>
        <ParallaxLayer offset={2.6}>
          <ContactBarMobileSmall />
        </ParallaxLayer>
      </Parallax >
    </LayoutMobile>
  )
}

export default IndexPageMobileRender;