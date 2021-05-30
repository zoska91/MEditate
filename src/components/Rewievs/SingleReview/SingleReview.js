import React from 'react';
import style from './SingleReview.module.scss';

const SingleReview = ({ desc, name, date, img }) => {
  return (
    <div className={style.wrapper}>
      <p className={style.desc}>{desc}</p>
      <div className={style.data}>{name}</div>
      <div className={style.data}>{date}</div>
      <div className={style.img}>
        <img src={img} />
      </div>
    </div>
  );
};

export default SingleReview;
