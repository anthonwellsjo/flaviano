import React, { useContext, useRef } from 'react';
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
import ContactBarMobileSmall from '../../Components/ContactBarMobileSmall/ContactBarMobileSmall';
import flavianoImg from '../../../../images/flavianoLogoNavbar.png';
import { useViewport } from '../../../../hooks/useViewPort';
import SEO from '../../../SEO/SEO';
import { PageContext } from '../../../../contexts/pageContext';

const ChiSiamoMobileRenderSmallHeight = () => {
  const { width } = useViewport();
  const { sanityChiSiamoPage }: ChiSiamoPageQuery = useChiSiamoQuery();
  const [page, setPage]: any = useContext(PageContext);
  let parallax: any = useRef();
  return (
    <LayoutMobile>
      <Parallax pages={3.5} scrolling={true} config={{ mass: 1 }} ref={parallax}>
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
                <PageTitleDesktop fontSize="1.5em" letterSpacing={".4em"}>{page.english ? "About Us" : "Chi Siamo"}</PageTitleDesktop>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.2}>
          <Centralizer>
            <div style={{ width: "75%", marginTop: "0" }}>
              <QuoteMobile left fontSize={"1.3em"} rightQuoteX={"-10px"} rightQuoteY={"50px"}>{page.english ? sanityChiSiamoPage.quoteHeaderTextEng : sanityChiSiamoPage.quoteHeaderText}</QuoteMobile>
            </div>
          </Centralizer>
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={0.1}>
          <Centralizer>
            {width > 370 && !page.english &&
              < div style={{ fontFamily: "HomepageBaukastenBook", margin: "2.5%", textAlign: "justify", fontSize: "1em" }}>
                {sanityChiSiamoPage.pageText.split(".").map((p, index) => {
                  if (index == 0) return (
                    <p><span style={{ fontFamily: "HomepageBaukastenBold" }}>Flaviano </span>{p}.</p>
                  )
                  if (index == sanityChiSiamoPage.pageText.split(".").length - 1) return <p>{p}</p>
                  return (
                    <p>{p}.</p>
                  )
                })}
              </div>
            }
            {width <= 370 && !page.english &&
              < div style={{ fontFamily: "HomepageBaukastenBook", margin: "2.5%", textAlign: "justify", fontSize: ".9em" }}>
                {sanityChiSiamoPage.pageText.split(".").map((p, index) => {
                  if (index == 0) return (
                    <p><span style={{ fontFamily: "HomepageBaukastenBold" }}>Flaviano </span>{p}.</p>
                  )
                  if (index == sanityChiSiamoPage.pageText.split(".").length - 1) return <p>{p}</p>
                  return (
                    <p>{p}.</p>
                  )
                })}
              </div>
            }
            {width > 370 && page.english &&
              < div style={{ fontFamily: "HomepageBaukastenBook", margin: "2.5%", textAlign: "justify", fontSize: "1em" }}>
                {sanityChiSiamoPage.pageTextEng.split(".").map((p, index) => {
                  if (index == 0) return (
                    <p><span style={{ fontFamily: "HomepageBaukastenBold" }}>Flaviano </span>{p}.</p>
                  )
                  if (index == sanityChiSiamoPage.pageTextEng.split(".").length - 1) return <p>{p}</p>
                  return (
                    <p>{p}.</p>
                  )
                })}
              </div>
            }
            {width <= 370 && page.english &&
              < div style={{ fontFamily: "HomepageBaukastenBook", margin: "2.5%", textAlign: "justify", fontSize: ".9em" }}>
                {sanityChiSiamoPage.pageTextEng.split(".").map((p, index) => {
                  if (index == 0) return (
                    <p><span style={{ fontFamily: "HomepageBaukastenBold" }}>Flaviano </span>{p}.</p>
                  )
                  if (index == sanityChiSiamoPage.pageTextEng.split(".").length - 1) return <p>{p}</p>
                  return (
                    <p>{p}.</p>
                  )
                })}
              </div>
            }
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={2.65} speed={0.2}>
          <img style={{ position: "absolute", right: "20px", height: "30px" }} src={flavianoImg} alt="logo" />
        </ParallaxLayer>
        <ParallaxLayer offset={2.8} speed={0.5}>
          <Centralizer>
            <div style={{ maxWidth: "200%", width: "200%", position: "absolute", marginTop: "-75px", opacity: "1" }}>
              <Img fluid={sanityChiSiamoPage.footerImg.asset.fluid} alt="photo of hands working a dew" />
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={2.9} speed={0.1}>
          <Centralizer>
            <ContactBarMobileSmall />
          </Centralizer>
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile >
  )
}

export default ChiSiamoMobileRenderSmallHeight;