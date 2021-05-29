import React from 'react';
import style from './Reviews.module.scss';
import SingleReview from './SingleReview/SingleReview';
import person1 from '../../assets/img/person1.png';
import person2 from '../../assets/img/person2.png';

const Reviews = () => {
  const reviewers = {
    first: {
      desc: ',,Wszystkie dostępne na rynku aplikacje są przeładowane treścią. Świetne miejsce na skupienie się wyłączenie na medytacji “',
      name: 'Karolina Janowska',
      date: '9/11/2020',
      img: person1,
    },
    second: {
      desc: '“Stworzyłem swoją listę medytacji, teraz nie musze już, szukać”',
      name: 'Adrian Kowalczylk',
      date: '11/3/2021',
      img: person2,
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
