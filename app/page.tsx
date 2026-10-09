"use client";

import {
  useState,
  useEffect,
  useRef,
  useCallback,
  type MouseEvent as ReactMouseEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Inter, Space_Grotesk } from "next/font/google";

/* Font di-host oleh Next (tanpa @import yang memblok render) */
const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const grotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-grotesk" });

/* ═══════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════ */
type VideoItem = {
  id: string;
  title: string;
  desc: string;
  longDesc: string;
  category: string;
  tools: string[];
  videoUrl: string;   // ← path video (YouTube URL atau /videos/xxx.mp4)
  poster: string;     // ← path thumbnail poster
  type: "youtube" | "local";
};

type GalleryItem = {
  id: string;
  src: string;
  title: string;
};

type CodingProject = {
  title: string;
  tagline: string;
  desc: string;
  longDesc: string;
  features: string[];
  stack: string[];
  status: string;
  year: string;
  links: {
    demo: string;
    repo: string;
  };
};

const videos: VideoItem[] = [
  {
    id: "v1",
    title: "Ishida Shoya ",
    desc: "Amv",
    longDesc:
      "Malas",
    category: "AMV",
    tools: ["Premiere Pro", "After Effects", "Corel Draw"],
    videoUrl: "/videos/WhatsApp Video 2026-07-09 at 21.19.29.mp4",
    poster: "/poster/WhatsApp Image 2026-07-09 at 16.46.52.jpeg",
    type: "local",
  },
  {
    id: "v2",
    title: "Blender Bunny girl",
    desc: "3d Manip",
    longDesc:
      "Memberi Like",
    category: "3D Animation",
    tools: ["Blender", "Cycles Renderer", "After Effects"],
    videoUrl: "/videos/WhatsApp Video 2026-07-09 at 21.16.51.mp4",
    poster: "/poster/WhatsApp Image 2026-07-09 at 16.51.55.jpeg",
    type: "local",
  },
  {
    id: "v3",
    title: "December -Tamako",
    desc: "Tamako.",
    longDesc:
      "7 December",
    category: "Motion Graphics",
    tools: ["After Effects"],
    videoUrl: "/videos/WhatsApp Video 2026-07-09 at 21.20.03.mp4",
    poster: "/poster/WhatsApp Image 2026-07-09 at 21.31.57.jpeg",
    type: "local",
  },
  {
    id: "v4",
    title: "Unreal Engine Kyoukai",
    desc: "Unreal Engine + blend + After effect",
    longDesc:
      "Unreal Pertama tapi bukan buat bikin game",
    category: "AMV",
    tools: ["Premiere Pro", "After Effects", "Unreal Engine", "Blender"],
    videoUrl: "/videos/YTDown.com_YouTube_Wonderland-Anime_Media_vWA_kwcyGnA_001_1080p.mp4",
    poster: "/poster/2026-07-09-230002_hyprshot.png",
    type: "local",
  },
  {
    id: "v5",
    title: "Breakdown",
    desc: "Breakdown My edit",
    longDesc:
      "Before and After My edit",
    category: "AMV",
    tools: ["After Effects", "Blender"],
    videoUrl: "/videos/YTDown.com_YouTube_Making-of-AMV-EDIT-For-you-4_Media_tAe8P8UOCvI_001_1080p.mp4",
    poster: "/poster/2026-07-09-233040_hyprshot.png",
    type: "local",
  },
  /*{
    id: "v6",
    title: "UNREAL Editing",
    desc: "Eksperimen editing bertema footage game-engine style.",
    longDesc:
      "Proyek eksperimen editing dengan gaya visual mirip footage game-engine, memadukan efek digital glitch dan transisi tajam.",
    category: "Editing Reel",
    tools: ["After Effects", "Premiere Pro"],
    videoUrl: "https://youtu.be/vWA_kwcyGnA?si=PQ6HpRAV-wvEnyVG",
    poster: "https://img.youtube.com/vi/vWA_kwcyGnA/hqdefault.jpg",
    type: "youtube",
  },
  {
    id: "v7",
    title: "For You AMV",
    desc: "AMV dengan tone emosional dan pacing lambat-cepat bergantian.",
    longDesc:
      "AMV dengan tone emosional, memainkan pacing lambat dan cepat secara bergantian untuk membangun kontras antara momen tenang dan momen intens.",
    category: "AMV",
    tools: ["Premiere Pro", "After Effects"],
    videoUrl: "https://youtu.be/oR5G_c0UMNA?si=Re0G4RrPEPdj_kVO",
    poster: "https://img.youtube.com/vi/oR5G_c0UMNA/hqdefault.jpg",
    type: "youtube",
  },
  /* ── CONTOH VIDEO LOKAL ──
     1. Taruh file MP4 di folder public/videos/
     2. Taruh poster JPG di folder public/poster/
     3. Uncomment dan sesuaikan nama file di bawah ini:
  */
  /*
  {
    id: "v8",
    title: "Video Lokal Saya",
    desc: "Deskripsi video lokal.",
    longDesc: "Deskripsi panjang video lokal saya.",
    category: "Local",
    tools: ["Premiere Pro"],
    videoUrl: "/videos/nama-file.mp4",
    poster: "/poster/nama-file.jpg",
    type: "local",
  },
  */
];

const gallery: GalleryItem[] = [
  { id: "i1", src: "https://i.ibb.co.com/bjSVW9xh/Whats-App-Image-2026-07-09-at-15-48-31.jpg", title: "Ini Ceweku" },
  { id: "i2", src: "https://i.ibb.co.com/mVzYWpnM/2026-07-10-142309-hyprshot.png", title: "OBJ Firefly" },
  { id: "i3", src: "https://i.ibb.co.com/kVB6B2nD/Whats-App-Image-2026-07-09-at-16-05-56.jpg", title: "Art Rezero" },
  { id: "i4", src: "https://i.ibb.co.com/p69cjm7R/Whats-App-Image-2026-07-09-at-16-17-39.jpg", title: "Ceweku lagi" },
  { id: "i5", src: "https://i.ibb.co.com/ynnV2SHF/Whats-App-Image-2026-07-09-at-16-30-43.jpg", title: "Art Marin kitagawa" },
  { id: "i6", src: "https://i.ibb.co.com/kVzZ6ZKj/Whats-App-Image-2026-07-09-at-16-46-52.jpg", title: "Art Ishida Shoya" },
  { id: "i7", src: "https://i.ibb.co.com/39dQXNYX/Whats-App-Image-2026-07-09-at-17-08-27.jpg", title: "OBJ Blend Miyabi" },
  { id: "i8", src: "https://i.ibb.co.com/xSVPSbcH/Whats-App-Image-2026-07-09-at-16-51-55.jpg", title: "Art Bunny Girl" },
];

const codingProjects: CodingProject[] = [
  {
    title: "SiKembang PPKO UNIMUS",
    tagline: "Child Nutrition Monitoring & Education Platform",
    desc: "Project PPKO Berbasis Web",
    longDesc:
      "SiKembang adalah Project PPKO Berbasis Web yang bisa di monitoring secara real time untuk kasus pencegahan stunting dan kekurangan gizi pada anak anak hingga remaja",
    features: [
      "Visualisasi data stunting dengan Recharts",
      "Manajemen data pasien & user oleh admin",
    ],
    stack: ["Next.js", "Laravel", "Inertia.js", "React", "Recharts"],
    status: "In Progress",
    year: "2026",
    links: { demo: "#", repo: "#" },
  },
];

/* ═══════════════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════════════ */
function getYoutubeId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]+)/,
    /(?:youtu\.be\/)([\w-]+)/,
    /(?:youtube\.com\/embed\/)([\w-]+)/,
    /(?:youtube\.com\/shorts\/)([\w-]+)/,
  ];
  for (const p of patterns) {
    const m = url.match(p);
    if (m) return m[1];
  }
  return null;
}

/** Parallax tanpa re-render: posisi mouse ditulis sebagai CSS variable (--px/--py)
 *  lewat requestAnimationFrame. Hanya aktif di perangkat dengan mouse dan
 *  dimatikan kalau user memilih reduced-motion. */
function useMouseParallax(ref: { current: HTMLElement | null }, intensity = 0.03) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let mx = 0;
    let my = 0;
    const apply = () => {
      raf = 0;
      el.style.setProperty("--px", ((mx - window.innerWidth / 2) * intensity).toFixed(1));
      el.style.setProperty("--py", ((my - window.innerHeight / 2) * intensity).toFixed(1));
    };
    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!raf) raf = requestAnimationFrame(apply);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, intensity]);
}

/** Apakah perangkat punya hover/mouse asli (dipakai untuk 3D tilt). */
function useCanHover() {
  const [canHover] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  });
  return canHover;
}

/** Biar kartu yang div bisa dibuka lewat keyboard (Enter / Spasi). */
const activate = (fn: () => void) => (e: ReactKeyboardEvent<HTMLElement>) => {
  if (e.target !== e.currentTarget) return; // jangan ganggu link di dalam kartu
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault();
    fn();
  }
};

/* ═══════════════════════════════════════════════════════
   COMPONENT
   ═══════════════════════════════════════════════════════ */
export default function Home() {
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);
  const [videoDetail, setVideoDetail] = useState<VideoItem | null>(null);
  const [projectDetail, setProjectDetail] = useState<CodingProject | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("home");

  const bgRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const canHover = useCanHover();

  useMouseParallax(bgRef, 0.04);

  /* ── Scroll progress & nav hide (di-throttle rAF, progress tanpa re-render) ── */
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const doc = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${doc > 0 ? Math.min(y / doc, 1) : 0})`;
      }
      const hide = y > lastScrollY.current && y > 80;
      setShowBackToTop(y > 400);
      setNavHidden(hide);
      if (hide) setMobileOpen(false);
      lastScrollY.current = y;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Intersection Observer: scroll reveal ── */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll("[data-animate]").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  /* ── Section spy for nav ── */
  useEffect(() => {
    const sections = ["home", "videos", "gallery", "projects"];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveNav(entry.target.id);
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  /* ── Lock scroll & Escape key whenever ANY modal/lightbox is open ── */
  const anyModalOpen = !!lightbox || !!videoDetail || !!projectDetail;
  useEffect(() => {
    if (!anyModalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(null);
        setVideoDetail(null);
        setProjectDetail(null);
      }
      if (lightbox) {
        if (e.key === "ArrowLeft") {
          const idx = gallery.findIndex((i) => i.id === lightbox.id);
          if (idx > 0) setLightbox(gallery[idx - 1]);
        }
        if (e.key === "ArrowRight") {
          const idx = gallery.findIndex((i) => i.id === lightbox.id);
          if (idx < gallery.length - 1) setLightbox(gallery[idx + 1]);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [anyModalOpen, lightbox]);

  /* ── Smooth scroll handler ── */
  const scrollToSection = useCallback((e: ReactMouseEvent<HTMLButtonElement>, id: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  const scrollToTop = useCallback((e?: ReactMouseEvent<HTMLElement>) => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  /* ── 3D Tilt handler (mouse/trackpad only — skipped entirely on touch) ── */
  const handleTilt = (e: ReactMouseEvent<HTMLElement>, card: HTMLElement) => {
    if (!canHover) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = (y - rect.height / 2) / 20;
    const ry = (rect.width / 2 - x) / 20;
    card.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-6px) scale(1.01)`;
  };
  const resetTilt = (card: HTMLElement) => {
    card.style.transform = "";
  };

  return (
    <div className={`page-root ${inter.variable} ${grotesk.variable}`}>
      <style>{`
        :root {
          --accent: #f2f2f0;
          --accent-contrast: #0a0a0a;
          --text: #f2f2f0;
          --text-secondary: #a8a8a3;
          --text-muted: #6f6f6b;
          --success: #10b981;
          --glass: rgba(255,255,255,.045);
          --glass-border: rgba(255,255,255,.09);
          --shadow: 0 4px 24px rgba(0,0,0,0.45);
          --shadow-hover: 0 16px 50px rgba(0,0,0,0.6);
          --ease: cubic-bezier(.25,.46,.45,.94);
          /* hanya properti yang memang dianimasikan (bukan "all") */
          --transition: transform .4s var(--ease), background-color .4s var(--ease), color .4s var(--ease), border-color .4s var(--ease), box-shadow .4s var(--ease), opacity .4s var(--ease);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
        html { scroll-behavior: smooth; }
        html, body { min-height: 100%; background: #0a0a0b; overflow-x: hidden; }

        .page-root {
          --font-display: var(--font-grotesk), 'Space Grotesk', sans-serif;
          font-family: var(--font-inter), 'Inter', sans-serif;
          color: var(--text);
        }

        /* Scroll progress bar (transform, bukan width → tidak memicu layout) */
        .scroll-progress {
          position: fixed; top: 0; left: 0; height: 3px; width: 100%;
          background: linear-gradient(90deg, #f2f2f0, #6f6f6b);
          z-index: 9999; transform: scaleX(0); transform-origin: left; will-change: transform;
          box-shadow: 0 0 12px rgba(255,255,255,.35);
        }

        /* Background layer: gradient + orbs + noise dalam satu layer fixed */
        .bg-fx {
          position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden;
          background: linear-gradient(160deg, #0a0a0b 0%, #131315 45%, #0a0a0b 100%);
        }
        .bg-orb { position: absolute; border-radius: 50%; opacity: .6; will-change: transform; transition: transform .3s ease-out; }
        .orb-1 { width: 520px; height: 520px; background: radial-gradient(circle, rgba(255,255,255,.07), transparent 70%); top: 10%; left: -160px; transform: translate(calc(var(--px, 0) * 1px), calc(var(--py, 0) * 1px)); }
        .orb-2 { width: 420px; height: 420px; background: radial-gradient(circle, rgba(255,255,255,.05), transparent 70%); bottom: 20%; right: -110px; transform: translate(calc(var(--px, 0) * -.8px), calc(var(--py, 0) * -.8px)); }
        .orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, rgba(255,255,255,.06), transparent 70%); top: 50%; left: 50%; transform: translate(calc(-50% + var(--px, 0) * .5px), calc(-50% + var(--py, 0) * .5px)); }
        .noise {
          position: absolute; inset: 0; opacity: .05;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Header */
        header {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: calc(100% - 40px); max-width: 1100px;
          background: rgba(255,255,255,.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.09); border-radius: 100px;
          box-shadow: 0 4px 30px rgba(0,0,0,.4);
          transition: transform .4s var(--ease), opacity .4s;
        }
        header.nav-hidden { transform: translate(-50%, -120%); opacity: 0; pointer-events: none; }
        .nav-wrapper { display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; }
        .nav-left { display: flex; align-items: center; gap: 32px; }
        .nav-menu { display: flex; gap: 8px; list-style: none; }
        .nav-menu a, .nav-menu button {
          text-decoration: none; color: var(--text-secondary); font-weight: 500; font-size: .9rem;
          padding: 8px 16px; border-radius: 100px; transition: var(--transition);
          cursor: pointer; border: none; background: none; font-family: inherit; display: inline-block;
        }
        .nav-menu a:hover, .nav-menu button:hover { color: var(--text); background: rgba(255,255,255,.08); }
        .nav-menu a.active, .nav-menu button.active { color: var(--text); background: rgba(255,255,255,.12); font-weight: 600; }
        .logo-gif {
          height: 36px; width: 36px; border-radius: 12px; object-fit: cover;
          border: 2px solid rgba(255,255,255,.15); box-shadow: 0 2px 8px rgba(0,0,0,.3);
          transition: var(--transition); display: block;
        }
        .logo-gif:hover { transform: scale(1.1) rotate(5deg); }
        .contact-btn {
          font-weight: 600; font-size: .85rem; color: var(--accent-contrast); text-decoration: none;
          background: var(--accent); padding: 10px 24px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,.1); box-shadow: 0 4px 15px rgba(0,0,0,.3);
          transition: var(--transition);
        }
        .contact-btn:hover { transform: translateY(-2px); background: #e2e2df; box-shadow: 0 8px 25px rgba(0,0,0,.4); }

        /* Mobile menu */
        .mobile-toggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 4px; }
        .mobile-toggle span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: var(--transition); }
        .mobile-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
        .mobile-toggle.open span:nth-child(2) { opacity: 0; }
        .mobile-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

        main { padding: 120px 24px 60px; min-height: 100vh; }
        .container { max-width: 1100px; margin: 0 auto; }

        /* Scroll reveal — pakai animation (bukan transition) supaya delay tidak
           ikut mengganggu efek hover setelah kartu muncul */
        [data-animate] { opacity: 0; }
        [data-animate].is-visible { opacity: 1; animation: reveal .7s var(--ease) backwards; animation-delay: var(--d, 0s); }
        @keyframes reveal { from { opacity: 0; transform: translateY(30px); } }
        [data-animate-delay="1"] { --d: .1s; }
        [data-animate-delay="2"] { --d: .2s; }
        [data-animate-delay="3"] { --d: .3s; }
        [data-animate-delay="4"] { --d: .4s; }
        [data-animate-delay="5"] { --d: .5s; }
        [data-animate-delay="6"] { --d: .6s; }

        /* Fokus keyboard */
        .video-card:focus-visible, .gallery-item:focus-visible, .project-card:focus-visible { outline: 2px solid rgba(255,255,255,.75); outline-offset: 3px; }

        /* Page intro */
        .page-intro { margin-bottom: 56px; }
        .page-intro .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .8rem; font-weight: 600; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: .08em; margin-bottom: 14px;
        }
        .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--success); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,.4); } 50% { opacity: .5; box-shadow: 0 0 0 6px rgba(16,185,129,0); } }
        .page-intro h1 {
          font-family: var(--font-display);
          font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 700; letter-spacing: -.02em; line-height: 1.1;
          margin-bottom: 14px;
          background: linear-gradient(135deg, #f5f5f4 0%, #8a8a86 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .page-intro p { font-size: 1.05rem; color: var(--text-secondary); max-width: 620px; line-height: 1.7; }

        /* Section heading */
        .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 26px; flex-wrap: wrap; gap: 8px; }
        .section-head h2 { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; color: var(--text); }
        .section-head span { font-size: .85rem; color: var(--text-muted); }
        section { margin-bottom: 72px; }
        section:last-of-type { margin-bottom: 0; }

        /* Video showcase */
        .video-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; }
        .video-card {
          position: relative; border-radius: 24px; overflow: hidden;
          box-shadow: var(--shadow); cursor: pointer; transition: var(--transition);
          border: 1px solid var(--glass-border);
        }
        .video-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
        .video-frame { position: relative; width: 100%; aspect-ratio: 3/4; background: #1a1a1a; overflow: hidden; }
        .video-frame img.thumb { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s var(--ease); }
        .video-card:hover .thumb { transform: scale(1.08); }
        .thumb-fallback { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: rgba(255,255,255,.4); font-size: .8rem; text-align: center; padding: 12px; }
        .video-category-tag {
          position: absolute; top: 12px; left: 12px; z-index: 2;
          font-size: .68rem; font-weight: 600; color: white;
          background: rgba(0,0,0,.5); backdrop-filter: blur(4px);
          padding: 5px 12px; border-radius: 100px; text-transform: uppercase; letter-spacing: .03em;
        }
        .video-play-icon {
          position: absolute; top: 12px; right: 12px; z-index: 2;
          width: 34px; height: 34px; border-radius: 50%;
          background: rgba(0,0,0,.45); backdrop-filter: blur(4px);
          display: flex; align-items: center; justify-content: center; transition: var(--transition);
        }
        .video-card:hover .video-play-icon { background: rgba(0,0,0,.7); transform: scale(1.08); }
        .video-overlay {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 2; padding: 40px 18px 18px;
          background: linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.35) 55%, transparent 100%);
        }
        .video-overlay h3 { font-family: var(--font-display); font-size: 1.05rem; font-weight: 700; color: white; margin-bottom: 6px; line-height: 1.3; }
        .video-overlay .detail-hint { font-size: .78rem; font-weight: 600; color: rgba(255,255,255,.75); display: flex; align-items: center; gap: 4px; }

        /* Image gallery */
        .gallery-grid { columns: 3 220px; column-gap: 18px; }
        .gallery-item {
          break-inside: avoid; margin-bottom: 18px; position: relative;
          border-radius: 20px; overflow: hidden; cursor: zoom-in;
          border: 1px solid var(--glass-border); box-shadow: var(--shadow); transition: var(--transition);
        }
        .gallery-item:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
        .gallery-item img { width: 100%; display: block; transition: transform .6s var(--ease); background: #1a1a1a; }
        .gallery-item:hover img { transform: scale(1.08); }
        .gallery-caption {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 18px 16px 14px; color: white; font-size: .9rem; font-weight: 600;
          background: linear-gradient(to top, rgba(0,0,0,.7), transparent);
          opacity: 0; transform: translateY(10px); transition: opacity .35s ease, transform .35s ease;
        }
        .gallery-item:hover .gallery-caption { opacity: 1; transform: translateY(0); }

        /* Lightbox (images) */
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(10,10,10,.88); backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 40px; cursor: zoom-out; animation: fadeIn .3s ease both;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .lightbox-overlay img { max-width: 90vw; max-height: 85vh; border-radius: 16px; box-shadow: 0 25px 80px rgba(0,0,0,.6); cursor: default; }
        .lightbox-close {
          position: absolute; top: 24px; right: 32px; width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.25);
          color: white; font-size: 1.3rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition); backdrop-filter: blur(4px);
        }
        .lightbox-close:hover { background: rgba(255,255,255,.25); transform: rotate(90deg); }
        .lightbox-nav {
          position: absolute; top: 50%; transform: translateY(-50%); width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,.1); border: 1px solid rgba(255,255,255,.2);
          color: white; font-size: 1.2rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition); backdrop-filter: blur(4px);
        }
        .lightbox-nav:hover { background: rgba(255,255,255,.2); }
        .lightbox-prev { left: 24px; }
        .lightbox-next { right: 24px; }
        .lightbox-counter {
          position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%);
          color: rgba(255,255,255,.7); font-size: .85rem; font-weight: 500;
          background: rgba(0,0,0,.4); padding: 6px 16px; border-radius: 100px; backdrop-filter: blur(4px);
        }

        /* Detail modal (video + project) */
        .detail-overlay {
          position: fixed; inset: 0; z-index: 2100; background: rgba(8,8,10,.6);
          backdrop-filter: blur(24px) saturate(160%); -webkit-backdrop-filter: blur(24px) saturate(160%);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn .25s ease both;
        }
        .detail-modal {
          position: relative; width: 100%; max-width: 680px; max-height: 88vh;
          overflow-y: auto; -webkit-overflow-scrolling: touch; overscroll-behavior: contain;
          background: rgba(24,24,26,.72);
          backdrop-filter: blur(34px) saturate(160%); -webkit-backdrop-filter: blur(34px) saturate(160%);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px; box-shadow: 0 30px 90px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06);
          animation: modalPop .3s var(--ease) both;
        }
        @keyframes modalPop { from { opacity: 0; transform: scale(.94) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .detail-close {
          position: absolute; top: 16px; right: 16px; z-index: 5; width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,.12); color: white; border: 1px solid rgba(255,255,255,.18); cursor: pointer;
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center; font-size: 1.1rem; transition: var(--transition);
        }
        .detail-close:hover { background: rgba(255,255,255,.22); transform: rotate(90deg); }
        .detail-media { width: 100%; aspect-ratio: 16/9; background: #0c0c0c; border-radius: 28px 28px 0 0; overflow: hidden; }
        .detail-media iframe { width: 100%; height: 100%; border: 0; display: block; }
        .detail-media video { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 28px 28px 0 0; background: #0c0c0c; }
        .detail-body { padding: 28px 30px 34px; }
        .detail-eyebrow { font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; color: rgba(255,255,255,.5); margin-bottom: 10px; }
        .detail-body h3 { font-family: var(--font-display); font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: rgba(255,255,255,.96); }
        .detail-body .detail-tagline { font-size: .95rem; color: rgba(255,255,255,.55); font-weight: 500; margin-bottom: 16px; margin-top: -6px; }
        .detail-body p.detail-desc { font-size: .95rem; color: rgba(255,255,255,.75); line-height: 1.75; margin-bottom: 20px; }
        .detail-section-label { font-size: .8rem; font-weight: 700; color: rgba(255,255,255,.85); margin-bottom: 10px; text-transform: uppercase; letter-spacing: .04em; }
        .detail-feature-list { list-style: none; margin-bottom: 22px; display: flex; flex-direction: column; gap: 8px; }
        .detail-feature-list li { font-size: .9rem; color: rgba(255,255,255,.7); line-height: 1.5; padding-left: 22px; position: relative; }
        .detail-feature-list li::before { content: '✓'; position: absolute; left: 0; color: #34d399; font-weight: 700; }
        .detail-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .detail-tags span { font-size: .78rem; font-weight: 500; color: rgba(255,255,255,.78); background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14); padding: 5px 13px; border-radius: 100px; }
        .detail-links { display: flex; gap: 10px; flex-wrap: wrap; }
        .detail-links a { text-decoration: none; font-size: .85rem; font-weight: 600; padding: 11px 22px; border-radius: 100px; transition: var(--transition); }
        .detail-links .link-demo { background: white; color: #171717; }
        .detail-links .link-demo:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.35); }
        .detail-links .link-repo { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); color: rgba(255,255,255,.85); }
        .detail-links .link-repo:hover { background: rgba(255,255,255,.18); }
        .detail-meta-row { display: flex; gap: 14px; margin-bottom: 4px; flex-wrap: wrap; }
        .detail-meta-row .status-pill { font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; padding: 5px 12px; border-radius: 100px; }
        .status-pill.live { background: rgba(16,185,129,.18); color: #34d399; }
        .status-pill.progress { background: rgba(245,158,11,.18); color: #fbbf24; }
        .status-pill.year { background: rgba(255,255,255,.08); color: rgba(255,255,255,.55); }

        /* Coding projects */
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr)); gap: 22px; }
        .project-card {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 28px; box-shadow: var(--shadow);
          padding: 30px; display: flex; flex-direction: column;
          transition: transform .2s ease-out, box-shadow .4s var(--ease);
          transform-style: preserve-3d; cursor: pointer;
        }
        .project-card:hover { box-shadow: var(--shadow-hover); }
        .project-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
        .project-status { font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em; padding: 5px 12px; border-radius: 100px; }
        .project-status.live { background: rgba(16,185,129,.16); color: #34d399; }
        .project-status.progress { background: rgba(245,158,11,.16); color: #fbbf24; }
        .project-year { font-size: .78rem; color: var(--text-muted); font-weight: 500; }
        .project-card h3 { font-family: var(--font-display); font-size: 1.25rem; font-weight: 700; margin-bottom: 4px; }
        .project-tagline { font-size: .85rem; color: var(--text-muted); font-weight: 500; margin-bottom: 14px; }
        .project-desc { font-size: .9rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px; flex-grow: 1; }
        .project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
        .stack-tag { font-size: .75rem; font-weight: 500; color: var(--text-secondary); background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1); padding: 4px 12px; border-radius: 100px; transition: var(--transition); }
        .project-card:hover .stack-tag { background: rgba(255,255,255,.1); }
        .project-links { display: flex; gap: 10px; margin-top: auto; }
        .project-links a { flex: 1; text-align: center; text-decoration: none; font-size: .82rem; font-weight: 600; padding: 10px 16px; border-radius: 100px; transition: var(--transition); }
        .link-demo { background: var(--accent); color: var(--accent-contrast); }
        .link-demo:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.35); }
        .link-repo { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); color: var(--text-secondary); }
        .link-repo:hover { background: rgba(255,255,255,.14); color: var(--text); transform: translateY(-2px); }

        /* Back to top */
        .back-to-top {
          position: fixed; bottom: 28px; right: 28px; width: 48px; height: 48px; border-radius: 50%;
          background: var(--accent); color: var(--accent-contrast);
          border: 1px solid rgba(255,255,255,.1); cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 20px rgba(0,0,0,.4); z-index: 999;
          transition: var(--transition); opacity: 0; transform: translateY(20px); pointer-events: none;
        }
        .back-to-top.visible { opacity: 1; transform: translateY(0); pointer-events: all; }
        .back-to-top:hover { transform: translateY(-4px); background: #e2e2df; }

        footer { padding: 48px 24px; text-align: center; color: var(--text-muted); font-size: .85rem; }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .01ms !important; animation-delay: 0s !important; transition-duration: .01ms !important; }
          html { scroll-behavior: auto; }
        }

        /* ── Mobile / touch ── blur dikurangi, orb diperkecil, efek hover-only dimatikan */
        @media (max-width: 768px) {
          header { top: 8px; width: calc(100% - 16px); border-radius: 24px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
          .nav-wrapper { padding: 10px 18px; }
          .nav-left { gap: 12px; }
          .nav-menu {
            display: none; position: absolute; top: 110%; left: 50%; transform: translateX(-50%);
            background: rgba(20,20,22,.92); backdrop-filter: blur(16px);
            border: 1px solid var(--glass-border); border-radius: 20px;
            padding: 12px; box-shadow: var(--shadow-hover); flex-direction: column; width: 200px; gap: 4px;
          }
          .nav-menu.open { display: flex; }
          .nav-menu a, .nav-menu button { text-align: center; padding: 10px; width: 100%; }
          .mobile-toggle { display: flex; }
          .logo-gif { height: 32px; width: 32px; }
          .contact-btn { padding: 8px 16px; font-size: .75rem; }

          main { padding: 90px 16px 40px; }
          .page-intro h1 { font-size: 1.9rem; }
          .gallery-grid { columns: 2 160px; }
          .lightbox-nav { display: none; }

          .bg-orb { opacity: .35; }
          .orb-1 { width: 260px; height: 260px; }
          .orb-2 { width: 220px; height: 220px; }
          .orb-3 { width: 200px; height: 200px; }
          .noise { display: none; }

          .project-card, .lightbox-overlay { backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
          .project-card { transform: none !important; padding: 24px; }

          .detail-modal { max-height: 92vh; border-radius: 22px; max-width: 100%; }
          .detail-media, .detail-media video { border-radius: 22px 22px 0 0; }
          .detail-body { padding: 22px 20px 28px; }
          .detail-overlay {
            padding: 16px; background: rgba(6,6,8,.65);
            backdrop-filter: blur(14px) saturate(150%); -webkit-backdrop-filter: blur(14px) saturate(150%);
          }
          .detail-modal { backdrop-filter: blur(20px) saturate(150%); -webkit-backdrop-filter: blur(20px) saturate(150%); }
        }
      `}</style>

      {/* Scroll Progress */}
      <div className="scroll-progress" ref={progressRef} />

      {/* Background Effects */}
      <div className="bg-fx" ref={bgRef} aria-hidden="true">
        <div className="bg-orb orb-1" />
        <div className="bg-orb orb-2" />
        <div className="bg-orb orb-3" />
        <div className="noise" />
      </div>

      {/* Header */}
      <header className={navHidden ? "nav-hidden" : ""}>
        <div className="nav-wrapper">
          <div className="nav-left">
            <a href="/" onClick={(e) => scrollToTop(e)}>
              <img
                src="https://media1.tenor.com/m/Lw6Z3WhArHcAAAAC/nokotan-anime.gif"
                className="logo-gif"
                alt="logo"
                width={36}
                height={36}
              />
            </a>
            <ul className={`nav-menu ${mobileOpen ? "open" : ""}`}>
              <li><button className={activeNav === "home" ? "active" : ""} onClick={(e) => scrollToSection(e, "home")}>Home</button></li>
              <li><a href="/about">About</a></li>
            </ul>
          </div>
          <button
            className={`mobile-toggle ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
          <a href="/contact" className="contact-btn">Contact</a>
        </div>
      </header>

      {/* Main */}
      <main>
        <div className="container">

          {/* Page Intro */}
          <div className="page-intro" id="home" data-animate>
            <span className="eyebrow"><span className="eyebrow-dot" />Portfolio</span>
            <h1>Surya Project</h1>
            <p>過去に携わったプロジェクト。</p>
          </div>

          {/* Video Showcase */}
          <section id="videos">
            <div className="section-head" data-animate>
              <h2>Project</h2>
              <span>{videos.length} video</span>
            </div>
            <div className="video-grid">
              {videos.map((v, i) => {
                const thumbSrc = v.poster ? encodeURI(v.poster) : "";
                return (
                  <div
                    className="video-card"
                    key={v.id}
                    data-animate
                    data-animate-delay={(i % 6) + 1}
                    role="button"
                    tabIndex={0}
                    aria-label={`Buka detail ${v.title}`}
                    onClick={() => setVideoDetail(v)}
                    onKeyDown={activate(() => setVideoDetail(v))}
                  >
                    <div className="video-frame">
                      <span className="video-category-tag">{v.category}</span>
                      <span className="video-play-icon" aria-hidden="true">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      {thumbSrc ? (
                        <img
                          className="thumb"
                          src={thumbSrc}
                          alt={`Thumbnail ${v.title}`}
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div className="thumb-fallback">Preview tidak tersedia</div>
                      )}
                      <div className="video-overlay">
                        <h3>{v.title}</h3>
                        <div className="detail-hint">Lihat detail →</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Image Gallery */}
          <section id="gallery">
            <div className="section-head" data-animate>
              <h2>Image Showcase</h2>
              <span>{gallery.length} karya</span>
            </div>
            <div className="gallery-grid">
              {gallery.map((img, i) => (
                <div
                  className="gallery-item"
                  key={img.id}
                  data-animate
                  data-animate-delay={(i % 3) + 1}
                  role="button"
                  tabIndex={0}
                  aria-label={`Perbesar ${img.title}`}
                  onClick={() => setLightbox(img)}
                  onKeyDown={activate(() => setLightbox(img))}
                >
                  <img src={img.src} alt={img.title} loading="lazy" decoding="async" />
                  <div className="gallery-caption">{img.title}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Coding Projects */}
          <section id="projects">
            <div className="section-head" data-animate>
              <h2>Coding Projects</h2>
              <span>{codingProjects.length} project</span>
            </div>
            <div className="projects-grid">
              {codingProjects.map((p, i) => (
                <div
                  className="project-card"
                  key={p.title}
                  data-animate
                  data-animate-delay={i + 1}
                  role="button"
                  tabIndex={0}
                  aria-label={`Buka detail ${p.title}`}
                  onClick={() => setProjectDetail(p)}
                  onKeyDown={activate(() => setProjectDetail(p))}
                  onMouseMove={(e) => handleTilt(e, e.currentTarget)}
                  onMouseLeave={(e) => resetTilt(e.currentTarget)}
                >
                  <div className="project-top">
                    <span className={`project-status ${p.status === "Live" ? "live" : "progress"}`}>
                      {p.status}
                    </span>
                    <span className="project-year">{p.year}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <div className="project-tagline">{p.tagline}</div>
                  <p className="project-desc">{p.desc}</p>
                  <div className="project-stack">
                    {p.stack.map((s) => (
                      <span className="stack-tag" key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={p.links.demo}
                      className="link-demo"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Lihat Demo
                    </a>
                    <a
                      href={p.links.repo}
                      className="link-repo"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Repo
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer>
        <p>©Surya | 開発者</p>
      </footer>

      {/* Image Lightbox */}
      {lightbox && (
        <div className="lightbox-overlay" onClick={() => setLightbox(null)} role="dialog" aria-modal="true" aria-label={lightbox.title}>
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Tutup">✕</button>
          {(() => {
            const idx = gallery.findIndex((i) => i.id === lightbox.id);
            return (
              <>
                {idx > 0 && (
                  <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox(gallery[idx - 1]); }} aria-label="Sebelumnya">‹</button>
                )}
                <img src={lightbox.src} alt={lightbox.title} onClick={(e) => e.stopPropagation()} />
                {idx < gallery.length - 1 && (
                  <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox(gallery[idx + 1]); }} aria-label="Selanjutnya">›</button>
                )}
                <div className="lightbox-counter">{idx + 1} / {gallery.length}</div>
              </>
            );
          })()}
        </div>
      )}

      {/* Video Detail Modal */}
      {videoDetail && (
        <div className="detail-overlay" onClick={() => setVideoDetail(null)} role="dialog" aria-modal="true" aria-label={videoDetail.title}>
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close" onClick={() => setVideoDetail(null)} aria-label="Tutup">✕</button>
            <div className="detail-media">
              {videoDetail.type === "youtube" ? (
                (() => {
                  const ytId = getYoutubeId(videoDetail.videoUrl);
                  return ytId ? (
                    <iframe
                      key={ytId}
                      src={`https://www.youtube.com/embed/${ytId}?autoplay=1`}
                      title={videoDetail.title}
                      allow="autoplay; encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="thumb-fallback">Preview tidak tersedia</div>
                  );
                })()
              ) : (
                <video
                  key={videoDetail.id}
                  src={encodeURI(videoDetail.videoUrl)}
                  poster={videoDetail.poster ? encodeURI(videoDetail.poster) : undefined}
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                >
                  Browser kamu tidak mendukung pemutaran video.
                </video>
              )}
            </div>
            <div className="detail-body">
              <div className="detail-eyebrow">{videoDetail.category}</div>
              <h3>{videoDetail.title}</h3>
              <p className="detail-desc">{videoDetail.longDesc}</p>
              <div className="detail-section-label">Tools</div>
              <div className="detail-tags">
                {videoDetail.tools.map((t) => <span key={t}>{t}</span>)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Detail Modal */}
      {projectDetail && (
        <div className="detail-overlay" onClick={() => setProjectDetail(null)} role="dialog" aria-modal="true" aria-label={projectDetail.title}>
          <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
            <button className="detail-close" onClick={() => setProjectDetail(null)} aria-label="Tutup">✕</button>
            <div className="detail-body" style={{ paddingTop: 30 }}>
              <div className="detail-meta-row">
                <span className={`status-pill ${projectDetail.status === "Live" ? "live" : "progress"}`}>{projectDetail.status}</span>
                <span className="status-pill year">{projectDetail.year}</span>
              </div>
              <h3 style={{ marginTop: 14 }}>{projectDetail.title}</h3>
              <div className="detail-tagline">{projectDetail.tagline}</div>
              <p className="detail-desc">{projectDetail.longDesc}</p>
              <div className="detail-section-label">Fitur Utama</div>
              <ul className="detail-feature-list">
                {projectDetail.features.map((f) => <li key={f}>{f}</li>)}
              </ul>
              <div className="detail-section-label">Tech Stack</div>
              <div className="detail-tags">
                {projectDetail.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
              <div className="detail-links">
                <a href={projectDetail.links.demo} className="link-demo" rel="noopener noreferrer">Lihat Demo</a>
                <a href={projectDetail.links.repo} className="link-repo" rel="noopener noreferrer">Repo</a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Back to Top */}
      <button className={`back-to-top ${showBackToTop ? "visible" : ""}`} onClick={scrollToTop} aria-label="Kembali ke atas">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  );
}