"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/lib/services/authApi";

const TOKEN_KEY = "adminToken";
const USERNAME_KEY = "adminUsername";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await loginAdmin(username, password);

      if (typeof window !== "undefined") {
        window.localStorage.setItem(TOKEN_KEY, res.token);
        window.localStorage.setItem(USERNAME_KEY, res.username);
      }

      router.replace("/admin");
    } catch (err: any) {
      const msg =
        err instanceof Error ? err.message : "Giriş yapılırken bir hata oluştu.";
      setError(msg);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-slate-950 px-4 transition-colors duration-300">
      <div className="w-full max-w-md bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 p-8 transition-colors">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Admin Girişi
        </h1>
        <p className="text-sm text-gray-600 dark:text-slate-400 mb-6">
          Yönetim paneline erişmek için kullanıcı adı ve şifrenizi girin.
        </p>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 px-3 py-2 text-sm text-red-700 dark:text-red-400">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
              Kullanıcı Adı
            </label>
            <input
              type="text"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-slate-600 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black dark:text-white dark:bg-slate-900 transition-colors"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
              Şifre
            </label>
            <input
              type="password"
              required
              className="mt-1 block w-full rounded-md border border-gray-300 dark:border-slate-600 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring-blue-500 text-black dark:text-white dark:bg-slate-900 transition-colors"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Giriş yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </div>
  );
}


