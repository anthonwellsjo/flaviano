import React from 'react';
import Centralizer from '../StructureComponents/Centralizer/Centralizer';
import classes from './LayoutFrame.module.css';

const LayoutFrame: React.FC = ({ children }) => {
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

export default LayoutFrame;