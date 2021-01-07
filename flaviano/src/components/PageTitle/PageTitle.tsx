import React from 'react';
import classes from './PageTitle.module.css';

const PageTitle: React.FC = ({ children } ) => {
  return (
    <span className={classes.text}>
      {children}
    </span>
  )
}

export default PageTitle;