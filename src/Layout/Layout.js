import React from 'react';
import { useHistory, useLocation } from 'react-router';
import style from './Layout.module.scss';

import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';

import Button from 'components/atoms/Button';

const Layout = ({ children }) => {
  const history = useHistory();
  const goBack = () => {
    if (history) history.goBack();
  };

  return <div className={style.wrapper}>{children}</div>;
};

export default Layout;
