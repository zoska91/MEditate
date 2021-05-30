import React from 'react';
import style from './Login.module.scss';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Login = () => {
  return (
    <div className={style.wrapper}>
      <h1>Proste?</h1>
      <p>Zaloguj się, żeby mieć zawsze dostęp do swoich medytacji.</p>
      <div className={style.container}>
        <div className={style.avatar}>
          <Avatar shape='square' size='64' icon={<UserOutlined />}></Avatar>
        </div>
        <div className={style.input}>
          <input type='text'></input>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.checkbox}><input type='checkbox'></input></div>
        <div><p>Zapamietaj mnie</p></div>
      </div>
      <button>Zaloguj się</button>
    </div>
  );
};

export default Login;
