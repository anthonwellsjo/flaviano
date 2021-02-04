import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { PageContext } from '../../../../contexts/pageContext';
import NavbarDropDown from '../NavbarDropDownDesktop/NavbarDropDownDesktop';
import classes from './MainNavBarDesktop.module.css';


const MainNavBarDesktop: React.FC = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <nav className={classes.navbar}>
      <Link className={classes.link} onMouseEnter={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }))} to="/chisiamo">Chi siamo</Link>
      <NavbarDropDown />
      <Link className={classes.link} onMouseEnter={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }))} to="/materieprime">Materie prime</Link>
      <Link className={classes.link} onMouseEnter={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }))} to="/contact">Contatti</Link>
      <button className={classes.button}>Ita/Eng</button>
    </nav>
  )
}

export default MainNavBarDesktop;
