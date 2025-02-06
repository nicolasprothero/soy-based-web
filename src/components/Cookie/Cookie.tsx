"use client";

import React, { useState, useEffect } from 'react';
import styles from './Cookie.module.css';

const Cookie: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className={styles.popup} onClick={handleClose}>
      <div className={styles.title}>MANAGE COOKIE CONTENT</div>
      <div className={styles.body}>
        To provide the best experiences, we use technologies like cookies to store and/or access device information. This is completely a lie. We do not use cookies, in fact we are not even aware of the best use cases for cookies. But, we thought that a pop-up involving cookies would be fun to have so we added it. Please press ‘Accept’ or don’t, it genuinely does not do anything.
      </div>
      <div className={styles.buttons}>
        <div className={styles.button}>[Accept]</div>
        <div className={styles.button}>[Decline]</div>
      </div>
    </div>
  );
};

export default Cookie;