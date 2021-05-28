import React from 'react';
import style from './Button.module.scss';

const Button = ({ icon, onClick }) => {
  return (
    <button className={style.button} onClick={() => onClick || null}>
      {icon}
    </button>
  );
};

export default Button;
