import BlogPage from "@/components/blog/BlogPage";
import { fetchBlogs } from "@/lib/services/blogsApi";

export default async function Blog() {
  const blogs = await fetchBlogs();
  return <BlogPage blogs={blogs} />;
}
