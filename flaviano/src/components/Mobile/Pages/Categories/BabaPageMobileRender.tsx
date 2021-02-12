import React, { useRef } from 'react';
import Img from 'gatsby-image';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';
import { useBabaPageQuery } from '../../../../hooks/queries/useBabaPageQuery';
import { BabaPageQuery } from '../../../../../types';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';

const BabaPageMobileRender: React.FC = () => {
  const { sanityBabaPage }: BabaPageQuery = useBabaPageQuery();
  let parallax = useRef();
  return (
    <LayoutMobile>
      <Parallax pages={2} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={1}>
          <LayoutHeaderMobile />
        </ParallaxLayer>
        <ParallaxLayer speed={0.1} >
          <div style={{ width: "100%", overflow: "hidden" }}>
            <div style={{ maxWidth: "900px", width: "700px", marginLeft: "-100px", position: "absolute" }}>
              <Img fluid={sanityBabaPage.headerImg.asset.fluid} alt="Baba image" />
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={-0.1}>
          <div style={{ position: "absolute", top: "40px", right: "-10px", width: "300px" }}>
            <QuoteMobile rightQuoteY={"20px"} rightQuoteX={"10px"}>
              <PageTitleDesktop right letterSpacing=".2em" fontSize="2em">O babà é na cosa seria.</PageTitleDesktop>
            </QuoteMobile>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.6} speed={0}>
          <div style={{ fontFamily: "HomepageBaukastenBook", margin: "2.5%", textAlign: "justify", fontSize: "1em" }}>
            {sanityBabaPage.pageText.split(".").map(p => {
              return (
                <p>{p}.</p>
              )
            })}
          </div>
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default BabaPageMobileRender;