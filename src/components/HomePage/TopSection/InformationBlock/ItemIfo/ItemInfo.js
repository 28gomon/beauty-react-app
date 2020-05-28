import React from 'react';
import classes from './ItemInfo.module.css';
import {NavLink} from "react-router-dom";
import Image from "../../../../UI/Slider/Image/Image";

const ItemInfo = props => {

    return (
        <div className={classes.ItemInfo}>
            <h2 className={classes.title}>
                {
                    props.title.length > 60 ? props.title.substring(0, 60) + '...' : props.title
                }
            </h2>
            <span className={classes.description}>
                {
                    props.description.length > 70 ?
                        props.description.substring(0, 70) + '...' : props.description
                }
            </span>
            <NavLink
                to={props.urlPage}
                className={classes.urlPage}
            >
                Перейти <i className={'fa fa-angle-right'}/>
            </NavLink>
            <Image
                image={props.image}
            />
        </div>
    );
}

export default ItemInfo;