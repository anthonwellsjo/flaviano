import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { ChiSiamoPageQuery } from '../../types';
import LayoutHeader from '../components/LayoutHeader/LayoutHeader';
import PageTitle from '../components/PageTitle/PageTitle';
import { useChiSiamoQuery } from '../hooks/queries/useChiSiamoQuery';
import Img from 'gatsby-image';
import Quote from '../components/Quote/Quote';
import Centralizer from '../components/StructureComponents/Centralizer/Centralizer';

const ChiSiamoPage: React.FC = () => {
  const { sanityChiSiamoPage }: ChiSiamoPageQuery = useChiSiamoQuery();
  let parallax;

  return (
    <Parallax pages={3} scrolling={true} ref={ref => parallax = ref}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={{ backgroundColor: "#E5E5E5", width: "100%", height: "200vh", zIndex: 100, position: "relative", }}>
          <div style={{ maxWidth: "100vw", width: "80vw", position: "absolute" }}>
            <Img fluid={sanityChiSiamoPage.headerImg.asset.fluid} alt="Baba image" />
            {/* <p className="legend">{e.node.title}</p> */}
          </div>
          <LayoutHeader />
          <div style={{ width: "20vw", position: "absolute", right: "18vw", top: "30vh" }}>
            <div style={{ height: "3px", width: "40px", backgroundColor: "black", marginBottom: "30px", marginLeft: "0px" }}></div>
            <PageTitle fontSize="3.5em" letterSpacing={".4em"}>Chi Siamo</PageTitle>
          </div>
          <Centralizer>
            <div style={{ width: "75vw", height: "100vh", marginTop: "40vh" }}>
              <Quote rightQuoteX={"-70px"}>{sanityChiSiamoPage.quoteHeaderText}</Quote>
            </div>
          </Centralizer>
        </div>
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
    </Parallax>
  )
}

export default ChiSiamoPage;