import React from 'react';
import classes from './ContactBarMobileSmall.module.scss';
import fb from '../../../../images/fb-mobile.png';
import pint from '../../../../images/pint-mobile.png';
import inst from '../../../../images/inst-mobile.png';
import Centralizer from '../../../StructureComponents/Centralizer/Centralizer';
import { ContactInfoQuery } from '../../../../../types';
import { useContactInfoQuery } from '../../../../hooks/queries/useContactInfoQuery';



const ContactBarMobileSmall = () => {
  const { sanityGeneralSettings }: ContactInfoQuery = useContactInfoQuery();



  return (
    <div style={{ position: "absolute", width: "100%" }}>
      <Centralizer column>
        <p onClick={() => document.execCommand(sanityGeneralSettings.mailFlaviano)} className={classes.mail}>{sanityGeneralSettings.mailFlaviano}</p>
        <Centralizer>
          <a className={classes.link} href={sanityGeneralSettings.urlFacebook} target="_blank">
            <img className={classes.icon} src={fb} alt="facebook social" />
          </a>
          <a className={classes.link} href={sanityGeneralSettings.urlPinterest} target="_blank">
            <img className={classes.icon} src={pint} alt="pinterest social" />
          </a>
          <a style={{ marginTop: "1px", marginLeft: "3px" }} className={classes.link} href={sanityGeneralSettings.urlInsta} target="_blank">
            <img style={{ width: "18px" }} className={classes.icon} src={inst} alt="instagram social" />
          </a>
        </Centralizer>
      </Centralizer>
    </div>
  )
}

export default ContactBarMobileSmall;