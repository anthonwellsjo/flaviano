import React, { useEffect, useState } from 'react';
import { useTransition, animated, useSpring } from 'react-spring'
import Centralizer from '../../../../StructureComponents/Centralizer/Centralizer';

interface props {
  photos: {
    leftUp?: string,
    leftDown?: string,
    middleCenter?: string,
    middleDown?: string,
    rightUp?: string,
    rightDown?: string
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
        {photos.leftUp && <div style={{ position: "absolute", top: "10vh", left: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }}/></div>}
        {photos.leftDown && <div style={{ position: "absolute", bottom: "30vh", left: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }}/></div>}
        {photos.middleCenter && <div style={{ position: "absolute", top: "20vh" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }}/></div>}
        {photos.rightUp && <div style={{ position: "absolute", top: "10vh", right: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }}/></div>}
        {photos.rightDown && <div style={{ position: "absolute", bottom: "30vh", right: "10%" }}><animated.img src={"https://picsum.photos/200"} style={{ ...style }}/></div>}
      </Centralizer>
    </div>
  )

}

export default BabaProductPhotosAnimation;