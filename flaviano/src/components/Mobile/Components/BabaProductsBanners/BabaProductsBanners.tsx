import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import { Product, ProductQuery } from '../../../../../types';
import { useProductQuery } from '../../../../hooks/queries/useProductQuery';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import SwitchArrow from '../SwitchArrow/SwitchArrow';
import classes from './BabaProductsBanners.module.scss';

const BabaProductsBanners: React.FC = () => {
  const queryData: ProductQuery = useProductQuery();
  const babas: Array<Product> = queryData.allSanityProduct.edges.filter((p: Product) => p.node.category.title == "Babà");
  const [containersOpen, setContainersOpen] = useState({ strega: false, limoncello: false, mela: false });

  const limoncelloProps = useSpring({
    reverse: containersOpen.limoncello,
    to: { height: "60px", width: "100%" },
    from: { height: "300px", width: "100%" }
  })
  const stregaProps = useSpring({
    reverse: containersOpen.strega,
    to: { height: "60px", width: "100%" },
    from: { height: "300px", width: "60%" }
  })
  const melaProps = useSpring({
    reverse: containersOpen.mela,
    to: { height: "60px", width: "100%" },
    from: { height: "300px", width: "60%" }
  })
  const stregaTextProps = useSpring({
    reverse: containersOpen.strega,
    to: {
      opacity: 0,
      transform: "translateY(-50px)"
    },
    from: {
      opacity: 1,
      transform: "translateY(0px)"
    }
  })
  const limoncelloTextProps = useSpring({
    reverse: containersOpen.limoncello,
    to: {
      opacity: 0,
      transform: "translateY(-50px)"
    },
    from: {
      opacity: 1,
      transform: "translateY(0px)"
    }
  })
  const melaTextProps = useSpring({
    reverse: containersOpen.mela,
    to: {
      opacity: 0,
      transform: "translateY(-50px)"
    },
    from: {
      opacity: 1,
      transform: "translateY(0px)"
    }
  })

  const onContainerClickedEventHandler = (title: string) => {
    const name = title.toLowerCase();
    if (name == "allo strega") {
      setContainersOpen({ strega: !containersOpen.strega, limoncello: false, mela: false })
    }
    if (name == "limoncello") {
      setContainersOpen({ strega: false, limoncello: !containersOpen.limoncello, mela: false })
    }
    if (name == "mela annurca") {
      setContainersOpen({ strega: false, limoncello: false, mela: !containersOpen.mela })
    }
  }

  return (
    <>
      {babas.map(p => {
        console.log(p.node.title.toLowerCase())
        const name = p.node.title.toLowerCase();
        if (name == "allo strega") return (
          <div style={{ position: "relative" }} onClick={() => onContainerClickedEventHandler(p.node.title)}>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-start" }}>
              <animated.div style={{ ...stregaProps, backgroundColor: p.node.backGroundColor.hex }} className={classes.container}>
                <h1 style={{ fontFamily: "HomepageBaukastenBold", textTransform: "uppercase", fontSize: "1.5em", marginLeft: "5%", }}>{p.node.title}</h1>

              </animated.div>
              <div style={{ position: "absolute", right: "15%", bottom: "-5px" }}>
                <SwitchArrow open={containersOpen.strega} />
              </div>
            </div>
            {containersOpen.strega &&
              <Centralizer column>
                <animated.div style={{ ...stregaTextProps, position: "absolute", top: "50px", width: "95%" }}>
                  <p style={{ fontFamily: "HomepageBaukastenBold", fontSize: ".95em" }}>INGREDIENTI</p>
                  <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1em", marginTop: "-14px" }}>{p.node.ingredients}</p>
                  <p style={{ fontFamily: "HomepageBaukastenBold", fontSize: ".95em" }}>CONSERVAZIONE</p>
                  <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1em", marginTop: "-14px" }}>{p.node.conservation}</p>
                </animated.div>
              </Centralizer>}

          </div>
        )
        if (name == "limoncello") return (
          <div style={{ position: "relative" }} onClick={() => onContainerClickedEventHandler(p.node.title)}>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <animated.div style={{ ...limoncelloProps, backgroundColor: p.node.backGroundColor.hex }} className={classes.container}>
                <h1 style={{ fontFamily: "HomepageBaukastenBold", textTransform: "uppercase", fontSize: "1.5em", marginLeft: "5%", }}>{p.node.title}</h1>
              </animated.div>
              <div style={{ position: "absolute", right: "15%", bottom: "-5px" }}>
                <SwitchArrow open={containersOpen.limoncello} />
              </div>
            </div>
            {containersOpen.limoncello &&
              <Centralizer column>
                <animated.div style={{ ...limoncelloTextProps, position: "absolute", top: "50px", width: "95%" }}>
                  <p style={{ fontFamily: "HomepageBaukastenBold", fontSize: ".95em" }}>INGREDIENTI</p>
                  <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1em", marginTop: "-14px" }}>{p.node.ingredients}</p>
                  <p style={{ fontFamily: "HomepageBaukastenBold", fontSize: ".95em" }}>CONSERVAZIONE</p>
                  <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1em", marginTop: "-14px" }}>{p.node.conservation}</p>
                </animated.div>
              </Centralizer>}
          </div>
        )
        if (name == "mela annurca") return (
          <div style={{ position: "relative" }} onClick={() => onContainerClickedEventHandler(p.node.title)}>
            <div style={{ width: "100%", display: "flex", justifyContent: "flex-end" }}>
              <animated.div style={{ ...melaProps, backgroundColor: p.node.backGroundColor.hex }} className={classes.container}>
                <h1 style={{ fontFamily: "HomepageBaukastenBold", textTransform: "uppercase", fontSize: "1.5em", marginLeft: "5%", }}>{p.node.title}</h1>
              </animated.div>
              <div style={{ position: "absolute", right: "15%", bottom: "-5px" }}>
                <SwitchArrow open={containersOpen.mela} />
              </div>
            </div>

            {containersOpen.mela &&
              <Centralizer column>
                <animated.div style={{ ...melaTextProps, position: "absolute", top: "50px", width: "95%" }}>
                  <p style={{ fontFamily: "HomepageBaukastenBold", fontSize: ".95em" }}>INGREDIENTI</p>
                  <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1em", marginTop: "-14px" }}>{p.node.ingredients}</p>
                  <p style={{ fontFamily: "HomepageBaukastenBold", fontSize: ".95em" }}>CONSERVAZIONE</p>
                  <p style={{ fontFamily: "HomepageBaukastenBook", textAlign: "justify", fontSize: "1em", marginTop: "-14px" }}>{p.node.conservation}</p>
                </animated.div>
              </Centralizer>}

          </div>
        )
      })}
    </>
  )
}

export default BabaProductsBanners;