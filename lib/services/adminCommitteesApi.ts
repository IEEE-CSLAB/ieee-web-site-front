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

export async function adminFetchCommittees() {
  const res = await fetch(`${API_URL}/api/Committee`, {
    method: "GET",
    headers: authHeaders(),
  });
  if (!res.ok) {
    throw new Error("Komiteler yüklenemedi");
  }
  return res.json();
}

export interface AdminCommitteeInput {
  name: string;
  description: string;
  logoUrl?: string;
}

export async function adminCreateCommittee(input: AdminCommitteeInput) {
  const res = await fetch(`${API_URL}/api/Committee`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    throw new Error("Komite oluşturulamadı");
  }
  return res.json();
}

export async function adminUpdateCommittee(
  id: number,
  input: AdminCommitteeInput
) {
  const res = await fetch(`${API_URL}/api/Committee/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify(input),
  });
  if (!res.ok) {
    throw new Error("Komite güncellenemedi");
  }
}

export async function adminDeleteCommittee(id: number) {
  const res = await fetch(`${API_URL}/api/Committee/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) {
    throw new Error("Komite silinemedi");
  }
}

export async function adminUploadCommitteeLogo(committeeId: number, file: File) {
  const token = getToken();
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/api/Committee/${committeeId}/logo`, {
    method: "POST",
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Logo yüklenemedi");
  }

  return res.json();
}

