import React from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './LayoutMobile.module.scss';
const LayoutMobile: React.FC = ({ children }) => {
  return (
    <>
      {children}
      <BurgerMenu />
      <div className={classes.navbar}>
      </div>
    </>
  )
}

export default LayoutMobile;