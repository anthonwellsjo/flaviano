import React, { useEffect, useRef, useState } from 'react';
import Centralizer from '../StructureComponents/Centralizer/Centralizer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import img from '../../images/arrowDown.png';
import classes from './ScrollButton.module.css';


interface Props {
  id?: number,
  deactivatePosition: number,
  reactivePosition: number,
  currentPosition: number,
  to: string
}


const ScrollButton = ({ id, reactivePosition, currentPosition, deactivatePosition, to }: Props) => {
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
        <button style={{cursor:"pointer"}} className={classes.button} onClick={() => onClickEventHandler()}><img style={{ width: "80px" }} src={img} alt="arrow" /></button>
      </div>
    </Centralizer >
  )
}

export default ScrollButton;