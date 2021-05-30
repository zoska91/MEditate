import React from 'react';
import style from 'components/HomePage/Home.module.scss';

import SingleButton from 'components/HomePage/SingleButton';

import TitlePage from 'components/atoms/TitlePage';

const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <TitlePage center title='Czym dziś chcesz się zająć?' />

      <div className={style.buttons}>
        <SingleButton
          label='Moje medytacje'
          img='https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622378290/MEditate/moje-medytacje2-duze_xlbvuv.png'
          to='/my-meditations'
        />
        <SingleButton
          label='Nowa medytacja'
          img='https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622367758/MEditate/new_ufnchf.png'
          to='/create-meditation'
        />
        <SingleButton
          label='Losowa medytacja'
          img='https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622367259/MEditate/logo-meditate_odzawz.png'
          to='/audio-player/0005'
        />
      </div>
    </div>
  );
};

export default HomePage;
