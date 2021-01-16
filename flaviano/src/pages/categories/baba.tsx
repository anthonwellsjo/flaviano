import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { BabaPageQuery, QuoteStyle } from '../../../types';
import LayoutHeader from '../../components/LayoutHeader/LayoutHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Quote from '../../components/Quote/Quote';
import Centralizer from '../../components/StructureComponents/Centralizer/Centralizer';
import { useBabaPageQuery } from '../../hooks/queries/useBabaPageQuery';
import Img from 'gatsby-image';

const BabaPage: React.FC = () => {
  const { sanityBabaPage }: BabaPageQuery = useBabaPageQuery();


  let parallax;

  return (
    <Parallax pages={2} scrolling={true} ref={ref => parallax = ref}>
      {/* ------------HEADER SECTION */}

      <ParallaxLayer factor={0} speed={-1}>
        <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", zIndex: -100, position: "relative" }}>
          <div style={{ height: "100vh", maxHeight: "500px", width: "100vw", position: "absolute" }}>
            <Img style={{ maxHeight: "100vh" }} fluid={sanityBabaPage.headerImg.asset.fluid} alt="Baba image" />
            {/* <p className="legend">{e.node.title}</p> */}
          </div>
          <LayoutHeader />
          <section style={{ position: "absolute", left: "0", right: "0", top: "0", height: "100vh" }}>
            <Centralizer>
              <div style={{ position: "absolute", width: "55vw", top: "45vh", marginLeft: "25vw" }}>
                <Quote><PageTitle>O babà é na cosa seria.</PageTitle></Quote>
              </div>
            </Centralizer>
          </section>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={1}>
        <Centralizer column>
          <div style={{ position: "relative", backgroundColor: "white", width: "100%", height: "100vh", zIndex: 100 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "10vh" }}>
              <div style={{ width: "90%" }}>
                <span style={{ fontFamily: "HomepageBaukastenBook" }}>{sanityBabaPage.pageText}</span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5vh" }}>
              <Img style={{ maxheight: "100vh" }} fixed={sanityBabaPage.textImg.asset.fixed} alt="Baba image with text" />
            </div>
          </div>
        </Centralizer>
      </ParallaxLayer>
    </Parallax >
  )
}

export default BabaPage;