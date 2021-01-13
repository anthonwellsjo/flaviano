import { Link, PageProps } from 'gatsby';
import React from 'react';
import { ParallaxLayer } from 'react-spring/renderprops-addons';
import Logo from '../Logo/Logo';
import MainNavBar from '../Navbar/MainNavBar/MainNavBar';
import classes from './LayoutHeader.module.css';

const LayoutHeader: React.FC = () => (
  <div className={classes.Layout}>
      <Logo />
    <MainNavBar />
  </div>
);

export default LayoutHeader;