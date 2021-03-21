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

const ContattiPageMobileRenderHorizontal: React.FC = () => {
  const { sanityGeneralSettings: ContactInfoQuery } = useContactInfoQuery();
  const { sanityContattiPage }: ContactPageQuery = useContactQuery()

  const [page, setPage]: any = useContext(PageContext);

  let parallax: any = useRef();

  return (
    <LayoutMobile>
      <Parallax pages={1.9} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.4}>
          <LayoutHeaderMobile backGroundFullPage/>
        </ParallaxLayer>
        <ParallaxLayer offset={0.1} speed={0.1}>
          <Centralizer>
            <div style={{ width: "75%", marginTop: "0" }}>
              <QuoteMobile left fontSize={"1.3em"} rightQuoteX={"-10px"} rightQuoteY={"10px"}>{page.english ? sanityContattiPage.quoteHeaderTextEng : sanityContattiPage.quoteHeaderText}</QuoteMobile>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <ContactBarMobileFull />
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default ContattiPageMobileRenderHorizontal;