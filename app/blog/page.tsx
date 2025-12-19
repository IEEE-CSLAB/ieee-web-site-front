import BlogPage from "@/components/blog/BlogPage";
import { fetchBlogs } from "@/lib/services/blogsApi";
import { fetchCommittees } from "@/lib/services/committeesApi";

export default async function Blog() {
  const [blogs, committees] = await Promise.all([
    fetchBlogs(),
    fetchCommittees(),
  ]);

  return <BlogPage blogs={blogs} committees={committees} />;
}
