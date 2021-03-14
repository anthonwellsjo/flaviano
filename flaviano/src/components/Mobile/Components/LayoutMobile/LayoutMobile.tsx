import React, { useContext } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './LayoutMobile.module.scss';
import flavianoImg from '../../../../images/flavianoLogoNavbar.png';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../../../contexts/pageContext';

interface props {
  horizontal?: boolean | undefined,
  children: React.ReactNode
}

const LayoutMobile = ({ children, horizontal }: props) => {
  const [page, setPage]: any = useContext(PageContext);
  const isHorizontal = horizontal == undefined || !horizontal ? false : true;
  console.log("horizontal", isHorizontal);
  const logoProps = useSpring({
    reverse: page.hideMobileNavbarLogo,
    to: { transform: "translateY(-60px)" },
    from: { transform: "translateY(-120px)" }
  })


  if (horizontal) return (
    <>
      {children}
      <BurgerMenu isHorizontal={isHorizontal} />
      <div className={classes.navbar}>
      </div>
      <animated.div style={logoProps}>
        <Link to="/">
          <img className={classes.homeButton} src={flavianoImg} alt="home button logo" />
        </Link>
      </animated.div>
    </>
  )
  return (
    <>
      {children}
      <BurgerMenu isHorizontal={isHorizontal} />
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