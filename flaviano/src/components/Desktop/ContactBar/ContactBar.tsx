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
      <div style={{ position: "absolute", marginTop: "450px", backgroundColor: "red", width: "100%", height: "200px" }}>
        <Centralizer>
          <img className={classes.icon} src={fb} alt="facebook social" />
          <img src={pint} alt="pinterest social" />
          <img src={inst} alt="instagram social" />
        </Centralizer>
      </div>
      <div style={{ maxWidth: "100%", marginTop: "350px", height: "300px", overflow: "hidden" }}>
        <Img fluid={fluid} alt="Hands baking" />
      </div>
    </>
  )
}

export default ContactBar;