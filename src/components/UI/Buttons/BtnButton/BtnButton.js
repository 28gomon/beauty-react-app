import React from 'react';
import classes from './BtnButton.module.css';

const BtnButton = props => {

    const cls = [
        'button',
        classes.BtnButton

    ]

    return (
        <div className={cls.join(' ')}>
            <button
                disabled={props.disabled}
                onClick={props.onClick}
            >
                {props.children}
            </button>
        </div>
    );
}

export default BtnButton;