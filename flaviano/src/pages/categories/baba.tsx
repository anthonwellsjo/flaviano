import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { BabaPageQuery, QuoteStyle } from '../../../types';
import LayoutHeader from '../../components/Desktop/LayoutHeaderDesktop/LayoutHeaderDesktop';
import PageTitle from '../../components/Desktop/PageTitleDesktop/PageTitleDesktop';
import Quote from '../../components/Desktop/QuoteDesktop/QuoteDesktop';
import Centralizer from '../../components/StructureComponents/Centralizer/Centralizer';
import { useBabaPageQuery } from '../../hooks/queries/useBabaPageQuery';
import Img from 'gatsby-image';
import BabaProductsPreview from '../../components/Desktop/Pages/BabaPage/BabaProductsPreviewDesktop/BabaProductsPreviewDesktop';
import BackDrop from '../../components/Desktop/BackDropDesktop/BackDropDesktop';
import LayoutFrame from '../../components/Desktop/LayoutFrameDesktop/LayoutFrameDesktop';
import useScroll from '../../hooks/useScroll';
import ScrollButton from '../../components/Desktop/ScrollButton/ScrollButton';

const BabaPage: React.FC = () => {
  const { sanityBabaPage }: BabaPageQuery = useBabaPageQuery();
  let parallax = useRef();
  const [currentScroll] = useScroll(parallax);




  return (
    <Parallax pages={1} scrolling={false} ref={parallax} config={{ mass: 2 }}>
      <BackDrop />
      <LayoutFrame>
        <LayoutHeader />
        {/* ------------HEADER SECTION */}
        <div id="top" style={{ position: "absolute", top: "0" }}></div>

        <ParallaxLayer factor={0} speed={0.1} >
          <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", position: "relative" }}>
            <div style={{ maxWidth: "100%", width: "100%", position: "absolute" }}>
              <Img fluid={sanityBabaPage.headerImg.asset.fluid} alt="Baba image" />
              {/* <p className="legend">{e.node.title}</p> */}
            </div>
            <section style={{ position: "absolute", left: "0", right: "0", top: "0", height: "100vh" }}>
              <Centralizer>
                <div style={{ position: "absolute", width: "45%", top: "35vh", marginLeft: "25%" }}>
                  <Quote rightQuoteY="8vh" rightQuoteX="-3%">
                    <PageTitle letterSpacing=".2em" fontSize="4em">O babà é na cosa seria.</PageTitle>
                  </Quote>
                </div>
                <div style={{ position: "absolute", bottom: "30vh" }}>
                  <ScrollButton to="#products" currentPosition={currentScroll} deactivatePosition={9999} reactivePosition={0} />
                </div>
              </Centralizer>

            </section>
          </div>
        </ParallaxLayer>

        <div id="products" style={{ position: "absolute", top: "100vh" }}></div>


        <ParallaxLayer offset={0.99999} speed={0.1}>
          <div style={{ position: "relative", backgroundColor: "white", width: "100%", height: "100vh", zIndex: 0, marginTop: "10vh" }}>
            <Centralizer evenly>
              <div style={{ width: "30%" }}>
                <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify" }}>{sanityBabaPage.pageText}</p>
              </div>
              <div style={{ display: "flex", maxWidth: "300px", alignItems: "center", justifyContent: "center", }}>
                <Img fixed={sanityBabaPage.textImg.asset.fixed} alt="Baba image with text" />
              </div>
            </Centralizer>
          </div>
          <div style={{ position: "absolute", zIndex: 2, width: "100%", marginTop: "-100px" }}>
            <BabaProductsPreview />
          </div>
          <Centralizer>
            <div style={{ position: "absolute", top: "15vh", zIndex: 2 }}>
              <ScrollButton to="#top" up currentPosition={currentScroll} deactivatePosition={9999} reactivePosition={0} />
            </div>
          </Centralizer>
        </ParallaxLayer>
      </LayoutFrame>
    </Parallax >
  )
}

export default BabaPage;