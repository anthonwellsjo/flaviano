import React, { useEffect, useRef, useState } from 'react';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import img from '../../../images/arrowDown.png';
import classes from './ScrollButtonMobile.module.scss';


interface Props {
  id?: number,
  deactivatePosition: number,
  reactivePosition: number,
  currentPosition: number,
  to: string,
  up?: boolean
}


const ScrollButtonMobile = ({ id, reactivePosition, currentPosition, deactivatePosition, to, up }: Props) => {
  const [isActive, setIsActive] = useState(false);


  useEffect(() => {
    console.log(currentPosition, reactivePosition);
    if (currentPosition <= reactivePosition && !isActive) {
      console.log("reactivating button");
      setIsActive(true);
    }
    if (currentPosition > deactivatePosition && isActive) {
      console.log("deactivating button");

      setIsActive(false);
    }
  }, [currentPosition]);

  const onClickEventHandler = () => {
    console.log("click");
    scrollTo(to);
  }


  return (
    <Centralizer>
      <div className={isActive ? classes.animate : classes.hide}>
        <button style={{ cursor: "pointer" }} className={classes.button} onClick={() => onClickEventHandler()}><img style={{ width: "50px", transform: up? "rotate(180deg)" : "rotate(0)" }} src={img} alt="arrow" /></button>
      </div>
    </Centralizer >
  )
}

export default ScrollButtonMobile;