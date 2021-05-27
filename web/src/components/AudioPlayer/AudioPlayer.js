import React, { useEffect, useRef, useState } from 'react';
import styles from './AudioPlayer.module.scss';
import SinglePlayer from './SinglePlayer';

const startOn = 0;
const startOff = 5;
const endOn = 10;
const endOff = 20;

const AudioPlayer = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlayStartAudio, setPlayStartAudio] = useState(false);
  const [isPlayEndAudio, setPlayEndAudio] = useState(false);

  const startAudio = document.getElementById('startAudio');
  const endAudio = document.getElementById('endAudio');

  const isStartAudioTime = currentTime > startOn && currentTime < startOff;
  const isEndAudioTime = currentTime > endOn && currentTime < endOff;

  // TODO - onSeeked (remeber - when we seek 0 )

  const handlePlay = value => {
    if (startAudio && endAudio && value) {
      setPlayStartAudio(true);
      setPlayEndAudio(true);

      if (isStartAudioTime) startAudio.play();
      if (isEndAudioTime) endAudio.play();
    }

    if (startAudio && endAudio && !value) {
      startAudio.pause();
      endAudio.pause();
      setPlayStartAudio(false);
      setPlayEndAudio(false);
    }
  };

  useEffect(() => {
    //turn on begin part

    if (startAudio && !isPlayStartAudio && isStartAudioTime) {
      startAudio.play();
      setPlayStartAudio(true);
    }

    //turn off begin part
    if (startAudio && isPlayStartAudio && !isStartAudioTime) {
      startAudio.pause();
      setPlayStartAudio(false);
    }

    //turn on ending part
    if (endAudio && !isPlayEndAudio && isEndAudioTime) {
      endAudio.play();
      setPlayEndAudio(true);
    }

    //turn off ending part
    if (endAudio && isPlayEndAudio && !isEndAudioTime) {
      endAudio.pause();
      setPlayEndAudio(false);
    }
  }, [currentTime]);

  return (
    <>
      <SinglePlayer
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        handlePlay={handlePlay}
      />
      <audio id='startAudio'>
        <source src='./song.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <audio id='endAudio'>
        <source src='./song.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default AudioPlayer;
