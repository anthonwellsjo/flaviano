import React, { useContext, useEffect, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { BabaPageQuery, QuoteStyle } from '../../../../../types';
import scrollTo from 'gatsby-plugin-smoothscroll';
import PageTitle from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import Quote from '../../../Desktop/QuoteDesktop/QuoteDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import { useBabaPageQuery } from '../../../../hooks/queries/useBabaPageQuery';
import Img from 'gatsby-image';
import BabaProductsPreview from '../../../Desktop/Pages/BabaPage/BabaProductsPreviewDesktop/BabaProductsPreviewDesktop';
import BackDrop from '../../../Desktop/BackDropDesktop/BackDropDesktop';
import LayoutFrame from '../../../Desktop/LayoutFrameDesktop/LayoutFrameDesktop';
import useScroll from '../../../../hooks/useScroll';
import ScrollButton from '../../../Desktop/ScrollButton/ScrollButton';
import { useViewport } from '../../../../hooks/useViewPort';
import { PageContext } from '../../../../contexts/pageContext';

const BabaPageXtremeDesktopRender: React.FC = () => {
  const [page, setPage]: any = useContext(PageContext);
  const { sanityBabaPage }: BabaPageQuery = useBabaPageQuery();
  const { width, height } = useViewport();
  console.log("width/height", width / height);
  const screenRatio = width / height;
  let parallax: any = useRef();
  const currentScroll = useScroll(parallax);

  const onScrollEventHandler = (event: WheelEvent) => {
    if (event.deltaY < 0) {
      scrollTo("#top")
    }
    else if (event.deltaY > 0) {
      scrollTo("#products")
    }
  }

  useEffect(() => {
    window.addEventListener("wheel", e => onScrollEventHandler(e))

    return (() => {
      window.removeEventListener("wheel", onScrollEventHandler);
    })
  }, [])

  useEffect(() => {
    setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }));
  }, [])


  return (
    <Parallax pages={1} scrolling={false} ref={parallax} config={{ mass: 2 }}>
      <LayoutFrame>
        {/* ------------HEADER SECTION */}
        <div id="top" style={{ position: "absolute", top: "0" }}></div>

        <ParallaxLayer factor={0} speed={0.1} >
          <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", position: "relative" }}>
            <Centralizer>
              <div style={{ width: "100%", position: "absolute" }}>
                <Img fluid={sanityBabaPage.headerImg.asset.fluid} alt="Baba image" />
                {/* <p className="legend">{e.node.title}</p> */}
              </div>
            </Centralizer>

            <section style={{ position: "absolute", left: "0", right: "0", top: "0", height: "100vh" }}>
              <Centralizer>
                <div style={{ position: "absolute", width: "45%", top: "35vh", marginLeft: "25%", }}>
                  <Quote rightQuoteY={`${height / 15}px`} rightQuoteX={`-${height / 10}px`}>
                    <PageTitle letterSpacing={".2em"} fontSize={`${(width / 500) + 0.7}em`}>O babà é na cosa seria</PageTitle>
                  </Quote>
                </div>
                {page.english &&
                  <div>
                    <div style={{ position: "absolute", top: "48vh", right: "25%" }}>
                      <p style={{ fontFamily: "IbarraRealNovaItalic", fontStyle: "italic", fontWeight: "normal", fontSize: "1.3em" }}>-Babà is serious business.</p>
                    </div>
                  </div>}
                <div style={{ position: "absolute", bottom: "-10px" }}>
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
              <div style={{ width: "50%" }}>
                <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1.3em", margin: "-25px 10% 10% 10%" }}>{page.english ? sanityBabaPage.pageTextEng : sanityBabaPage.pageText}</p>
              </div>
              <div style={{ width: "50%" }}>
                <Centralizer>
                  <div style={{ width: "400px", alignItems: "center", justifyContent: "center", marginTop: "-50px" }}>
                    <Img fluid={sanityBabaPage.textImg.asset.fluid} alt="Baba image with text" />
                  </div>
                </Centralizer>
              </div>
            </Centralizer>
          </div>
          <div style={{ position: "absolute", zIndex: 2, width: "100%", marginTop: "-100px" }}>
            <BabaProductsPreview bigDesktop/>
          </div>
          <Centralizer>
            <div style={{ position: "absolute", top: "10vh", zIndex: 2 }}>
              <ScrollButton to="#top" up currentPosition={currentScroll} deactivatePosition={9999} reactivePosition={0} />
            </div>
          </Centralizer>
        </ParallaxLayer>
      </LayoutFrame>
    </Parallax >
  )
}

export default BabaPageXtremeDesktopRender;