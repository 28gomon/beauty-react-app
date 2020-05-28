import React from 'react';
import classes from './Image.module.css';

const Image = props => {

    return (
        <div
            className={classes.Image}
            style={{
                backgroundImage: `url(${props.image})`,
                width: '100%',
                height: '100%',
                backgroundSize: 'cover',
                backgroundPosition: 'top center'
            }}
        />
    );
}

export default Image;