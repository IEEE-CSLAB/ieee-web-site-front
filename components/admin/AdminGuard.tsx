"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface AdminGuardProps {
  children: React.ReactNode;
}

const TOKEN_KEY = "adminToken";

export function getAdminToken(): string | null {
  if (typeof window === "undefined") return null;
  return window.localStorage.getItem(TOKEN_KEY);
}

export function clearAdminToken() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(TOKEN_KEY);
}

const AdminGuard: React.FC<AdminGuardProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const token = getAdminToken();

    // Login sayfasındaysak ve token varsa direkt dashboard'a yönlendir
    if (pathname === "/admin/login") {
      if (token) {
        router.replace("/admin");
      } else {
        setTimeout(() => setChecked(true), 0);
      }
      return;
    }

    // Diğer admin sayfaları için token zorunlu
    if (!token) {
      router.replace("/admin/login");
    } else {
      setTimeout(() => setChecked(true), 0);
    }
  }, [router, pathname]);

  if (!checked) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="rounded-xl bg-white px-6 py-4 shadow-sm border border-gray-200">
          <p className="text-sm text-gray-600">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default AdminGuard;


