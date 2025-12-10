"use client";

import React, { useState, useEffect } from 'react';

interface Event {
    id: number;
    title: string;
    description: string;
    tag: string;
    image: string;
    date: string;
    location: string;
    link: string;
    isImportant: boolean;
}

export default function AdminEvents() {
    const [events, setEvents] = useState<Event[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<Partial<Event>>({});

    const fetchEvents = async () => {
        try {
            const res = await fetch('/api/events');
            const data = await res.json();
            setEvents(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch events', error);
        }
    };

    useEffect(() => {
        fetchEvents();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        let updatedEvents;
        if (currentEvent.id) {
            // Update existing
            updatedEvents = events.map(ev => ev.id === currentEvent.id ? { ...ev, ...currentEvent } as Event : ev);
        } else {
            // Add new
            const newId = Math.max(...events.map(e => e.id), 0) + 1;
            updatedEvents = [...events, { ...currentEvent, id: newId } as Event];
        }

        try {
            await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEvents)
            });
            setEvents(updatedEvents);
            setIsEditing(false);
            setCurrentEvent({});
        } catch (error) {
            console.error('Failed to save event', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Bu etkinliği silmek istediğinize emin misiniz?')) return;

        const updatedEvents = events.filter(ev => ev.id !== id);
        try {
            await fetch('/api/events', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedEvents)
            });
            setEvents(updatedEvents);
        } catch (error) {
            console.error('Failed to delete event', error);
        }
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Etkinlik Yönetimi</h1>
                <button
                    onClick={() => { setIsEditing(true); setCurrentEvent({}); }}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    Yeni Etkinlik Ekle
                </button>
            </div>

            {isEditing && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-xl font-bold mb-4">{currentEvent.id ? 'Etkinliği Düzenle' : 'Yeni Etkinlik'}</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Başlık</label>
                                <input
                                    type="text"
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                    value={currentEvent.title || ''}
                                    onChange={e => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Açıklama</label>
                                <textarea
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                    value={currentEvent.description || ''}
                                    onChange={e => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Tarih</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Örn: 15 Mart 2024"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.date || ''}
                                        onChange={e => setCurrentEvent({ ...currentEvent, date: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Konum</label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.location || ''}
                                        onChange={e => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Etiket (Tag)</label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.tag || ''}
                                        onChange={e => setCurrentEvent({ ...currentEvent, tag: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Resim URL</label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.image || ''}
                                        onChange={e => setCurrentEvent({ ...currentEvent, image: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="isImportant"
                                    checked={currentEvent.isImportant || false}
                                    onChange={e => setCurrentEvent({ ...currentEvent, isImportant: e.target.checked })}
                                />
                                <label htmlFor="isImportant" className="text-sm font-medium text-gray-700">Önemli Etkinlik (Anasayfada öne çıkar)</label>
                            </div>
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsEditing(false)}
                                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                                >
                                    İptal
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Kaydet
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Etkinlik</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Durum</th>
                            <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {events.map((event) => (
                            <tr key={event.id}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0">
                                            <img className="h-10 w-10 rounded-full object-cover" src={event.image} alt="" />
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{event.title}</div>
                                            <div className="text-sm text-gray-500">{event.tag}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{event.date}</div>
                                    <div className="text-sm text-gray-500">{event.location}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    {event.isImportant && (
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Önemli
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <button
                                        onClick={() => { setCurrentEvent(event); setIsEditing(true); }}
                                        className="text-blue-600 hover:text-blue-900 mr-4"
                                    >
                                        Düzenle
                                    </button>
                                    <button
                                        onClick={() => handleDelete(event.id)}
                                        className="text-red-600 hover:text-red-900"
                                    >
                                        Sil
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
