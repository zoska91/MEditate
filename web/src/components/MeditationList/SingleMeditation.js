import React from 'react';
import style from './SingleMeditation.module.scss';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from 'components/atoms/Button';

const SingleMeditation = ({ data }) => {
  return (
    <div className={style.wrapper}>
      <img src={data.img} className={style.image} />
      <div className={style.desc}>
        <h2>{data.title}</h2>
        <p className={style.elements}>
          {data.elements.map((el, i) => (
            <span key={el}>
              {el}
              {i < data.elements.length - 1 && ', '}
            </span>
          ))}
        </p>
      </div>
      <div>
        <Button icon={<PlayCircleOutlineIcon />} />
        <Button icon={<RemoveCircleOutlineIcon />} />
      </div>
    </div>
  );
};

export default SingleMeditation;
