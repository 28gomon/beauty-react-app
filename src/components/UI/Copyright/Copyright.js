import React from 'react';
import classes from './Copyright.module.css';

const Copyright = props => {

    return (
        <div className={classes.Copyright}>
            <span><i className={'fa fa-copyright'}/> 2019 - {new Date().getFullYear()}</span>
        </div>
    );
}

export default Copyright;