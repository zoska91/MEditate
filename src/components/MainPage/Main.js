import MenuBar from 'components/MenuBar/MenuBar';
import React from 'react';
import style from './MainPage.module.scss';
import { Container, Row } from 'react-bootstrap';
import Login from 'components/Login/Login';
import Reviews from 'components/Rewievs/Reviews';
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <MenuBar></MenuBar>
        <Container fluid className={style.topImage}>
          <h1>MEditate</h1>
          <p>
            Jeśli zdarzył Ci się kiedyś idealny moment bycia tu i teraz, który
            nagle przerywał Ci głos odgłos dzwonków lub głos mówiący “jeśli
            uciekłaś myślami, wróć do swojego oddechu”. To MEditate jest
            storzone z myślą o Tobie.
          </p>
          <Link to='/home'>
            <button>Zaczynamy!</button>{' '}
          </Link>
        </Container>
        <Container fluid className={style.secondContainer}>
          <h1>Jak to działa?</h1>
          <p>
            W MEditate, z dostępnych komponentów takich jak czas trwania, dźwięk
            w tle czy prowadzenie głosowe ułożysz medytację dopasowaną idealnie
            do tego, co lubisz najbardziej.
          </p>
          <div className={style.firsStepDiv}>
            <div></div>
            <div>
              <button>Krok pierwszy: wybierz czas</button>
              <p>
                Masz przerwę na kawę? A może potrzebujesz dłuższej chwili
                odpoczynku? Wybierz czas, który najbardziej Ci odpowada.
              </p>
              <div></div>
            </div>
          </div>
        </Container>
        <Container fluid className={style.thirdContainer}>
          <div>
            <button>Krok drugi: wybierz ścieżkę dzwiękową</button>
            <p>
              Lubisz jakąś medytację, ale relaksująca muzyka ciągle wybija Cię z
              rytmu? Wolałabyś szum, dźwięk fal albo deszczu? Wybierz dźwięk,
              który najlepiej Ci się kojarzy i sprawi, że się relaksujesz.
            </p>
            <div></div>
          </div>
          <div></div>
        </Container>
        <Container fluid className={style.forthContainer}>
          <div>
            <div className={style.mainDiv}></div>
            <div>
              <button>Krok trzeci: dobierz głos lektora</button>
              <p>
                Wolisz jak medytację prowadzi głos kobiecy czy męski? A może nie lubisz prowadzonej medytacji? 
                Wybierz opcję, kóra najlepiej pasuje do Twojej medytacji.
              </p>
              <div className={style.arrow}></div>
            </div>
          </div>
        </Container>
        <Container fluid className={style.fifthContainer}>
          <div>
            <button>Krok czwarty: wybierz ścieżkę dzwiękową</button>
            <p>
            Wolisz, żeby lektor przeprowadził Cię przez całą medytację, czy tylko wprowadził i zakończył?
            </p>
            <div></div>
          </div>
          <div></div>
        </Container>
        <Container fluid className={style.sixthContainer}>
          <div>
            <div className={style.mainDiv}></div>
            <div>
              <button>Krok piąty: ciesz się swoją medytacją</button>
              <p>
              Usiądź wygodnie i pozwól dopasowanej do siebie medytacji, 
              przenieść się do obecnej chwiili.
              </p>
              <div className={style.arrow}></div>
            </div>
          </div>
        </Container>
        <Container fluid className={style.seventhContainer}>
          <div>
            <button>Krok szósty (ostatni!) : dodaj medytację do ulubionych</button>
            <p>
            Podobała Ci się medytacja? Dodaj ją do swoich medytacji, żeby móc z niej częściej korzystać.
            </p>
            <div></div>
          </div>
          <div></div>
        </Container>
        <Login />
        <Reviews />
      </div>
    </div>
  );
};

export default Main;
