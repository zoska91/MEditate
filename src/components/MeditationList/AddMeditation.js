import React from 'react';
import style from './AddMeditation.module.scss';

import AddCircleOutlineRoundedIcon from '@material-ui/icons/AddCircleOutlineRounded';

import Button from 'components/atoms/Button';

const AddMeditation = () => {
  return (
    <div className={style.wrapper}>
      <Button icon={<AddCircleOutlineRoundedIcon />} />
      Stwórz nową medytację
    </div>
  );
};

export default AddMeditation;
