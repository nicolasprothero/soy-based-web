import Link from 'next/link';
import styles from './Book.module.css';

interface BookProps {
  isActive: boolean;
  id: string;
  title: string;
  date: string;
  author: string;
  read_time: string;
  image_path?: string;
}

const Book: React.FC<BookProps> = ({ isActive, id, title, date, author, read_time, image_path }) => {
  const titleParts = (title as string).split(': ');
  const year = new Date(date).getFullYear();

  return (
    <Link href={`/posts/${id}`}>
      <div className={`${styles.book} ${!isActive ? styles.inactive : ''}`}>
        <div className={styles.title}>
          {titleParts[0]}:
          {titleParts[1] && <><br />{titleParts[1]}</>}
        </div>
        <div className={styles.year}>{year}</div>
        {isActive && 
          <div className={styles.hoverInfo}>
            <div className={styles.hoverContainer}>
              <div className={styles.hoverMainBody}>
                <img src={`/soy-based-web${image_path}`} alt="Book cover" className={styles.hoverImage} />
                <div className={styles.hoverInfoTitle} style={{ textTransform: 'uppercase' }}>
                  {titleParts[0]}:
                  {titleParts[1] && <><br />{titleParts[1]}</>}
                </div>
                <div className={styles.hoverInfoBody} style={{ textTransform: 'uppercase' }}>BY {author}</div>
                <div className={styles.hoverInfoBody} style={{ textTransform: 'uppercase' }}>POSTED ON {date}</div>
                <div className={styles.hoverInfoBody} style={{ textTransform: 'uppercase' }}>{read_time} MIN READ</div>
              </div>
              <div className={styles.viewButton}>
                [VIEW]
              </div>
            </div>
          </div>
        }
      </div>
    </Link>
  );
};

export default Book;