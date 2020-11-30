import React from 'react';

import styles from '../../styles/Header.module.css';

const Header = () => {
  const { Header, Title } = styles;
  return (
    <div className={Header}>
      <span className={Title}>Fundamigos</span>
    </div>
  );
};

export default Header;
