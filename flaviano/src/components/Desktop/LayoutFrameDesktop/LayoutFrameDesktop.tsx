import React from 'react';
import Centralizer from '../../StructureComponents/Centralizer/Centralizer';
import classes from './LayoutFrameDesktop.module.css';

const LayoutFrameDesktop: React.FC = ({ children }) => {
  return (
    <div className={classes.backGround}>
      <Centralizer>
        <div className={classes.pageBody}>
          {children}
        </div>
      </Centralizer>
    </div>
  )
}

export default LayoutFrameDesktop;