import React from 'react';
import classes from './PageTitle.module.css';

interface pageProps {
  fontSize?: string,
  letterSpacing?: string,
  children: string
}

const PageTitle = (props: pageProps) => {
  return (
    <span style={{ fontSize: props.fontSize ? props.fontSize : "3em", letterSpacing: props.letterSpacing ? props.letterSpacing : "0.3em" }} className={classes.text}>
      {props.children}
    </span>
  )
}

export default PageTitle;