import React from 'react';
import { Spinner } from 'react-activity';

const Indicator = () => {
  return (
    <div
      style={{
        margin: '100px auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Spinner color='#fff' size={100} />
    </div>
  );
};

export default Indicator;
