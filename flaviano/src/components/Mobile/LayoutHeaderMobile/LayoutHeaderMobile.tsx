import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import AnimLogo from '../../Logos/AnimLogo/AnimLogo';
import Logo from '../../Logos/Logo/Logo';
import MainNavBar from '../../Desktop/Navbar/MainNavBarDesktop/MainNavBarDesktop';
import classes from './LayoutHeaderMobile.module.css';
import AnimLogoPiccoloMobile from '../../Logos/AnimLogoPiccoloMobile/AnimLogoPiccoloMobile';

const LayoutHeaderMobile: React.FC = () => (
  <div className={classes.Layout}>
    {/* <Logo /> */}
    <AnimLogoPiccoloMobile />
    {/* <MainNavBar /> */}
    {/* <AnimLogo /> */}
  </div>
);

export default LayoutHeaderMobile;