// testMarkdown.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

function testMarkdownParsing() {
  const fileNames = fs.readdirSync(postsDirectory);
  fileNames.forEach(fileName => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    remark()
      .use(html)
      .process(matterResult.content)
      .then((result) => {
        console.log(`Parsed content of ${fileName}:`);
        console.log(result.toString());
      })
      .catch((error) => {
        console.error(`Error parsing ${fileName}:`, error);
      });
  });
}

testMarkdownParsing();