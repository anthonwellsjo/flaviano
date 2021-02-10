import React, { useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { QuoteStyle } from '../../../../../types';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';

const ContattiPageMobileRender: React.FC = () => {
  let parallax = useRef();

  return (
    <>
      <Parallax pages={2.8} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.4}>
          <LayoutHeaderMobile />
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.2}>
        <div style={{ width: "30px", marginTop: "-15px", textAlign: "center", position: "absolute", left: "20%", zIndex: 1 }}>
                <QuoteMobile leftQuoteX={"-30px"} leftQuoteY={"-20px"} rightQuoteX={"-15px"} rightQuoteY={"-45px"} fontSize={"4em"} style={QuoteStyle.header}>
                  C
                </QuoteMobile>
              </div>
        </ParallaxLayer>
        <BurgerMenu />
      </Parallax>
    </>
  )
}

export default ContattiPageMobileRender;