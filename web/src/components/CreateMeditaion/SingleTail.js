import React from 'react';

const SingleTail = ({ setValue, label, value, type }) => {
  return (
    <button type='submit' onClick={() => setValue(value, type)}>
      {label}
    </button>
  );
};

export default SingleTail;
