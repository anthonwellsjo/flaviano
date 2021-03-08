import React, { useContext } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './LayoutMobile.module.scss';
import flavianoImg from '../../../../images/flavianoLogoNavbar.png';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../../../contexts/pageContext';
const LayoutMobile: React.FC = ({ children }) => {
  const [page, setPage]: any = useContext(PageContext);
  const logoProps = useSpring({
    reverse: page.hideMobileNavbarLogo,
    to: { transform: "translateY(-60px)" },
    from: { transform: "translateY(-120px)" }
  })


  return (
    <>
      {children}
      <BurgerMenu />
      <div className={classes.navbar}>
      </div>
      <animated.div style={logoProps}>
        <Link to="/">
          <img className={classes.homeButton} src={flavianoImg} alt="home button logo" />
        </Link>
      </animated.div>
    </>
  )
}

export default LayoutMobile;