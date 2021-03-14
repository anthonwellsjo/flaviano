import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import { MateriePrimeQuery, QuoteStyle } from '../../../../../types';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import MateriePrimi from '../../Components/MateriePrimi/MateriePrimi';
import { useMateriePrimeQuery } from '../../../../hooks/queries/useMateriePrimeQuery';

const MateriePrimeMobileRender: React.FC = () => {
  const { sanityMateriePrimePage }: MateriePrimeQuery = useMateriePrimeQuery();
  let parallax: any = useRef();
  return (
    <LayoutMobile>
      <Parallax pages={4.5} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0.} speed={0}>
          <LayoutHeaderMobile backGroundFullPage />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0}>
          <div style={{ width: "30px", marginTop: "-15px", textAlign: "center", position: "absolute", left: "20%", zIndex: 1 }}>
            <QuoteMobile leftQuoteX={"-30px"} leftQuoteY={"-25px"} rightQuoteX={"-5px"} rightQuoteY={"-35px"} fontSize={"4em"} style={QuoteStyle.header}>
              M
            </QuoteMobile>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.15} speed={0}>
          <div style={{ width: "60%", position: "absolute", right: 0, top: "100px" }}>
            <div style={{ height: "1px", width: "15px", marginLeft: "1px", backgroundColor: "black", marginBottom: "4px" }}></div>
            <div style={{ width: "20px" }}>
              <PageTitleDesktop fontSize="1.5em" letterSpacing={".4em"}>Materie Prime</PageTitleDesktop>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0}>
          <Centralizer>
            <div style={{ width: "75%", marginTop: "0" }}>
              <QuoteMobile left fontSize={"1.3em"} rightQuoteX={"-10px"} rightQuoteY={"70px"}>{sanityMateriePrimePage.quoteHeaderText}</QuoteMobile>
            </div>
          </Centralizer>
        </ParallaxLayer>

        <ParallaxLayer offset={0.97} speed={0.5}>
          <MateriePrimi materiePrimi={sanityMateriePrimePage} />
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default MateriePrimeMobileRender;