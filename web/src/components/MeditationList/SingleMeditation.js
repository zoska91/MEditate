import React from 'react';
import style from './SingleMeditation.module.scss';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Button from 'components/atoms/Button';

import Img1 from 'assets/images/circle.png';
import Img2 from 'assets/images/circle2.png';
import Img3 from 'assets/images/circle3.png';
import { useHistory } from 'react-router';

const images = [Img1, Img2, Img3];

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
