import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react';
import classes from './MainNavBar.module.css';


const MainNavBar: React.FC = () => {
  return (
    <nav className={classes.navbar}>
      <AnchorLink className={classes.link} title="Chi siamo" to="/index#presentation"/>
      <AnchorLink className={classes.link} title="Prodotti" to="/index#products"/>
      <AnchorLink className={classes.link} title="Materie prime" to="/index#materials"/>
      <AnchorLink className={classes.link} title="Contatti" to="/index#contact"/>
      <button className={classes.button}>Ita/Eng</button>
    </nav>
  )
}

export default MainNavBar;
