import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import AnimLogo from '../../../Logos/AnimLogo/AnimLogo';
import Logo from '../../../Logos/Logo/Logo';
import MainNavBar from '../../../Desktop/Navbar/MainNavBarDesktop/MainNavBarDesktop';
import classes from './LayoutHeaderMobile.module.scss';
import AnimLogoPiccoloMobile from '../../../Logos/AnimLogoPiccoloMobile/AnimLogoPiccoloMobile';
import AnimLogoMobile from '../../../Logos/AnimLogoMobile/AnimLogoMobile';

const LayoutHeaderMobile: React.FC = () => (
  <div className={classes.Layout}>
    {/* <Logo /> */}
    <AnimLogoMobile />
    {/* <AnimLogoPiccoloMobile /> */}
    {/* <MainNavBar /> */}
    {/* <AnimLogo /> */}
  </div>
);

export default LayoutHeaderMobile;