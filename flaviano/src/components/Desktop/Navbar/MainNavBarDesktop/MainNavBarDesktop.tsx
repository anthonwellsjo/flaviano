import { Link } from 'gatsby';
import React, { useContext } from 'react';
import { PageContext } from '../../../../contexts/pageContext';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import NavbarDropDown from '../NavbarDropDownDesktop/NavbarDropDownDesktop';
import classes from './MainNavBarDesktop.module.scss';


const MainNavBarDesktop: React.FC = () => {
  const [page, setPage]: any = useContext(PageContext);

  return (
    <nav className={classes.navbar}>
      <Centralizer>
        <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "end", width: "100vw", maxWidth: "1300px", marginRight: "100px" }}>
          <div>
            <Link activeClassName={classes.active} className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/chisiamo">Chi siamo</Link>
            <NavbarDropDown />
            <Link activeClassName={classes.active} className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/materieprime">Materie prime</Link>
            <Link activeClassName={classes.active} className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/contatti">Contatti</Link>
            <button className={classes.button}>Ita/Eng</button>
          </div>
        </div>
      </Centralizer>
    </nav>
  )
}

export default MainNavBarDesktop;
