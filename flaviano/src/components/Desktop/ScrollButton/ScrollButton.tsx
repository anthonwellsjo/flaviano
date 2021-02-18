import React, { useEffect, useRef, useState } from 'react';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import img from '../../../images//down-chevron.png';
import classes from './ScrollButton.module.css';


interface Props {
  id?: number,
  deactivatePosition: number,
  reactivePosition: number,
  currentPosition: number,
  to: string,
  up?: boolean,
  clickEvent?: Function
}


const ScrollButton = ({ id, reactivePosition, currentPosition, deactivatePosition, to, up, clickEvent }: Props) => {
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
    if (clickEvent) clickEvent();
  }


  return (
    <Centralizer>
      <div className={isActive ? classes.animate : classes.hide}>
        <button style={{ cursor: "pointer" }} className={classes.button} onClick={() => onClickEventHandler()}><img style={{ width: "80px", transform: up ? "rotate(180deg)" : "rotate(0)" }} src={img} alt="arrow" /></button>
      </div>
    </Centralizer >
  )
}

export default ScrollButton;