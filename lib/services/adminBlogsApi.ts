import { API_URL } from "../api";

const TOKEN_KEY = "adminToken";

function getToken() {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

function authHeaders(extra?: HeadersInit): HeadersInit {
  const token = getToken();
  return {
    ...(extra || {}),
    Authorization: token ? `Bearer ${token}` : "",
    "Content-Type": "application/json",
  };
}

export async function adminFetchBlogs() {
  const res = await fetch(`${API_URL}/api/BlogPost`, {
    method: "GET",
    headers: authHeaders(),
  });
  if (!res.ok) {
    throw new Error("Bloglar yüklenemedi");
  }
  return res.json();
}

export interface AdminBlogInput {
  title: string;
  content: string;
  coverImageUrl?: string;
  committeeId: number;
  isImportant?: boolean;
}

export async function adminCreateBlog(input: AdminBlogInput) {
  const res = await fetch(`${API_URL}/api/BlogPost`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    throw new Error("Blog oluşturulamadı");
  }
  return res.json();
}

export async function adminUpdateBlog(id: number, input: AdminBlogInput) {
  const res = await fetch(`${API_URL}/api/BlogPost/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    throw new Error("Blog güncellenemedi");
  }
}

export async function adminDeleteBlog(id: number) {
  const res = await fetch(`${API_URL}/api/BlogPost/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) {
    throw new Error("Blog silinemedi");
  }
}

export async function adminUploadBlogCover(blogId: number, file: File) {
  const token = getToken();
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/api/BlogPost/${blogId}/cover`, {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Kapak görseli yüklenemedi");
  }

  return res.json();
}

