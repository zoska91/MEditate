import MenuBar from 'components/MenuBar/MenuBar';
import React from 'react';
import style from './MainPage.module.scss';
import czerwoneOkregi from '../../assets/img/czerwone-okregi.png';
import Login from 'components/Login/Login';
import Reviews from 'components/Rewievs/Reviews';

const Main = () => {
    return (
        <div className={style.wrapper}>
            <MenuBar></MenuBar>
            <div className={style.topImage}>
                <h1>MEditate</h1>
                <p>Jeśli zdarzył Ci się kiedyś idealny moment bycia tu i teraz, który nagle przerywał Ci głos odgłos dzwonków lub głos mówiący “jeśli uciekłaś myślami, wróć do swojego oddechu”. To MEditate jest storzone z myślą o Tobie.</p>
                <button>Zaczynamy!</button>
            </div>
            <Login/>
            <Reviews/>
        </div>
    )
};

export default Main;