import React from 'react';
import style from 'components/HomePage/Home.module.scss';

import SingleButton from 'components/HomePage/SingleButton';

import My from 'assets/img/my.png';
import New from 'assets/img/new.png';
import Losowe from 'assets/img/losowa.png';
import TitlePage from 'components/atoms/TitlePage';

const HomePage = () => {
  return (
    <div className={style.wrapper}>
      <TitlePage center title='Czym dziś chcesz się zająć?' />

      <div className={style.buttons}>
        <SingleButton label='Moje medytacje' img={My} to='/my-meditations' />
        <SingleButton
          label='Nowa medytacja'
          img={New}
          to='/create-meditation'
        />
        <SingleButton
          label='Losowa medytacja'
          img={Losowe}
          to='/audio-player/0005'
        />
      </div>
    </div>
  );
};

export default HomePage;
