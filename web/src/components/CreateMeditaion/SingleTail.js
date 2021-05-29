import React from 'react';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import style from './CreateMeditation.module.scss';

const SingleTail = ({ setValue, label, value, type, checked, icon }) => {
  return (
    <button
      type='submit'
      className={style.singleTail}
      onClick={() => setValue(value, type)}
      style={{ border: checked ? '7px solid #46949c' : null }}
    >
      {icon && <VolumeUpIcon />}
      {label}
    </button>
  );
};

export default SingleTail;
