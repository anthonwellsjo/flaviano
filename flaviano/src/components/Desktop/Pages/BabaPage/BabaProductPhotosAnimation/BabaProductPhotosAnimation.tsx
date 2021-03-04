import { FixedObject, FluidObject } from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import Img from 'gatsby-image';
import { useTransition, animated, useSpring } from 'react-spring'
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';

interface props {
  photos: {
    leftUp?: FixedObject,
    leftDown?: FixedObject,
    middleCenter?: FixedObject,
    middleDown?: FixedObject,
    rightUp?: FixedObject,
    rightDown?: FixedObject
  }
  show: boolean
}

const BabaProductPhotosAnimation = ({ show, photos }: props) => {

  const style = useSpring({
    reverse: !show,
    to: { transform: 'scale(1)' },
    from: { transform: 'scale(0)' },
    config: {
      mass: 1,
      friction: 20
    }
  })
  

  return (
    <div style={{ width: "100%", height: "100vh", position: "absolute", top: "15vh" }}>
      <Centralizer>
        {photos.leftUp && <animated.div style={{ ...style, position: "absolute", top: "10vh", left: "10%", width: "200px", height: "200px", overflow:"hidden" }}><div style={{minHeight: "200px", minWidth:"200px",height:"200px"}}><Img fixed={photos.leftUp} alt={"product photo"} /></div></animated.div>}
        {photos.leftDown && <animated.div style={{ ...style, position: "absolute", bottom: "30vh", left: "10%", width: "200px", height: "200px", overflow:"hidden" }}><div style={{minHeight: "200px", minWidth:"200px",height:"200px"}}><Img fixed={photos.leftDown} alt={"product photo"} /></div></animated.div>}
        {photos.middleCenter && <animated.div style={{ ...style, position: "absolute", top: "20vh", width: "200px", height: "200px", overflow:"hidden" }}><div style={{minHeight: "200px", minWidth:"200px",height:"200px"}}><Img fixed={photos.middleCenter} alt={"product photo"} /></div></animated.div>}
        {photos.rightUp && <animated.div style={{ ...style, position: "absolute", top: "10vh", right: "10%", width: "200px", height: "200px", overflow:"hidden" }}><div style={{minHeight: "200px", minWidth:"200px",height:"200px"}}><Img fixed={photos.rightUp} alt={"product photo"} /></div></animated.div>}
        {photos.rightDown && <animated.div style={{ ...style, position: "absolute", bottom: "30vh", right: "10%", width: "200px", height: "200px", overflow:"hidden" }}><div style={{minHeight: "200px", minWidth:"200px",height:"200px"}}><Img fixed={photos.rightDown} alt={"product photo"} /></div></animated.div>}

        {/* {photos.leftDown && <div style={{ position: "absolute", bottom: "30vh", left: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }} /></div>}
        {photos.middleCenter && <div style={{ position: "absolute", top: "20vh" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }} /></div>}
        {photos.rightUp && <div style={{ position: "absolute", top: "10vh", right: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }} /></div>}
        {photos.rightDown && <div style={{ position: "absolute", bottom: "30vh", right: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }} /></div>} */}
      </Centralizer>
    </div>
  )

}

export default BabaProductPhotosAnimation;