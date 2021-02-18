import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './LayoutMobile.module.scss';
import flavianoImg from '../../../../images/flavianoLogo.png'
import { Link } from 'gatsby';
const LayoutMobile: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <BurgerMenu />
      <div className={classes.navbar}>
      </div>
      <Link to="/">
        <img className={classes.homeButton} src={flavianoImg} alt="home button logo" />
      </Link>
    </>
  )
}

export default LayoutMobile;