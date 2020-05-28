import React from 'react';
import classes from './InformationBlock.module.css';
import ItemInfo from "./ItemIfo/ItemInfo";

const InformationBlock = props => {

    return (
        <div className={classes.InformationBlock}>
            <ItemInfo
                title={'Что такое SPA? Что такое SPA?'}
                description={'Немного о том что такое SPA и кому это подойдет.'}
                urlPage={'/about'}
                image={'https://img.freepik.com/free-photo/spa-arrangement-with-towel-soap-salt_23-2148268482.jpg?size=626&ext=jpg'}
            />
            <ItemInfo
                title={'Что такое SPA? Что такое SPA?'}
                description={'Немного о том что такое SPA и кому это подойдет.'}
                urlPage={'/about'}
                image={'https://falconclub.by/upload/iblock/47f/47f481e3337ee74c582423e8a331dc7b.jpg'}
            />
        </div>
    );
}

export default InformationBlock;