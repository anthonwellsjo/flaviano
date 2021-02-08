import React from 'react';
import classes from './PageTitleDesktop.module.css';

interface pageProps {
  fontSize?: string,
  letterSpacing?: string,
  children: string,
  lineHeight?: string,
  justify? : boolean
}

const PageTitleDesktop = (props: pageProps) => {
  if (props.justify) return (
    <p style={{ textAlign:"justify", lineHeight: props.lineHeight? props.lineHeight : "1em", fontSize: props.fontSize ? props.fontSize : "3em", letterSpacing: props.letterSpacing ? props.letterSpacing : "0.3em" }} className={classes.text}>
      {props.children}
    </p>
  )
  return (
    <p style={{ lineHeight: props.lineHeight? props.lineHeight : "1em", fontSize: props.fontSize ? props.fontSize : "3em", letterSpacing: props.letterSpacing ? props.letterSpacing : "0.3em" }} className={classes.text}>
      {props.children}
    </p>
  )
}

export default PageTitleDesktop;