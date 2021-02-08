import { FluidArgs } from 'gatsby-source-sanity/lib-es5/images/getGatsbyImageProps';
import React from 'react';
import Img, { FluidObject } from 'gatsby-image';
import classes from './ContactBar.module.scss';
import fb from '../../../images/jam_facebook-circle.png';
import pint from '../../../images/jam_pinterest-circle.png';
import inst from '../../../images/logos_instagram-icon.png';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';


interface Props {
  fluid: FluidObject
}

const ContactBar = ({ fluid }: Props) => {
  return (
    <>
      <div style={{ position: "absolute", marginTop: "450px", width: "50%", height: "200px", zIndex: 1 }}>
        <Centralizer column>
          <p className={classes.text}>PER MAGGIORI INFORMAZIONI CONTATTACI</p>
          <p onClick={() => document.execCommand("info@flavianodolci.com")} className={classes.mail}>info@flavianodolci.com</p>
          <p onClick={() => document.execCommand("+39 366 529 3028")} className={classes.phone}>+39 366 529 3028</p>
          <Centralizer>
            <a className={classes.link} href="www.facebook.com" target="_blank">
              <img className={classes.icon} src={fb} alt="facebook social" />
            </a>
            <a className={classes.link} href="www.facebook.com" target="_blank">
              <img className={classes.icon} src={pint} alt="pinterest social" />
            </a>
            <a style={{marginTop:"-4px", marginLeft: "6px"}} className={classes.link} href="www.facebook.com" target="_blank">
              <img className={classes.icon} src={inst} alt="instagram social" />
            </a>
          </Centralizer>
        </Centralizer>
      </div>
      <div onClick={() => alert("HEJ")} style={{ maxWidth: "100%", marginTop: "350px", height: "300px", overflow: "hidden" }}>
        <Img fluid={fluid} alt="Hands baking" />
      </div>
    </>
  )
}

export default ContactBar;