import React from 'react';
import style from './Button.module.scss';

const Button = ({ icon, ...props }) => {
  return (
    <button className={style.button} {...props}>
      {icon}
    </button>
  );
};

export default Button;
