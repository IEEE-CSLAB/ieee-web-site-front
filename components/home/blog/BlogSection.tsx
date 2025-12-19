import React from "react";
import BlogCard from "@/components/blog/BlogCard";
import { fetchBlogs } from "@/lib/services/blogsApi";
import { API_URL } from "@/lib/api";

const BlogSection = async () => {
  let backendBlogs: any[] = [];
  try {
    backendBlogs = await fetchBlogs();
  } catch (error) {
    console.warn("Failed to fetch blogs:", error);
    backendBlogs = [];
  }

  const blogs = backendBlogs
    .map((blog: any) => {
      const createdAt = blog.createdAt ? new Date(blog.createdAt) : null;
      const formattedDate = createdAt
        ? createdAt.toLocaleDateString("tr-TR", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        })
        : "";

      // Normalize cover image URL (backend returns path with leading /)
      const imageRaw: string | undefined = blog.coverImageUrl || undefined;
      const image =
        imageRaw && imageRaw.startsWith("http")
          ? imageRaw
          : imageRaw
            ? `${API_URL}${imageRaw}`
            : "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=400&q=80";

      return {
        id: blog.id,
        title: blog.title,
        description: blog.content ?? "",
        category: "Genel",
        image,
        date: formattedDate,
      };
    })
    .sort((a, b) => {
      const dateA = a.date ? new Date(a.date) : new Date(0);
      const dateB = b.date ? new Date(b.date) : new Date(0);
      return dateB.getTime() - dateA.getTime();
    })
    .slice(0, 4);

  return (
    <section className="w-full bg-white py-20 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-4">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              Blog
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Son Yazılarımız
            </h2>
          </div>
          <a
            href="/blog"
            className="px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          >
            Tümünü Gör
          </a>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              title={blog.title}
              description={blog.description}
              category={blog.category}
              image={blog.image}
              date={blog.date}
              link={`/blog/${blog.id}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
