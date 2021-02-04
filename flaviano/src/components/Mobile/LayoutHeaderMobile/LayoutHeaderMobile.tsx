import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import AnimLogo from '../../Logos/AnimLogo/AnimLogo';
import AnimLogoPiccolo from '../../Logos/AnimLogoPiccolo/AnimLogoPiccolo';
import Logo from '../../Logos/Logo/Logo';
import MainNavBar from '../../Desktop/Navbar/MainNavBarDesktop/MainNavBarDesktop';
import classes from './LayoutHeaderMobile.module.css';

const LayoutHeaderMobile: React.FC = () => (
  <div className={classes.Layout}>
    {/* <Logo /> */}
    <div style={{position: "absolute", right:"-15vw"}}>
      <AnimLogoPiccolo />
    </div>
    {/* <MainNavBar /> */}
    {/* <AnimLogo /> */}
  </div>
);

export default LayoutHeaderMobile;