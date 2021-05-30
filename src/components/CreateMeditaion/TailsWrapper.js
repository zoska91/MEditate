import React from 'react';

import style from './CreateMeditation.module.scss';

const TailsWrapper = ({ children }) => {
  return <div className={style.tailsWrapper}>{children}</div>;
};

export default TailsWrapper;
