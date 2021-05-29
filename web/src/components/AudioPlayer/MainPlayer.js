import React, { useEffect, useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const SinglePlayer = ({
  setCurrentTime,
  handlePlay,
  handleSeek,
  audioBackground,
}) => {
  const [audio, setAudio] = useState(null);

  const getAudio = async () => {
    const audioUrl = await import(
      `../../assets/audio/${audioBackground}-4.mp3`
    );
    setAudio(audioUrl.default);
  };

  useEffect(() => {
    if (audioBackground) getAudio();
  }, []);

  return (
    <ReactAudioPlayer
      src={audio}
      controls
      onListen={e => setCurrentTime(e)}
      listenInterval={500}
      onSeeked={e => handleSeek(e.target.currentTime)}
      onPlay={() => handlePlay(true)}
      onPause={() => handlePlay(false)}
      volume={0.2}
      style={{ width: '100%' }}
    />
  );
};

export default SinglePlayer;
