import React from 'react';
import classes from './Home.module.css';
import HomePage from "../../components/HomePage/HomePage";

export default class Home extends React.Component {

    render() {
        return (
            <div className={classes.Home}>
                <div>

                    <HomePage/>

                </div>
            </div>
        );
    }
}