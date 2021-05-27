import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SinglePlayer = ({ setCurrentTime, currentTime, handlePlay }) => {
  return (
    <ReactAudioPlayer
      src='./muzyka-relaksacyjna.mp3'
      controls
      // autoPlay
      onListen={e => setCurrentTime(e)}
      listenInterval={500}
      onSeeked={e => setCurrentTime(e.target.currentTime)}
      //mute when start and ending parts are turn on
      muted={currentTime < 5 || currentTime > 10 ? true : false}
      // or change volume
      //   volume={currentTime < 5 || currentTime > 10 ? 0.2 : 1}
      onPlay={() => handlePlay(true)}
      onPause={() => handlePlay(false)}
    />
  );
};

export default SinglePlayer;
