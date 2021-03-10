import React, { useContext } from 'react';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { MateriePrimeQuery, QuoteStyle } from '../../../../../types';
import { useMateriePrimeQuery } from '../../../../hooks/queries/useMateriePrimeQuery';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import BackDropDesktop from '../../BackDropDesktop/BackDropDesktop';
import LayoutFrameDesktop from '../../LayoutFrameDesktop/LayoutFrameDesktop';
import LayoutHeaderDesktop from '../../LayoutHeaderDesktop/LayoutHeaderDesktop';
import PageTitleDesktop from '../../PageTitleDesktop/PageTitleDesktop';
import QuoteDesktop from '../../QuoteDesktop/QuoteDesktop';
import Img from 'gatsby-image';
import { PageContext } from '../../../../contexts/pageContext';


const MateriePrimeDesktopRender: React.FC = () => {
  const { sanityMateriePrimePage }: MateriePrimeQuery = useMateriePrimeQuery();
  const [page, setPage]: any = useContext(PageContext);
  let parallax: any;


  return (
    <Parallax pages={4.4} scrolling={true} ref={ref => parallax = ref}>
      <LayoutFrameDesktop>
        <ParallaxLayer offset={0} speed={0.5}>
          <div style={{ backgroundColor: "#F0E9E4", width: "100%", height: "100vh", zIndex: 100, position: "relative", }}>
            <div style={{ width: "5em", position: "absolute", top: "10vw", left: "10%", textAlign: "center" }}>
              <QuoteDesktop rightQuoteX={"2.5em"} style={QuoteStyle.header}>M</QuoteDesktop>
            </div>
            <div style={{ position: "absolute", top: "45vh", right: "10%" }}>
              <div style={{ height: "1px", width: "30px", marginLeft: "7px", marginBottom: "8px", backgroundColor: "black" }}></div>
              <PageTitleDesktop>{page.english ? "Materials" : "Materie Prime"}</PageTitleDesktop>
              <div style={{ height: "1px", width: "25px", marginLeft: "10px", marginTop: "10px", backgroundColor: "black" }}></div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.2}>
          <Centralizer>
            <div style={{ width: "65%", height: "100vh", marginTop: "50vh", zIndex: -1 }}>
              <QuoteDesktop rightQuoteY="3vh" fontSize="1.8em" style={QuoteStyle['paragraph-m']} >{page.english ? sanityMateriePrimePage.quoteHeaderTextEng : sanityMateriePrimePage.quoteHeaderText}</QuoteDesktop>
            </div>
          </Centralizer>
        </ParallaxLayer>

        {/* LIEVITO MADRE */}

        <ParallaxLayer offset={0.9999} speed={1}>
          <div style={{ backgroundColor: "white", width: "100%", height: "600vh", zIndex: 100, position: "relative" }}>
            <div style={{ height: "40vh" }}>
              <Centralizer>
                <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "25vh" }}>
                  <Img fluid={sanityMateriePrimePage.lievitoMadreImg.asset.fluid} alt="photo of lievito madre" />
                </div>
                <div style={{ width: "45%", height: "20vh", backgroundColor: sanityMateriePrimePage.lievitoMadreColor.hex }}>
                  <div style={{ width: "50%", textAlign: "right", position: "relative" }}>
                    <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", right: 0, marginRight: "15px", marginTop: "18px" }}></div>
                    <div style={{ position: "absolute", marginTop: "32px" }}>
                      <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".15em"}>{page.english ? "Sour Dough" : "Lievito Madre"}</PageTitleDesktop>
                    </div>
                  </div>
                </div>
                <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "35vh", left: "10%" }}>
                  {page.english ? sanityMateriePrimePage.lievitoMadreTextEng.split(". ").map((s, index) => {
                    if (index == sanityMateriePrimePage.lievitoMadreTextEng.split(". ").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  }) : sanityMateriePrimePage.lievitoMadreText.split(". ").map((s, index) => {
                    if (index == sanityMateriePrimePage.lievitoMadreText.split(". ").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  })}

                  <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
                </div>
              </Centralizer>
            </div>
          </div>
        </ParallaxLayer>

        {/* LIMONI */}

        <ParallaxLayer offset={1} speed={0.5}>
          <div style={{ height: "40vh", }}>
            <Centralizer>
              <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "25vh" }}>
                <Img fluid={sanityMateriePrimePage.limoniImg.asset.fluid} alt="photo of limoni di sorrento" />
              </div>
              <div style={{ width: "100%", height: "20vh", backgroundColor: sanityMateriePrimePage.limoniColor.hex }}>
                <div style={{ width: "50%", textAlign: "right", position: "relative" }}>
                  <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", right: "35%", marginRight: "15px", marginTop: "18px" }}></div>
                  <div style={{ position: "absolute", marginTop: "32px" }}>
                    <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".15em"}>{page.english ? "Sorrento Lemons" : "Limoni di Sorrento"}</PageTitleDesktop>
                  </div>
                </div>
              </div>
              <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "270px", left: "10%" }}>
                {page.english ? sanityMateriePrimePage.limoniTextEng.split(". ").map((s, index) => {
                  if (index == sanityMateriePrimePage.limoniTextEng.split(". ").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                }) : sanityMateriePrimePage.limoniText.split(". ").map((s, index) => {
                  if (index == sanityMateriePrimePage.limoniText.split(". ").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                })}
                <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>



        {/* MELE ANNURCA */}

        <ParallaxLayer offset={1.99} speed={1}>
          <div style={{ height: "40vh", backgroundColor: "white", position: "relative" }}>
            <Centralizer>
              <div style={{ width: "15%", height: "60vh", backgroundColor: sanityMateriePrimePage.melaColor.hex, position: "absolute", left: 0, top: "0" }}></div>
              <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "100px" }}>
                <Img fluid={sanityMateriePrimePage.melaImg.asset.fluid} alt="photo of limoni di sorrento" />
              </div>
              <div style={{ position: "absolute", top: 0, width: "100%", height: "20vh" }}>
                <div style={{ width: "50%", textAlign: "right", position: "absolute" }}>
                  <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", right: "100px", marginRight: "15px", marginTop: "18px" }}></div>
                  <div style={{ position: "absolute", marginTop: "32px", width: "25%", right: "200px" }}>
                    <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".15em"}>{page.english ? "Annurca Apples" : "Mela Annurca"}</PageTitleDesktop>
                  </div>
                </div>
              </div>
              <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "180px", left: "10%" }}>
                {page.english ? sanityMateriePrimePage.melaTextEng.split(".").map((s, index) => {
                  if (index == sanityMateriePrimePage.melaTextEng.split(".").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                }) :
                  sanityMateriePrimePage.melaText.split(".").map((s, index) => {
                    if (index == sanityMateriePrimePage.melaText.split(".").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  })
                }

                <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>

        {/* NOCE */}

        <ParallaxLayer offset={2} speed={0.5}>
          <div style={{ height: "40vh" }}>
            <Centralizer>
              <div style={{ width: "75%", height: "30vh", backgroundColor: sanityMateriePrimePage.nociColor.hex, position: "absolute", right: 0, top: "12vh" }}></div>
              <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "25vh" }}>
                <Img fluid={sanityMateriePrimePage.nociImg.asset.fluid} alt="photo of Noci di Sorrento" />
              </div>
              <div style={{ width: "100%", height: "20vh" }}>
                <div style={{ width: "50%", textAlign: "right", position: "relative", top: "10px" }}>
                  <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", right: "100px", marginRight: "15px", marginTop: "22px" }}></div>
                  <div style={{ position: "absolute", marginTop: "32px", width: "350px", right: "0px" }}>
                    <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".1em"}>{page.english ? "Sorrento Walnuts" : "Noci di Sorrento"}</PageTitleDesktop>
                  </div>
                </div>
              </div>
              <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "300px", left: "10%" }}>
                {page.english ? sanityMateriePrimePage.nociTextEng.split(". ").map((s, index) => {
                  if (index == sanityMateriePrimePage.nociTextEng.split(". ").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                }) : sanityMateriePrimePage.nociText.split(". ").map((s, index) => {
                  if (index == sanityMateriePrimePage.nociText.split(". ").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                })}
                <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>




        {/* NOCIOLA */}

        <ParallaxLayer offset={2.999} speed={1}>
          <div style={{ height: "40vh" }}>
            <Centralizer>
              <div style={{ width: "65%", height: "20vh", backgroundColor: sanityMateriePrimePage.nocciolaColor.hex, position: "absolute", left: 0, top: "10vh" }}></div>
              <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "25vh" }}>
                <Img fluid={sanityMateriePrimePage.nocciolaImg.asset.fluid} alt="photo of Nociola di Gifoni" />
              </div>
              <div style={{ width: "100%", height: "20vh" }}>
                <div style={{ width: "50%", textAlign: "right", position: "relative" }}>
                  <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "70%", marginLeft: "15px", marginTop: "18px" }}></div>
                  <div style={{ position: "absolute", marginTop: "32px", width: "320px", right: "0px" }}>
                    <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".1em"}>{page.english ? "Gifoni Hazelnuts" : "Nocciole di Gifoni"}</PageTitleDesktop>
                  </div>
                </div>
              </div>
              <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "300px", left: "10%" }}>
                {page.english ?
                  sanityMateriePrimePage.nocciolaTextEng.split(". ").map((s, index) => {
                    if (index == sanityMateriePrimePage.nocciolaTextEng.split(". ").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  }) :
                  sanityMateriePrimePage.nocciolaText.split(". ").map((s, index) => {
                    if (index == sanityMateriePrimePage.nocciolaText.split(". ").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  })
                }
                <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>


        {/* MIELE */}

        <ParallaxLayer offset={3} speed={0.5}>
          <div style={{ height: "40vh" }}>
            <Centralizer>
              <div style={{ width: "20%", height: "50%", backgroundColor: sanityMateriePrimePage.mieleColor.hex, position: "absolute", left: 0, top: "12vh" }}></div>
              <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "25vh" }}>
                <Img fluid={sanityMateriePrimePage.mieleImg.asset.fluid} alt="photo of Miele Millefiori" />
              </div>
              <div style={{ width: "100%", height: "20vh" }}>
                <div style={{ width: "50%", textAlign: "right", position: "relative" }}>
                  <div style={{ height: "3px", width: "40px", backgroundColor: "black", position: "absolute", right: "200px", marginRight: "4px", marginTop: "18px" }}></div>
                  <div style={{ position: "absolute", marginTop: "32px", width: "25%", right: "200px" }}>
                    <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".1em"}>{page.english ? "Millefiori Honey" : "Miele Millefiori"}</PageTitleDesktop>
                  </div>
                </div>
              </div>
              <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "32vh", left: "10%" }}>
                {page.english ?
                  sanityMateriePrimePage.mieleTextEng.split(". ").map((s, index) => {
                    if (index == sanityMateriePrimePage.mieleTextEng.split(". ").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  }) :
                  sanityMateriePrimePage.mieleText.split(". ").map((s, index) => {
                    if (index == sanityMateriePrimePage.mieleText.split(". ").length - 1) return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                    )
                    return (
                      <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                    )
                  })}
                <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>


        {/* ALBICOCCHE */}

        <ParallaxLayer offset={3.799} speed={1}>
          <div style={{ height: "40vh" }}>
            <Centralizer>
              <div style={{ width: "75%", height: "420px", backgroundColor: sanityMateriePrimePage.albicocceColor.hex, position: "absolute", left: "7%", top: "220px" }}></div>
              <div style={{ maxWidth: "389px", height: "30vh", width: "30%", position: "absolute", right: "10%", top: "220px" }}>
                <Img fluid={sanityMateriePrimePage.albicocceImg.asset.fluid} alt="photo of Albicocche del Vesuvio" />
              </div>
              <div style={{ width: "100%", height: "20vh" }}>
                <div style={{ width: "50%", textAlign: "right", position: "relative" }}>
                  <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "50%", marginLeft: "15px", marginTop: "18px" }}></div>
                  <div style={{ position: "absolute", marginTop: "32px", width: "450px", right: "0px" }}>
                    <PageTitleDesktop fontSize={"3.2em"} letterSpacing={".1em"}>{page.english ? "Vesuvio Apricots" : "Albicocche del Vesuvio"}</PageTitleDesktop>
                  </div>
                </div>
              </div>
              <div style={{ width: "45%", wordSpacing: ".3em", position: "absolute", top: "260px", left: "10%" }}>
                {page.english ? sanityMateriePrimePage.albicocceTextEng.split(". ").map((s, index) => {
                  if (index == sanityMateriePrimePage.albicocceTextEng.split(". ").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                }) : sanityMateriePrimePage.albicocceText.split(". ").map((s, index) => {
                  if (index == sanityMateriePrimePage.albicocceText.split(". ").length - 1) return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}</p>
                  )
                  return (
                    <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", marginTop: "-1em", fontSize: "1.2em" }}>{s}.</p>
                  )
                })}
                <div style={{ height: "3px", width: "70px", backgroundColor: "black", position: "absolute", left: "0", marginRight: "15px", marginTop: "25px" }}></div>
              </div>
            </Centralizer>
          </div>
        </ParallaxLayer>
      </LayoutFrameDesktop>
    </Parallax>
  )
}

export default MateriePrimeDesktopRender;