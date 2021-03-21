import React, { useContext } from 'react';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import classes from './LayoutMobile.module.scss';
import flavianoImg from '../../../../images/flavianoLogoNavbar.png';
import { Link } from 'gatsby';
import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../../../contexts/pageContext';
import ita from '../../../../images/italyFlag.png';
import eng from '../../../../images/britainFlag.png';

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
      <button className={classes.langHor} onClick={() => setPage((prev: any) => ({ ...prev, english: !page.english }))}> {page.english ? <img style={{height:"30px"}} src={eng} alt="english" /> : <img style={{height:"30px"}} src={ita} alt="italiano" />}</button>
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
      <button className={classes.lang} onClick={() => setPage((prev: any) => ({ ...prev, english: !page.english }))}> {page.english ? <img style={{height:"25px"}} src={eng} alt="english" /> : <img style={{height:"25px"}} src={ita} alt="italiano" />}</button>
    </>
  )
}

export default LayoutMobile;