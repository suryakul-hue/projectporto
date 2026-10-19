"use client";

import { useState } from "react";
import Link from "next/link";

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    category: "Illustration",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await fetch("https://ysurtod.fun/api/order.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg({
          type: "success",
          text: "Pesanan berhasil dikirim! Aku bakal hubungi kamu segera.",
        });
        setFormData({ name: "", contact: "", category: "Illustration", description: "" });
      } else {
        setStatusMsg({
          type: "error",
          text: data.message || "Gagal mengirim pesanan. Coba lagi ya!",
        });
      }
    } catch (err) {
      setStatusMsg({
        type: "error",
        text: "Terjadi kesalahan koneksi ke server API.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col justify-center items-center p-6">
      <div className="w-full max-w-lg rounded-2xl border border-neutral-800 bg-neutral-900 p-8 shadow-2xl">
        <div className="flex items-center justify-between border-b border-neutral-800 pb-4 mb-6">
          <div>
            <h1 className="text-xl font-bold text-white">Commission Request</h1>
            <p className="text-xs text-neutral-400">Isi detail pesananmu di bawah ini</p>
          </div>
          <Link href="/" className="text-xs text-neutral-400 hover:text-white transition underline">
            ← Kembali
          </Link>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-sm">
          <div>
            <label className="text-xs font-medium text-neutral-400">Nama / Username</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-white focus:border-pink-500 focus:outline-none transition"
              placeholder="e.g. Suryakul"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-400">Kontak (Discord / Email / IG)</label>
            <input
              type="text"
              required
              value={formData.contact}
              onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-white focus:border-pink-500 focus:outline-none transition"
              placeholder="e.g. discord#1234 atau email@domain.com"
            />
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-400">Kategori Komisi</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-white focus:border-pink-500 focus:outline-none transition"
            >
              <option value="Illustration">Illustration</option>
              <option value="Video Editing">Video Editing / AMV</option>
              <option value="3D Animation / Blender">3D Animation / Blender</option>
            </select>
          </div>

          <div>
            <label className="text-xs font-medium text-neutral-400">Deskripsi / Brief Karya</label>
            <textarea
              rows={4}
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-white focus:border-pink-500 focus:outline-none transition"
              placeholder="Jelaskan konsep, karakter, deadline, atau sertakan link referensi..."
            />
          </div>

          {statusMsg && (
            <p className={`text-xs font-medium p-3 rounded-lg border ${statusMsg.type === "success" ? "bg-emerald-950/50 border-emerald-800 text-emerald-400" : "bg-pink-950/50 border-pink-800 text-pink-400"}`}>
              {statusMsg.text}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-lg bg-pink-600 py-3 font-semibold text-white hover:bg-pink-500 active:scale-95 disabled:opacity-50 transition"
          >
            {loading ? "Mengirim..." : "Kirim Pesanan"}
          </button>
        </form>
      </div>
    </div>
  );
}