import React from 'react';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';
import BackDropDesktop from '../BackDropDesktop/BackDropDesktop';
import LayoutHeaderDesktop from '../LayoutHeaderDesktop/LayoutHeaderDesktop';
import classes from './LayoutFrameDesktop.module.css';

const LayoutFrameDesktop: React.FC = ({ children }) => {
  return (
    <>
      <div className={classes.backGround}>
        <Centralizer>
          <div className={classes.pageBody}>
            {children}
          </div>
        </Centralizer>
        <BackDropDesktop />
      <LayoutHeaderDesktop />
      </div>
    </>
  )
}

export default LayoutFrameDesktop;