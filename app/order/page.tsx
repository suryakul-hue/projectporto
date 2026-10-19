'use client';

import { useState, useEffect, FormEvent, ChangeEvent } from 'react';

interface CommissionOrder {
  id_komisi?: string;
  nama_client: string;
  kontak: string;
  platform: string;
  judul_projek: string;
  kategori: string;
  harga: number;
  deadline: string;
  catatan: string;
  status?: string;
}

// Sesuaikan URL ini dengan alamat api.php di Hostinger kamu
const API_URL = 'https://namadomainmu.com/api.php';

export default function OrderPage() {
  const [commissions, setCommissions] = useState<CommissionOrder[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const [formData, setFormData] = useState<CommissionOrder>({
    nama_client: '',
    kontak: '',
    platform: 'Discord',
    judul_projek: '',
    kategori: '',
    harga: 0,
    deadline: '',
    catatan: '',
  });

  // Fetch data komisi dari database Hostinger
  const fetchCommissions = async () => {
    try {
      setLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      setCommissions(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Gagal mengambil data komisi:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCommissions();
  }, []);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'harga' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await res.json();
      alert(result.message || 'Order berhasil dikirim!');

      // Reset form & refresh daftar komisi
      setFormData({
        nama_client: '',
        kontak: '',
        platform: 'Discord',
        judul_projek: '',
        kategori: '',
        harga: 0,
        deadline: '',
        catatan: '',
      });
      fetchCommissions();
    } catch (err) {
      console.error('Gagal mengirim order:', err);
      alert('Terjadi kesalahan saat mengirim order.');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Order Commission</h1>

      {/* FORM ORDER */}
      <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-10">
        <h2 className="text-xl font-semibold mb-4">Form Pemesanan</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-black">
          <input
            type="text"
            name="nama_client"
            placeholder="Nama / Nickname Anda"
            value={formData.nama_client}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            required
          />
          <input
            type="text"
            name="kontak"
            placeholder="Kontak (Discord / Email / No HP)"
            value={formData.kontak}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            required
          />
          <select
            name="platform"
            value={formData.platform}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
          >
            <option value="Discord">Discord</option>
            <option value="X (Twitter)">X (Twitter)</option>
            <option value="Email">Email</option>
            <option value="Instagram">Instagram</option>
          </select>
          <input
            type="text"
            name="judul_projek"
            placeholder="Judul / Deskripsi Order"
            value={formData.judul_projek}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            required
          />
          <input
            type="text"
            name="kategori"
            placeholder="Kategori (misal: Illustration, Live2D, 3D)"
            value={formData.kategori}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            required
          />
          <input
            type="number"
            name="harga"
            placeholder="Estimasi Harga (Rp)"
            value={formData.harga || ''}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            required
          />
          <label className="text-white text-sm">Deadline yang Diinginkan:</label>
          <input
            type="date"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700"
            required
          />
          <textarea
            name="catatan"
            placeholder="Catatan Tambahan / Pose / Link Referensi"
            value={formData.catatan}
            onChange={handleChange}
            className="p-3 rounded bg-neutral-800 text-white border border-neutral-700 h-24"
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition"
          >
            Kirim Order Komisi
          </button>
        </form>
      </div>

      {/* DAFTAR QUEUE STATUS */}
      <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
        <h2 className="text-xl font-semibold mb-4">Commission Queue & Status</h2>
        {loading ? (
          <p className="text-gray-400">Loading data from database...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-800 text-gray-400">
                  <th className="p-3">ID</th>
                  <th className="p-3">Client</th>
                  <th className="p-3">Projek</th>
                  <th className="p-3">Kategori</th>
                  <th className="p-3">Harga</th>
                  <th className="p-3">Deadline</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {commissions.map((item, idx) => (
                  <tr key={item.id_komisi || idx} className="border-b border-neutral-800/50">
                    <td className="p-3 font-mono">{item.id_komisi}</td>
                    <td className="p-3">{item.nama_client}</td>
                    <td className="p-3">{item.judul_projek}</td>
                    <td className="p-3">{item.kategori}</td>
                    <td className="p-3">Rp {Number(item.harga).toLocaleString('id-ID')}</td>
                    <td className="p-3">{item.deadline}</td>
                    <td className="p-3 font-semibold text-blue-400">{item.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}