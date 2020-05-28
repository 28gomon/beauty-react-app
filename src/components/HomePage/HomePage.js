import React from 'react';
import classes from './HomePage.module.css';
import TopSection from "./TopSection/TopSection";
import InformationSection from "./InformationSection/InformationSection";

const HomePage = props => {

    return (
        <div className={classes.HomePage}>
            <TopSection/>

            <InformationSection/>
        </div>
    );
}

export default HomePage;