import React from 'react';
import classnames from 'classnames';
import classes from './SwitchArrow.module.scss';

interface props {
  open: boolean,
}

const SwitchArrow = ({ open }: props) => {
  return (
      <a className={open ? classnames(classes.arrowIcon, classes.open) : classes.arrowIcon}>
        <span className={classes.leftBar}></span>
        <span className={classes.rightBar}></span>
      </a>
  )
}

export default SwitchArrow;