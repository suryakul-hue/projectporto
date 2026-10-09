(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,60078,e=>{"use strict";var a=e.i(43476),t=e.i(71645);e.s(["default",0,function(){let[e,r]=(0,t.useState)(!1),[i,n]=(0,t.useState)(!1),s=function(e=.03){let[a,r]=(0,t.useState)({x:0,y:0});return(0,t.useEffect)(()=>{if(!window.matchMedia("(hover: hover) and (pointer: fine)").matches)return;let a=a=>{r({x:(a.clientX-window.innerWidth/2)*e,y:(a.clientY-window.innerHeight/2)*e})};return window.addEventListener("mousemove",a,{passive:!0}),()=>window.removeEventListener("mousemove",a)},[e]),a}(.04),o=(0,t.useRef)(0);return(0,t.useEffect)(()=>{let e=()=>{let e=window.scrollY;n(e>o.current&&e>80),o.current=e};return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap');

        :root {
          --accent: #f2f2f0;
          --accent-contrast: #0a0a0a;
          --text: #f2f2f0;
          --text-secondary: #a8a8a3;
          --text-muted: #6f6f6b;
          --success: #10b981;
          --radius: 24px;
          --glass: rgba(255,255,255,.045);
          --glass-border: rgba(255,255,255,.09);
          --shadow: 0 4px 24px rgba(0,0,0,0.45);
          --shadow-hover: 0 16px 50px rgba(0,0,0,0.55);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

        html, body {
          min-height: 100%;
          font-family: 'Inter', sans-serif;
          background: linear-gradient(160deg, #0a0a0b 0%, #131315 45%, #0a0a0b 100%);
          background-attachment: fixed;
          color: var(--text);
          overflow-x: hidden;
        }

        /* ── Background orbs — soft ambient glow, matches Home ── */
        .bg-orb { position: fixed; border-radius: 50%; filter: blur(90px); opacity: .6; z-index: -1; animation: floatOrb 15s infinite ease-in-out; pointer-events: none; transition: transform .3s ease-out; will-change: transform; }
        .orb-1 { width: 420px; height: 420px; background: radial-gradient(circle, rgba(255,255,255,.07), transparent 70%); top: 10%; left: -100px; }
        .orb-2 { width: 320px; height: 320px; background: radial-gradient(circle, rgba(255,255,255,.05), transparent 70%); bottom: 20%; right: -50px; animation-delay: 5s; }
        .orb-3 { width: 260px; height: 260px; background: radial-gradient(circle, rgba(255,255,255,.06), transparent 70%); top: 50%; left: 50%; transform: translate(-50%,-50%); animation-delay: 10s; }
        @keyframes floatOrb {
          0%,100% { transform: translate(0,0) scale(1); }
          33% { transform: translate(30px,-30px) scale(1.1); }
          66% { transform: translate(-20px,20px) scale(.9); }
        }
        .noise { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; opacity: .05; pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }

        /* ── Header — same position, size and behavior as Home ── */
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
        .nav-menu a { text-decoration: none; color: var(--text-secondary); font-weight: 500; font-size: .9rem;
          padding: 8px 16px; border-radius: 100px; transition: all .3s; }
        .nav-menu a:hover { color: var(--text); background: rgba(255,255,255,.08); }
        .nav-menu a.active { color: var(--text); background: rgba(255,255,255,.12); font-weight: 600; }
        .logo-gif { height: 36px; width: 36px; border-radius: 12px; object-fit: cover;
          border: 2px solid rgba(255,255,255,.15); box-shadow: 0 2px 8px rgba(0,0,0,.3); transition: all .3s; display: block; }
        .logo-gif:hover { transform: scale(1.1) rotate(5deg); }
        .contact-btn { font-weight: 600; font-size: .85rem; color: var(--accent-contrast); text-decoration: none;
          background: var(--accent); padding: 10px 24px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,.1); box-shadow: 0 4px 15px rgba(0,0,0,.3); transition: all .3s; }
        .contact-btn:hover { transform: translateY(-2px); background: #e2e2df; }

        /* Mobile menu toggle — same as Home */
        .mobile-toggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 4px; }
        .mobile-toggle span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: all .3s; }
        .mobile-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
        .mobile-toggle.open span:nth-child(2) { opacity: 0; }
        .mobile-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

        /* ── Page layout ── */
        main { padding: 120px 24px 60px; min-height: 100vh; }
        .container { max-width: 800px; margin: 0 auto; }

        /* ── Profile Hero ── */
        .profile-hero {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 32px;
          box-shadow: var(--shadow);
          padding: 48px;
          margin-bottom: 32px;
          animation: cardIn .6s ease both;
          text-align: center;
        }
        @keyframes cardIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .avatar-wrap {
          position: relative;
          width: 120px; height: 120px;
          margin: 0 auto 24px;
        }
        .avatar-wrap img {
          width: 100%; height: 100%; border-radius: 32px; object-fit: cover;
          border: 4px solid rgba(255,255,255,.12);
          box-shadow: 0 8px 24px rgba(0,0,0,.4);
        }
        .avatar-badge {
          position: absolute; bottom: -4px; right: -4px;
          width: 32px; height: 32px; border-radius: 10px;
          background: var(--success); border: 3px solid #121214;
          box-shadow: 0 2px 8px rgba(16,185,129,.4);
          animation: pulse 2s infinite;
          display: flex; align-items: center; justify-content: center;
        }
        .avatar-badge::after {
          content: "✓"; color: white; font-size: 14px; font-weight: 700;
        }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: .5; } }

        .profile-hero h1 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.2rem; font-weight: 700; color: var(--text);
          letter-spacing: -.02em; line-height: 1.1; margin-bottom: 10px;
        }
        .profile-hero .role {
          font-size: 1rem; color: var(--text-muted); font-weight: 500;
          display: inline-flex; align-items: center; gap: 8px;
          margin-bottom: 24px;
        }
        .role-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--success); }
        .profile-hero .bio {
          font-size: 1.05rem; color: var(--text-secondary); line-height: 1.8;
          max-width: 560px; margin: 0 auto 28px;
        }

        /* ── Tags ── */
        .tags { display: flex; flex-wrap: wrap; gap: 10px; justify-content: center; margin-bottom: 32px; }
        .tag {
          padding: 8px 18px; background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1); border-radius: 100px;
          font-size: .85rem; color: var(--text-secondary); font-weight: 500;
          transition: all .25s;
        }
        .tag:hover { background: rgba(255,255,255,.12); color: var(--text); transform: translateY(-2px); }
        .tag-accent {
          background: rgba(255,255,255,.1); border-color: rgba(255,255,255,.16); color: var(--text);
        }

        /* ── Social Links ── */
        .socials { display: flex; gap: 12px; justify-content: center; margin-bottom: 8px; }
        .social-btn {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 10px 20px; background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.12); color: var(--text-secondary);
          border-radius: 100px; text-decoration: none; font-weight: 600; font-size: .85rem;
          cursor: pointer; transition: all .3s;
        }
        .social-btn:hover { background: var(--accent); color: var(--accent-contrast); border-color: transparent; transform: translateY(-2px); }

        /* ── Stats ── */
        .stats-section {
          display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px;
          margin-bottom: 32px;
        }
        .stat-card {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 24px;
          padding: 28px 16px; text-align: center;
          transition: all .3s; animation: cardIn .6s ease both;
        }
        .stat-card:hover { background: rgba(255,255,255,.08); transform: translateY(-4px); box-shadow: var(--shadow-hover); }
        .stat-num {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem; font-weight: 700; color: var(--text); line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label { font-size: .8rem; color: var(--text-muted); font-weight: 500; }

        /* ── Experience / Timeline ── */
        .timeline-section {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 32px;
          box-shadow: var(--shadow);
          padding: 40px 48px;
          margin-bottom: 32px;
          animation: cardIn .6s .1s ease both;
        }
        .timeline-section h2 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem; font-weight: 700;
          margin-bottom: 28px; display: flex; align-items: center; gap: 10px;
        }
        .timeline { display: flex; flex-direction: column; gap: 24px; }
        .timeline-item {
          display: flex; gap: 20px;
          position: relative;
          padding-left: 28px;
          border-left: 2px solid rgba(255,255,255,.12);
        }
        .timeline-item::before {
          content: "";
          position: absolute; left: -7px; top: 4px;
          width: 12px; height: 12px;
          background: var(--accent); border-radius: 50%;
          border: 2px solid #121214;
          box-shadow: 0 0 0 2px rgba(255,255,255,.1);
        }
        .timeline-date {
          font-size: .78rem; color: var(--text-muted); font-weight: 600;
          text-transform: uppercase; letter-spacing: .05em;
          margin-bottom: 4px;
        }
        .timeline-title { font-weight: 700; font-size: 1rem; margin-bottom: 4px; color: var(--text); }
        .timeline-desc { font-size: .9rem; color: var(--text-secondary); line-height: 1.5; }

        /* ── Footer ── */
        footer {
          padding: 40px 24px;
          text-align: center;
          color: var(--text-muted);
          font-size: .85rem;
        }

        /* ── Mobile ── */
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
          .nav-menu a { text-align: center; padding: 10px; display: block; }
          .mobile-toggle { display: flex; }
          .logo-gif { height: 32px; width: 32px; }
          .contact-btn { padding: 8px 16px; font-size: .75rem; }

          main { padding: 90px 16px 40px; }
          .profile-hero { padding: 32px 24px; border-radius: 24px; }
          .profile-hero h1 { font-size: 1.7rem; }
          .avatar-wrap { width: 100px; height: 100px; }

          .stats-section { grid-template-columns: repeat(2,1fr); gap: 10px; }
          .stat-num { font-size: 1.5rem; }
          .stat-card { padding: 20px 10px; }

          .timeline-section { padding: 28px 24px; }

          /* Cheaper blur + smaller orbs on phones, same trade-off as Home */
          .bg-orb { filter: blur(40px); opacity: .35; }
          .orb-1 { width: 220px; height: 220px; }
          .orb-2 { width: 180px; height: 180px; }
          .orb-3 { width: 160px; height: 160px; }
          .noise { display: none; }
          .profile-hero, .stat-card, .timeline-section {
            backdrop-filter: blur(10px) saturate(130%); -webkit-backdrop-filter: blur(10px) saturate(130%);
          }
        }
      `}),(0,a.jsx)("div",{className:"bg-orb orb-1",style:{transform:`translate(${s.x}px, ${s.y}px)`}}),(0,a.jsx)("div",{className:"bg-orb orb-2",style:{transform:`translate(${-(.8*s.x)}px, ${-(.8*s.y)}px)`}}),(0,a.jsx)("div",{className:"bg-orb orb-3",style:{transform:`translate(calc(-50% + ${.5*s.x}px), calc(-50% + ${.5*s.y}px))`}}),(0,a.jsx)("div",{className:"noise"}),(0,a.jsx)("header",{className:i?"nav-hidden":"",children:(0,a.jsxs)("div",{className:"nav-wrapper",children:[(0,a.jsxs)("div",{className:"nav-left",children:[(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{src:"https://media1.tenor.com/m/Lw6Z3WhArHcAAAAC/nokotan-anime.gif",className:"logo-gif",alt:"logo"})}),(0,a.jsxs)("ul",{className:`nav-menu ${e?"open":""}`,children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/about",className:"active",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/helpdesk",children:"Helpdesk"})})]})]}),(0,a.jsxs)("button",{className:`mobile-toggle ${e?"open":""}`,onClick:()=>r(!e),"aria-label":"Menu",children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)("a",{href:"/contact",className:"contact-btn",children:"Contact"})]})}),(0,a.jsx)("main",{children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"profile-hero",children:[(0,a.jsxs)("div",{className:"avatar-wrap",children:[(0,a.jsx)("img",{src:"https://media.tenor.com/tVq8PoI9eCwAAAAi/vivian-zzz.gif",alt:"Surtod"}),(0,a.jsx)("div",{className:"avatar-badge"})]}),(0,a.jsx)("h1",{children:"Surtod"}),(0,a.jsxs)("p",{className:"role",children:[(0,a.jsx)("span",{className:"role-dot"}),"Vibe ngodong· Ngoding sambil nyoli"]}),(0,a.jsx)("p",{className:"bio",children:"Halo saya surtod icikiwir (web dalam proses pengembangan)."}),(0,a.jsxs)("div",{className:"tags",children:[["Next.js","React","TypeScript","Laravel","Inertia.js","TailwindCSS"].map(e=>(0,a.jsx)("span",{className:"tag tag-accent",children:e},e)),["Blender","Adobe After Effect","Premiere Pro","Photoshop","Unreal Engine 5","Unity"].map(e=>(0,a.jsx)("span",{className:"tag",children:e},e))]}),(0,a.jsxs)("div",{className:"socials",children:[(0,a.jsxs)("a",{href:"https://github.com",target:"_blank",rel:"noreferrer",className:"social-btn",children:[(0,a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})}),"GitHub"]}),(0,a.jsxs)("a",{href:"https://twitter.com",target:"_blank",rel:"noreferrer",className:"social-btn",children:[(0,a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"})}),"Twitter"]}),(0,a.jsxs)("a",{href:"https://linkedin.com",target:"_blank",rel:"noreferrer",className:"social-btn",children:[(0,a.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"currentColor",children:(0,a.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})}),"LinkedIn"]})]})]}),(0,a.jsxs)("div",{className:"stats-section",children:[(0,a.jsxs)("div",{className:"stat-card",children:[(0,a.jsx)("div",{className:"stat-num",children:"5+"}),(0,a.jsx)("div",{className:"stat-label",children:"Years"})]}),(0,a.jsxs)("div",{className:"stat-card",children:[(0,a.jsx)("div",{className:"stat-num",children:"Dikit"}),(0,a.jsx)("div",{className:"stat-label",children:"Projects"})]})]}),(0,a.jsxs)("div",{className:"timeline-section",children:[(0,a.jsxs)("h2",{children:[(0,a.jsxs)("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,a.jsx)("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),"Experience"]}),(0,a.jsxs)("div",{className:"timeline",children:[(0,a.jsx)("div",{className:"timeline-item",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"timeline-date",children:"Sekarang"}),(0,a.jsx)("div",{className:"timeline-title",children:"Still learning Dev & Video Editing, Blender"}),(0,a.jsx)("div",{className:"timeline-desc",children:"Ngembangin web app (Next.js, Laravel + Inertia.js) sambil aktif garap AMV, editing reel, dan motion graphics — color grading, transisi dinamis, sampe sound design."})]})}),(0,a.jsx)("div",{className:"timeline-item",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"timeline-date",children:"2022 — 2024"}),(0,a.jsx)("div",{className:"timeline-title",children:"Web Developer & 3D Artist (Blender)"}),(0,a.jsx)("div",{className:"timeline-desc",children:"Bangun berbagai project web dari landing page sampe dashboard admin, sekaligus mulai serius di Blender — modeling, lighting, sampe rendering animasi pendek 3D."})]})}),(0,a.jsx)("div",{className:"timeline-item",children:(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{className:"timeline-date",children:"2021 — 2022"}),(0,a.jsx)("div",{className:"timeline-title",children:"Junior Developer & Motion Graphics Enthusiast"}),(0,a.jsx)("div",{className:"timeline-desc",children:"Mulai perjalanan ngoding serius (Laravel, React) bareng belajar Premiere Pro dan After Effects buat bikin editing reel dan intro motion graphics pertama."})]})})]})]})]})}),(0,a.jsx)("footer",{children:(0,a.jsx)("p",{children:"©Surya | 開発者"})})]})}])}]);