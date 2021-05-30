import { useEffect, useState } from 'react';

const useAudioPlayer = (time, audioData) => {
  const [currentTime, setCurrentTime] = useState(0);

  const [isPlayStartAudio, setPlayStartAudio] = useState(false);
  const [isPlayEndAudio, setPlayEndAudio] = useState(false);

  const [startOn, setStartOn] = useState(0);
  const [startOff, setStartOff] = useState(0);
  const [endOn, setEndOn] = useState(0);
  const [endOff, setEndOff] = useState(0);

  const [isPlay, setPlay] = useState(false);

  const startAudio = document.getElementById('startAudio');
  const endAudio = document.getElementById('endAudio');

  const isStartAudioTime = currentTime >= startOn && currentTime < startOff;
  const isEndAudioTime = currentTime >= endOn && currentTime < endOff;

  const handlePlay = value => {
    setPlay(value);

    if (startAudio && endAudio && value) {
      setPlayStartAudio(true);
      setPlayEndAudio(true);

      if (isStartAudioTime && audioData?.beginning) startAudio.play();
      if (isEndAudioTime && audioData?.ending) endAudio.play();
    }

    if (startAudio && endAudio && !value) {
      startAudio.pause();
      endAudio.pause();
      setPlayStartAudio(false);
      setPlayEndAudio(false);
    }
  };

  const handleSeek = seekTime => {
    setCurrentTime(seekTime);
    if (seekTime === 0 && isPlay && audioData?.beginning) startAudio.play();

    if (isStartAudioTime) {
      startAudio.currentTime = seekTime;
    }

    if (isEndAudioTime) {
      endAudio.currentTime = endAudio.duration - (time - seekTime);
    }
  };

  useEffect(() => {
    //set timses on and off for each elements
    if (endAudio && startAudio) {
      setStartOn(0);
      setStartOff(startAudio.duration);

      setEndOn(time - endAudio.duration);
      setEndOff(time);
    }
  }, [endAudio, startAudio]);

  useEffect(() => {
    //turn on begin part
    if (
      audioData?.beginning &&
      startAudio &&
      isPlay &&
      !isPlayStartAudio &&
      isStartAudioTime
    ) {
      startAudio.play();
      setPlayStartAudio(true);
    }

    //turn off begin part
    if (startAudio && isPlayStartAudio && !isStartAudioTime) {
      startAudio.pause();
      setPlayStartAudio(false);
    }

    //turn on ending part
    if (
      audioData?.ending &&
      endAudio &&
      isPlay &&
      !isPlayEndAudio &&
      isEndAudioTime
    ) {
      endAudio.play();
      setPlayEndAudio(true);
    }

    //turn off ending part
    if (endAudio && isPlayEndAudio && !isEndAudioTime) {
      endAudio.pause();
      setPlayEndAudio(false);
    }
  }, [currentTime]);

  return {
    handlePlay,
    currentTime,
    setCurrentTime,
    handleSeek,
  };
};

export default useAudioPlayer;
