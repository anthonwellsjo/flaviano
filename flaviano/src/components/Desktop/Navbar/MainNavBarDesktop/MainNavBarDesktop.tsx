import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { PageContext } from '../../../../contexts/pageContext';
import NavbarDropDown from '../NavbarDropDownDesktop/NavbarDropDownDesktop';
import classes from './MainNavBarDesktop.module.scss';


const MainNavBarDesktop: React.FC = () => {
  const [page, setPage]: any = useContext(PageContext);

  return (
    <nav className={classes.navbar}>
      <Link className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/chisiamo">Chi siamo</Link>
      <NavbarDropDown />
      <Link className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/materieprime">Materie prime</Link>
      <Link className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/contatti">Contatti</Link>
      <button className={classes.button}>Ita/Eng</button>
    </nav>
  )
}

export default MainNavBarDesktop;
