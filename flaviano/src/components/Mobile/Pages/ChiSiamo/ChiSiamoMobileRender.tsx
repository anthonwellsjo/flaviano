import React, { useRef } from 'react';
import Img from 'gatsby-image';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ChiSiamoPageQuery } from '../../../../../types';
import { useChiSiamoQuery } from '../../../../hooks/queries/useChiSiamoQuery';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';

const ChiSiamoMobileRender: React.FC = () => {
  const { sanityChiSiamoPage }: ChiSiamoPageQuery = useChiSiamoQuery();
  let parallax = useRef();
  return (
    <LayoutMobile>
      <Parallax pages={2.8} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0.} speed={0.4}>
          <LayoutHeaderMobile />
        </ParallaxLayer>
        <ParallaxLayer offset={0.} speed={0.5}>
          <div style={{ position: "relative", }}>
            <div style={{ maxWidth: "100%", width: "90%", position: "absolute" }}>
              <Img fluid={sanityChiSiamoPage.headerImg.asset.fluid} alt="Baba image" />
              {/* <p className="legend">{e.node.title}</p> */}
            </div>
            <div style={{ width: "55%", position: "absolute", right: 0, top: "100px" }}>
              <div style={{ height: "1px", width: "19px", backgroundColor: "black", marginBottom: "4px" }}></div>
              <div style={{ width: "20px" }}>
                <PageTitleDesktop fontSize="1.5em" letterSpacing={".4em"}>Chi Siamo</PageTitleDesktop>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <Centralizer>
            <div style={{ width: "75%", marginTop: "0" }}>
              <QuoteMobile left fontSize={"1.3em"} rightQuoteX={"-10px"} rightQuoteY={"50px"}>{sanityChiSiamoPage.quoteHeaderText}</QuoteMobile>
            </div>
          </Centralizer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.9999} speed={0.1}>

          <Centralizer>
            <div style={{ width: "95%", marginTop: "300px" }}>
              {sanityChiSiamoPage.pageText.split(".").map((p, index) => {
                if (index == 0) return (
                  <>
                    <p style={{ fontFamily: "HomepageBaukastenBook", lineHeight: "1.2em", wordSpacing: ".5em", fontSize: "1em", textAlign: "justify", marginTop: "-2em" }}><strong>Flaviano </strong> {p}.</p>
                    <br></br>
                  </>
                )
                return (
                  <>
                    <p style={{ fontFamily: "HomepageBaukastenBook", lineHeight: "1.2em", wordSpacing: ".5em", fontSize: "1em", textAlign: "justify", marginTop: "-2em" }}>{p}.</p>
                    <br></br>
                  </>
                )
              })}
            </div>
          </Centralizer>
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default ChiSiamoMobileRender;