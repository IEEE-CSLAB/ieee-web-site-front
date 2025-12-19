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
import { useToast } from "@/components/admin/ToastContext";
import ConfirmModal from "@/components/admin/ConfirmModal";

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

  const { showToast } = useToast();
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    committeeId: number | null;
  }>({ isOpen: false, committeeId: null });

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
      showToast(`Komite başarıyla ${editingId ? "güncellendi" : "oluşturuldu"}`, "success");
    } catch (err) {
      console.error("Failed to save committee", err);
      showToast("Komite kaydedilirken bir hata oluştu", "error");
    }
  };

  const handleDeleteClick = (id: number) => {
    setConfirmModal({ isOpen: true, committeeId: id });
  };

  const handleConfirmDelete = async () => {
    if (!confirmModal.committeeId) return;
    try {
      await adminDeleteCommittee(confirmModal.committeeId);
      showToast("Komite başarıyla silindi", "success");
      await fetchAll();
    } catch (err) {
      console.error("Failed to delete committee", err);
      showToast("Komite silinirken bir hata oluştu", "error");
    } finally {
      setConfirmModal({ isOpen: false, committeeId: null });
    }
  };

  if (loading) return <div>Yükleniyor...</div>;

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Komite Yönetimi</h1>
        <button
          onClick={() => {
            setEditingId(null);
            setCurrentCommittee(emptyForm);
            setLogoFile(null);
            setIsEditing(true);
          }}
          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Yeni Komite Ekle
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {committees.map((committee) => (
          <div
            key={committee.id}
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 p-6 flex flex-col justify-between transition-colors"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-slate-700 flex items-center justify-center text-lg font-bold text-gray-700 dark:text-slate-300">
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
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {committee.name}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-slate-400 mb-4 line-clamp-3">
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
                className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDeleteClick(committee.id)}
                className="px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-xl w-full max-w-xl max-h-[90vh] overflow-y-auto transition-colors">
            <h2 className="text-xl font-bold mb-4 dark:text-white">
              {editingId ? "Komiteyi Düzenle" : "Yeni Komite"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                  Komite Adı
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-slate-600 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500 text-black dark:text-white dark:bg-slate-900 transition-colors"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                  Açıklama
                </label>
                <textarea
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-md border border-gray-300 dark:border-slate-600 px-3 py-2 text-sm shadow-sm focus:border-purple-500 focus:ring-purple-500 text-black dark:text-white dark:bg-slate-900 transition-colors"
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
                <label className="block text-sm font-medium text-gray-700 dark:text-slate-300">
                  Logo (opsiyonel)
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="mt-1 block w-full text-sm text-gray-700 dark:text-slate-300"
                  onChange={(e) => setLogoFile(e.target.files?.[0] || null)}
                />
                {currentCommittee.logoUrl && !logoFile && (
                  <p className="mt-2 text-xs text-gray-500 dark:text-slate-400">
                    Mevcut logo: <a href={currentCommittee.logoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{currentCommittee.logoUrl}</a>
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
                  className="px-4 py-2 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        title="Komiteyi Sil"
        message="Bu komiteyi silmek istediğinize emin misiniz? Bu işlem geri alınamaz."
        onConfirm={handleConfirmDelete}
        onCancel={() => setConfirmModal({ isOpen: false, committeeId: null })}
        confirmText="Evet, Sil"
        cancelText="Vazgeç"
        type="danger"
      />
    </div>
  );
}
