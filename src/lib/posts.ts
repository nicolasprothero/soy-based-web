import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import MarkdownIt from 'markdown-it';

const postsDirectory = path.join(process.cwd(), '/src/posts');
const md = new MarkdownIt();

interface PostId {
  params: {
    id: string;
  };
}

interface PostData {
  id: string;
  title: string;
  date: string;
  author: string;
  read_time: string;
  image_path?: string;
  contentHtml: string;
}

export function getSortedPostsData(): PostData[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      author: matterResult.data.author,
      read_time: matterResult.data.read_time,
      image_path: matterResult.data.image_path,
      contentHtml: '',
    };
  });

  return allPostsData.sort((a, b) => (a.date > b.date ? 1 : -1));
}

export function getAllPostIds(): PostId[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => ({
    params: {
      id: fileName.replace(/\.md$/, '')
    }
  }));
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const contentHtml = md.render(matterResult.content);

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    date: matterResult.data.date,
    author: matterResult.data.author,
    read_time: matterResult.data.read_time,
    image_path: matterResult.data.image_path
  };
}
