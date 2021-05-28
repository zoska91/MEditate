import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SinglePlayer = ({ setCurrentTime, handlePlay, handleSeek }) => {
  return (
    <ReactAudioPlayer
      src='./audio/relaksacyjna-4.mp3'
      controls
      onListen={e => setCurrentTime(e)}
      listenInterval={500}
      onSeeked={e => handleSeek(e.target.currentTime)}
      onPlay={() => handlePlay(true)}
      onPause={() => handlePlay(false)}
      style={{ width: '100%' }}
    />
  );
};

export default SinglePlayer;
