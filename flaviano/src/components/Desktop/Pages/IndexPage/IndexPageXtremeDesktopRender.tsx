import React, { useContext, useRef, useState } from 'react';
import { HomePageQuery, QuoteStyle } from "../../../../../types";
import CategoryCarousel from "../../CategoryCarousel/CategoryCarousel";
import LayoutHeader from "../../LayoutHeaderDesktop/LayoutHeaderDesktop"
import PageTitle from "../../PageTitleDesktop/PageTitleDesktop";
import ProductPreviewsDesktop from "../ProductPage/ProductPreviewsDesktop/ProductPreviewsDesktop";
import Quote from "../../QuoteDesktop/QuoteDesktop";
import Centralizer from "../../../StructureComponents/Centralizer/Centralizer";
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Link } from "gatsby";
import { useSpring, animated } from "react-spring";
import BackDrop from "../../BackDropDesktop/BackDropDesktop";
import AnimLogo from "../../../Logos/AnimLogo/AnimLogo";
import { useHomeQuery } from "../../../../hooks/queries/useHomeQuery";
import LayoutFrameDesktop from "../../LayoutFrameDesktop/LayoutFrameDesktop";
import Img from 'gatsby-image';
import ContactBar from '../../ContactBar/ContactBar';
import SEO from '../../../SEO/SEO';
import { PageContext } from '../../../../contexts/pageContext';

const IndexPageXtremeDesktopRender: React.FC = () => {
  const [materiePrimeHover, setMateriePrimeHover] = useState(false);
  const [page, setPage]: any = useContext(PageContext);
  let parallax: any = useRef();


  const Top = React.useRef<HTMLInputElement>(null);

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
    from: { width: "20%" },
    to: { width: "8%" },
    config: {
      mass: 1,
      tension: 300,
      friction: 100
    }
  });



  return (
    <Parallax pages={5.9} scrolling={true} ref={parallax}>
      <LayoutFrameDesktop>
        <AnimLogo />
        <section style={{ position: "relative", top: "30vh", width: "50%", left: "40%", height: "100vh" }}>
          <ParallaxLayer offset={0} speed={0.05}>
            <Quote style={QuoteStyle.italic} fontSize={"Quote-M"}>
              {page.english ? sanityHomePage.quoteHeaderTextEng : sanityHomePage.quoteHeaderText}
            </Quote>
          </ParallaxLayer>
        </section>

        <section style={{ position: "relative", left: "0", right: "0", top: "0", height: "60%", zIndex: 1 }}>
          <ParallaxLayer offset={0} speed={-0.05}>
            <div style={{ marginTop: "-50vh" }}>
              <CategoryCarousel />
            </div>
          </ParallaxLayer>
        </section>


        {/* ------------------------------BEIGE SECTION */}
        <ParallaxLayer offset={1} speed={1}>
          <div style={{ height: "350vh", width: "100%", zIndex: -1, backgroundColor: "rgba(178, 147, 121, 0.2)", position: "absolute" }}></div>
        </ParallaxLayer>
        <section style={{ position: "relative", height: "100vh" }}>
          <div style={{ height: "40vh" }}>
            <ParallaxLayer offset={0} speed={-0.25}>
              <Centralizer column>
                <div style={{ position: "absolute", width: "70%", marginTop: "-100vh" }}>
                  <Quote style={QuoteStyle.italic} fontSize={"Quote-M"}>
                    {page.english ? sanityHomePage.quoteBelowCarouselTextEng : sanityHomePage.quoteBelowCarouselText}
                  </Quote>
                </div>
              </Centralizer>
            </ParallaxLayer>

          </div>


          <div style={{ width: "120px", height: "150px", textAlign: "center", position: "absolute", left: "10%", bottom: "60px" }}>
            <Quote style={QuoteStyle.header}>
              P
          </Quote>
          </div>
          <div style={{ width: "150px", height: "150px", textAlign: "center", position: "absolute", right: "35%", bottom: "5vh" }}>
            <PageTitle>{page.english ? "Products" : "Prodotti"}</PageTitle>
          </div>

        </section>



        {/* ------------------------------PRODUCTS SECTION */}

        <section style={{ position: "relative", height: "200vh", backgroundColor: "white" }}>
          <ParallaxLayer speed={-0.05}>
            <ProductPreviewsDesktop parallax={false} />
          </ParallaxLayer>

        </section>
        {/* ------------------------------MATERIE PRIME SECTION */}


        <section style={{ position: "relative", height: "100vh", zIndex: 2 }}>
          <ParallaxLayer offset={0.79} speed={0.1}>
            <Link to="/materieprime/">
              <animated.div style={{ ...materiePrimeBcgStyles, cursor: "pointer", position: "absolute", width: "65%", height: "450px", backgroundColor: "#E3A38B", right: "0" }}>
                <Centralizer>
                  <animated.div style={{ cursor: "pointer", position: "absolute", width: "80%", marginTop: "-80px" }}>
                    <Quote style={QuoteStyle.italic} fontSize={"Quote-M"}>{page.english ? sanityHomePage.materiePrimeBannerQuoteTextEng : sanityHomePage.materiePrimeBannerQuoteText}</Quote>
                  </animated.div>
                </Centralizer>
              </animated.div>
            </Link>
          </ParallaxLayer>
          <Link to="/materieprime/">
            <ParallaxLayer offset={0.7} speed={0.1}>
              <animated.div onMouseEnter={() => setMateriePrimeHover(true)} onMouseLeave={() => setMateriePrimeHover(false)} style={{ ...materiePrimeTitleStyles, position: "absolute", marginLeft: "10%" }}>
                <PageTitle>{page.english ? "Materials" : "Materie Prime"}</PageTitle>
                <Centralizer>
                  <animated.div style={{ ...materiePrimeLineStyles, cursor: "pointer", height: "2px", marginTop: "2.5vh", backgroundColor: "black" }}></animated.div>
                </Centralizer>
              </animated.div>
            </ParallaxLayer>
          </Link>
        </section>

        {/* ------------------------------CONTACT SECTION */}
        <section style={{ position: "relative", height: "80vh", zIndex: 1 }}>

          <ParallaxLayer offset={1.32} speed={0.35}>
            <div style={{ position: "absolute", zIndex: 5, backgroundColor: "#F0E9E4", width: "100%", height: "250px", top: "150px" }}>
              <div style={{ position: "absolute", left: "10%", zIndex: 5, bottom: "20px" }}>
                <div style={{ height: "2px", width: "2em", marginLeft: "3px", backgroundColor: "black" }}></div>
                <PageTitle>{page.english ? "Contact" : "Contatti"}</PageTitle>
                <div style={{ height: "2px", width: "2em", marginLeft: "3px", marginTop: "4px", backgroundColor: "black" }}></div>
              </div>
            </div>
            <ContactBar fixed={sanityHomePage.contactImg.asset.fixed} />



          </ParallaxLayer>

        </section>
      </LayoutFrameDesktop>
    </Parallax >
  )
}

export default IndexPageXtremeDesktopRender;