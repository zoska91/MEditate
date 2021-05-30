import React from 'react';

const MeditationName = ({ meditationDetails, setMeditationDetails }) => {
  return (
    <input
      id='name'
      name='name'
      placeholder='Nazwa medytacji'
      value={meditationDetails.name}
      onChange={e =>
        setMeditationDetails({ type: 'name', value: e.target.value })
      }
    />
  );
};

export default MeditationName;
