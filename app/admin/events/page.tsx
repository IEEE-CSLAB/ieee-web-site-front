"use client";

import React, { useState, useEffect } from 'react';
import { API_URL } from '@/lib/api';
import {
    adminFetchEvents,
    adminCreateEvent,
    adminUpdateEvent,
    adminDeleteEvent,
    AdminEventInput,
    adminUploadEventCover,
} from '@/lib/services/adminEventsApi';
import { fetchCommittees } from '@/lib/services/committeesApi';

interface AdminEventRow {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    isImportant: boolean;
    image?: string;
    tag?: string;
    committeeId?: number;
}

interface EventFormState {
    id?: number;
    title: string;
    description: string;
    startDate: string; // datetime-local
    endDate: string;
    location: string;
    isImportant: boolean;
    coverFile?: File | null;
    committeeId?: number;
}

const emptyForm: EventFormState = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    isImportant: false,
    coverFile: null,
    committeeId: undefined,
};

export default function AdminEvents() {
    const [events, setEvents] = useState<AdminEventRow[]>([]);
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [currentEvent, setCurrentEvent] = useState<EventFormState>(emptyForm);
    const [committees, setCommittees] = useState<{ id: number; name: string }[]>([]);

    const toDateDisplay = (iso: string) => {
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '';
        return d.toLocaleDateString('tr-TR', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        });
    };

    const toInputValue = (iso: string) => {
        if (!iso) return '';
        const d = new Date(iso);
        if (Number.isNaN(d.getTime())) return '';
        return d.toISOString().slice(0, 16);
    };

    const fetchEvents = async () => {
        try {
            const data = await adminFetchEvents();
            const mapped: AdminEventRow[] = data.map((e: any) => {
                const imageRaw: string | undefined = e.coverImageUrl || undefined;
                const image =
                    imageRaw && imageRaw.startsWith('http')
                        ? imageRaw
                        : imageRaw
                        ? `${API_URL}${imageRaw}`
                        : undefined;

                const committee = Array.isArray(e.committees) && e.committees.length > 0
                    ? e.committees[0]
                    : null;

                return {
                    id: e.id,
                    title: e.title,
                    description: e.description ?? '',
                    date: toDateDisplay(e.startDate),
                    location: e.location ?? '',
                    isImportant: e.isImportant,
                    image,
                    tag: committee?.name || (e.isImportant ? 'Önemli' : ''),
                    committeeId: committee?.id,
                };
            });
            setEvents(mapped);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch events', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        const load = async () => {
            try {
                const committeeData = await fetchCommittees();
                setCommittees(
                    committeeData.map((c: any) => ({
                        id: c.id,
                        name: c.name as string,
                    }))
                );
            } catch (err) {
                console.error('Failed to fetch committees', err);
            }
            await fetchEvents();
        };
        load();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const selectedCommitteeId =
                typeof currentEvent.committeeId === 'number'
                    ? currentEvent.committeeId
                    : committees[0]?.id;

            const payload: AdminEventInput = {
                title: currentEvent.title,
                description: currentEvent.description,
                startDate: new Date(currentEvent.startDate).toISOString(),
                endDate: new Date(currentEvent.endDate).toISOString(),
                location: currentEvent.location,
                quota: null,
                isImportant: currentEvent.isImportant,
                committeeIds: selectedCommitteeId ? [selectedCommitteeId] : undefined,
            };
            let eventId = currentEvent.id;

            if (currentEvent.id) {
                await adminUpdateEvent(currentEvent.id, payload);
            } else {
                const created = await adminCreateEvent(payload);
                eventId = created.id;
            }

            if (eventId && currentEvent.coverFile) {
                await adminUploadEventCover(eventId, currentEvent.coverFile);
            }

            await fetchEvents();
            setIsEditing(false);
            setCurrentEvent(emptyForm);
        } catch (error) {
            console.error('Failed to save event', error);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm('Bu etkinliği silmek istediğinize emin misiniz?')) return;

        try {
            await adminDeleteEvent(id);
            await fetchEvents();
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
                    onClick={() => { setIsEditing(true); setCurrentEvent(emptyForm); }}
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
                                    value={currentEvent.title}
                                    onChange={e => setCurrentEvent({ ...currentEvent, title: e.target.value })}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Açıklama</label>
                                <textarea
                                    required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                    value={currentEvent.description}
                                    onChange={e => setCurrentEvent({ ...currentEvent, description: e.target.value })}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Başlangıç</label>
                                    <input
                                        type="datetime-local"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.startDate}
                                        onChange={e => setCurrentEvent({ ...currentEvent, startDate: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Bitiş</label>
                                    <input
                                        type="datetime-local"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.endDate}
                                        onChange={e => setCurrentEvent({ ...currentEvent, endDate: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Konum</label>
                                    <input
                                        type="text"
                                        required
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={currentEvent.location}
                                        onChange={e => setCurrentEvent({ ...currentEvent, location: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <span className="block text-sm font-medium text-gray-700 mb-1">
                                        Önemli Etkinlik
                                    </span>
                                    <div className="flex items-center gap-2 mt-1">
                                        <input
                                            type="checkbox"
                                            id="isImportant"
                                            checked={currentEvent.isImportant}
                                            onChange={e => setCurrentEvent({ ...currentEvent, isImportant: e.target.checked })}
                                        />
                                        <label htmlFor="isImportant" className="text-sm text-gray-700">
                                            Anasayfada öne çıkar
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Komite
                                    </label>
                                    <select
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 border p-2 text-black"
                                        value={
                                            currentEvent.committeeId ??
                                            committees[0]?.id ??
                                            ''
                                        }
                                        onChange={e =>
                                            setCurrentEvent({
                                                ...currentEvent,
                                                committeeId: Number(e.target.value),
                                            })
                                        }
                                    >
                                        {committees.map(c => (
                                            <option key={c.id} value={c.id}>
                                                {c.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">
                                        Kapak Görseli
                                    </label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="mt-1 block w-full text-sm text-gray-700"
                                        onChange={e =>
                                            setCurrentEvent({
                                                ...currentEvent,
                                                coverFile: e.target.files?.[0] || null,
                                            })
                                        }
                                    />
                                </div>
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
                                        onClick={() => {
                                            setCurrentEvent({
                                                id: event.id,
                                                title: event.title,
                                                description: event.description,
                                                startDate: toInputValue(event.date),
                                                endDate: toInputValue(event.date),
                                                location: event.location,
                                                isImportant: event.isImportant,
                                            });
                                            setIsEditing(true);
                                        }}
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
