import { MenuItem } from './MenuItem/MenuBarItem';
import React from 'react';
import style from './MenuBar.module.scss';
import MenuBarItem from './MenuItem/MenuBarItem';

const MenuBar = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <MenuBarItem name='Strona Główna'></MenuBarItem>
                <MenuBarItem name='Jak to działa?'></MenuBarItem>
                <MenuBarItem name='Recenzje'></MenuBarItem>
                <MenuBarItem name='Premium+'></MenuBarItem>
            </div>
        </div>
    )
};

export default MenuBar;