import React, { useEffect, useState } from 'react';

import { api } from 'API';

import TitlePage from 'components/atoms/TitlePage';
import SingleMeditation from 'components/MeditationList/SingleMeditation';
import MainWrapper from 'components/atoms/MainWrapper';
import AddMeditation from 'components/MeditationList/AddMeditation';
import Indicator from 'components/atoms/Indicator';

const images = [];

const MeditationsListPage = () => {
  const [meditationsList, setMeditationsList] = useState([]);

  const meditationsListRender = meditationsList.map((med, i) => (
    <SingleMeditation key={med.id} data={med} index={i} />
  ));

  useEffect(() => {
    const getList = async () => {
      const { data } = await api.getMyMeditaions();
      setMeditationsList(data.objects);
    };
    getList();
  }, []);

  return (
    <MainWrapper>
      <TitlePage title='Moje medytacje' />
      {!meditationsList.length ? <Indicator /> : meditationsListRender}
      <AddMeditation />
    </MainWrapper>
  );
};

export default MeditationsListPage;
