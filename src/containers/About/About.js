import React from 'react';
import classes from './About.module.css';

export default class About extends React.Component {

    render() {
        return (
            <div className={classes.About}>
                <div>
                    <h1>About me</h1>
                </div>
            </div>
        );
    }
}