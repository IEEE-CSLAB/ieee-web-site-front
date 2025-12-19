"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // Import validation
import AdminGuard, { clearAdminToken } from "@/components/admin/AdminGuard";

import { ToastProvider } from "@/components/admin/ToastContext";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get current path
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem("adminDarkMode") === "true";
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("adminDarkMode", String(newMode));
  };

  // If on login page, render simplified layout
  if (pathname === "/admin/login") {
    return (
      <ToastProvider>
        <AdminGuard>
          <div className={`${darkMode ? "dark" : ""} min-h-screen bg-gray-100 dark:bg-slate-950 transition-colors duration-300`}>
            {children}
          </div>
        </AdminGuard>
      </ToastProvider>
    );
  }

  return (
    <ToastProvider>
      <AdminGuard>
        <div className={`${darkMode ? "dark" : ""} flex h-screen bg-gray-100 dark:bg-slate-950 transition-colors duration-300`}>
          {/* Sidebar */}
          <aside className="w-64 bg-white dark:bg-slate-900 shadow-md flex flex-col transition-colors duration-300 border-r dark:border-slate-800 text-slate-800 dark:text-slate-200">
            <div className="p-6">
              <h2 className="text-2xl font-bold dark:text-white">Admin Panel</h2>
            </div>
            <nav className="mt-6 flex-1">
              <a
                href="/admin"
                className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Dashboard
              </a>
              <a
                href="/admin/events"
                className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Etkinlikler
              </a>
              <a
                href="/admin/blogs"
                className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Bloglar
              </a>
              <a
                href="/admin/committees"
                className="block px-6 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Komiteler
              </a>
            </nav>

            <div className="p-4 border-t dark:border-slate-800">
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="w-full text-left px-6 py-3 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-md transition-colors"
              >
                {darkMode ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                    <span>Aydınlık Mod</span>
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                    <span>Karanlık Mod</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  clearAdminToken();
                  window.location.href = "/admin/login";
                }}
                className="w-full text-left px-6 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 dark:text-red-400 mt-2 rounded-md transition-colors"
              >
                Çıkış Yap
              </button>
              <a
                href="/"
                className="block px-6 py-3 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 mt-2 rounded-md transition-colors"
              >
                Siteye Dön
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto p-8 dark:text-slate-200">{children}</main>
        </div>
      </AdminGuard>
    </ToastProvider>
  );
}
