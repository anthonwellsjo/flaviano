import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ChiSiamoPageQuery } from '../../types';
import LayoutHeader from '../components/LayoutHeader/LayoutHeader';
import PageTitle from '../components/PageTitle/PageTitle';
import { useChiSiamoQuery } from '../hooks/queries/useChiSiamoQuery';
import Img from 'gatsby-image';
import Quote from '../components/Quote/Quote';
import Centralizer from '../components/StructureComponents/Centralizer/Centralizer';
import flavianoImg from '../images/flavianoLogo.png';
import BackDrop from '../components/BackDrop/BackDrop';
import LayoutFrame from '../components/LayoutFrame/LayoutFrame';

const ChiSiamoPage = () => {
  const { sanityChiSiamoPage }: ChiSiamoPageQuery = useChiSiamoQuery();
  let parallax;

  return (
    <Parallax pages={2.3} scrolling={true} ref={ref => parallax = ref}>
      <LayoutFrame>
        <BackDrop />
        <LayoutHeader />
        <ParallaxLayer offset={0} speed={0.5}>
          <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "200vh", zIndex: 100, position: "relative", }}>
            <div style={{ maxWidth: "100vw", width: "80vw", position: "absolute" }}>
              <Img fluid={sanityChiSiamoPage.headerImg.asset.fluid} alt="Baba image" />
              {/* <p className="legend">{e.node.title}</p> */}
            </div>
            <div style={{ width: "20vw", position: "absolute", right: "20vw", top: "30vh" }}>
              <div style={{ height: "3px", width: "40px", backgroundColor: "black", marginBottom: "30px", marginLeft: "0px" }}></div>
              <PageTitle fontSize="3.5em" letterSpacing={".4em"}>Chi Siamo</PageTitle>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.2}>
          <Centralizer>
            <div style={{ width: "75vw", height: "100vh", marginTop: "40vh" }}>
              <Quote rightQuoteX={"-70px"}>{sanityChiSiamoPage.quoteHeaderText}</Quote>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={1}>
          <Centralizer>
            <div style={{ width: "60vw" }}>
              <p id="chisiamoText" style={{ fontFamily: "HomepageBaukastenBook", lineHeight: "2em", wordSpacing: ".5em", fontSize: "1em" }}>
                <strong>Flaviano </strong>{sanityChiSiamoPage.pageText}
              </p>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={1.9} speed={1.5}>
          <img style={{ position: "absolute", right: "20vw", top: "15vh" }} src={flavianoImg} alt="logo" />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={3}>
          <div style={{ maxWidth: "100vw", width: "100vw", position: "absolute", top: "-220vh" }}>
            <Img fluid={sanityChiSiamoPage.footerImg.asset.fluid} alt="photo of hands working a dew" />
          </div>
        </ParallaxLayer>
      </LayoutFrame>
    </Parallax>
  )
}

export default ChiSiamoPage;