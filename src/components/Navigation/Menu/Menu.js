import React from 'react';
import classes from './Menu.module.css';
import {NavLink} from "react-router-dom";

const Menu = props => {

    return (
        <ul>
            {
                props.arrayNav.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink
                                to={item.to}
                                exact={item.exact}
                                activeClassName={classes.active}
                                onClick={props.onClick}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    )
                })
            }
        </ul>
    );
}

export default Menu;