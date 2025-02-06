"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.open : ''}`}>
        <div className={styles.spine} onClick={toggleSidebar}>
          <span className={styles.spineText}>SOY BASED<br />GENERAL INFORMATION</span>
        </div>
        <div className={styles.nav}>
          <div className={styles.options}>
            <div className={styles.optionsText}>
                <Link href="/" onClick={toggleSidebar}>
                    home   
                </Link>
            </div>
            <div className={styles.optionsText}>
                <Link href="/colors" onClick={toggleSidebar}>
                    colors
                </Link>
            </div>
            <div className={styles.optionsText}>
                <Link href="/blog" onClick={toggleSidebar}>
                    blog
                </Link>
            </div>
            <div className={styles.optionsText}>
                <Link href="/print-archive" onClick={toggleSidebar}>
                    print archive
                </Link>
            </div>
          </div>
          <div className={styles.information}>
            <p>
              SOY BASED RISOGRAPH<br />CLUB AT UNIVERSITY FL<br /><br />
              MEETING EVERY<br />WEDNESDAY AT 6:30<br />FINE ARTS C ROOM 316<br /><br />
              <a href="https://www.instagram.com/soybasedriso/">➞ INSTAGRAM</a><br />
              <a href="https://linktr.ee/soybasedriso">➞ LINKTREE</a><br /><br />
              © 2025 SOYBASED RISO
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;