import React from 'react';

import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import style from './CreateMeditation.module.scss';

const SingleTail = ({ setValue, label, value, type, checked, icon }) => {
  return (
    <button
      type='submit'
      className={`${style.singleTail} ${checked ? style.checked : ''}`}
      onClick={() => setValue(value, type)}
    >
      {icon && <VolumeUpIcon />}
      {label}
    </button>
  );
};

export default SingleTail;
