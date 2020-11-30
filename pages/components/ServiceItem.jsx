import React from 'react';

import styles from '../../styles/ServicesItem.module.css';

const ServiceItem = () => {
  const { Container, Title, Desc, More } = styles;

  return (
    <div className={Container}>
      <span className={Title}>Service</span>
      <img
        src='https://i1.sndcdn.com/avatars-000560768412-fgpz9h-t500x500.jpg'
        alt='Dog'
      />
      <p className={Desc}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      {/* TODO redirect */}

      <span className={More}>Read More</span>
    </div>
  );
};

export default ServiceItem;
