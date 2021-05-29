import React from 'react';
import style from './Title.module.scss';

const TitlePage = ({ title, center }) => {
  return (
    <h1 className={style.title} style={{ textAlign: center ? 'center' : null }}>
      {title}
    </h1>
  );
};

export default TitlePage;
