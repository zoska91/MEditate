import React from 'react';
import style from './Button.module.scss';

const Button = ({ icon }) => {
  return <button className={style.button}>{icon}</button>;
};

export default Button;
