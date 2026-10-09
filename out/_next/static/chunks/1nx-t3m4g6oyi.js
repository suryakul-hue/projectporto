(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,31713,e=>{"use strict";var t=e.i(43476),a=e.i(71645);let r=[{id:"v1",title:"Ishida Shoya ",desc:"Amv",longDesc:"Malas",category:"AMV",tools:["Premiere Pro","After Effects","Corel Draw"],videoUrl:"videos/WhatsApp Video 2026-07-09 at 21.19.29.mp4",poster:"/poster/WhatsApp Image 2026-07-09 at 16.46.52.jpeg",type:"local"},{id:"v2",title:"Blender Bunny girl",desc:"3d Manip",longDesc:"Memberi Like",category:"3D Animation",tools:["Blender","Cycles Renderer","After Effects"],videoUrl:"videos/WhatsApp Video 2026-07-09 at 21.16.51.mp4",poster:"poster/WhatsApp Image 2026-07-09 at 16.51.55.jpeg",type:"local"},{id:"v3",title:"December -Tamako",desc:"Tamako.",longDesc:"7 December",category:"Motion Graphics",tools:["After Effects"],videoUrl:"videos/WhatsApp Video 2026-07-09 at 21.20.03.mp4",poster:"poster/WhatsApp Image 2026-07-09 at 21.31.57.jpeg",type:"local"},{id:"v4",title:"Unreal Engine Kyoukai",desc:"Unreal Engine + blend + After effect",longDesc:"Unreal Pertama tapi bukan buat bikin game",category:"AMV",tools:["Premiere Pro","After Effects","Unreal Engine","Blender"],videoUrl:"videos/YTDown.com_YouTube_Wonderland-Anime_Media_vWA_kwcyGnA_001_1080p.mp4",poster:"poster/2026-07-09-230002_hyprshot.png",type:"local"},{id:"v5",title:"Breakdown",desc:"Breakdown My edit",longDesc:"Before and After My edit",category:"AMV",tools:["After Effects","Blender"],videoUrl:"videos/YTDown.com_YouTube_Making-of-AMV-EDIT-For-you-4_Media_tAe8P8UOCvI_001_1080p.mp4",poster:"poster/2026-07-09-233040_hyprshot.png",type:"local"}],i=[{id:"i1",src:"https://i.ibb.co.com/bjSVW9xh/Whats-App-Image-2026-07-09-at-15-48-31.jpg",title:"Ini Ceweku"},{id:"i2",src:"https://i.ibb.co.com/mVzYWpnM/2026-07-10-142309-hyprshot.png",title:"OBJ Firefly"},{id:"i3",src:"https://i.ibb.co.com/kVB6B2nD/Whats-App-Image-2026-07-09-at-16-05-56.jpg",title:"Art Rezero"},{id:"i4",src:"https://i.ibb.co.com/p69cjm7R/Whats-App-Image-2026-07-09-at-16-17-39.jpg",title:"Ceweku lagi"},{id:"i5",src:"https://i.ibb.co.com/ynnV2SHF/Whats-App-Image-2026-07-09-at-16-30-43.jpg",title:"Art Marin kitagawa"},{id:"i6",src:"https://i.ibb.co.com/kVzZ6ZKj/Whats-App-Image-2026-07-09-at-16-46-52.jpg",title:"Art Ishida Shoya"},{id:"i7",src:"https://i.ibb.co.com/39dQXNYX/Whats-App-Image-2026-07-09-at-17-08-27.jpg",title:"OBJ Blend Miyabi"},{id:"i8",src:"https://i.ibb.co.com/xSVPSbcH/Whats-App-Image-2026-07-09-at-16-51-55.jpg",title:"Art Bunny Girl"}],o=[{title:"SiKembang PPKO UNIMUS",tagline:"Child Nutrition Monitoring & Education Platform",desc:"Project PPKO Berbasis Web",longDesc:"SiKembang adalah Project PPKO Berbasis Web yang bisa di monitoring secara real time untuk kasus pencegahan stunting dan kekurangan gizi pada anak anak hingga remaja",features:["Visualisasi data stunting dengan Recharts","Manajemen data pasien & user oleh admin"],stack:["Next.js","Laravel","Inertia.js","React","Recharts"],status:"In Progress",year:"2026",links:{demo:"#",repo:"#"}}];e.s(["default",0,function(){let e,n,[s,l]=(0,a.useState)(null),[d,c]=(0,a.useState)(null),[p,g]=(0,a.useState)(null),[x,b]=(0,a.useState)(0),[m,h]=(0,a.useState)(!1),[f,u]=(0,a.useState)(!1),[v,y]=(0,a.useState)(!1),[w,k]=(0,a.useState)("home"),j=function(e=.03){let[t,r]=(0,a.useState)({x:0,y:0});return(0,a.useEffect)(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let t=t=>{r({x:(t.clientX-window.innerWidth/2)*e,y:(t.clientY-window.innerHeight/2)*e})};return window.addEventListener("mousemove",t,{passive:!0}),()=>window.removeEventListener("mousemove",t)},[e]),t}(.04),N=function(){let[e]=(0,a.useState)(()=>window.matchMedia("(hover: hover) and (pointer: fine)").matches);return e}(),z=(0,a.useRef)(0);(0,a.useEffect)(()=>{let e=()=>{let e=window.scrollY,t=document.documentElement.scrollHeight-window.innerHeight;b(t>0?e/t*100:0),h(e>400),u(e>z.current&&e>80),z.current=e};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,a.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add("is-visible"),e.unobserve(t.target))})},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return document.querySelectorAll("[data-animate]").forEach(t=>e.observe(t)),()=>e.disconnect()},[]),(0,a.useEffect)(()=>{let e=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&k(e.target.id)})},{threshold:.3});return["home","videos","gallery","projects"].forEach(t=>{let a=document.getElementById(t);a&&e.observe(a)}),()=>e.disconnect()},[]);let C=!!s||!!d||!!p;(0,a.useEffect)(()=>{if(!C)return;let e=e=>{if("Escape"===e.key&&(l(null),c(null),g(null)),s){if("ArrowLeft"===e.key){let e=i.findIndex(e=>e.id===s.id);e>0&&l(i[e-1])}if("ArrowRight"===e.key){let e=i.findIndex(e=>e.id===s.id);e<i.length-1&&l(i[e+1])}}};return window.addEventListener("keydown",e),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",e),document.body.style.overflow=""}},[C,s]);let A=(0,a.useCallback)((e,t)=>{e.preventDefault(),y(!1);let a=document.getElementById(t);if(a){let e=a.getBoundingClientRect().top+window.scrollY-100;window.scrollTo({top:e,behavior:"smooth"})}},[]),S=(0,a.useCallback)(e=>{e?.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})},[]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap');

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
          --transition: all .4s cubic-bezier(.25,.46,.45,.94);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

        html { scroll-behavior: smooth; }

        html, body {
          min-height: 100%;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(160deg, #0a0a0b 0%, #131315 45%, #0a0a0b 100%);
          background-attachment: fixed;
          color: var(--text);
          overflow-x: hidden;
        }

        /* Scroll progress bar */
        .scroll-progress {
          position: fixed; top: 0; left: 0; height: 3px;
          background: linear-gradient(90deg, #f2f2f0, #6f6f6b);
          z-index: 9999; width: 0%;
          transition: width .1s linear;
          box-shadow: 0 0 12px rgba(255,255,255,.35);
        }

        /* Orbs with parallax — soft ambient glow, not flat gray */
        .bg-orb {
          position: fixed; border-radius: 50%; filter: blur(90px);
          opacity: .6; z-index: -1; pointer-events: none;
          transition: transform .3s ease-out;
          will-change: transform;
        }
        .orb-1 { width: 420px; height: 420px; background: radial-gradient(circle, rgba(255,255,255,.07), transparent 70%); top: 10%; left: -100px; }
        .orb-2 { width: 320px; height: 320px; background: radial-gradient(circle, rgba(255,255,255,.05), transparent 70%); bottom: 20%; right: -50px; }
        .orb-3 { width: 260px; height: 260px; background: radial-gradient(circle, rgba(255,255,255,.06), transparent 70%); top: 50%; left: 50%; transform: translate(-50%,-50%); }

        .noise {
          position: fixed; top: 0; left: 0; width: 100%; height: 100%;
          z-index: -1; opacity: .05; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }

        /* Header */
        header {
          position: fixed; top: 20px; left: 50%; transform: translateX(-50%);
          z-index: 1000; width: calc(100% - 40px); max-width: 1100px;
          background: rgba(255,255,255,.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,.09); border-radius: 100px;
          box-shadow: 0 4px 30px rgba(0,0,0,.4);
          transition: transform .4s cubic-bezier(.25,.46,.45,.94), opacity .4s;
        }
        header.nav-hidden { transform: translate(-50%, -120%); opacity: 0; pointer-events: none; }

        .nav-wrapper { display: flex; align-items: center; justify-content: space-between; padding: 12px 24px; }
        .nav-left { display: flex; align-items: center; gap: 32px; }
        .nav-menu { display: flex; gap: 8px; list-style: none; }
        .nav-menu a {
          text-decoration: none; color: var(--text-secondary); font-weight: 500; font-size: .9rem;
          padding: 8px 16px; border-radius: 100px; transition: var(--transition);
          cursor: pointer; border: none; background: none;
          font-family: inherit;
        }
        .nav-menu a:hover { color: var(--text); background: rgba(255,255,255,.08); }
        .nav-menu a.active { color: var(--text); background: rgba(255,255,255,.12); font-weight: 600; }

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
          transition: var(--transition); position: relative; overflow: hidden;
        }
        .contact-btn:hover { transform: translateY(-2px); background: #e2e2df; box-shadow: 0 8px 25px rgba(0,0,0,.4); }

        /* Mobile menu */
        .mobile-toggle {
          display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 4px;
        }
        .mobile-toggle span {
          display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px;
          transition: var(--transition);
        }
        .mobile-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
        .mobile-toggle.open span:nth-child(2) { opacity: 0; }
        .mobile-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

        main { padding: 120px 24px 60px; min-height: 100vh; }
        .container { max-width: 1100px; margin: 0 auto; }

        /* Scroll reveal animation */
        [data-animate] {
          opacity: 0; transform: translateY(30px);
          transition: opacity .7s cubic-bezier(.25,.46,.45,.94), transform .7s cubic-bezier(.25,.46,.45,.94);
        }
        [data-animate].is-visible { opacity: 1; transform: translateY(0); }
        [data-animate-delay="1"] { transition-delay: .1s; }
        [data-animate-delay="2"] { transition-delay: .2s; }
        [data-animate-delay="3"] { transition-delay: .3s; }
        [data-animate-delay="4"] { transition-delay: .4s; }
        [data-animate-delay="5"] { transition-delay: .5s; }
        [data-animate-delay="6"] { transition-delay: .6s; }

        /* Page intro */
        .page-intro { margin-bottom: 56px; }
        .page-intro .eyebrow {
          display: inline-flex; align-items: center; gap: 8px;
          font-size: .8rem; font-weight: 600; color: var(--text-muted);
          text-transform: uppercase; letter-spacing: .08em;
          margin-bottom: 14px;
        }
        .eyebrow-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--success); animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; box-shadow: 0 0 0 0 rgba(16,185,129,.4); } 50% { opacity: .5; box-shadow: 0 0 0 6px rgba(16,185,129,0); } }
        .page-intro h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 5vw, 2.8rem); font-weight: 700; letter-spacing: -.02em; line-height: 1.1;
          margin-bottom: 14px;
          background: linear-gradient(135deg, #f5f5f4 0%, #8a8a86 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .page-intro p { font-size: 1.05rem; color: var(--text-secondary); max-width: 620px; line-height: 1.7; }

        /* Section heading */
        .section-head { display: flex; align-items: baseline; justify-content: space-between; margin-bottom: 26px; flex-wrap: wrap; gap: 8px; }
        .section-head h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem; font-weight: 700; color: var(--text);
        }
        .section-head span { font-size: .85rem; color: var(--text-muted); }
        section { margin-bottom: 72px; }

        /* Video showcase — full-bleed poster style, click anywhere to open detail modal */
        .video-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 20px;
        }
        .video-card {
          position: relative; border-radius: 24px; overflow: hidden;
          box-shadow: var(--shadow); cursor: pointer;
          transition: var(--transition); will-change: transform;
          border: 1px solid var(--glass-border);
        }
        .video-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-hover); }
        .video-frame { position: relative; width: 100%; aspect-ratio: 3/4; background: #1a1a1a; overflow: hidden; }
        .video-frame img.thumb { width: 100%; height: 100%; object-fit: cover; display: block; transition: transform .6s cubic-bezier(.25,.46,.45,.94); }
        .video-card:hover .thumb { transform: scale(1.08); }
        .thumb-fallback {
          width: 100%; height: 100%; display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,.4); font-size: .8rem; text-align: center; padding: 12px;
        }
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
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition);
        }
        .video-card:hover .video-play-icon { background: rgba(0,0,0,.7); transform: scale(1.08); }
        .video-overlay {
          position: absolute; left: 0; right: 0; bottom: 0; z-index: 2;
          padding: 40px 18px 18px;
          background: linear-gradient(to top, rgba(0,0,0,.85) 0%, rgba(0,0,0,.35) 55%, transparent 100%);
        }
        .video-overlay h3 {
          font-family: 'Space Grotesk', sans-serif; font-size: 1.05rem; font-weight: 700;
          color: white; margin-bottom: 6px; line-height: 1.3;
        }
        .video-overlay .detail-hint {
          font-size: .78rem; font-weight: 600; color: rgba(255,255,255,.75);
          display: flex; align-items: center; gap: 4px;
        }

        /* Image gallery */
        .gallery-grid {
          columns: 3 220px; column-gap: 18px;
        }
        .gallery-item {
          break-inside: avoid; margin-bottom: 18px; position: relative;
          border-radius: 20px; overflow: hidden; cursor: zoom-in;
          border: 1px solid var(--glass-border); box-shadow: var(--shadow);
          transition: var(--transition);
        }
        .gallery-item:hover { box-shadow: var(--shadow-hover); transform: translateY(-4px); }
        .gallery-item img { width: 100%; display: block; transition: transform .6s cubic-bezier(.25,.46,.45,.94); background: #e2e2e2; }
        .gallery-item:hover img { transform: scale(1.08); }
        .gallery-caption {
          position: absolute; left: 0; right: 0; bottom: 0;
          padding: 18px 16px 14px; color: white; font-size: .9rem; font-weight: 600;
          background: linear-gradient(to top, rgba(0,0,0,.7), transparent);
          opacity: 0; transform: translateY(10px);
          transition: all .35s ease;
        }
        .gallery-item:hover .gallery-caption { opacity: 1; transform: translateY(0); }

        /* Lightbox (images) */
        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 2000;
          background: rgba(10,10,10,.88); backdrop-filter: blur(10px);
          display: flex; align-items: center; justify-content: center;
          padding: 40px; cursor: zoom-out;
          animation: fadeIn .3s ease both;
        }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .lightbox-overlay img { max-width: 90vw; max-height: 85vh; border-radius: 16px; box-shadow: 0 25px 80px rgba(0,0,0,.6); cursor: default; }
        .lightbox-close {
          position: absolute; top: 24px; right: 32px;
          width: 48px; height: 48px; border-radius: 50%;
          background: rgba(255,255,255,.12); border: 1px solid rgba(255,255,255,.25);
          color: white; font-size: 1.3rem; cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: var(--transition); backdrop-filter: blur(4px);
        }
        .lightbox-close:hover { background: rgba(255,255,255,.25); transform: rotate(90deg); }
        .lightbox-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 48px; height: 48px; border-radius: 50%;
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
          background: rgba(0,0,0,.4); padding: 6px 16px; border-radius: 100px;
          backdrop-filter: blur(4px);
        }

        /* Detail modal (video + project) — dark frosted glass, always centered */
        .detail-overlay {
          position: fixed; inset: 0; z-index: 2100;
          background: rgba(8,8,10,.6);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          display: flex; align-items: center; justify-content: center;
          padding: 24px; animation: fadeIn .25s ease both;
        }
        .detail-modal {
          position: relative; width: 100%; max-width: 680px; max-height: 88vh;
          overflow-y: auto; -webkit-overflow-scrolling: touch;
          background: rgba(24,24,26,.72);
          backdrop-filter: blur(34px) saturate(160%);
          -webkit-backdrop-filter: blur(34px) saturate(160%);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 28px; box-shadow: 0 30px 90px rgba(0,0,0,.55), inset 0 1px 0 rgba(255,255,255,.06);
          animation: modalPop .3s cubic-bezier(.25,.46,.45,.94) both;
        }
        @keyframes modalPop { from { opacity: 0; transform: scale(.94) translateY(12px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .detail-close {
          position: absolute; top: 16px; right: 16px; z-index: 5;
          width: 40px; height: 40px; border-radius: 50%;
          background: rgba(255,255,255,.12); color: white;
          border: 1px solid rgba(255,255,255,.18); cursor: pointer;
          backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          display: flex; align-items: center; justify-content: center; font-size: 1.1rem;
          transition: var(--transition);
        }
        .detail-close:hover { background: rgba(255,255,255,.22); transform: rotate(90deg); }
        .detail-media { width: 100%; aspect-ratio: 16/9; background: #0c0c0c; border-radius: 28px 28px 0 0; overflow: hidden; }
        .detail-media iframe { width: 100%; height: 100%; border: 0; display: block; }
        .detail-media video { width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 28px 28px 0 0; background: #0c0c0c; }
        .detail-body { padding: 28px 30px 34px; }
        .detail-eyebrow {
          font-size: .75rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
          color: rgba(255,255,255,.5); margin-bottom: 10px;
        }
        .detail-body h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.5rem; font-weight: 700; margin-bottom: 12px; color: rgba(255,255,255,.96); }
        .detail-body .detail-tagline { font-size: .95rem; color: rgba(255,255,255,.55); font-weight: 500; margin-bottom: 16px; margin-top: -6px; }
        .detail-body p.detail-desc { font-size: .95rem; color: rgba(255,255,255,.75); line-height: 1.75; margin-bottom: 20px; }
        .detail-section-label { font-size: .8rem; font-weight: 700; color: rgba(255,255,255,.85); margin-bottom: 10px; text-transform: uppercase; letter-spacing: .04em; }
        .detail-feature-list { list-style: none; margin-bottom: 22px; display: flex; flex-direction: column; gap: 8px; }
        .detail-feature-list li { font-size: .9rem; color: rgba(255,255,255,.7); line-height: 1.5; padding-left: 22px; position: relative; }
        .detail-feature-list li::before { content: '✓'; position: absolute; left: 0; color: #34d399; font-weight: 700; }
        .detail-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .detail-tags span {
          font-size: .78rem; font-weight: 500; color: rgba(255,255,255,.78);
          background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.14);
          padding: 5px 13px; border-radius: 100px;
        }
        .detail-links { display: flex; gap: 10px; flex-wrap: wrap; }
        .detail-links a {
          text-decoration: none; font-size: .85rem; font-weight: 600;
          padding: 11px 22px; border-radius: 100px; transition: var(--transition);
        }
        .detail-links .link-demo { background: white; color: #171717; }
        .detail-links .link-demo:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.35); }
        .detail-links .link-repo { background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.16); color: rgba(255,255,255,.85); }
        .detail-links .link-repo:hover { background: rgba(255,255,255,.18); }
        .detail-meta-row { display: flex; gap: 14px; margin-bottom: 4px; flex-wrap: wrap; }
        .detail-meta-row .status-pill {
          font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
          padding: 5px 12px; border-radius: 100px;
        }
        .status-pill.live { background: rgba(16,185,129,.18); color: #34d399; }
        .status-pill.progress { background: rgba(245,158,11,.18); color: #fbbf24; }
        .status-pill.year { background: rgba(255,255,255,.08); color: rgba(255,255,255,.55); }

        /* Coding projects */
        .projects-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 22px;
        }
        .project-card {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 28px;
          box-shadow: var(--shadow);
          padding: 30px; display: flex; flex-direction: column;
          transition: var(--transition); will-change: transform;
          transform-style: preserve-3d; cursor: pointer;
        }
        .project-card:hover { box-shadow: var(--shadow-hover); }
        .project-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 14px; }
        .project-status {
          font-size: .7rem; font-weight: 700; text-transform: uppercase; letter-spacing: .05em;
          padding: 5px 12px; border-radius: 100px;
        }
        .project-status.live { background: rgba(16,185,129,.16); color: #34d399; }
        .project-status.progress { background: rgba(245,158,11,.16); color: #fbbf24; }
        .project-year { font-size: .78rem; color: var(--text-muted); font-weight: 500; }
        .project-card h3 { font-family: 'Space Grotesk', sans-serif; font-size: 1.25rem; font-weight: 700; margin-bottom: 4px; }
        .project-tagline { font-size: .85rem; color: var(--text-muted); font-weight: 500; margin-bottom: 14px; }
        .project-desc { font-size: .9rem; color: var(--text-secondary); line-height: 1.65; margin-bottom: 20px; flex-grow: 1; }
        .project-stack { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 22px; }
        .stack-tag {
          font-size: .75rem; font-weight: 500; color: var(--text-secondary);
          background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.1);
          padding: 4px 12px; border-radius: 100px; transition: var(--transition);
        }
        .project-card:hover .stack-tag { background: rgba(255,255,255,.1); }
        .project-links { display: flex; gap: 10px; margin-top: auto; }
        .project-links a {
          flex: 1; text-align: center; text-decoration: none;
          font-size: .82rem; font-weight: 600; padding: 10px 16px; border-radius: 100px;
          transition: var(--transition); position: relative; overflow: hidden;
        }
        .link-demo { background: var(--accent); color: var(--accent-contrast); }
        .link-demo:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,.35); }
        .link-repo { background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.12); color: var(--text-secondary); }
        .link-repo:hover { background: rgba(255,255,255,.14); color: var(--text); transform: translateY(-2px); }

        /* CTA */
        .cta-card {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 32px;
          box-shadow: var(--shadow);
          padding: 52px 48px; text-align: center;
          position: relative; overflow: hidden;
        }
        .cta-card::before {
          content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: radial-gradient(circle, rgba(255,255,255,.06) 0%, transparent 60%);
          animation: rotateCta 20s linear infinite;
          pointer-events: none;
        }
        @keyframes rotateCta { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .cta-card > * { position: relative; z-index: 1; }
        .cta-card h2 { font-family: 'Space Grotesk', sans-serif; font-size: 1.6rem; font-weight: 700; margin-bottom: 14px; }
        .cta-card p { color: var(--text-secondary); margin-bottom: 28px; font-size: 1.05rem; max-width: 480px; margin-left: auto; margin-right: auto; }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 14px 32px; background: var(--accent); color: var(--accent-contrast);
          border-radius: 100px; text-decoration: none; font-weight: 600; font-size: .95rem;
          border: none; cursor: pointer;
          box-shadow: 0 4px 15px rgba(0,0,0,.35); transition: var(--transition);
          position: relative; overflow: hidden;
        }
        .btn-primary:hover { transform: translateY(-3px); box-shadow: 0 10px 30px rgba(0,0,0,.45); }

        /* Back to top */
        .back-to-top {
          position: fixed; bottom: 28px; right: 28px;
          width: 48px; height: 48px; border-radius: 50%;
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
          *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; }
          .bg-orb { animation: none; }
        }

        /* ── Mobile / touch optimizations ──
           Heavy blur + large filter radii are expensive on mid/low-end Android GPUs.
           We shrink orbs, cut blur radius, and disable hover-only effects below 768px. */
        @media (max-width: 768px) {
          header { top: 8px; width: calc(100% - 16px); border-radius: 24px; backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
          .nav-wrapper { padding: 10px 18px; }
          .nav-left { gap: 12px; }
          .nav-menu { display: none; position: absolute; top: 110%; left: 50%; transform: translateX(-50%);
            background: rgba(20,20,22,.92); backdrop-filter: blur(16px);
            border: 1px solid var(--glass-border); border-radius: 20px;
            padding: 12px; box-shadow: var(--shadow-hover); flex-direction: column; width: 200px; gap: 4px;
          }
          .nav-menu.open { display: flex; }
          .nav-menu a { text-align: center; padding: 10px; }
          .mobile-toggle { display: flex; }
          .logo-gif { height: 32px; width: 32px; }
          .contact-btn { padding: 8px 16px; font-size: .75rem; }

          main { padding: 90px 16px 40px; }
          .page-intro h1 { font-size: 1.9rem; }
          .gallery-grid { columns: 2 160px; }
          .cta-card { padding: 36px 24px; }
          .lightbox-nav { display: none; }

          /* Cheaper blur + smaller orbs to keep scrolling smooth on phones */
          .bg-orb { filter: blur(40px); opacity: .35; }
          .orb-1 { width: 220px; height: 220px; }
          .orb-2 { width: 180px; height: 180px; }
          .orb-3 { width: 160px; height: 160px; }
          .noise { display: none; }

          .project-card, .lightbox-overlay {
            backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
          }

          /* Never leave a stray 3D tilt transform on tap since touch devices skip hover */
          .project-card { transform: none !important; }

          .detail-modal { max-height: 92vh; border-radius: 22px; max-width: 100%; }
          .detail-media { border-radius: 22px 22px 0 0; }
          .detail-media video { border-radius: 22px 22px 0 0; }
          .detail-body { padding: 22px 20px 28px; }
          .detail-overlay {
            padding: 16px;
            background: rgba(6,6,8,.65);
            backdrop-filter: blur(14px) saturate(150%);
            -webkit-backdrop-filter: blur(14px) saturate(150%);
          }
          .detail-modal {
            backdrop-filter: blur(20px) saturate(150%);
            -webkit-backdrop-filter: blur(20px) saturate(150%);
          }
        }
      `}),(0,t.jsx)("div",{className:"scroll-progress",style:{width:`${x}%`}}),(0,t.jsx)("div",{className:"bg-orb orb-1",style:{transform:`translate(${j.x}px, ${j.y}px)`}}),(0,t.jsx)("div",{className:"bg-orb orb-2",style:{transform:`translate(${-(.8*j.x)}px, ${-(.8*j.y)}px)`}}),(0,t.jsx)("div",{className:"bg-orb orb-3",style:{transform:`translate(calc(-50% + ${.5*j.x}px), calc(-50% + ${.5*j.y}px))`}}),(0,t.jsx)("div",{className:"noise"}),(0,t.jsx)("header",{className:f?"nav-hidden":"",children:(0,t.jsxs)("div",{className:"nav-wrapper",children:[(0,t.jsxs)("div",{className:"nav-left",children:[(0,t.jsx)("a",{href:"/",onClick:e=>S(e),children:(0,t.jsx)("img",{src:"https://media1.tenor.com/m/Lw6Z3WhArHcAAAAC/nokotan-anime.gif",className:"logo-gif",alt:"logo"})}),(0,t.jsxs)("ul",{className:`nav-menu ${v?"open":""}`,children:[(0,t.jsx)("li",{children:(0,t.jsx)("button",{className:"home"===w?"active":"",onClick:e=>A(e,"home"),children:"Home"})}),(0,t.jsx)("li",{children:(0,t.jsx)("a",{href:"/about",children:"About"})})]})]}),(0,t.jsxs)("button",{className:`mobile-toggle ${v?"open":""}`,onClick:()=>y(!v),"aria-label":"Menu",children:[(0,t.jsx)("span",{}),(0,t.jsx)("span",{}),(0,t.jsx)("span",{})]}),(0,t.jsx)("a",{href:"/contact",className:"contact-btn",children:"Contact"})]})}),(0,t.jsx)("main",{children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"page-intro",id:"home","data-animate":!0,children:[(0,t.jsxs)("span",{className:"eyebrow",children:[(0,t.jsx)("span",{className:"eyebrow-dot"}),"Portfolio"]}),(0,t.jsx)("h1",{children:"Surya Project"}),(0,t.jsx)("p",{children:"過去に携わったプロジェクト。"})]}),(0,t.jsxs)("section",{id:"videos",children:[(0,t.jsxs)("div",{className:"section-head","data-animate":!0,children:[(0,t.jsx)("h2",{children:"Project"}),(0,t.jsxs)("span",{children:[r.length," video"]})]}),(0,t.jsx)("div",{className:"video-grid",children:r.map((e,a)=>{let r=e.poster;return(0,t.jsx)("div",{className:"video-card","data-animate":!0,"data-animate-delay":a%6+1,onClick:()=>c(e),children:(0,t.jsxs)("div",{className:"video-frame",children:[(0,t.jsx)("span",{className:"video-category-tag",children:e.category}),(0,t.jsx)("span",{className:"video-play-icon","aria-hidden":"true",children:(0,t.jsx)("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"white",children:(0,t.jsx)("path",{d:"M8 5v14l11-7z"})})}),r?(0,t.jsx)("img",{className:"thumb",src:r,alt:`Thumbnail ${e.title}`,loading:"lazy",decoding:"async"}):(0,t.jsx)("div",{className:"thumb-fallback",children:"Preview tidak tersedia"}),(0,t.jsxs)("div",{className:"video-overlay",children:[(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("div",{className:"detail-hint",children:"Lihat detail →"})]})]})},e.id)})})]}),(0,t.jsxs)("section",{id:"gallery",children:[(0,t.jsxs)("div",{className:"section-head","data-animate":!0,children:[(0,t.jsx)("h2",{children:"Image Showcase"}),(0,t.jsxs)("span",{children:[i.length," karya"]})]}),(0,t.jsx)("div",{className:"gallery-grid",children:i.map((e,a)=>(0,t.jsxs)("div",{className:"gallery-item","data-animate":!0,"data-animate-delay":a%3+1,onClick:()=>l(e),children:[(0,t.jsx)("img",{src:e.src,alt:e.title,loading:"lazy",decoding:"async"}),(0,t.jsx)("div",{className:"gallery-caption",children:e.title})]},e.id))})]}),(0,t.jsxs)("section",{id:"projects",children:[(0,t.jsxs)("div",{className:"section-head","data-animate":!0,children:[(0,t.jsx)("h2",{children:"Coding Projects"}),(0,t.jsxs)("span",{children:[o.length," project"]})]}),(0,t.jsx)("div",{className:"projects-grid",children:o.map((e,a)=>(0,t.jsxs)("div",{className:"project-card","data-animate":!0,"data-animate-delay":a+1,onClick:()=>g(e),onMouseMove:e=>((e,t)=>{if(!N)return;let a=t.getBoundingClientRect(),r=e.clientX-a.left,i=e.clientY-a.top,o=a.width/2,n=a.height/2;t.style.transform=`perspective(1000px) rotateX(${(i-n)/20}deg) rotateY(${(o-r)/20}deg) translateY(-6px) scale(1.01)`})(e,e.currentTarget),onMouseLeave:e=>{e.currentTarget.style.transform=""},children:[(0,t.jsxs)("div",{className:"project-top",children:[(0,t.jsx)("span",{className:`project-status ${"Live"===e.status?"live":"progress"}`,children:e.status}),(0,t.jsx)("span",{className:"project-year",children:e.year})]}),(0,t.jsx)("h3",{children:e.title}),(0,t.jsx)("div",{className:"project-tagline",children:e.tagline}),(0,t.jsx)("p",{className:"project-desc",children:e.desc}),(0,t.jsx)("div",{className:"project-stack",children:e.stack.map(e=>(0,t.jsx)("span",{className:"stack-tag",children:e},e))}),(0,t.jsxs)("div",{className:"project-links",children:[(0,t.jsx)("a",{href:e.links.demo,className:"link-demo",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:"Lihat Demo"}),(0,t.jsx)("a",{href:e.links.repo,className:"link-repo",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),children:"Repo"})]})]},e.title))})]}),(0,t.jsxs)("div",{className:"cta-card","data-animate":!0,children:[(0,t.jsx)("h2",{children:"Ada ide project bareng?"}),(0,t.jsx)("p",{children:"Bicarakan saja"}),(0,t.jsxs)("a",{href:"/contact",className:"btn-primary",children:["Contact",(0,t.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,t.jsx)("path",{d:"M5 12h14"}),(0,t.jsx)("path",{d:"m12 5 7 7-7 7"})]})]})]})]})}),(0,t.jsx)("footer",{children:(0,t.jsx)("p",{children:"©Surya | 開発者"})}),s&&(0,t.jsxs)("div",{className:"lightbox-overlay",onClick:()=>l(null),children:[(0,t.jsx)("button",{className:"lightbox-close",onClick:()=>l(null),"aria-label":"Tutup",children:"✕"}),(e=i.findIndex(e=>e.id===s.id),(0,t.jsxs)(t.Fragment,{children:[e>0&&(0,t.jsx)("button",{className:"lightbox-nav lightbox-prev",onClick:t=>{t.stopPropagation(),l(i[e-1])},"aria-label":"Sebelumnya",children:"‹"}),(0,t.jsx)("img",{src:s.src,alt:s.title,onClick:e=>e.stopPropagation()}),e<i.length-1&&(0,t.jsx)("button",{className:"lightbox-nav lightbox-next",onClick:t=>{t.stopPropagation(),l(i[e+1])},"aria-label":"Selanjutnya",children:"›"}),(0,t.jsxs)("div",{className:"lightbox-counter",children:[e+1," / ",i.length]})]}))]}),d&&(0,t.jsx)("div",{className:"detail-overlay",onClick:()=>c(null),children:(0,t.jsxs)("div",{className:"detail-modal",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{className:"detail-close",onClick:()=>c(null),"aria-label":"Tutup",children:"✕"}),(0,t.jsx)("div",{className:"detail-media",children:"youtube"===d.type?(n=function(e){for(let t of[/(?:youtube\.com\/watch\?v=)([\w-]+)/,/(?:youtu\.be\/)([\w-]+)/,/(?:youtube\.com\/embed\/)([\w-]+)/,/(?:youtube\.com\/shorts\/)([\w-]+)/]){let a=e.match(t);if(a)return a[1]}return null}(d.videoUrl))?(0,t.jsx)("iframe",{src:`https://www.youtube.com/embed/${n}?autoplay=1`,title:d.title,allow:"autoplay; encrypted-media; picture-in-picture",allowFullScreen:!0},n):(0,t.jsx)("div",{className:"thumb-fallback",children:"Preview tidak tersedia"}):(0,t.jsx)("video",{src:d.videoUrl,poster:d.poster,controls:!0,autoPlay:!0,playsInline:!0,preload:"metadata",children:"Browser kamu tidak mendukung pemutaran video."})}),(0,t.jsxs)("div",{className:"detail-body",children:[(0,t.jsx)("div",{className:"detail-eyebrow",children:d.category}),(0,t.jsx)("h3",{children:d.title}),(0,t.jsx)("p",{className:"detail-desc",children:d.longDesc}),(0,t.jsx)("div",{className:"detail-section-label",children:"Tools"}),(0,t.jsx)("div",{className:"detail-tags",children:d.tools.map(e=>(0,t.jsx)("span",{children:e},e))})]})]})}),p&&(0,t.jsx)("div",{className:"detail-overlay",onClick:()=>g(null),children:(0,t.jsxs)("div",{className:"detail-modal",onClick:e=>e.stopPropagation(),children:[(0,t.jsx)("button",{className:"detail-close",onClick:()=>g(null),"aria-label":"Tutup",children:"✕"}),(0,t.jsxs)("div",{className:"detail-body",style:{paddingTop:30},children:[(0,t.jsxs)("div",{className:"detail-meta-row",children:[(0,t.jsx)("span",{className:`status-pill ${"Live"===p.status?"live":"progress"}`,children:p.status}),(0,t.jsx)("span",{className:"status-pill year",children:p.year})]}),(0,t.jsx)("h3",{style:{marginTop:14},children:p.title}),(0,t.jsx)("div",{className:"detail-tagline",children:p.tagline}),(0,t.jsx)("p",{className:"detail-desc",children:p.longDesc}),(0,t.jsx)("div",{className:"detail-section-label",children:"Fitur Utama"}),(0,t.jsx)("ul",{className:"detail-feature-list",children:p.features.map(e=>(0,t.jsx)("li",{children:e},e))}),(0,t.jsx)("div",{className:"detail-section-label",children:"Tech Stack"}),(0,t.jsx)("div",{className:"detail-tags",children:p.stack.map(e=>(0,t.jsx)("span",{children:e},e))}),(0,t.jsxs)("div",{className:"detail-links",children:[(0,t.jsx)("a",{href:p.links.demo,className:"link-demo",rel:"noopener noreferrer",children:"Lihat Demo"}),(0,t.jsx)("a",{href:p.links.repo,className:"link-repo",rel:"noopener noreferrer",children:"Repo"})]})]})]})}),(0,t.jsx)("button",{className:`back-to-top ${m?"visible":""}`,onClick:S,"aria-label":"Kembali ke atas",children:(0,t.jsx)("svg",{width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,t.jsx)("path",{d:"m18 15-6-6-6 6"})})})]})}])}]);