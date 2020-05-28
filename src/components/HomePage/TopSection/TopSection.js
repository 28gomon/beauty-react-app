import React from 'react';
import classes from './TopSection.module.css';
import InformationBlock from "./InformationBlock/InformationBlock";
import Slider from "../../UI/Slider/Slider";

const TopSection = props => {

    return (
        <div className={classes.TopSection}>
            <div className={classes.LeftBlock}>
                <Slider/>
            </div>

            <div className={classes.RightBlock}>
                <InformationBlock/>
            </div>
        </div>
    );
}

export default TopSection;