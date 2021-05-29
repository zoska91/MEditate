import React, { useEffect, useState } from 'react';

import TitlePage from 'components/atoms/TitlePage';
import SingleMeditation from 'components/MeditationList/SingleMeditation';
import MainWrapper from 'components/atoms/MainWrapper';
import AddMeditation from 'components/MeditationList/AddMeditation';
import { api } from 'API';

const MeditationsListPage = () => {
  const [meditationsList, setMeditationsList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const { data } = await api.getMyMeditaions();
      console.log(data);
      setMeditationsList(data.objects);
    };
    getList();
  }, []);

  const meditationsListRender = meditationsList.map(med => (
    <SingleMeditation key={med.id} data={med} />
  ));

  return (
    <MainWrapper>
      <TitlePage title='Moje medytacje' />
      {meditationsListRender}
      <AddMeditation />
    </MainWrapper>
  );
};

export default MeditationsListPage;
