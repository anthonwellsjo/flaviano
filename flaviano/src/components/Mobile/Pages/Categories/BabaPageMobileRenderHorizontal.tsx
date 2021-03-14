import React, { useRef } from 'react';
import Img from 'gatsby-image';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';
import { useBabaPageQuery } from '../../../../hooks/queries/useBabaPageQuery';
import { BabaPageQuery } from '../../../../../types';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import BabaProductsBanners from '../../Components/BabaProductsBanners/BabaProductsBanners';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import ContactBarMobileSmall from '../../Components/ContactBarMobileSmall/ContactBarMobileSmall';

const BabaPageMobileRenderHorizontal: React.FC = () => {
  const { sanityBabaPage }: BabaPageQuery = useBabaPageQuery();
  let parallax: any = useRef();
  return (
    <LayoutMobile>
      <Parallax pages={3.8} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.25}>
          <LayoutHeaderMobile backGroundFullPage />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <div style={{ maxWidth: "900px", width: "700px", marginLeft: "-100px", marginTop: "-60px", position: "absolute" }}>
              <Img fluid={sanityBabaPage.headerImg.asset.fluid} alt="Baba image" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.1}>
          <Centralizer>
            <div style={{ position: "absolute", top: "40px", width: "300px" }}>
              <QuoteMobile rightQuoteY={"20px"} rightQuoteX={"10px"}>
                <PageTitleDesktop right letterSpacing=".2em" fontSize="2em">O babà é na cosa seria.</PageTitleDesktop>
              </QuoteMobile>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={0}>
          <div style={{ fontFamily: "HomepageBaukastenBook", margin: "2.5%", textAlign: "justify", fontSize: ".9em" }}>
            {sanityBabaPage.pageTextMobile.split(".").map((p, index) => {
              if (index == 0) return (
                <p><span style={{ fontFamily: "HomepageBaukastenBold" }}>"O Babà è na cosa seria" </span>{p}.</p>
              )
              return (
                <p>{p}.</p>
              )
            })}
            <div style={{ height: "1px", width: "40px", backgroundColor: "black", position: "absolute", right: "2.5%", marginTop: "-20px" }}></div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={0.1}>
          <div style={{ position: "relative", width: "100vw", backgroundColor: "rgba(0, 0, 0, 0.05)", }}>
            <BabaProductsBanners />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={0.4}>
          <ContactBarMobileSmall />
        </ParallaxLayer>
      </Parallax >
    </LayoutMobile >
  )
}

export default BabaPageMobileRenderHorizontal;