(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41827,e=>{e.v({className:"inter_f003ad3b-module__E9rocq__className",variable:"inter_f003ad3b-module__E9rocq__variable"})},3583,e=>{e.v({className:"space_grotesk_3125676-module__Mj-GEa__className",variable:"space_grotesk_3125676-module__Mj-GEa__variable"})},60966,3700,e=>{"use strict";var a=e.i(41827);let r={className:a.default.className,style:{fontFamily:"'Inter', 'Inter Fallback'",fontStyle:"normal"}};null!=a.default.variable&&(r.variable=a.default.variable),e.s(["default",0,r],60966);var t=e.i(3583);let i={className:t.default.className,style:{fontFamily:"'Space Grotesk', 'Space Grotesk Fallback'",fontStyle:"normal"}};null!=t.default.variable&&(i.variable=t.default.variable),e.s(["default",0,i],3700)},72635,e=>{"use strict";var a=e.i(43476),r=e.i(71645),t=e.i(60966),i=e.i(3700);let o=[{value:"Illustration",label:"Illustration",hint:"Karakter, fanart, ilustrasi"},{value:"Video Editing",label:"Video Editing / AMV",hint:"AMV, montage, edit video"},{value:"3D Animation / Blender",label:"3D / Blender",hint:"Model, render, animasi 3D"}],n={name:"",contact:"",category:"Illustration",budget:"",deadline:"",reference:"",description:""};e.s(["default",0,function(){let[e,s]=(0,r.useState)(!1),[l,d]=(0,r.useState)(!1),c=(0,r.useRef)(null),p=(0,r.useRef)(0),[b,x]=(0,r.useState)(n),[g,u]=(0,r.useState)(!1),[h,m]=(0,r.useState)(null);(0,r.useEffect)(()=>{let e=!1,a=()=>{e=!1;let a=window.scrollY,r=document.documentElement.scrollHeight-window.innerHeight;c.current&&(c.current.style.transform=`scaleX(${r>0?Math.min(a/r,1):0})`);let t=a>p.current&&a>80;s(t),t&&d(!1),p.current=a},r=()=>{e||(e=!0,requestAnimationFrame(a))};return window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]);let f=(e,a)=>x(r=>({...r,[e]:a})),v=async e=>{e.preventDefault(),u(!0),m(null);try{let e=await fetch("https://ysurtod.fun/api/order.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(b)}),a=await e.json();a.success?(m({type:"success",text:"Pesanan terkirim! Aku bakal hubungi kamu lewat kontak yang kamu isi."}),x(n)):m({type:"error",text:a.message||"Pesanan gagal dikirim. Coba lagi ya!"})}catch{m({type:"error",text:"Tidak bisa terhubung ke server. Cek koneksi kamu lalu coba lagi."})}finally{u(!1)}};return(0,a.jsxs)("div",{className:`page-root ${t.default.variable} ${i.default.variable}`,children:[(0,a.jsx)("style",{children:`
        :root {
          --accent: #f2f2f0;
          --accent-contrast: #0a0a0a;
          --text: #f2f2f0;
          --text-secondary: #a8a8a3;
          --text-muted: #6f6f6b;
          --success: #10b981;
          --danger: #f87171;
          --glass: rgba(255,255,255,.045);
          --glass-border: rgba(255,255,255,.09);
          --shadow: 0 4px 24px rgba(0,0,0,0.45);
          --shadow-hover: 0 16px 50px rgba(0,0,0,0.6);
          --ease: cubic-bezier(.25,.46,.45,.94);
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

        .scroll-progress {
          position: fixed; top: 0; left: 0; height: 3px; width: 100%;
          background: linear-gradient(90deg, #f2f2f0, #6f6f6b);
          z-index: 9999; transform: scaleX(0); transform-origin: left; will-change: transform;
          box-shadow: 0 0 12px rgba(255,255,255,.35);
        }

        .bg-fx {
          position: fixed; inset: 0; z-index: -1; pointer-events: none; overflow: hidden;
          background: linear-gradient(160deg, #0a0a0b 0%, #131315 45%, #0a0a0b 100%);
        }
        .bg-orb { position: absolute; border-radius: 50%; opacity: .6; }
        .orb-1 { width: 520px; height: 520px; background: radial-gradient(circle, rgba(255,255,255,.07), transparent 70%); top: 10%; left: -160px; }
        .orb-2 { width: 420px; height: 420px; background: radial-gradient(circle, rgba(255,255,255,.05), transparent 70%); bottom: 20%; right: -110px; }
        .orb-3 { width: 360px; height: 360px; background: radial-gradient(circle, rgba(255,255,255,.06), transparent 70%); top: 50%; left: 50%; transform: translate(-50%, -50%); }
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
        .nav-menu a {
          text-decoration: none; color: var(--text-secondary); font-weight: 500; font-size: .9rem;
          padding: 8px 16px; border-radius: 100px; transition: var(--transition);
          cursor: pointer; display: inline-block;
        }
        .nav-menu a:hover { color: var(--text); background: rgba(255,255,255,.08); }
        .nav-menu a.active { background: rgba(255,255,255,.12); font-weight: 600; }
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

        .mobile-toggle { display: none; flex-direction: column; gap: 4px; background: none; border: none; cursor: pointer; padding: 4px; }
        .mobile-toggle span { display: block; width: 22px; height: 2px; background: var(--text); border-radius: 2px; transition: var(--transition); }
        .mobile-toggle.open span:nth-child(1) { transform: rotate(45deg) translate(4px, 4px); }
        .mobile-toggle.open span:nth-child(2) { opacity: 0; }
        .mobile-toggle.open span:nth-child(3) { transform: rotate(-45deg) translate(4px, -4px); }

        main { padding: 120px 24px 60px; min-height: 100vh; }
        .container { max-width: 680px; margin: 0 auto; }

        /* Intro (sama seperti halaman utama) */
        .page-intro { margin-bottom: 36px; animation: reveal .7s var(--ease) backwards; }
        @keyframes reveal { from { opacity: 0; transform: translateY(30px); } }
        .eyebrow {
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
        .page-intro p { font-size: 1.05rem; color: var(--text-secondary); max-width: 560px; line-height: 1.7; }

        /* Form card */
        .form-card {
          background: var(--glass); backdrop-filter: blur(16px) saturate(140%); -webkit-backdrop-filter: blur(16px) saturate(140%);
          border: 1px solid var(--glass-border); border-radius: 28px; box-shadow: var(--shadow);
          padding: 32px; animation: reveal .7s var(--ease) .1s backwards;
        }
        form { display: flex; flex-direction: column; gap: 22px; }
        .row { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
        .field label, .field legend { display: block; font-size: .8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 8px; }
        fieldset { border: none; }
        .field input[type="text"], .field input[type="url"], .field input[type="date"], .field textarea {
          width: 100%; font: inherit; font-size: .92rem; color: var(--text);
          background: rgba(0,0,0,.28); border: 1px solid var(--glass-border); border-radius: 14px;
          padding: 12px 16px; transition: var(--transition);
        }
        .field input[type="date"] { color-scheme: dark; }
        .field textarea { resize: vertical; min-height: 130px; line-height: 1.6; }
        .field input::placeholder, .field textarea::placeholder { color: var(--text-muted); }
        .field input:focus, .field textarea:focus {
          outline: none; border-color: rgba(255,255,255,.45); background: rgba(0,0,0,.4);
          box-shadow: 0 0 0 3px rgba(255,255,255,.08);
        }

        /* Category chips */
        .chips { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .chip {
          position: relative; cursor: pointer; padding: 12px 14px; border-radius: 16px;
          background: rgba(0,0,0,.28); border: 1px solid var(--glass-border); transition: var(--transition);
        }
        .chip:hover { border-color: rgba(255,255,255,.25); }
        .chip input { position: absolute; opacity: 0; pointer-events: none; }
        .chip.selected { background: rgba(255,255,255,.12); border-color: rgba(255,255,255,.5); }
        .chip:focus-within { outline: 2px solid rgba(255,255,255,.75); outline-offset: 2px; }
        .chip strong { display: block; font-size: .85rem; font-weight: 600; color: var(--text); }
        .chip span { display: block; margin-top: 3px; font-size: .72rem; line-height: 1.4; color: var(--text-muted); }

        /* Status + submit */
        .status { font-size: .85rem; font-weight: 500; line-height: 1.5; padding: 12px 16px; border-radius: 14px; border: 1px solid; }
        .status.success { color: #34d399; background: rgba(16,185,129,.12); border-color: rgba(16,185,129,.3); }
        .status.error { color: var(--danger); background: rgba(248,113,113,.1); border-color: rgba(248,113,113,.3); }
        .submit-btn {
          width: 100%; font: inherit; font-size: .92rem; font-weight: 600; cursor: pointer;
          color: var(--accent-contrast); background: var(--accent);
          border: 1px solid rgba(255,255,255,.1); border-radius: 100px; padding: 14px 24px;
          box-shadow: 0 4px 15px rgba(0,0,0,.3); transition: var(--transition);
        }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); background: #e2e2df; box-shadow: 0 8px 25px rgba(0,0,0,.4); }
        .submit-btn:active:not(:disabled) { transform: translateY(0) scale(.99); }
        .submit-btn:disabled { opacity: .5; cursor: not-allowed; }

        footer { padding: 48px 24px; text-align: center; color: var(--text-muted); font-size: .85rem; }

        @media (prefers-reduced-motion: reduce) {
          *, *::before, *::after { animation-duration: .01ms !important; animation-delay: 0s !important; transition-duration: .01ms !important; }
          html { scroll-behavior: auto; }
        }

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
          .nav-menu a { text-align: center; padding: 10px; width: 100%; }
          .mobile-toggle { display: flex; }
          .logo-gif { height: 32px; width: 32px; }
          .contact-btn { padding: 8px 16px; font-size: .75rem; }

          main { padding: 90px 16px 40px; }
          .page-intro h1 { font-size: 1.9rem; }
          .form-card { padding: 22px 18px; border-radius: 22px; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); }
          .row, .chips { grid-template-columns: 1fr; }
          .bg-orb { opacity: .35; }
          .orb-1 { width: 260px; height: 260px; }
          .orb-2 { width: 220px; height: 220px; }
          .orb-3 { width: 200px; height: 200px; }
          .noise { display: none; }
        }
      `}),(0,a.jsx)("div",{className:"scroll-progress",ref:c}),(0,a.jsxs)("div",{className:"bg-fx","aria-hidden":"true",children:[(0,a.jsx)("div",{className:"bg-orb orb-1"}),(0,a.jsx)("div",{className:"bg-orb orb-2"}),(0,a.jsx)("div",{className:"bg-orb orb-3"}),(0,a.jsx)("div",{className:"noise"})]}),(0,a.jsx)("header",{className:e?"nav-hidden":"",children:(0,a.jsxs)("div",{className:"nav-wrapper",children:[(0,a.jsxs)("div",{className:"nav-left",children:[(0,a.jsx)("a",{href:"/",children:(0,a.jsx)("img",{src:"https://media1.tenor.com/m/Lw6Z3WhArHcAAAAC/nokotan-anime.gif",className:"logo-gif",alt:"logo",width:36,height:36})}),(0,a.jsxs)("ul",{className:`nav-menu ${l?"open":""}`,children:[(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/",children:"Home"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/about",children:"About"})}),(0,a.jsx)("li",{children:(0,a.jsx)("a",{href:"/order",className:"active","aria-current":"page",style:{color:"#f472b6",fontWeight:"600"},onMouseOver:e=>e.currentTarget.style.color="#f9a8d4",onMouseOut:e=>e.currentTarget.style.color="#f472b6",children:"Order Commission"})})]})]}),(0,a.jsxs)("button",{className:`mobile-toggle ${l?"open":""}`,onClick:()=>d(!l),"aria-label":"Menu","aria-expanded":l,children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)("a",{href:"/contact",className:"contact-btn",children:"Contact"})]})}),(0,a.jsx)("main",{children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsxs)("div",{className:"page-intro",children:[(0,a.jsxs)("span",{className:"eyebrow",children:[(0,a.jsx)("span",{className:"eyebrow-dot"}),"Commission"]}),(0,a.jsx)("h1",{children:"Order Commission"}),(0,a.jsx)("p",{children:"Isi detail pesananmu. Makin jelas brief-nya, makin cepat aku bisa mulai."})]}),(0,a.jsx)("div",{className:"form-card",children:(0,a.jsxs)("form",{onSubmit:v,children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"name",children:"Nama / Username"}),(0,a.jsx)("input",{id:"name",type:"text",required:!0,value:b.name,onChange:e=>f("name",e.target.value),placeholder:"e.g. Suryakul"})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"contact",children:"Kontak (Discord / Email / IG)"}),(0,a.jsx)("input",{id:"contact",type:"text",required:!0,value:b.contact,onChange:e=>f("contact",e.target.value),placeholder:"e.g. username atau email@domain.com"})]})]}),(0,a.jsxs)("fieldset",{className:"field",children:[(0,a.jsx)("legend",{children:"Kategori komisi"}),(0,a.jsx)("div",{className:"chips",children:o.map(e=>{let r=b.category===e.value;return(0,a.jsxs)("label",{className:`chip ${r?"selected":""}`,children:[(0,a.jsx)("input",{type:"radio",name:"category",value:e.value,checked:r,onChange:()=>f("category",e.value)}),(0,a.jsx)("strong",{children:e.label}),(0,a.jsx)("span",{children:e.hint})]},e.value)})})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"budget",children:"Budget (opsional)"}),(0,a.jsx)("input",{id:"budget",type:"text",value:b.budget,onChange:e=>f("budget",e.target.value),placeholder:"e.g. Rp 150.000"})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"deadline",children:"Deadline (opsional)"}),(0,a.jsx)("input",{id:"deadline",type:"date",value:b.deadline,onChange:e=>f("deadline",e.target.value)})]})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"reference",children:"Link referensi (opsional)"}),(0,a.jsx)("input",{id:"reference",type:"url",value:b.reference,onChange:e=>f("reference",e.target.value),placeholder:"https://..."})]}),(0,a.jsxs)("div",{className:"field",children:[(0,a.jsx)("label",{htmlFor:"description",children:"Deskripsi / Brief karya"}),(0,a.jsx)("textarea",{id:"description",required:!0,value:b.description,onChange:e=>f("description",e.target.value),placeholder:"Jelaskan konsep, karakter, style, durasi, atau hal lain yang penting..."})]}),h&&(0,a.jsx)("p",{role:"status",className:`status ${h.type}`,children:h.text}),(0,a.jsx)("button",{type:"submit",className:"submit-btn",disabled:g,children:g?"Mengirim...":"Kirim pesanan"})]})})]})}),(0,a.jsx)("footer",{children:(0,a.jsx)("p",{children:"©Surya | 開発者"})})]})}])}]);