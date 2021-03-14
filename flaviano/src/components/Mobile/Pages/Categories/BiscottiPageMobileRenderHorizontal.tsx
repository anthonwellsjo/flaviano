import React, { useRef } from 'react';
import Img from 'gatsby-image';
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons';
import { Product, ProductQuery, QuoteStyle } from '../../../../../types';
import { useProductQuery } from '../../../../hooks/queries/useProductQuery';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';
import BackDropMobile from '../../Components/BackDropMobile/BackDropMobile';
import LayoutHeaderMobile from '../../Components/LayoutHeaderMobile/LayoutHeaderMobile';
import LayoutMobile from '../../Components/LayoutMobile/LayoutMobile';
import QuoteMobile from '../../Components/QuoteMobile/QuoteMobile';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import { Link } from 'gatsby';

const BiscottiPageMobileRenderHorizontal: React.FC = () => {
  const products: ProductQuery = useProductQuery();
  const biscotti: Array<Product> = products.allSanityProduct.edges.filter((p: Product) => p.node.category.title == "Biscotti");
  let parallax: any = useRef();
  return (
    <LayoutMobile horizontal>
      <Parallax pages={2.65} scrolling={true} config={{ mass: 1 }} ref={parallax}>
        <BackDropMobile />
        <ParallaxLayer offset={0} speed={0.8}>
          <LayoutHeaderMobile horizontal backGroundFullPage />
        </ParallaxLayer>
        <ParallaxLayer offset={0.45} speed={0.2}>
          <div style={{ width: "30px", marginTop: "-15px", textAlign: "center", position: "absolute", left: "20%", zIndex: 1 }}>
            <QuoteMobile leftQuoteX={"-30px"} leftQuoteY={"-25px"} rightQuoteX={"-5px"} rightQuoteY={"-35px"} fontSize={"4em"} style={QuoteStyle.header}>
              B
            </QuoteMobile>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={0.4}>
          <div style={{ position: "absolute", right: "10%", top: "100px" }}>
            <div style={{ position: "relative", }}>
              <div style={{ height: "0.5px", width: "70px", marginLeft: "1px", backgroundColor: "black", marginBottom: "8px" }}></div>
              <PageTitleDesktop fontSize="1.7em" letterSpacing={".4em"}>Biscotti</PageTitleDesktop>
              <div style={{ position: "absolute", height: "0.5px", width: "80px", backgroundColor: "black", marginTop: "8px", right: "10px" }}></div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.999} speed={0.6}>
          <section style={{ height: "100vh", width: "100vw", backgroundColor: "white" }}>
            {biscotti.map(b => {
              const name = b.node.title.toLowerCase();
              console.log(name);
              if (name == "nocciola e cioccolato") return (
                <Link to={`/products/${b.node.slug.current}`}>
                  <div style={{ overflow: "hidden", position: "relative" }}>
                    <div style={{ width: "45%" }}>
                      <Img fluid={b.node.productPhoto.asset.fluid} alt="nocciola e cioccolato" />
                    </div>
                    <div style={{ position: "absolute", top: 0, left: "65%", width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
                      <div style={{ width: "20em", marginLeft: "20px" }}>
                        <div style={{ height: "0.5px", width: "20px", backgroundColor: "black", marginBottom: "3px" }} />
                        <PageTitleDesktop fontSize="1.5em" letterSpacing={".1em"}>{b.node.title.split(" e ").map((l, index) => {
                          if (index == 0) return (
                            l + " & "
                          )
                          return l;
                        }).join("")}
                        </PageTitleDesktop>
                        <div style={{ height: "0.5px", width: "20px", backgroundColor: "black", marginTop: "3px" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
              if (name == "noci e miele") return (
                <Link to={`/products/${b.node.slug.current}`}>
                  <div style={{ overflow: "hidden", position: "relative", width: "100%" }}>
                    <div style={{ width: "50%" }}>
                      <Img fluid={b.node.productPhoto.asset.fluid} alt="nocciola e cioccolato" />
                    </div>
                    <div style={{ position: "absolute", left: "0", top: 0, width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
                      <div style={{ position: "absolute", width: "10em", left: "75%" }}>
                        <div style={{ position: "absolute", left: "0", height: "0.5px", width: "20px", backgroundColor: "black", marginBottom: "10px" }} />
                        <PageTitleDesktop fontSize="1.5em" letterSpacing={".1em"}>{b.node.title.split(" e ").map((l, index) => {
                          if (index == 0) return (
                            l + "& "
                          )
                          return l;
                        }).join("")}
                        </PageTitleDesktop>
                        <div style={{ position: "absolute", left: "0", height: "0.5px", width: "20px", backgroundColor: "black", marginTop: "0px" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
              if (name == "limone e zenzero") return (
                <Link to={`/products/${b.node.slug.current}`}>
                  <div style={{ height: "300px", overflow: "hidden", position: "relative" }}>
                    <div style={{ width: "50%" }}>
                      <Img fluid={b.node.productPhoto.asset.fluid} alt="nocciola e cioccolato" />
                    </div>
                    <div style={{ position: "absolute", left: "0", top: 0, width: "100%", height: "100%", display: "flex", alignItems: "center" }}>
                      <div style={{ position: "absolute", width: "10em", marginRight: "90px", right: 0 }}>
                        <div style={{ position: "absolute", right: "0", height: "0.5px", width: "20px", backgroundColor: "black", marginBottom: "3px" }} />
                        <PageTitleDesktop right fontSize="1.5em" letterSpacing={".1em"}>{b.node.title.split(" e ").map((l, index) => {
                          if (index == 0) return (
                            l + "& "
                          )
                          return l;
                        }).join("")}
                        </PageTitleDesktop>
                        <div style={{ position: "absolute", right: "0", height: "0.5px", width: "20px", backgroundColor: "black", marginTop: "0px" }} />
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </section>
        </ParallaxLayer>
      </Parallax>
    </LayoutMobile>
  )
}

export default BiscottiPageMobileRenderHorizontal;