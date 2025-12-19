import { apiPost } from "../api";

interface LoginResponse {
  token: string;
  username: string;
  expiresAt: string;
}

export async function loginAdmin(username: string, password: string) {
  const body = { username, password };
  return apiPost<LoginResponse>("/api/Auth/login", body);
}


