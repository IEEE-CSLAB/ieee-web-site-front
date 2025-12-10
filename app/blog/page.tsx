import BlogPage from '@/components/blog/BlogPage';
import fs from 'fs/promises';
import path from 'path';

async function getBlogs() {
  const filePath = path.join(process.cwd(), 'data', 'blogs.json');
  const fileContent = await fs.readFile(filePath, 'utf-8');
  return JSON.parse(fileContent);
}

export default async function Blog() {
  const blogs = await getBlogs();
  return <BlogPage blogs={blogs} />;
}
