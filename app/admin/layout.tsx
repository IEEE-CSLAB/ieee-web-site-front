"use client";

import { usePathname } from "next/navigation";
import AdminGuard, { clearAdminToken } from "@/components/admin/AdminGuard";
import { ToastProvider } from "@/components/admin/ToastContext";
import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // If on login page, render simplified layout
  if (pathname === "/admin/login") {
    return (
      <ToastProvider>
        <AdminGuard>
          <div className="min-h-screen bg-gray-100 transition-colors duration-300">
            {children}
          </div>
        </AdminGuard>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <AdminGuard>
        <div className="flex h-screen bg-gray-100 transition-colors duration-300">
          {/* Sidebar */}
          <aside className="w-64 bg-white shadow-md flex flex-col transition-colors duration-300 border-r text-slate-800">
            <div className="p-6">
              <h2 className="text-2xl font-bold">Admin Panel</h2>
            </div>
            <nav className="mt-6 flex-1">
              <Link
                href="/admin"
                className="block px-6 py-3 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/events"
                className="block px-6 py-3 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Etkinlikler
              </Link>
              <Link
                href="/admin/blogs"
                className="block px-6 py-3 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Bloglar
              </Link>
              <Link
                href="/admin/committees"
                className="block px-6 py-3 hover:bg-gray-50 hover:text-gray-900 transition-colors"
              >
                Komiteler
              </Link>
            </nav>

            <div className="p-4 border-t">
              <button
                type="button"
                onClick={() => {
                  clearAdminToken();
                  window.location.href = "/admin/login";
                }}
                className="w-full text-left px-6 py-3 text-red-600 hover:bg-red-50 mt-2 rounded-md transition-colors"
              >
                Çıkış Yap
              </button>
              <Link
                href="/"
                className="block px-6 py-3 text-blue-600 hover:bg-blue-50 mt-2 rounded-md transition-colors"
              >
                Siteye Dön
              </Link>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-8">{children}</main>
        </div>
      </AdminGuard>
    </ToastProvider>
  );
}
