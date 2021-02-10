import { FluidArgs } from 'gatsby-source-sanity/lib-es5/images/getGatsbyImageProps';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import classes from './ContactBarMobile.module.scss';
import fb from '../../../../images/fb-mobile.png';
import pint from '../../../../images/pint-mobile.png';
import inst from '../../../../images/inst-mobile.png';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';



const ContactBarMobile = () => {
  return (
      <div style={{ position: "absolute", width: "100%" }}>
        <Centralizer column>
          <p onClick={() => document.execCommand("info@flavianodolci.com")} className={classes.mail}>info@flavianodolci.com</p>
          <Centralizer>
            <a className={classes.link} href="www.facebook.com" target="_blank">
              <img className={classes.icon} src={fb} alt="facebook social" />
            </a>
            <a className={classes.link} href="www.facebook.com" target="_blank">
              <img className={classes.icon} src={pint} alt="pinterest social" />
            </a>
            <a style={{marginTop:"1px", marginLeft: "3px"}} className={classes.link} href="www.facebook.com" target="_blank">
              <img style={{width: "18px"}} className={classes.icon} src={inst} alt="instagram social" />
            </a>
          </Centralizer>
        </Centralizer>
      </div>
  )
}

export default ContactBarMobile;