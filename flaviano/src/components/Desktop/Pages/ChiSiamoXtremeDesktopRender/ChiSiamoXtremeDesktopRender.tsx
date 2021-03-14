import React, { useContext, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ChiSiamoPageQuery } from '../../../../../types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageTitle from '../../PageTitleDesktop/PageTitleDesktop';
import { useChiSiamoQuery } from '../../../../hooks/queries/useChiSiamoQuery';
import Img from 'gatsby-image';
import Quote from '../../QuoteDesktop/QuoteDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import flavianoImg from '../../../../images/flavianoLogo.png';
import BackDrop from '../../BackDropDesktop/BackDropDesktop';
import LayoutFrame from '../../LayoutFrameDesktop/LayoutFrameDesktop';
import ScrollButton from '../../ScrollButton/ScrollButton';
import useScroll from '../../../../hooks/useScroll';
import SEO from '../../../SEO/SEO';
import { PageContext } from '../../../../contexts/pageContext';

const ChiSiamoXtremeDesktopRender = () => {
  const [page, setPage]: any = useContext(PageContext);
  const { sanityChiSiamoPage }: ChiSiamoPageQuery = useChiSiamoQuery();
  let parallax: any = useRef();
  const currentScroll = useScroll(parallax);

  const onScrollEventHandler = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      scrollTo("#top")
    }
    else if (event.deltaY > 0) {
      scrollTo("#pageTwo")
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", e => onScrollEventHandler(e))

    return (() => {
      window.removeEventListener("wheel", onScrollEventHandler);
    })
  }, [])



  return (
    <Parallax pages={2.3} scrolling={false} ref={ref => parallax = ref}>
      <LayoutFrame>
        <div id="top" style={{ position: "absolute" }}></div>
        <ParallaxLayer offset={0} speed={0.5}>
          <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "200vh", position: "relative", }}>
            <div style={{ maxWidth: "100%", width: "80%", position: "absolute" }}>
              <Img fluid={sanityChiSiamoPage.headerImg.asset.fluid} alt="Baba image" />
              {/* <p className="legend">{e.node.title}</p> */}
            </div>
            <div style={{ width: "20%", position: "absolute", right: "20%", top: "30vh" }}>
              <div style={{ height: "3px", width: "40px", backgroundColor: "black", marginBottom: "15px", marginLeft: "0px" }}></div>
              <PageTitle fontSize="3.5em" letterSpacing={".4em"}>{page.english ? "About Us" : "Chi Siamo"}</PageTitle>
            </div>
          </div>

        </ParallaxLayer>


        <div id="pageTwo" style={{ position: "absolute", top: "100vh" }}></div>

        <ParallaxLayer offset={0.5} speed={0.2}>
          <Centralizer>
            <div style={{ width: "75%", height: "100vh", marginTop: "40vh" }}>
              <Quote fontSize={"1.8em"} rightQuoteX={"-70px"}>{page.english ? sanityChiSiamoPage.quoteHeaderTextEng : sanityChiSiamoPage.quoteHeaderText}</Quote>
            </div>
          </Centralizer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.6}>
          <div style={{ position: "absolute", top: "30vh", width: "100%", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <ScrollButton to="#pageTwo" currentPosition={currentScroll} reactivePosition={0} deactivatePosition={50}></ScrollButton>
          </div>
        </ParallaxLayer>


        <ParallaxLayer offset={0.9999} speed={0.1}>
          <div style={{ position: "absolute", top: "8vh", width: "100%", zIndex: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Centralizer>
              <ScrollButton up to="#top" currentPosition={currentScroll} reactivePosition={0} deactivatePosition={50}></ScrollButton>
            </Centralizer>
          </div>
          <Centralizer>
            <div style={{ width: "80%", marginTop: "10vh" }}>
              <p id="chisiamoText" style={{ fontFamily: "HomepageBaukastenBook", lineHeight: "1.8em", wordSpacing: ".5em", fontSize: "1em", textAlign: "justify" }}>
                <strong>Flaviano </strong>{page.english ? sanityChiSiamoPage.pageTextEng : sanityChiSiamoPage.pageText}
              </p>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={1.7} speed={0.8}>
          <img style={{ position: "absolute", right: "10%", top: "10vh" }} src={flavianoImg} alt="logo" />
        </ParallaxLayer>



        <ParallaxLayer offset={2} speed={3}>
          <div style={{ maxWidth: "100%", width: "100%", position: "absolute", top: "-330vh", opacity: "0.3" }}>
            {/* <Img fluid={sanityChiSiamoPage.footerImg.asset.fluid} alt="photo of hands working a dew" /> */}
          </div>
        </ParallaxLayer>



      </LayoutFrame>
    </Parallax>
  )
}

export default ChiSiamoXtremeDesktopRender;