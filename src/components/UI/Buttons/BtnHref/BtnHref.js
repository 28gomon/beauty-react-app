import React from 'react';
import classes from './BtnHref.module.css';
import {NavLink} from "react-router-dom";

const BtnHref = props => {

    const cls = [
        'button',
        classes.BtnHref
    ];

    return (
        <div className={cls.join(' ')}>
            <NavLink to={props.link || '/'}>
                {props.children}
            </NavLink>
        </div>
    );
}

export default BtnHref;