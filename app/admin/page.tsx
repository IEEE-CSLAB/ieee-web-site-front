export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 transition-colors">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-200">Etkinlikler</h3>
                    <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mt-2">Yönet</p>
                    <a href="/admin/events" className="text-sm text-gray-500 dark:text-slate-400 mt-4 block hover:text-blue-600 dark:hover:text-blue-300">Görüntüle →</a>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-200">Bloglar</h3>
                    <p className="text-3xl font-bold text-green-600 dark:text-green-400 mt-2">Yönet</p>
                    <a href="/admin/blogs" className="text-sm text-gray-500 dark:text-slate-400 mt-4 block hover:text-green-600 dark:hover:text-green-300">Görüntüle →</a>
                </div>
                <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 transition-colors">
                    <h3 className="text-lg font-semibold text-gray-700 dark:text-slate-200">Komiteler</h3>
                    <p className="text-3xl font-bold text-purple-600 dark:text-purple-400 mt-2">Yönet</p>
                    <a href="/admin/committees" className="text-sm text-gray-500 dark:text-slate-400 mt-4 block hover:text-purple-600 dark:hover:text-purple-300">Görüntüle →</a>
                </div>
            </div>
        </div>
    );
}
