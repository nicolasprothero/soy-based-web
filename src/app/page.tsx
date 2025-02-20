import styles from './page.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.titleText}>
        <h1>SOY BASED <br/> WEB <br /> BY <br/> SOY BASED <br/>RISO</h1>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.mainImage} src="/images/SoyBasedAnimation.gif" alt="riso gif"></img>
      </div>
    </>
    
  );
}