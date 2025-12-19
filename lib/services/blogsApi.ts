import { apiGet } from "../api";

export async function fetchBlogs() {
  return apiGet<any[]>("/api/BlogPost");
}

export async function fetchBlogById(id: number) {
  return apiGet<any>(`/api/BlogPost/${id}`);
}

