"use client";

import { useEffect, useRef, useState } from "react";

const CATEGORIES = [
  { value: "Illustration", label: "Illustration", hint: "Karakter, fanart, ilustrasi" },
  { value: "Video Editing", label: "Video Editing / AMV", hint: "AMV, montage, edit video" },
  { value: "3D Animation / Blender", label: "3D / Blender", hint: "Model, render, animasi 3D" },
];

const INITIAL_FORM = {
  name: "",
  contact: "",
  category: "Illustration",
  budget: "",
  deadline: "",
  reference: "",
  description: "",
};

export default function OrderPage() {
  // --- Header state ---
  const [navHidden, setNavHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setNavHidden(y > lastScrollY.current && y > 80);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // --- Form state ---
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const update = (key: keyof typeof INITIAL_FORM, value: string) =>
    setFormData((prev) => ({ ...prev, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg(null);

    try {
      const res = await fetch("https://ysurtod.fun/api/order.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatusMsg({
          type: "success",
          text: "Pesanan terkirim! Aku bakal hubungi kamu lewat kontak yang kamu isi.",
        });
        setFormData(INITIAL_FORM);
      } else {
        setStatusMsg({
          type: "error",
          text: data.message || "Pesanan gagal dikirim. Coba lagi ya!",
        });
      }
    } catch {
      setStatusMsg({
        type: "error",
        text: "Tidak bisa terhubung ke server. Cek koneksi kamu lalu coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "mt-1.5 w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3.5 py-2.5 text-sm text-white placeholder:text-neutral-600 transition focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20";
  const labelClass = "text-xs font-medium text-neutral-400";

  return (
    <>
      {/* Header */}
      <header className={navHidden ? "nav-hidden" : ""}>
        <div className="nav-wrapper">
          <div className="nav-left">
            <a href="/">
              <img
                src="https://media1.tenor.com/m/Lw6Z3WhArHcAAAAC/nokotan-anime.gif"
                className="logo-gif"
                alt="logo"
                width={36}
                height={36}
              />
            </a>
            <ul className={`nav-menu ${mobileOpen ? "open" : ""}`}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a
                  href="/order"
                  aria-current="page"
                  style={{ color: "#f472b6", fontWeight: "600" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#f9a8d4")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#f472b6")}
                >
                  Order Commission
                </a>
              </li>
            </ul>
          </div>
          <button
            className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
          <a href="/contact" className="contact-btn">
            Contact
          </a>
        </div>
      </header>

      {/* Order form */}
      <main className="min-h-screen bg-neutral-950 px-6 pb-16 pt-28 text-white">
        <div className="mx-auto w-full max-w-xl rounded-2xl border border-neutral-800 bg-neutral-900 p-6 shadow-2xl sm:p-8">
          <div className="mb-6 border-b border-neutral-800 pb-4">
            <h1 className="text-xl font-bold">Order Commission</h1>
            <p className="mt-1 text-xs text-neutral-400">
              Isi detail pesananmu. Makin jelas brief-nya, makin cepat aku bisa mulai.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Nama / Username
                </label>
                <input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Suryakul"
                />
              </div>
              <div>
                <label htmlFor="contact" className={labelClass}>
                  Kontak (Discord / Email / IG)
                </label>
                <input
                  id="contact"
                  type="text"
                  required
                  value={formData.contact}
                  onChange={(e) => update("contact", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. username atau email@domain.com"
                />
              </div>
            </div>

            <fieldset>
              <legend className={labelClass}>Kategori komisi</legend>
              <div className="mt-1.5 grid gap-2 sm:grid-cols-3">
                {CATEGORIES.map((c) => {
                  const selected = formData.category === c.value;
                  return (
                    <label
                      key={c.value}
                      className={`cursor-pointer rounded-lg border px-3 py-2.5 transition focus-within:ring-2 focus-within:ring-pink-500/40 ${
                        selected
                          ? "border-pink-500 bg-pink-950/40"
                          : "border-neutral-800 bg-neutral-950 hover:border-neutral-600"
                      }`}
                    >
                      <input
                        type="radio"
                        name="category"
                        value={c.value}
                        checked={selected}
                        onChange={() => update("category", c.value)}
                        className="sr-only"
                      />
                      <span className="block text-sm font-semibold">{c.label}</span>
                      <span className="mt-0.5 block text-[11px] leading-snug text-neutral-400">{c.hint}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="budget" className={labelClass}>
                  Budget (opsional)
                </label>
                <input
                  id="budget"
                  type="text"
                  value={formData.budget}
                  onChange={(e) => update("budget", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. Rp 150.000"
                />
              </div>
              <div>
                <label htmlFor="deadline" className={labelClass}>
                  Deadline (opsional)
                </label>
                <input
                  id="deadline"
                  type="date"
                  value={formData.deadline}
                  onChange={(e) => update("deadline", e.target.value)}
                  className={`${inputClass} [color-scheme:dark]`}
                />
              </div>
            </div>

            <div>
              <label htmlFor="reference" className={labelClass}>
                Link referensi (opsional)
              </label>
              <input
                id="reference"
                type="url"
                value={formData.reference}
                onChange={(e) => update("reference", e.target.value)}
                className={inputClass}
                placeholder="https://..."
              />
            </div>

            <div>
              <label htmlFor="description" className={labelClass}>
                Deskripsi / Brief karya
              </label>
              <textarea
                id="description"
                rows={5}
                required
                value={formData.description}
                onChange={(e) => update("description", e.target.value)}
                className={`${inputClass} resize-y`}
                placeholder="Jelaskan konsep, karakter, style, durasi, atau hal lain yang penting..."
              />
            </div>

            {statusMsg && (
              <p
                role="status"
                className={`rounded-lg border p-3 text-xs font-medium ${
                  statusMsg.type === "success"
                    ? "border-emerald-800 bg-emerald-950/50 text-emerald-400"
                    : "border-pink-800 bg-pink-950/50 text-pink-400"
                }`}
              >
                {statusMsg.text}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-pink-600 py-3 text-sm font-semibold text-white transition hover:bg-pink-500 active:scale-[0.98] disabled:opacity-50"
            >
              {loading ? "Mengirim..." : "Kirim pesanan"}
            </button>
          </form>
        </div>
      </main>
    </>
  );
}