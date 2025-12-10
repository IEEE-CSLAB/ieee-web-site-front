"use client";

import React, { useState, useEffect } from 'react';

interface Member {
    id: string; // Use a simple unique ID
    name: string;
    role: string;
    image?: string;
}

interface Committee {
    name: string;
    description: string;
    members: number;
    projects: number;
    image: string;
    badge: string;
    accentColor: string;
    detailText: string;
    detailImage: string;
    memberList?: Member[];
}

export default function AdminCommittees() {
    const [committees, setCommittees] = useState<Committee[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedCommittee, setSelectedCommittee] = useState<Committee | null>(null);
    const [isEditing, setIsEditing] = useState(false);

    // For Member Editing
    const [newMember, setNewMember] = useState<Partial<Member>>({});
    const [isMemberFormOpen, setIsMemberFormOpen] = useState(false);

    const fetchCommittees = async () => {
        try {
            const res = await fetch('/api/committees');
            const data = await res.json();
            setCommittees(data);
            setLoading(false);
        } catch (error) {
            console.error('Failed to fetch committees', error);
        }
    };

    useEffect(() => {
        fetchCommittees();
    }, []);

    const saveCommittees = async (updatedCommittees: Committee[]) => {
        try {
            await fetch('/api/committees', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(updatedCommittees)
            });
            setCommittees(updatedCommittees);

            // Update selected committee if it's currently open
            if (selectedCommittee) {
                const updatedSelected = updatedCommittees.find(c => c.name === selectedCommittee.name);
                if (updatedSelected) setSelectedCommittee(updatedSelected);
            }
        } catch (error) {
            console.error('Failed to save committees', error);
        }
    };

    const handleAddMember = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCommittee || !newMember.name || !newMember.role) return;

        const memberToAdd: Member = {
            id: Date.now().toString(),
            name: newMember.name,
            role: newMember.role,
            image: newMember.image || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
        };

        const updatedCommittee = {
            ...selectedCommittee,
            memberList: [...(selectedCommittee.memberList || []), memberToAdd]
        };

        const updatedCommittees = committees.map(c =>
            c.name === selectedCommittee.name ? updatedCommittee : c
        );

        await saveCommittees(updatedCommittees);
        setNewMember({});
        setIsMemberFormOpen(false);
    };

    const handleDeleteMember = async (memberId: string) => {
        if (!selectedCommittee || !confirm('Üyeyi silmek istediğinize emin misiniz?')) return;

        const updatedCommittee = {
            ...selectedCommittee,
            memberList: (selectedCommittee.memberList || []).filter(m => m.id !== memberId)
        };

        const updatedCommittees = committees.map(c =>
            c.name === selectedCommittee.name ? updatedCommittee : c
        );

        await saveCommittees(updatedCommittees);
    };

    if (loading) return <div>Yükleniyor...</div>;

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Komite Yönetimi</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {committees.map((committee) => (
                    <div key={committee.name} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gray-100 text-${committee.accentColor}-600 font-bold text-xl`}>
                                {committee.badge.substring(0, 2)}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">{committee.name}</h3>
                                <p className="text-sm text-gray-500">{committee.members} Üye, {committee.projects} Proje</p>
                            </div>
                        </div>
                        <p className="text-gray-600 mb-4 line-clamp-2">{committee.description}</p>

                        <button
                            onClick={() => { setSelectedCommittee(committee); setIsEditing(true); }}
                            className="w-full py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
                        >
                            Üyeleri Yönet ({committee.memberList?.length || 0})
                        </button>
                    </div>
                ))}
            </div>

            {isEditing && selectedCommittee && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold">{selectedCommittee.name} - Üye Listesi</h2>
                            <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-gray-700">
                                X
                            </button>
                        </div>

                        <div className="mb-6 flex justify-end">
                            <button
                                onClick={() => setIsMemberFormOpen(true)}
                                className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
                            >
                                + Yeni Üye Ekle
                            </button>
                        </div>

                        {/* Add Member Form */}
                        {isMemberFormOpen && (
                            <div className="mb-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
                                <h3 className="font-bold text-gray-700 mb-2">Yeni Üye Bilgileri</h3>
                                <form onSubmit={handleAddMember} className="grid gap-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Ad Soyad"
                                            required
                                            className="border p-2 rounded text-black"
                                            value={newMember.name || ''}
                                            onChange={e => setNewMember({ ...newMember, name: e.target.value })}
                                        />
                                        <input
                                            type="text"
                                            placeholder="Görevi (Örn: Başkan, Üye)"
                                            required
                                            className="border p-2 rounded text-black"
                                            value={newMember.role || ''}
                                            onChange={e => setNewMember({ ...newMember, role: e.target.value })}
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Profil Fotoğrafı URL (Opsiyonel)"
                                        className="border p-2 rounded text-black"
                                        value={newMember.image || ''}
                                        onChange={e => setNewMember({ ...newMember, image: e.target.value })}
                                    />
                                    <div className="flex gap-2 justify-end">
                                        <button
                                            type="button"
                                            onClick={() => { setIsMemberFormOpen(false); setNewMember({}); }}
                                            className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded"
                                        >
                                            İptal
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                        >
                                            Ekle
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Member List */}
                        <div className="space-y-4">
                            {(selectedCommittee.memberList && selectedCommittee.memberList.length > 0) ? (
                                selectedCommittee.memberList.map((member) => (
                                    <div key={member.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50">
                                        <div className="flex items-center gap-4">
                                            <img src={member.image} alt={member.name} className="w-12 h-12 rounded-full object-cover" />
                                            <div>
                                                <h4 className="font-bold text-gray-900">{member.name}</h4>
                                                <p className="text-sm text-gray-500">{member.role}</p>
                                            </div>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteMember(member.id)}
                                            className="text-red-500 hover:text-red-700 px-3 py-1 bg-red-50 rounded"
                                        >
                                            Sil
                                        </button>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">Henüz üye eklenmemiş.</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
