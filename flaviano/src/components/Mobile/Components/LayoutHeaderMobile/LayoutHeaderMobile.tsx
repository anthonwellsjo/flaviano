import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import AnimLogo from '../../../Logos/AnimLogo/AnimLogo';
import Logo from '../../../Logos/Logo/Logo';
import MainNavBar from '../../../Desktop/Navbar/MainNavBarDesktop/MainNavBarDesktop';
import classes from './LayoutHeaderMobile.module.scss';
import AnimLogoPiccoloMobile from '../../../Logos/AnimLogoPiccoloMobile/AnimLogoPiccoloMobile';
import AnimLogoMobile from '../../../Logos/AnimLogoMobile/AnimLogoMobile';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

interface Props {
  home?: boolean,
  backGroundFullPage?: boolean,
  backGroundFullPageXl?: boolean,
  horizontal?: boolean
}


const LayoutHeaderMobile = ({ home, backGroundFullPage, backGroundFullPageXl, horizontal }: Props) => {
  const isHoriozontal = horizontal === undefined || !horizontal ? false : true;
  if (backGroundFullPage) return (
    <div style={{ height: "100vh" }} className={classes.Layout}>
      {/* <Logo /> */}
      {home && !isHoriozontal && <AnimLogoMobile />}
      {/* <AnimLogoPiccoloMobile /> */}
      {/* <MainNavBar /> */}
    </div>
  )
  if (backGroundFullPageXl) return (
    <div style={{ height: "215vh" }} className={classes.Layout}>
      {/* <Logo /> */}
      {home && <AnimLogoMobile />}
      {/* <AnimLogoPiccoloMobile /> */}
      {/* <MainNavBar /> */}
    </div>
  )
  return (
    <div className={classes.Layout}>
      {/* <Logo /> */}
      {home && <AnimLogoMobile />}
      {/* <AnimLogoPiccoloMobile /> */}
      {/* <MainNavBar /> */}
    </div>
  )
};

export default LayoutHeaderMobile;