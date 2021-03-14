import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import AnimLogo from '../../Logos/AnimLogo/AnimLogo';
import AnimLogoPiccolo from '../../Logos/AnimLogoPiccolo/AnimLogoPiccolo';
import Logo from '../../Logos/Logo/Logo';
import MainNavBar from '../Navbar/MainNavBarDesktop/MainNavBarDesktop';
import classes from './LayoutHeaderDesktop.module.scss';

const LayoutHeaderDesktop: React.FC = () => (
  <div className={classes.Layout}>
    {/* <Logo /> */}
    <AnimLogoPiccolo/>
    <MainNavBar />
    {/* <AnimLogo /> */}
  </div>
);

export default LayoutHeaderDesktop;