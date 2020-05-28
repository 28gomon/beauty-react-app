import React from 'react';
import classes from './MenuToggle.module.css';

const MenuToggle = props => {

    const cls = [
        classes.MenuToggle
    ];

    if (props.isOpen) {cls.push(classes.close)}

    return (
        <div className={cls.join(' ')}>
            <i
                onClick={props.onClick}
            />
        </div>
    );
}

export default MenuToggle;