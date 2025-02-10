'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './print-archive.module.css';
import archiveData from '../../../public/json/archive.json';

export default function printArchive() {
  interface ArchiveItem {
    title: string;
    artist: string;
    date: string;
    paper_size: string;
    paper_weight: string;
    colors: string[];
    image_path: string;
  }

  const [archive, setArchive] = useState<ArchiveItem[]>([]);
  const logoRef = useRef<HTMLImageElement>(null);
  const tableRef = useRef<HTMLDivElement>(null);
  const pageRef = useRef<HTMLDivElement>(null);
  const scrollDownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setArchive(archiveData.archive);

    const handleWheel = (event: WheelEvent) => {
      if (logoRef.current && tableRef.current && pageRef.current && scrollDownRef.current) {
        if (event.deltaY > 0) {
          logoRef.current.classList.add(styles.shrink);
          tableRef.current.classList.add(styles.visible);
          pageRef.current.classList.add(styles.shrink);
          scrollDownRef.current.classList.add(styles.visible);
          window.removeEventListener('wheel', handleWheel);
        }
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false });
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('wheel', handleWheel);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div ref={pageRef} className={styles.page}>
      <img
        ref={logoRef}
        src={"/svg/PrintArchiveLogo.svg"}
        alt="Print Archive Logo"
        className={styles.logo}
      />
      <div ref={scrollDownRef} className={styles.scrollDown}>
        SCROLL
      </div>
      <div ref={tableRef} className={styles.archiveTable}>
        <div className={styles.archiveRow}>
          <div className={styles.archiveCell}>NUM.</div>
          <div className={styles.archiveCell}>PRINT</div>
          <div className={styles.archiveCell}>ARTIST</div>
          <div className={styles.archiveCell}>DATE</div>
        </div>
        {archive.map((item, index) => (
          <React.Fragment key={index}>
            <div className={styles.line}></div>
            <div key={index} className={styles.archiveRow}>
              <div className={styles.archiveCell} style={{ textTransform: 'uppercase' }}>{(index + 1).toString().padStart(2, '0')}.</div>
              <div className={styles.archiveCell} style={{ textTransform: 'uppercase' }}>{item.title}</div>
              <div className={styles.archiveCell} style={{ textTransform: 'uppercase' }}>{item.artist}</div>
              <div className={styles.archiveCell} style={{ textTransform: 'uppercase' }}>{item.date}</div>
              <div className={styles.hoverPrint}>
                <div className={styles.hoverContainer}>
                  <div className={styles.hoverFrame}>
                    <img src={item.image_path} alt="Print Image" className={styles.hoverImage} />
                  </div>
                  <div className={styles.hoverInfo}>
                    <div className={styles.subtitle} style={{ textTransform: 'uppercase' }}>TITLE</div>
                    <div className={styles.body}>{item.title}</div>
                    <div className={styles.subtitle} style={{ textTransform: 'uppercase' }}>ARTIST</div>
                    <div className={styles.body}>{item.artist}</div>
                    <div className={styles.subtitle} style={{ textTransform: 'uppercase' }}>PRINTED ON</div>
                    <div className={styles.body}>{item.date}</div>
                    <div className={styles.subtitle} style={{ textTransform: 'uppercase' }}>PAPER SIZE</div>
                    <div className={styles.body}>{item.paper_size}</div>
                    <div className={styles.subtitle} style={{ textTransform: 'uppercase' }}>PAPER WEIGHT</div>
                    <div className={styles.body}>{item.paper_weight}</div>
                    <div className={styles.subtitle} style={{ textTransform: 'uppercase' }}>COLORS</div>
                    {item.colors.map((color, colorIndex) => (
                      <div key={colorIndex} className={styles.body}>{color}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}