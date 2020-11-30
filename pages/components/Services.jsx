import React from 'react';

import ServiceItem from './ServiceItem';
import styles from '../../styles/Services.module.css';

const Services = () => {
  const { Container } = styles;
  return (
    <div className={Container}>
      <ServiceItem></ServiceItem>
    </div>
  );
};

export default Services;
