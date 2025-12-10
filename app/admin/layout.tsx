export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-white shadow-md">
                <div className="p-6">
                    <h2 className="text-2xl font-bold text-gray-800">Admin Panel</h2>
                </div>
                <nav className="mt-6">
                    <a href="/admin" className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Dashboard
                    </a>
                    <a href="/admin/events" className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Etkinlikler
                    </a>
                    <a href="/admin/blogs" className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Bloglar
                    </a>
                    <a href="/admin/committees" className="block px-6 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900">
                        Komiteler
                    </a>
                    <a href="/" className="block px-6 py-3 text-blue-600 hover:bg-blue-50 mt-4 border-t">
                        Siteye Dön
                    </a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-auto p-8">
                {children}
            </main>
        </div>
    );
}
