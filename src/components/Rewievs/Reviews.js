import React from 'react';
import style from './Reviews.module.scss';
import SingleReview from './SingleReview/SingleReview';

const Reviews = () => {
  const reviewers = {
    first: {
      desc: ',,Wszystkie dostępne na rynku aplikacje są przeładowane treścią. Świetne miejsce na skupienie się wyłączenie na medytacji “',
      name: 'Karolina Janowska',
      date: '9/11/2020',
      img: 'https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622367760/MEditate/person1_nma741.png',
    },
    second: {
      desc: '“Stworzyłem swoją listę medytacji, teraz nie musze już, szukać”',
      name: 'Adrian Kowalczylk',
      date: '11/3/2021',
      img: 'https://res.cloudinary.com/dgm1ulzgm/image/upload/v1622367761/MEditate/person2_fkq5vb.png',
    },
  };
  return (
    <div className={style.wrapper}>
      <SingleReview
        desc={reviewers.first.desc}
        name={reviewers.first.name}
        date={reviewers.first.date}
        img={reviewers.first.img}
      ></SingleReview>
      <SingleReview
        desc={reviewers.second.desc}
        name={reviewers.second.name}
        date={reviewers.second.date}
        img={reviewers.second.img}
      ></SingleReview>
    </div>
  );
};

export default Reviews;
