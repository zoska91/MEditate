import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

import styles from './AudioPlayer.module.scss';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import { api } from 'API';

import MainPlayer from './MainPlayer';
import useAudioPlayer from './useAudioPlayer';
import MainImg from 'assets/images/player-img.png';
import Button from 'components/atoms/Button';

import startAudioMp3 from 'assets/audio/startAudio.mp3';
import endAudioMp3 from 'assets/audio/endAudio.mp3';
import Indicator from 'components/atoms/Indicator';

const AudioPlayer = () => {
  const history = useHistory();
  const { id } = useParams();

  const [audioData, setAudioData] = useState(null);

  const { handlePlay, currentTime, setCurrentTime, handleSeek } =
    useAudioPlayer(4 * 60, audioData);

  useEffect(() => {
    const getAudio = async () => {
      const { data } = await api.getSingleMeditaion(id);
      setAudioData(data);
    };
    getAudio();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.img}>
          <img src={MainImg} alt='bg' />
        </div>
        {!audioData ? (
          <Indicator />
        ) : (
          <>
            <div className={styles.buttonBackWrapper}>
              <Button
                icon={<PlayCircleOutlineRoundedIcon />}
                onClick={() => history.goBack()}
              />
            </div>
            <MainPlayer
              currentTime={currentTime}
              setCurrentTime={setCurrentTime}
              handlePlay={handlePlay}
              handleSeek={handleSeek}
              audioBackground={audioData.background}
            />
            <audio id='startAudio'>
              <source src={startAudioMp3} type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
            <audio id='endAudio'>
              <source src={endAudioMp3} type='audio/mpeg' />
              Your browser does not support the audio element.
            </audio>
          </>
        )}
      </div>
    </>
  );
};

export default AudioPlayer;
