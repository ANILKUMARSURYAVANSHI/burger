import React from 'react';
import classes from './Logo.css'
import logoUrl from '../../assets/images/burger-logo.png';

const logo = (props) => (
    <div style={{height:props.height}} className={classes.Logo}>
        <img src={logoUrl} alt=""/>
    </div>
);

export default logo;