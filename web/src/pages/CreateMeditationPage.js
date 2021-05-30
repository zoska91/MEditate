import React, { useReducer, useState } from 'react';
import { useHistory } from 'react-router';
import { toast } from 'react-toastify';
import style from 'components/CreateMeditaion/CreateMeditation.module.scss';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import Button from 'components/atoms/Button';
import TitlePage from 'components/atoms/TitlePage';
import SingleTail from 'components/CreateMeditaion/SingleTail';
import TailsWrapper from 'components/CreateMeditaion/TailsWrapper';
import Indicator from 'components/atoms/Indicator';
import { steps, stepsTails, titles } from 'components/CreateMeditaion/constans';

import { api } from 'API';

import Img1 from 'assets/images/tlo-1.jpg';
import Img2 from 'assets/images/tlo-2.png';
import Img3 from 'assets/images/tlo-3.png';
import Img4 from 'assets/images/tlo-4.png';

const images = [Img1, Img2, Img3, Img4];

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
  const [isLoading, setLoading] = useState(false);

  const [meditationDetails, setMeditationDetails] = useReducer(
    reducer,
    initialState
  );

  const submit = async (value, type) => {
    setLoading(true);
    try {
      const { data } = await api.createMeditation({
        ...meditationDetails,
        [type]: value,
      });

      history.push(`/audio-player/${data.status.id}`);
      setLoading(false);
    } catch (e) {
      console.error(e);
      toast.error(
        'Coś poszło nie tak! Spróbuj ponownie lub skontaktuj się z dostawcą oprogramowania'
      );
      setLoading(false);
    }
  };

  const setValue = (value, type) => {
    if (type === 'no-voice') {
      submit(value, type);
      return;
    }

    if (activeStep === steps.length - 1) {
      submit(value, type);
      return;
    }

    setMeditationDetails({ type, value });

    if (type && type !== 'ending' && type !== 'beginning' && type !== 'leading')
      setActiveStep(prev => prev + 1);
  };

  return (
    <>
      <div
        className={style.wrapper}
        style={{ backgroundImage: `url(${images[activeStep]})` }}
      >
        {isLoading ? (
          <Indicator />
        ) : (
          <>
            <div className={style.buttonBackWrapper}>
              <Button
                icon={<PlayCircleOutlineRoundedIcon />}
                onClick={() => {
                  if (activeStep === 0) history.goBack();
                  else setActiveStep(prev => prev - 1);
                }}
              />
            </div>

            <Stepper
              activeStep={activeStep}
              alternativeLabel
              style={{
                backgroundColor: 'transparent',
                marginBottom: '15vh',
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
          </>
        )}
      </div>
    </>
  );
};

export default CreateMeditationPage;
