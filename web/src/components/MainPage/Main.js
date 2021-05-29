import MenuBar from 'components/MenuBar/MenuBar';
import React from 'react';
import style from './MainPage.module.scss';

const Main = () => {
    return (
        <div className={style.wrapper}>
            <MenuBar></MenuBar>
        </div>
    )
};

export default Main;