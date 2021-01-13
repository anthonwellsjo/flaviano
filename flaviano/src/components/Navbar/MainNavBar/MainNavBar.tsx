import { Link } from 'gatsby';
import React from 'react';
import NavbarDropDown from '../NavbarDropDown/NavbarDropdown';
import classes from './MainNavBar.module.css';


const MainNavBar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <Link className={classes.link} to="/index#presentation">Chi siamo</Link>
      <NavbarDropDown />
      <Link className={classes.link} to="/index#materials">Materie prime</Link>
      <Link className={classes.link} to="/index#contact">Contatti</Link>
      <button className={classes.button}>Ita/Eng</button>
    </nav>
  )
}

export default MainNavBar;
