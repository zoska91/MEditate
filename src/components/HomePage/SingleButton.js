import React from 'react';
import { Link } from 'react-router-dom';
import style from './Home.module.scss';

const SingleButton = ({ label, img, to }) => {
  return (
    <Link to={to} className={style.button}>
      <img src={img} alt='icon' />
      <p className={style.label}>{label}</p>
    </Link>
  );
};

export default SingleButton;
