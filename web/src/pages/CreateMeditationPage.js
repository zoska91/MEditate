import React, { useReducer, useState } from 'react';

import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import MainWrapper from 'components/atoms/MainWrapper';
import TitlePage from 'components/atoms/TitlePage';
import MeditationName from 'components/CreateMeditaion/MeditationName';

const reducer = (state, action) => {
  switch (action.type) {
    case 'name':
      return { ...state, name: action.value };
    case 'time':
      return { ...state, time: +action.value };
    case 'background':
      return { ...state, background: action.value };
    case 'voice':
      return { ...state, voice: action.value };
    case 'ending':
      return { ...state, ending: false };
    case 'begining':
      return { ...state, begining: false };
    case 'leading':
      return { ...state, leading: false };

    default:
      throw new Error();
  }
};

const initialState = {
  name: '',
  time: 0,
  background: '',
  voice: '',
  elements: [],
};

const steps = ['Czas', 'Dwięk', 'Głos lektora', 'Elementy'];
const stepsTails = [
  [
    { label: '4 minuty', value: 4, type: 'time' },
    { label: '20 minut', value: 20, type: 'time' },
    { label: '40 minut', value: 40, type: 'time' },
  ],
  [
    { label: 'Las', value: 'Dzungla', type: 'background' },
    { label: 'Fale', value: 'Fale', type: 'background' },
    { label: 'Cisza', value: 'Cisza', type: 'background' },
  ],
  [
    { label: 'Ania', value: 'Ania', type: 'voice' },
    { label: 'Wojtek', value: 'Wojtek', type: 'voice' },
    { label: 'Brak', value: 'Brak', type: 'voice' },
  ],
  [
    { label: 'Wstęp', value: 'Ania', type: 'ending' },
    { label: 'Prowadzenie', value: 'Wojtek', type: 'begining' },
    { label: 'Zakończenie', value: 'Brak', type: 'leading' },
    { label: 'Brak', value: 'Brak', type: null },
  ],
];

const titles = [
  'Rozpocznij od wybrania czasu trwania:',
  `Następnie dobierz (lub nie!)
  dźwięk towarzyszący:`,
  `Wybierz głos, który poprowadzi
  Cię  przez medytację:`,
  'Wybierz elementy prowadzenia medytacji',
];

const CreateMeditationPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [meditationDetails, setMeditationDetails] = useReducer(
    reducer,
    initialState
  );

  console.log(meditationDetails);

  const setValue = (value, type) => {
    console.log(value);

    setMeditationDetails({ type, value });
    setActiveStep(prev => prev + 1);
  };

  return (
    <MainWrapper>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <TitlePage title={titles[activeStep]} />
      <MeditationName
        meditationDetails={meditationDetails}
        setMeditationDetails={setMeditationDetails}
      />
    </MainWrapper>
  );
};

export default CreateMeditationPage;
