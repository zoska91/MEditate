import React from 'react';
import style from './SingleMeditation.module.scss';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from 'components/atoms/Button';

import { useHistory } from 'react-router';

const images = [
  'https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622366597/MEditate/circle_prbd7m.png',
  'https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622366597/MEditate/circle2_qgcikh.png',
  'https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622366597/MEditate/circle3_ogwpsn.png',
];

const SingleMeditation = ({ data, index }) => {
  const history = useHistory();
  return (
    <div className={style.wrapper}>
      <img src={images[index]} className={style.image} />
      <div className={style.desc}>
        <h2>{data.title}</h2>
        <p className={style.elements}>
          <span>{data.time},</span>
          <span>{data.voice},</span>
          <span>{data.background},</span>
          {data.begining && <span>Wstęp,</span>}
          {data.leading && <span>Prowadzenie,</span>}
          {data.ending && <span>Zakończenie</span>}
        </p>
      </div>
      <div className={style.buttons}>
        <Button
          icon={
            <PlayCircleOutlineIcon
              onClick={() => history.push(`/audio-player/${data.id}`)}
            />
          }
        />
        <Button icon={<RemoveCircleOutlineIcon />} />
      </div>
    </div>
  );
};

export default SingleMeditation;
