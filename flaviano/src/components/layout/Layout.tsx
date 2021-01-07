import { Link, PageProps } from 'gatsby';
import React from 'react';
import Logo from '../Logo/Logo';
import MainNavBar from '../MainNavBar/MainNavBar';
import classes from './Layout.module.css';

const MainLayout: React.FC = ({ children } ) => (
  <div className={classes.Layout}>
    <Logo/>
    <MainNavBar/>
    {children}
  </div>
);

export default MainLayout;