import { apiGet } from "../api";

export async function fetchCommittees() {
  return apiGet<any[]>("/api/Committee");
}


