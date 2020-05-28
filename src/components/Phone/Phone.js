import React from 'react';
import classes from './Phone.module.css';
import Number from "./Number/Number";

const Phone = props => {

    const number = props.number;

    return (
        <div className={classes.Phone}>
            <Number strNumber={number} />
        </div>
    );
}

export default Phone;