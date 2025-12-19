"use client";

import React, { useState, useEffect } from "react";
import {
  adminFetchCommittees,
  adminCreateCommittee,
  adminUpdateCommittee,
  adminDeleteCommittee,
  adminUploadCommitteeLogo,
  AdminCommitteeInput,
} from "@/lib/services/adminCommitteesApi";
import { API_URL } from "@/lib/api";

interface CommitteeRow {
  id: number;
  name: string;
  description: string;
  logoUrl?: string;
}

const emptyForm: AdminCommitteeInput = {
  name: "",
  description: "",
  logoUrl: "",
};

export default function AdminCommittees() {
  const [committees, setCommittees] = useState<CommitteeRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentCommittee, setCurrentCommittee] =
    useState<AdminCommitteeInput>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [logoFile, setLogoFile] = useState<File | null>(null);

  const fetchAll = async () => {
    try {
      const data = await adminFetchCommittees();
      const mapped: CommitteeRow[] = data.map((c: any) => {
        const logoRaw: string | undefined = c.logoUrl || undefined;
        const logoUrl = logoRaw && logoRaw.startsWith('http')
          ? logoRaw
          : logoRaw
          ? `${API_URL}${logoRaw}`
          : undefined;

        return {
          id: c.id,
          name: c.name,
          description: c.description,
          logoUrl,
        };
      });
      setCommittees(mapped);
      setLoading(false);
    } catch (err) {
      console.error("Failed to fetch committees", err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const payload: AdminCommitteeInput = {
        name: currentCommittee.name,
        description: currentCommittee.description,
        logoUrl: undefined, // File upload will handle this
      };

      let committeeId = editingId;

      if (editingId) {
        await adminUpdateCommittee(editingId, payload);
      } else {
        const created = await adminCreateCommittee(payload);
        committeeId = created.id;
      }

      // Upload logo if file is selected
      if (committeeId && logoFile) {
        await adminUploadCommitteeLogo(committeeId, logoFile);
      }

      await fetchAll();
      setIsEditing(false);
      setEditingId(null);
      setCurrentCommittee(emptyForm);
      setLogoFile(null);
    } catch (err) {
      console.error("Failed to save committee", err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Bu komiteyi silmek istediğinize emin misiniz?")) return;
    try {
      await adminDeleteCommittee(id);
      await fetchAll();
    } catch (err) {
      console.error("Failed to delete committee", err);
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Komite Yönetimi</h1>
        <button
          onClick={() => {
            setEditingId(null);
            setCurrentCommittee(emptyForm);
            setLogoFile(null);
            setIsEditing(true);
          }}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Yeni Komite Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {committees.map((committee) => (
          <div
            key={committee.id}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center text-lg font-bold text-gray-700">
                {committee.logoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={committee.logoUrl}
                    alt={committee.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  committee.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)
                )}
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">
                  {committee.name}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {committee.description}
            </p>
            <div className="flex justify-end gap-3 mt-4">
              <button
                onClick={() => {
                  setEditingId(committee.id);
                  setCurrentCommittee({
                    name: committee.name,
                    description: committee.description,
                    logoUrl: committee.logoUrl ?? "",
                  });
                  setLogoFile(null);
                  setIsEditing(true);
                }}
                className="px-4 py-2 text-sm text-blue-600 hover:text-blue-800"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(committee.id)}
                className="px-4 py-2 text-sm text-red-600 hover:text-red-800"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">
              {editingId ? "Komiteyi Düzenle" : "Yeni Komite"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Komite Adı
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500 text-black"
                  value={currentCommittee.name}
                  onChange={(e) =>
                    setCurrentCommittee({
                      ...currentCommittee,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Açıklama
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500 text-black"
                  value={currentCommittee.description}
                  onChange={(e) =>
                    setCurrentCommittee({
                      ...currentCommittee,
                      description: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Logo (opsiyonel)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-700"
                  onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                />
                {currentCommittee.logoUrl && !logoFile && (
                  <p className="mt-2 text-xs text-gray-500">
                    Mevcut logo: <a href={currentCommittee.logoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{currentCommittee.logoUrl}</a>
                  </p>
                )}
              </div>
              <div className="flex justify-end gap-3 mt-6">
                <button
                  type="button"
                  onClick={() => {
                    setIsEditing(false);
                    setEditingId(null);
                    setCurrentCommittee(emptyForm);
                    setLogoFile(null);
                  }}
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
