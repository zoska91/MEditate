import MenuBar from 'components/MenuBar/MenuBar';
import React from 'react';
import style from './MainPage.module.scss';
import { Container, Row } from 'react-bootstrap';
import Login from 'components/Login/Login';
import Reviews from 'components/Rewievs/Reviews';

const Main = () => {
    return (
        <div className={style.wrapper}>
            <MenuBar></MenuBar>
            <Container fluid className={style.topImage}>
                <h1>MEditate</h1>
                <p>Jeśli zdarzył Ci się kiedyś idealny moment bycia tu i teraz, który nagle przerywał Ci głos odgłos dzwonków lub głos mówiący “jeśli uciekłaś myślami, wróć do swojego oddechu”. To MEditate jest storzone z myślą o Tobie.</p>
                <button>Zaczynamy!</button> 
            </Container>
            <Container fluid className={style.secondContainer}>
                <h1>Jak to działa?</h1>
                <p>W MEditate, z dostępnych komponentów takich jak czas trwania, dźwięk w tle czy prowadzenie głosowe ułożysz medytację dopasowaną idealnie do tego, co lubisz najbardziej.</p>
                <div className={style.firsStepDiv}>
                    <div className={style.firsStepImage}></div>
                    <div className={style.firsStepButton}>
                        <button>Krok pierwszy: wybierz czas</button>
                        <p>Masz przerwę na kawę? A może potrzebujesz dłuższej chwili odpoczynku? Wybierz czas, który najbardziej Ci odpowada.</p>
                    </div>
                </div>
                <div></div>            
            </Container>
            <Container fluid className={style.thirdContainer}>                
                <div>
                    <button>Krok pierwszy: wybierz czas</button>
                    <p>Masz przerwę na kawę? A może potrzebujesz dłuższej chwili odpoczynku? Wybierz czas, który najbardziej Ci odpowada.</p>
                    <div></div>
                </div>
                <div></div>           
            </Container>
            <Login/>
            <Reviews/>
        </div>
    )
};

export default Main;