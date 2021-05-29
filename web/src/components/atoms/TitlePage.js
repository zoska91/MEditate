import React from 'react';
import style from './Title.module.scss';

const TitlePage = ({ title }) => {
  return <h1 className={style.title}>{title}</h1>;
};

export default TitlePage;
