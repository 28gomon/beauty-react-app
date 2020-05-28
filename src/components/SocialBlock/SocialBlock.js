import React from 'react';
import classes from './SocialBlock.module.css';

const SocialBlock = props => {

    const cls = [
        classes.SocialBlock,
        classes[props.color]
    ]

    return (
        <div className={cls.join(' ')}>
            {props.children}
        </div>
    );
}

export default SocialBlock;