import React from 'react';
import classes from './centralizer.module.css';
import classnames from 'classnames';

const Centralizer = props => {
    let classSpec = classes.centralizer;
    let styleSpec = {position: ""};
    if (props.column) {
        classSpec = classnames(classes.centralizer, classes.column)
    }
    if(props.column && props.space){
        classSpec = classnames(classes.centralizer, classes.column, classes.space)
    }
    if(props.space){
        classSpec = classnames(classes.centralizer, classes.space)
    }
    if(props.evenly){
        classSpec = classnames(classes.centralizer, classes.evenly)
    }
   
    if(props.position !== undefined){
      console.log("position",props.position);
      styleSpec = {...styleSpec, position: `${props.position}`};
    }
    return (
        <div className={classSpec} style={styleSpec}>
            {props.children}
        </div>
    )
}

export default Centralizer;