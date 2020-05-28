import React from 'react';
import classes from './Icon.module.css';

const Icon = props => {

    return (
        <span className={classes.Icon}>
            <a href={props.href}
               target={'_blank'}
                rel={'noopener noreferrer'}
            >
                <i className={'fa ' + props.code}/>
            </a>
        </span>
    );
}

export default Icon;