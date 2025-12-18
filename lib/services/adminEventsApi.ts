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

export async function adminFetchEvents() {
  const res = await fetch(`${API_URL}/api/Events`, {
    method: "GET",
    headers: authHeaders(),
  });
  if (!res.ok) {
    throw new Error("Etkinlikler yüklenemedi");
  }
  return res.json();
}

export interface AdminEventInput {
  title: string;
  description?: string;
  startDate: string; // ISO
  endDate: string; // ISO
  location?: string;
  quota?: number | null;
  isImportant: boolean;
}

export interface EventDtoResponse {
  id: number;
}

export async function adminCreateEvent(
  input: AdminEventInput
): Promise<EventDtoResponse> {
  const res = await fetch(`${API_URL}/api/Events`, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      title: input.title,
      description: input.description,
      startDate: input.startDate,
      endDate: input.endDate,
      location: input.location,
      quota: input.quota,
      isImportant: input.isImportant,
      committeeIds: null,
    }),
  });
  if (!res.ok) {
    throw new Error("Etkinlik oluşturulamadı");
  }
  return res.json();
}

export async function adminUpdateEvent(id: number, input: AdminEventInput) {
  const res = await fetch(`${API_URL}/api/Events/${id}`, {
    method: "PUT",
    headers: authHeaders(),
    body: JSON.stringify({
      title: input.title,
      description: input.description,
      startDate: input.startDate,
      endDate: input.endDate,
      location: input.location,
      quota: input.quota,
      isImportant: input.isImportant,
      committeeIds: null,
    }),
  });
  if (!res.ok) {
    throw new Error("Etkinlik güncellenemedi");
  }
}

export async function adminDeleteEvent(id: number) {
  const res = await fetch(`${API_URL}/api/Events/${id}`, {
    method: "DELETE",
    headers: authHeaders(),
  });
  if (!res.ok) {
    throw new Error("Etkinlik silinemedi");
  }
}

export async function adminUploadEventCover(eventId: number, file: File) {
  const token = getToken();
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${API_URL}/api/Events/${eventId}/cover`, {
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


