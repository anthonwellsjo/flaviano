import React, { CSSProperties, ReactElement } from 'react';
import { QuoteStyle } from '../../../types';
import classes from './Quote.module.css';


interface QuoteProps {
  style?: QuoteStyle,
  children: ReactElement | string,
  rightQuoteY?: string,
  rightQuoteX?: string,
}

const Quote = ({ children, style, rightQuoteY, rightQuoteX }: QuoteProps) => {
  let styles: CSSProperties = {
    fontSize: "1.5rem",
    fontStyle: "italic",
    fontWeight: "normal",
    fontFamily: "IbarraRealNovaItalic"
  }



  switch (style) {
    case QuoteStyle.header: {
      styles.fontSize = "7em";
      styles.fontWeight = "bold";
      styles.fontStyle = "normal";
      styles.marginLeft = "-35px";
      styles.marginTop = "-15px";
      styles.fontFamily = "HomepagebaukastenBold";
      break;
    }
    default: {
      break;
    }
  }

  return (
    <div className={classes.body}>
      <div style={{ transform: style == QuoteStyle.header ? "scale(1.3)" : "scale(1)" }} className={classes.leftQuote}>
        <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.656 20.6C15.656 19.928 15.752 19.16 15.944 18.296C17.576 11 22.184 5.19199 29.768 0.871993C29.48 2.11999 29 3.03199 28.328 3.60799C24.68 6.67999 22.472 10.184 21.704 14.12C21.512 15.272 21.752 16.376 22.424 17.432C23.096 18.392 24.056 18.968 25.304 19.16L24.728 20.744C23.576 20.84 21.56 22.04 18.68 24.344C16.664 24.056 15.656 22.808 15.656 20.6ZM0.824 20.6C0.824 19.928 0.92 19.16 1.112 18.296C2.36 12.056 6.248 6.63199 12.776 2.024L14.936 0.871993C14.648 2.11999 14.168 3.03199 13.496 3.60799C9.848 6.67999 7.64 10.184 6.872 14.12C6.68 15.272 6.92 16.376 7.592 17.432C8.264 18.392 9.224 18.968 10.472 19.16L9.896 20.744C8.168 21.032 6.344 22.136 4.424 24.056C4.232 24.248 4.04 24.344 3.848 24.344C1.832 24.056 0.824 22.808 0.824 20.6Z" fill="#050200" />
        </svg>
      </div>
      <span style={{ ...styles }} className={classes.text}>
        {children}
      </span>
      <div style={{ transform: rightQuoteX ? `translateX(${rightQuoteX})` : "translateX(0" }}>
        <div style={{ transform: rightQuoteY ? `translateY(${rightQuoteY})` : "translateY(0)" }}>
          <div style={{ transform: style == QuoteStyle.header ? "translateY(60px) scale(1.3)" : "scale(1)" }} className={classes.rightQuote}>
            <svg width="30" height="25" viewBox="0 0 30 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.344 4.4C14.344 5.072 14.248 5.84 14.056 6.704C12.424 14 7.81601 19.808 0.232005 24.128C0.520007 22.88 1.00001 21.968 1.67201 21.392C5.32001 18.32 7.52801 14.816 8.29601 10.88C8.48801 9.728 8.24801 8.624 7.57601 7.568C6.90401 6.608 5.94401 6.032 4.69601 5.84L5.27201 4.256C6.42401 4.16 8.44001 2.96 11.32 0.656002C13.336 0.944001 14.344 2.192 14.344 4.4ZM29.176 4.4C29.176 5.072 29.08 5.84 28.888 6.704C27.64 12.944 23.752 18.368 17.224 22.976L15.064 24.128C15.352 22.88 15.832 21.968 16.504 21.392C20.152 18.32 22.36 14.816 23.128 10.88C23.32 9.728 23.08 8.624 22.408 7.568C21.736 6.608 20.776 6.032 19.528 5.84L20.104 4.256C21.832 3.968 23.656 2.864 25.576 0.944003C25.768 0.752003 25.96 0.656003 26.152 0.656003C28.168 0.944002 29.176 2.192 29.176 4.4Z" fill="#050200" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Quote;