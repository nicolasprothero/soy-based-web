import { getAllPostIds, getPostData } from '../../../lib/posts';
import styles from './Post.module.css';

interface PostData {
  id: string;
  title: string;
  date: string;
  author: string;
  read_time: string;
  image_path?: string;
  contentHtml: string;
}

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(({ params }) => ({
    id: params.id,
  }));
}

export default async function Post({ params }: PageProps) {
  const { id } = params;
  const paths = getAllPostIds();
  const postPath = paths.find(path => path.params.id === id);

  if (!postPath) {
    return <div>Post not found</div>;
  }

  console.log("postPath.params.id:", postPath.params.id, typeof postPath.params.id);

  const postData: PostData = await getPostData(postPath.params.id);

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