import React from 'react';

import TitlePage from 'components/atoms/TitlePage';
import SingleMeditation from 'components/MeditationList/SingleMeditation';

const dummyData = [
  {
    id: 1,
    img: 'https://via.placeholder.com/150',
    title: 'Pobudka',
    elements: ['4 min', 'Anna', 'Muzyka relaksacyjna', 'Wstęp', 'Zakończenie'],
  },
  {
    id: 2,
    img: 'https://via.placeholder.com/150',
    title: 'Pobudka',
    elements: ['4 min', 'Anna', 'Muzyka relaksacyjna', 'Wstęp', 'Zakończenie'],
  },
];

const MeditationsListPage = () => {
  const meditationsListRender = dummyData.map(med => (
    <SingleMeditation key={med.id} data={med} />
  ));

  return (
    <>
      <TitlePage title='Moje medytacje' />
      {meditationsListRender}
    </>
  );
};

export default MeditationsListPage;
