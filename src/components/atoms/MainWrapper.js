import React from 'react';
import style from './MainWrapper.module.scss';

const MainWrapper = ({ children }) => {
  return <main className={style.main}>{children}</main>;
};

export default MainWrapper;
