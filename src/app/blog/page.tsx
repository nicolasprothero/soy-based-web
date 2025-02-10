import React from 'react';
import styles from './Blog.module.css';
import Book from '../../components/Book/Book';
import { getSortedPostsData } from '../../lib/posts';

interface PostData {
  id: string;
  title: string;
  date: string;
  author: string;
  read_time: string;
  image_path?: string;
}

const Blog: React.FC = () => {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className={styles.blog}>
      <div className={styles.bookshelf}>
        {allPostsData.map(({ id, title, date, author, read_time, image_path }) => (
          <Book
            key={id}
            id={id}
            isActive={true}
            title={title}
            date={date}
            author={author}
            read_time={read_time}
            image_path={image_path}
          />
        ))}
      </div>
      <div className={styles.shelfNum}>1/1</div>
    </div>
  );
};

export default Blog;