import React from 'react';

import styles from '../../styles/Footer.module.css';

const Footer = () => {
  const { Footer, Text } = styles;
  return (
    <div className={Footer}>
      <span className={Text}>
        Copyright © 2020 | <strong>Fundamigos</strong>
        <br></br>
        Todos los derechos reservados
      </span>
    </div>
  );
};

export default Footer;
