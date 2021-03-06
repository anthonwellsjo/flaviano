import React from 'react';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';
import BackDropDesktop from '../BackDropDesktop/BackDropDesktop';
import LayoutHeaderDesktop from '../LayoutHeaderDesktop/LayoutHeaderDesktop';
import classes from './LayoutFrameDesktop.module.scss';

const LayoutFrameDesktop: React.FC = ({ children }) => {
  return (
    <>
      <div className={classes.backGround}>
        <Centralizer column>
          <div className={classes.pageBody}>
            {children}
          </div>
          <BackDropDesktop />
        </Centralizer>
      </div>
      <div style={{ width: "100vw", maxWidth: "1300px", position: "fixed", zIndex: 2 }}>
        <LayoutHeaderDesktop />
      </div>
    </>
  )
}

export default LayoutFrameDesktop;