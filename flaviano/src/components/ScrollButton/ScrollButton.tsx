import React, { useEffect, useRef, useState } from 'react';
import Centralizer from '../StructureComponents/Centralizer/Centralizer';
import scrollTo from 'gatsby-plugin-smoothscroll';
import img from '../../images/arrowDown.png';
import classes from './ScrollButton.module.css';


interface Props {
  id?: number,
  reactivePosition: number,
  currentPosition: number
}


const ScrollButton = ({ id, reactivePosition, currentPosition }: Props) => {
  const [isClicked, setIsClicked] = useState(false);


  useEffect(() => {
    console.log(currentPosition, reactivePosition);
    if (currentPosition <= reactivePosition) {
      setIsClicked(false);
    }
  }, [currentPosition]);

  const onClickEventHandler = () => {
    console.log("click");
    scrollTo('#products');
    setIsClicked(true);
  }


  return (
    <Centralizer>
      <div className={isClicked ? classes.hide : classes.animate}>
        <button className={classes.button} onClick={() => onClickEventHandler()}><img style={{ width: "80px" }} src={img} alt="arrow" /></button>
      </div>
    </Centralizer >
  )
}

export default ScrollButton;