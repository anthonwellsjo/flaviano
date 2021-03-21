import React, { useContext, useRef } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ContactPageQuery, QuoteStyle } from '../../../../../types';
import { useContactInfoQuery } from '../../../../hooks/queries/useContactInfoQuery';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import BurgerMenu from '../../Components/BurgerMenu/BurgerMenu';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import ContactBarMobileSmall from '../../Components/ContactBarMobileSmall/ContactBarMobileSmall';
import ContactBarMobileFull from '../../Components/ContactBarMobileFull/ContactBarMobileFull';
import SEO from '../../../SEO/SEO';
import { PageContext } from '../../../../contexts/pageContext';
import { useContactQuery } from '../../../../hooks/queries/useContactQuery';

const ContattiPageMobileRenderSmallHeight: React.FC = () => {
  const { sanityGeneralSettings: ContactInfoQuery } = useContactInfoQuery();
  const [page, setPage]: any = useContext(PageContext);
  let parallax: any = useRef();
  const { sanityContattiPage }: ContactPageQuery = useContactQuery()


  return (
    <LayoutMobile>
      <Parallax pages={1.5} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.4}>
          <LayoutHeaderMobile backGroundFullPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.25} speed={0.15}>
          <div style={{ width: "30px", marginTop: "-15px", textAlign: "center", position: "absolute", left: "20%", zIndex: 1 }}>
            <QuoteMobile leftQuoteX={"-30px"} leftQuoteY={"-25px"} rightQuoteX={"-5px"} rightQuoteY={"-35px"} fontSize={"4em"} style={QuoteStyle.header}>
              C
                </QuoteMobile>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.2} speed={0.2}>
          <div style={{ width: "60%", position: "absolute", right: 0, top: "100px" }}>
            <div style={{ height: "1px", width: "15px", marginLeft: "1px", backgroundColor: "black", marginBottom: "4px" }}></div>
            <div style={{ width: "20px" }}>
              <PageTitleDesktop fontSize="1.3em" letterSpacing={".4em"}>{page.english ? "Contact" : "Contatti"}</PageTitleDesktop>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.1}>
          <Centralizer>
            <div style={{ width: "75%", marginTop: "0" }}>
              <QuoteMobile left fontSize={"1.3em"} rightQuoteX={"-10px"} rightQuoteY={"50px"}>{page.english ? sanityContattiPage.quoteHeaderTextEng : sanityContattiPage.quoteHeaderText}</QuoteMobile>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={1.2}>
          <ContactBarMobileFull />
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default ContattiPageMobileRenderSmallHeight;