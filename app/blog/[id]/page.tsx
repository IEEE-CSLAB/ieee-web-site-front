import { notFound } from "next/navigation";
import NavbarWrapper from "@/components/NavbarWrapper";
import BlogDetail, {
  BlogDetailViewModel,
} from "@/components/blog/BlogDetail";
import Footer from "@/components/Footer";
import { fetchBlogById } from "@/lib/services/blogsApi";
import { fetchCommittees } from "@/lib/services/committeesApi";
import { API_URL } from "@/lib/api";

interface BlogDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const blogId = Number(id);
  if (!Number.isFinite(blogId)) {
    notFound();
  }

  const [blogDto, committees] = await Promise.all([
    fetchBlogById(blogId),
    fetchCommittees(),
  ]);

  if (!blogDto) {
    notFound();
  }

  const committee = committees.find(
    (c: any) => c.id === blogDto.committeeId
  ) as { id: number; name: string } | undefined;

  const imageRaw: string | undefined = blogDto.coverImageUrl || undefined;
  let image: string;
  if (!imageRaw) {
    image = "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80";
  } else if (imageRaw.startsWith("http")) {
    // Already a full URL
    image = imageRaw;
  } else if (imageRaw.startsWith("/http")) {
    // Remove leading slash from full URL (e.g., "/https://...")
    image = imageRaw.substring(1);
  } else {
    // Relative path, prepend API_URL
    image = `${API_URL}${imageRaw}`;
  }

  const createdAt = blogDto.createdAt ? new Date(blogDto.createdAt) : null;
  const date = createdAt
    ? createdAt.toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
    : "";

  const content: string = blogDto.content ?? "";
  const description =
    content.length > 200 ? `${content.slice(0, 197)}...` : content;

  const viewModel: BlogDetailViewModel = {
    id: blogDto.id,
    title: blogDto.title,
    description,
    category: committee?.name ?? "Genel",
    image,
    date,
    author: "IEEE Akdeniz",
    isImportant: false,
    content,
  };

  return (
    <div className="min-h-screen bg-white pb-12 pt-24 md:pt-32 relative">
      <NavbarWrapper />

      {/* Content Box */}
      <div className="mx-4 md:mx-auto md:max-w-7xl bg-gray-100 rounded-2xl p-4 md:p-12">
        <BlogDetail blog={viewModel} />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
