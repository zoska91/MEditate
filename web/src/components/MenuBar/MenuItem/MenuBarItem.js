import React from 'react';
import style from './MenuItem.module.scss';

const MenuBarItem = props => {
    return <div className={style.wrapper}>{props.name}</div>
};

export default MenuBarItem;