import React from 'react';
import classes from './Logo.module.css';
import {NavLink} from "react-router-dom";

const Logo = props => {

    const cls = [
        classes.Logo,
        classes[props.styleLogo]
    ]

    return (
        <div className={cls.join(' ')}>
            <NavLink
                to={'/'}
                onClick={props.onClick}
            >
                {props.label}
                <span>{props.slogan}</span>
            </NavLink>
        </div>
    );
}

export default Logo;