import React from 'react';
import classes from './PageTitleDesktop.module.css';

interface pageProps {
  fontSize?: string,
  letterSpacing?: string,
  children: string,
  lineHeight?: string
}

const PageTitleDesktop = (props: pageProps) => {
  return (
    <span style={{ lineHeight: props.lineHeight? props.lineHeight : "1em", fontSize: props.fontSize ? props.fontSize : "3em", letterSpacing: props.letterSpacing ? props.letterSpacing : "0.3em" }} className={classes.text}>
      {props.children}
    </span>
  )
}

export default PageTitleDesktop;