import React, { useReducer, useState } from 'react';
import { useHistory } from 'react-router';
import style from 'components/CreateMeditaion/CreateMeditation.module.scss';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

import Button from 'components/atoms/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import MainWrapper from 'components/atoms/MainWrapper';
import TitlePage from 'components/atoms/TitlePage';
import MeditationName from 'components/CreateMeditaion/MeditationName';
import SingleTail from 'components/CreateMeditaion/SingleTail';
import TailsWrapper from 'components/CreateMeditaion/TailsWrapper';

import { toast } from 'react-toastify';
import { steps, stepsTails, titles } from 'components/CreateMeditaion/constans';
import { api } from 'API';

const reducer = (state, action) => {
  switch (action.type) {
    case 'title':
      return { ...state, title: action.value };
    case 'time':
      return { ...state, time: +action.value };
    case 'background':
      return { ...state, background: action.value };
    case 'voice':
      return { ...state, voice: action.value };
    case 'beginning':
      return { ...state, beginning: !state.beginning };
    case 'leading':
      return { ...state, leading: !state.leading };
    case 'ending':
      return { ...state, ending: !state.ending };

    default:
      throw new Error();
  }
};

const initialState = {
  title: '',
  time: 0,
  background: '',
  voice: '',
  begining: false,
  leading: false,
  ending: false,
};

const CreateMeditationPage = () => {
  const history = useHistory();
  const [activeStep, setActiveStep] = useState(0);

  const [meditationDetails, setMeditationDetails] = useReducer(
    reducer,
    initialState
  );

  const submit = async () => {
    try {
      const data = await api.createMeditation(meditationDetails);
      console.log(data);
      history.push(data.status.id);
    } catch (e) {
      console.error(e);
      toast.error(
        'Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z dostawcą oprogramowania'
      );
    }
  };

  const setValue = (value, type) => {
    if (type === 'no-voice') {
      submit();
      return;
    }

    setMeditationDetails({ type, value });

    if (activeStep === steps.length - 1) {
      submit();
      return;
    }

    if (type && type !== 'ending' && type !== 'begining' && type !== 'leading')
      setActiveStep(prev => prev + 1);
  };

  return (
    <MainWrapper>
      {activeStep !== 0 && (
        <div className={style.buttonBackWrapper}>
          <Button
            icon={<PlayCircleOutlineRoundedIcon />}
            onClick={() => setActiveStep(prev => prev - 1)}
          />
        </div>
      )}
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        style={{
          backgroundColor: 'transparent',
          marginBottom: '100px',
          transform: 'scale(1.2)',
        }}
      >
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>
              <span className={style.stepLabel}>{label}</span>
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <TitlePage title={titles[activeStep]} center />

      {/* <MeditationName
        meditationDetails={meditationDetails}
        setMeditationDetails={setMeditationDetails}
      /> */}

      <TailsWrapper>
        {stepsTails[activeStep].map(tail => (
          <SingleTail
            key={tail.label}
            setValue={setValue}
            checked={meditationDetails[tail.type] === true ? true : false}
            {...tail}
          />
        ))}
      </TailsWrapper>

      {activeStep === 2 && (
        <div className={style.buttonNextWrapper}>
          <Button
            icon={<PlayCircleOutlineRoundedIcon />}
            onClick={() => setActiveStep(prev => prev + 1)}
          />
        </div>
      )}
    </MainWrapper>
  );
};

export default CreateMeditationPage;
