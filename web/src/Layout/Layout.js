import React from 'react';
import style from './Layout.module.scss';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

import Button from 'components/atoms/Button';

const Layout = ({ children }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.buttonWrapper}>
        <Button icon={<PlayCircleOutlineRoundedIcon />} />
      </div>
      {children}
    </div>
  );
};

export default Layout;
