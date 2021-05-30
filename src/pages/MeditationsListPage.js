import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

import { api } from 'API';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

import TitlePage from 'components/atoms/TitlePage';
import SingleMeditation from 'components/MeditationList/SingleMeditation';
import MainWrapper from 'components/atoms/MainWrapper';
import AddMeditation from 'components/MeditationList/AddMeditation';
import Indicator from 'components/atoms/Indicator';
import Button from 'components/atoms/Button';

const MeditationsListPage = () => {
  const history = useHistory();
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
      <div
        style={{
          transform: 'rotate(-180deg)',
          position: 'absolute',
          top: '40px',
          left: '50px',
        }}
      >
        <Button
          icon={<PlayCircleOutlineRoundedIcon />}
          onClick={() => (history.goBack ? history?.goBack() : null)}
        />
      </div>

      <TitlePage title='Moje medytacje' />
      {!meditationsList.length ? <Indicator /> : meditationsListRender}
      <AddMeditation />
    </MainWrapper>
  );
};

export default MeditationsListPage;
