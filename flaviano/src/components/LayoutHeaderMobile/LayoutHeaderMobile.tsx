import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import AnimLogo from '../AnimLogo/AnimLogo';
import AnimLogoPiccolo from '../AnimLogoPiccolo/AnimLogoPiccolo';
import Logo from '../Logo/Logo';
import MainNavBar from '../Navbar/MainNavBar/MainNavBar';
import classes from './LayoutHeaderMobile.module.css';

const LayoutHeaderMobile: React.FC = () => (
  <div className={classes.Layout}>
    {/* <Logo /> */}
    <AnimLogoPiccolo/>
    {/* <MainNavBar /> */}
    {/* <AnimLogo /> */}
  </div>
);

export default LayoutHeaderMobile;