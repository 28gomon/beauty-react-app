import React from 'react';
import classes from './Drawer.module.css';
import {Auxiliary} from "../../../hoc/Auxiliary/Auxiliary";
import Backdrop from "../../UI/Backdrop/Backdrop";

const Drawer = props => {

    const cls = [classes.Drawer];

    if (props.isOpen) {
        cls.push(classes.close)
    }

    return (
        <Auxiliary>
            <nav className={cls.join(' ')}>
                <div className={classes.Wrapper}>
                    {props.children}
                </div>
            </nav>
            {props.isOpen ? <Backdrop onClick={props.onClick}/> : null}
        </Auxiliary>
    );
}

export default Drawer;