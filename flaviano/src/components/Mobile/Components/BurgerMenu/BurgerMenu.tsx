import React, { useContext } from 'react';
import { useSpring, animated } from 'react-spring';
import { PageContext } from '../../../../contexts/pageContext';
import classes from './BurgerMenu.module.scss';
import { Link } from 'gatsby';
import PageTitleDesktop from '../../../Desktop/PageTitleDesktop/PageTitleDesktop';

interface props {
  isHorizontal: boolean
}

const BurgerMenu = (props: props) => {
  const [page, setPage]: any = useContext(PageContext);
  const burgerProps = useSpring({
    reverse: page.burgerMenuOpen,
    to: { transform: "scale(1)" },
    from: { transform: "scale(0)" },
    config: {
      mass: 1,
      tension: 200,
      friction: 20
    }
  });
  const menuProps = useSpring({
    reverse: page.burgerMenuOpen,
    to: { opacity: 0 },
    from: { opacity: 1 }
  });

  const onBurgerClickEventHandler = () => {
    setPage((prev: any) => ({ ...prev, burgerMenuOpen: !page.burgerMenuOpen }));
  }

  if (props.isHorizontal) return (
    <>
      {page.burgerMenuOpen &&
        <animated.div style={{ ...menuProps, position: "absolute", zIndex: 5 }} >
          <div className={classes.linkContainer} style={{ position: "fixed", width: "250px", height: "250px", right: "20px", top: "30px" }}>
            <Link onClick={onBurgerClickEventHandler} to="/" className={classes.link}>
              <div className={classes.prodottiHor}>
                <div className={classes.innerContainer}>
                  <Link to="/">
                    <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Prodotti</PageTitleDesktop>
                  </Link>
                </div>
              </div>
            </Link>
            <Link onClick={onBurgerClickEventHandler} to="/materieprime" className={classes.link}>
              <div className={classes.materieprimeHor}>
                <div className={classes.innerContainer}>
                  <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Materie Prime</PageTitleDesktop>
                </div>
              </div>
            </Link>
            <Link onClick={onBurgerClickEventHandler} to="/chisiamo" className={classes.link}>
              <div className={classes.chisiamoHor}>
                <div className={classes.innerContainer}>
                  <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Chi Siamo</PageTitleDesktop>
                </div>
              </div>
            </Link>
            <Link onClick={onBurgerClickEventHandler} to="/contatti" className={classes.link}>
              <div className={classes.contattiHor}>
                <div className={classes.innerContainer}>
                  <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Contatti</PageTitleDesktop>
                </div>
              </div>
            </Link>
          </div>
        </animated.div>
      }
      <animated.div style={{ ...burgerProps }} onClick={() => onBurgerClickEventHandler()} className={classes.container}>
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
      </animated.div>
    </>
  )

  return (
    <>
      {page.burgerMenuOpen &&
        <animated.div style={{ ...menuProps, position: "absolute", zIndex: 5 }} >
          <div className={classes.linkContainer} style={{ position: "fixed", width: "250px", height: "350px", right: "20px", top: "30px" }}>
            <Link onClick={onBurgerClickEventHandler} to="/" className={classes.link}>
              <div className={classes.prodotti}>
                <div className={classes.innerContainer}>
                  <Link to="/">
                    <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Prodotti</PageTitleDesktop>
                  </Link>
                </div>
              </div>
            </Link>
            <Link onClick={onBurgerClickEventHandler} to="/materieprime" className={classes.link}>
              <div className={classes.materieprime}>
                <div className={classes.innerContainer}>
                  <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Materie Prime</PageTitleDesktop>
                </div>
              </div>
            </Link>
            <Link onClick={onBurgerClickEventHandler} to="/chisiamo" className={classes.link}>
              <div className={classes.chisiamo}>
                <div className={classes.innerContainer}>
                  <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Chi Siamo</PageTitleDesktop>
                </div>
              </div>
            </Link>
            <Link onClick={onBurgerClickEventHandler} to="/contatti" className={classes.link}>
              <div className={classes.contatti}>
                <div className={classes.innerContainer}>
                  <PageTitleDesktop letterSpacing={"0.5em"} lineHeight={"1.4em"} right fontSize={"1em"}>Contatti</PageTitleDesktop>
                </div>
              </div>
            </Link>
          </div>
        </animated.div>
      }
      <animated.div style={{ ...burgerProps }} onClick={() => onBurgerClickEventHandler()} className={classes.container}>
        <div className={classes.line} />
        <div className={classes.line} />
        <div className={classes.line} />
      </animated.div>
    </>
  )
}

export default BurgerMenu;