import classnames from 'classnames';
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
            <Link activeClassName={classes.active} className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/chisiamo">{page.english? "About Us" : "Chi Siamo"}</Link>
            <NavbarDropDown />
            <Link activeClassName={classes.active} className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/materieprime">{page.english? "Materials" : "Materie prime"}</Link>
            <Link activeClassName={classes.active} style={{marginLeft: "0px"}} className={classes.link} onMouseEnter={() => setPage((prev: any) => ({ ...prev, productsDropDownMenuOpen: false }))} to="/contatti">{page.english? "Contact" : "Contatti"}</Link>
            <button className={classes.button} onClick={() => setPage((prev: any) => ({ english: !page.english }))} >{page.english ? <span>Ita / <span className={classes.active}>Eng</span></span> : <span><span className={classes.active}>Ita </span>/ Eng</span>} </button>
          </div>
        </div>
      </Centralizer >
    </nav >
  )
}

export default MainNavBarDesktop;
