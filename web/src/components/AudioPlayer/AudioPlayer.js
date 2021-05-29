import React from 'react';
import styles from './AudioPlayer.module.scss';
import MainPlayer from './MainPlayer';
import useAudioPlayer from './useAudioPlayer';

const AudioPlayer = () => {
  const { handlePlay, currentTime, setCurrentTime, handleSeek } =
    useAudioPlayer(4 * 60);

  return (
    <div className={styles.wrapper}>
      <MainPlayer
        currentTime={currentTime}
        setCurrentTime={setCurrentTime}
        handlePlay={handlePlay}
        handleSeek={handleSeek}
      />
      <audio id='startAudio'>
        <source src='./audio/startAudio.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
      <audio id='endAudio'>
        <source src='./audio/endAudio.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default AudioPlayer;
