export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700">Etkinlikler</h3>
                    <p className="text-3xl font-bold text-blue-600 mt-2">Yönet</p>
                    <a href="/admin/events" className="text-sm text-gray-500 mt-4 block hover:text-blue-600">Görüntüle →</a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700">Bloglar</h3>
                    <p className="text-3xl font-bold text-green-600 mt-2">Yönet</p>
                    <a href="/admin/blogs" className="text-sm text-gray-500 mt-4 block hover:text-green-600">Görüntüle →</a>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-semibold text-gray-700">Komiteler</h3>
                    <p className="text-3xl font-bold text-purple-600 mt-2">Yönet</p>
                    <a href="/admin/committees" className="text-sm text-gray-500 mt-4 block hover:text-purple-600">Görüntüle →</a>
                </div>
            </div>
        </div>
    );
}
