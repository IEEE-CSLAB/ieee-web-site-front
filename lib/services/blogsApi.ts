import { apiGet } from "../api";

export async function fetchBlogs() {
  return apiGet<any[]>("/api/BlogPost");
}


