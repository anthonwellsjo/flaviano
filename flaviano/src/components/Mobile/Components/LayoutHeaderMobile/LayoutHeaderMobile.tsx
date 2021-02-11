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
  backGroundFullPage?: boolean
}


const LayoutHeaderMobile = ({ home, backGroundFullPage }: Props) => {
  if (backGroundFullPage) return (
    <div style={{ height: "100vh" }} className={classes.Layout}>
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