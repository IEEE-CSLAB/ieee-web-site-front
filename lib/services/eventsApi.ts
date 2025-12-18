import { apiGet } from "../api";

export async function fetchEvents() {
  return apiGet<any[]>("/api/Events");
}

export async function fetchImportantEvents() {
  return apiGet<any[]>("/api/Events/important");
}

export async function fetchEventById(id: string) {
  return apiGet<any>(`/api/Events/${id}`);
}
