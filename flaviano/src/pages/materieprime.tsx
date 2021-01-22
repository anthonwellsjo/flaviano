import React from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { MateriePrimeQuery, QuoteStyle } from '../../types';
import LayoutHeader from '../components/LayoutHeader/LayoutHeader';
import PageTitle from '../components/PageTitle/PageTitle';
import Quote from '../components/Quote/Quote';
import Centralizer from '../components/StructureComponents/Centralizer/Centralizer';
import { useMateriePrimeQuery } from '../hooks/queries/useMateriePrimeQuery';

const MateriePrimePage: React.FC = () => {
  const { sanityMateriePrimePage }: MateriePrimeQuery = useMateriePrimeQuery();
  let parallax;


  return (
    <Parallax pages={5} scrolling={true} ref={ref => parallax = ref}>
      <ParallaxLayer offset={0} speed={0.5}>
        <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", zIndex: 100, position: "relative", }}>
          <div style={{ width: "5em", position: "absolute", top: "10vw", left: "10vw", textAlign: "center" }}>
            <Quote rightQuoteX={"2.5em"} style={QuoteStyle.header}>M</Quote>
          </div>
          <div style={{ position: "absolute", top: "45vh", right: "10vw" }}>
            <div style={{ height: "1px", width: "30px", marginLeft: "7px", marginBottom: "8px", backgroundColor: "black" }}></div>
            <PageTitle>Materie Prime</PageTitle>
            <div style={{ height: "1px", width: "25px", marginLeft: "10px", marginTop: "10px", backgroundColor: "black" }}></div>
          </div>
          <LayoutHeader />
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={0.5} speed={0.2}>
        <Centralizer>
          <div style={{ width: "65vw", height: "100vh", marginTop: "50vh", zIndex: -1 }}>
            <Quote style={QuoteStyle['paragraph-m']} >{sanityMateriePrimePage.quoteHeaderText}</Quote>
          </div>
        </Centralizer>
      </ParallaxLayer>
      <ParallaxLayer offset={0.9999} speed={1}>
        <div style={{ backgroundColor: "white", width: "100%", height: "600vh", zIndex: 100, position: "relative" }}>

          {/* LIEVITO MADRE */}
          <div style={{height: "40vh"}}>
            <Centralizer>
              <div style={{ width: "40vw", height: "23vh", backgroundColor: sanityMateriePrimePage.lievitoMadreColor.hex }}>
                <PageTitle fontSize={"4em"} letterSpacing={".15em"}>Lievito Madre</PageTitle>
              </div>
            </Centralizer>
          </div>




        </div>
      </ParallaxLayer>
    </Parallax>
  )
}

export default MateriePrimePage;