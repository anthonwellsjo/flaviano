import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { PageContext } from '../../../contexts/pageContext';
import NavbarDropDown from '../NavbarDropDown/NavbarDropdown';
import classes from './MainNavBar.module.css';


const MainNavBar: React.FC = () => {
  const [page, setPage] = useContext(PageContext);

  return (
    <nav className={classes.navbar}>
      <Link className={classes.link} onMouseEnter={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }))} to="/index#presentation">Chi siamo</Link>
      <NavbarDropDown />
      <Link className={classes.link} onMouseEnter={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }))} to="/index#materials">Materie prime</Link>
      <Link className={classes.link} onMouseEnter={() => setPage(prev => ({ ...prev, productsDropDownMenuOpen: false }))} to="/index#contact">Contatti</Link>
      <button className={classes.button}>Ita/Eng</button>
    </nav>
  )
}

export default MainNavBar;
