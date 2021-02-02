import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { BabaPageQuery, QuoteStyle } from '../../../types';
import LayoutHeader from '../../components/LayoutHeader/LayoutHeader';
import PageTitle from '../../components/PageTitle/PageTitle';
import Quote from '../../components/Quote/Quote';
import Centralizer from '../../components/StructureComponents/Centralizer/Centralizer';
import { useBabaPageQuery } from '../../hooks/queries/useBabaPageQuery';
import Img from 'gatsby-image';
import BabaProductsPreview from '../../components/BabaPage/BabaProductsPreview/BabaProductsPreview';
import BackDrop from '../../components/BackDrop/BackDrop';
import LayoutFrame from '../../components/LayoutFrame/LayoutFrame';

const BabaPage: React.FC = () => {
  const { sanityBabaPage }: BabaPageQuery = useBabaPageQuery();


  let parallax;

  return (
    <Parallax pages={2} scrolling={true} ref={ref => parallax = ref}>
      <LayoutFrame>
        <BackDrop />
        <LayoutHeader />
        {/* ------------HEADER SECTION */}

        <ParallaxLayer factor={0} speed={-1}>
          <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", zIndex: 100, position: "relative", }}>
            <div style={{ maxWidth: "100vw", width: "110%", position: "absolute" }}>
              <Img fluid={sanityBabaPage.headerImg.asset.fluid} alt="Baba image" />
              {/* <p className="legend">{e.node.title}</p> */}
            </div>
            <section style={{ position: "absolute", left: "0", right: "0", top: "0", height: "100vh" }}>
              <Centralizer>
                <div style={{ position: "absolute", width: "35vw", top: "35vh", marginLeft: "25vw" }}>
                  <Quote rightQuoteY="15vh"><PageTitle letterSpacing=".1em">O babà é na cosa seria.</PageTitle></Quote>
                </div>
              </Centralizer>
            </section>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={2}>
          <Centralizer column>
            <div style={{ position: "relative", backgroundColor: "white", width: "100%", height: "100vh", zIndex: 100 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5vh" }}>
                <div style={{ width: "90%" }}>
                  <span style={{ fontFamily: "HomepageBaukastenBook" }}>{sanityBabaPage.pageText}</span>
                </div>
              </div>
              <Centralizer>
                <div style={{ display: "flex", maxWidth: "300px", alignItems: "center", justifyContent: "center", marginTop: "-35vh" }}>
                  <Img fixed={sanityBabaPage.textImg.asset.fixed} alt="Baba image with text" />
                </div>
              </Centralizer>
            </div>
          </Centralizer>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1}>

          <div style={{ zIndex: 299, width: "100%", marginTop: "-113vh" }}>
            <BabaProductsPreview />
          </div>
        </ParallaxLayer>
      </LayoutFrame>
    </Parallax >
  )
}

export default BabaPage;