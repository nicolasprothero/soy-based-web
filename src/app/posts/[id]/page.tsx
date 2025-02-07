import { getAllPostIds, getPostData } from '../../../lib/posts';
import styles from './Post.module.css';

interface PostProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map((path) => ({
    id: path.params.id,
  }));
}

export default async function Post({ params }: PostProps) {
  const { id } = await params;
  const postData = await getPostData(id);

  const titleParts = postData.title.split(': ');

  return (
    <div className={styles.post}>
      {postData.image_path && (
        <img src={postData.image_path} alt={postData.title} className={styles.bannerImage} />
      )}
      <h1 style={{ textTransform: 'uppercase' }}>
        {titleParts[0]}:
        {titleParts[1] && <><br />{titleParts[1]}</>}
      </h1>
      <div className={styles.info}>
        <div style={{ textTransform: 'uppercase' }}>written by {postData.author}</div>
        <div style={{ textTransform: 'uppercase' }}>posted on {postData.date}</div>
        <div style={{ textTransform: 'uppercase' }}>{postData.read_time} min read</div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </div>
  );
}