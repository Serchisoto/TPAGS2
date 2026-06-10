export default function Page() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink:      #0f0f0f;
          --mid:      #4a4a4a;
          --muted:    #9a9a9a;
          --rule:     #e4e4e4;
          --accent:   #e86c2c;
          --accent-l: #fdf0e8;
          --accent-b: #f5b98a;
          --green:    #16a34a;
          --amber:    #d97706;
          --purple:   #7c3aed;
          --bg:       #fafaf9;
          --card-bg:  #ffffff;
          --chip-bg:  #f5f5f4;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--ink);
          max-width: 900px;
          margin: 0 auto;
          padding: 56px 64px;
          font-size: 10.5pt;
          line-height: 1.6;
        }

        .topbar {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          border-bottom: 2px solid var(--ink);
          padding-bottom: 20px;
          margin-bottom: 32px;
        }
        .product-name {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 26pt;
          font-weight: 500;
          letter-spacing: -1.5px;
          line-height: 1;
          color: var(--ink);
        }
        .product-name span { color: var(--accent); }
        .meta { text-align: right; font-size: 8.5pt; color: var(--muted); line-height: 1.8; font-family: 'IBM Plex Mono', monospace; }
        .meta strong { color: var(--mid); font-weight: 500; }

        .section { margin-bottom: 34px; }
        .section-label {
          font-family: 'IBM Plex Mono', monospace;
          font-size: 7pt;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--accent);
          border-bottom: 1.5px solid var(--accent-b);
          padding-bottom: 6px;
          margin-bottom: 16px;
        }

        .context-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }
        .ctx-card {
          background: var(--card-bg);
          border: 1px solid var(--rule);
          border-radius: 8px;
          padding: 14px 16px;
          border-top: 2px solid var(--accent);
        }
        .ctx-label { font-size: 7.5pt; color: var(--muted); font-weight: 600; margin-bottom: 5px; text-transform: uppercase; letter-spacing: 1.2px; }
        .ctx-value { font-size: 9.5pt; color: var(--ink); font-weight: 400; line-height: 1.5; }

        .flow {
          display: flex;
          align-items: center;
          overflow-x: auto;
          padding: 20px 4px;
          gap: 0;
          background: var(--card-bg);
          border: 1px solid var(--rule);
          border-radius: 10px;
        }
        .flow-node {
          flex-shrink: 0;
          background: var(--chip-bg);
          border: 1.5px solid var(--rule);
          border-radius: 8px;
          padding: 12px 14px;
          text-align: center;
          min-width: 112px;
          margin: 0 4px;
        }
        .flow-node.active { border-color: var(--accent); background: var(--accent-l); }
        .flow-node.ai { border-color: var(--purple); background: #f5f3ff; }
        .flow-node.future { border-color: var(--amber); background: #fffbeb; border-style: dashed; }
        .flow-node .node-label { font-size: 8.5pt; font-weight: 600; color: var(--ink); line-height: 1.3; }
        .flow-node .node-sub   { font-size: 7.5pt; color: var(--muted); margin-top: 3px; }
        .flow-arrow { flex-shrink: 0; color: var(--muted); font-size: 16pt; padding: 0 2px; }

        .flow-badge {
          display: inline-block;
          font-size: 6.5pt;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 3px;
          margin-top: 6px;
          letter-spacing: 0.8px;
          text-transform: uppercase;
        }
        .badge-live    { background: #dcfce7; color: var(--green); }
        .badge-planned { background: #fef3c7; color: var(--amber); }
        .badge-ai      { background: #ede9fe; color: var(--purple); }

        .decision-block {
          background: var(--card-bg);
          border: 1px solid var(--rule);
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 14px;
        }
        .decision-header {
          background: var(--accent);
          padding: 10px 18px;
          font-size: 9pt;
          font-weight: 600;
          color: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .decision-body { padding: 16px 18px; }
        .decision-row {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 8px 16px;
          margin-bottom: 12px;
          font-size: 9.5pt;
          border-bottom: 1px solid var(--rule);
          padding-bottom: 12px;
        }
        .decision-row:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .dr-key { font-weight: 700; color: var(--accent); font-size: 8pt; text-transform: uppercase; letter-spacing: 0.8px; padding-top: 2px; }
        .dr-val { color: var(--ink); line-height: 1.55; }
        .pill {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 99px;
          font-size: 8pt;
          font-weight: 600;
        }
        .pill-amber { background: #fef3c7; color: var(--amber); }
        .pill-blue  { background: var(--accent-l); color: var(--accent); }
        .pill-green { background: #dcfce7; color: var(--green); }

        .tradeoff-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .tradeoff-card { border-radius: 8px; padding: 16px 18px; }
        .tc-chose    { background: var(--accent-l); border: 1.5px solid var(--accent-b); }
        .tc-rejected { background: var(--card-bg); border: 1.5px solid var(--rule); }
        .tc-title { font-size: 7.5pt; font-weight: 700; text-transform: uppercase; letter-spacing: 1.2px; margin-bottom: 7px; }
        .tc-chose .tc-title    { color: var(--accent); }
        .tc-rejected .tc-title { color: var(--muted); }
        .tc-body { font-size: 9.5pt; color: var(--ink); line-height: 1.55; }

        .status-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px; }
        .status-card {
          background: var(--card-bg);
          border-radius: 8px;
          padding: 14px 16px;
          border: 1px solid var(--rule);
          border-top: 2px solid var(--green);
        }
        .sc-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; }
        .sc-title { font-size: 9pt; font-weight: 600; }
        ul.sc-list { list-style: none; padding: 0; }
        ul.sc-list li { font-size: 9pt; color: var(--mid); padding-left: 13px; position: relative; margin-bottom: 4px; line-height: 1.4; }
        ul.sc-list li::before { content: '›'; position: absolute; left: 0; color: var(--accent); font-weight: 700; }

        .next-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .next-card {
          border-left: 3px solid var(--accent);
          padding: 14px 18px;
          background: var(--card-bg);
          border-radius: 0 8px 8px 0;
          border-top: 1px solid var(--rule);
          border-right: 1px solid var(--rule);
          border-bottom: 1px solid var(--rule);
        }
        .next-card.ai-card { border-left-color: var(--purple); }
        .next-title { font-size: 9.5pt; font-weight: 600; margin-bottom: 6px; }
        .next-body  { font-size: 9pt; color: var(--mid); line-height: 1.55; }

        .ai-bar {
          margin-top: 12px;
          padding: 14px 18px;
          background: var(--accent-l);
          border-radius: 8px;
          font-size: 9.5pt;
          color: var(--ink);
          border-left: 3px solid var(--accent);
          line-height: 1.6;
        }

        .footer {
          margin-top: 40px;
          padding-top: 14px;
          border-top: 1px solid var(--rule);
          display: flex;
          justify-content: space-between;
          font-size: 8pt;
          color: var(--muted);
          font-family: 'IBM Plex Mono', monospace;
        }

        @media print {
          body { padding: 30px 40px; background: #fff; }
          @page { margin: 0.3in; }
        }

        @media (max-width: 640px) {
          body { padding: 24px 18px; font-size: 10pt; }
          .topbar { flex-direction: column; gap: 14px; }
          .meta { text-align: left; }
          .section-label { font-size: 7pt; letter-spacing: 2px; }
          .context-grid { grid-template-columns: 1fr; gap: 10px; }
          .context-grid.arch-grid { grid-template-columns: 1fr; }
          .tradeoff-grid { grid-template-columns: 1fr; }
          .status-grid { grid-template-columns: 1fr; }
          .next-grid { grid-template-columns: 1fr; }
          .decision-row { grid-template-columns: 1fr; gap: 4px; }
          .dr-key { font-size: 8pt; }
          .diagram-wrap { overflow-x: auto; -webkit-overflow-scrolling: touch; }
          .diagram-wrap svg { min-width: 700px; }
          .footer { flex-direction: column; gap: 4px; text-align: center; }
          .badge-row { flex-wrap: wrap; }
          .demo-btn { display: block !important; text-align: center; margin-top: 12px; }
        }
      `}</style>

      {/* TOP BAR */}
      <div className="topbar">
        <div>
          <div className="product-name">Ordna<span>.app</span></div>
          <div style={{fontSize:'9pt', color:'var(--mid)', marginTop:'5px'}}>Service Operations Platform for Hospitality</div>
          <a href="https://ordna.app/demo" target="_blank" rel="noopener noreferrer" className="demo-btn" style={{display:'inline-block', marginTop:'10px', fontSize:'8pt', fontFamily:"'IBM Plex Mono',monospace", color:'var(--accent)', border:'1.5px solid var(--accent)', padding:'4px 12px', borderRadius:'4px', textDecoration:'none', letterSpacing:'0.8px', fontWeight:600}}>View Live Demo →</a>
        </div>
        <div className="meta">
          <strong>Sergio Soto</strong><br/>
          Founder &amp; Product Lead<br/>
          TPM Candidate Exercise<br/>
          2026
        </div>
      </div>

      {/* LOOM VIDEO */}
      <div className="section">
        <div className="section-label">Candidate Walkthrough</div>
        <div style={{position:'relative', paddingBottom:'56.25%', height:0, overflow:'hidden', borderRadius:'10px', border:'1px solid var(--rule)'}}>
          <iframe
            src="https://www.loom.com/embed/0868270a218f449c943341e651c1ab44"
            frameBorder="0"
            allowFullScreen
            style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}
          />
        </div>
      </div>

      {/* CONTEXT */}
      <div className="section">
        <div className="section-label">Product Context</div>
        <div className="context-grid">
          <div className="ctx-card"><div className="ctx-label">What it is</div><div className="ctx-value">Multi-tenant SaaS for restaurant and hospitality service operations</div></div>
          <div className="ctx-card"><div className="ctx-label">Users</div><div className="ctx-value">Restaurant operators, floor staff, kitchen teams, and end guests</div></div>
          <div className="ctx-card"><div className="ctx-label">Core problem</div><div className="ctx-value">Reduce friction between guest intent and service delivery without hardware dependency</div></div>
          <div className="ctx-card"><div className="ctx-label">Technical complexity</div><div className="ctx-value">Multi-tenant data isolation, real-time order routing, POS integration, payment orchestration</div></div>
          <div className="ctx-card"><div className="ctx-label">My role</div><div className="ctx-value">Solo product lead: discovery, architecture decisions, build, and pilot client ops</div></div>
          <div className="ctx-card"><div className="ctx-label">Current state</div><div className="ctx-value">MVP live with pilot clients. QR ordering and payments in production</div></div>
        </div>
      </div>

      {/* DIAGRAM */}
      <div className="section">
        <div className="section-label">Technical Architecture Diagram</div>
        <div className="diagram-wrap" style={{background:'#fff', border:'1px solid #e4e4e4', borderRadius:'10px', padding:'24px 16px', overflowX:'auto'}}>
          <svg viewBox="0 0 860 560" xmlns="http://www.w3.org/2000/svg" style={{width:'100%', minWidth:'700px', fontFamily:"'Inter',sans-serif"}}>
            <defs>
              <marker id="arrowOrange" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#e86c2c"/>
              </marker>
              <marker id="arrowPurple" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
                <path d="M0,0 L0,6 L8,3 z" fill="#7c3aed"/>
              </marker>
            </defs>

            <text x="30" y="22" fontSize="8" fontWeight="700" fill="#9a9a9a" letterSpacing="2">CLIENT LAYER</text>
            <rect x="30"  y="30" width="140" height="60" rx="8" fill="#fdf0e8" stroke="#e86c2c" strokeWidth="1.5"/>
            <text x="100" y="55" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Guest</text>
            <text x="100" y="69" fontSize="8"  fill="#9a9a9a" textAnchor="middle">QR scan / browser</text>
            <text x="100" y="82" fontSize="7.5" fill="#e86c2c" textAnchor="middle" fontWeight="600">No app install</text>
            <rect x="195" y="30" width="140" height="60" rx="8" fill="#fdf0e8" stroke="#e86c2c" strokeWidth="1.5"/>
            <text x="265" y="55" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Operator</text>
            <text x="265" y="69" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Admin dashboard</text>
            <text x="265" y="82" fontSize="7.5" fill="#e86c2c" textAnchor="middle" fontWeight="600">Menu / config</text>
            <rect x="360" y="30" width="140" height="60" rx="8" fill="#fdf0e8" stroke="#e86c2c" strokeWidth="1.5"/>
            <text x="430" y="55" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Kitchen</text>
            <text x="430" y="69" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Order display</text>
            <text x="430" y="82" fontSize="7.5" fill="#e86c2c" textAnchor="middle" fontWeight="600">Real-time updates</text>
            <rect x="525" y="30" width="150" height="60" rx="8" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="600" y="53" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Voice Agent</text>
            <text x="600" y="67" fontSize="8"  fill="#9a9a9a" textAnchor="middle">ElevenLabs STT/TTS</text>
            <text x="600" y="82" fontSize="7.5" fill="#7c3aed" textAnchor="middle" fontWeight="600">Planned v2</text>

            <line x1="100" y1="90"  x2="100" y2="148" stroke="#e86c2c" strokeWidth="1.5" markerEnd="url(#arrowOrange)"/>
            <line x1="265" y1="90"  x2="265" y2="148" stroke="#e86c2c" strokeWidth="1.5" markerEnd="url(#arrowOrange)"/>
            <line x1="430" y1="90"  x2="430" y2="148" stroke="#e86c2c" strokeWidth="1.5" markerEnd="url(#arrowOrange)"/>
            <line x1="600" y1="90"  x2="600" y2="148" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,3" markerEnd="url(#arrowPurple)"/>

            <text x="30" y="146" fontSize="8" fontWeight="700" fill="#9a9a9a" letterSpacing="2">APP LAYER — NEXT.JS · TYPESCRIPT · VERCEL EDGE</text>
            <rect x="30" y="154" width="800" height="70" rx="8" fill="#fdf0e8" stroke="#e86c2c" strokeWidth="1.5"/>
            <rect x="48"  y="165" width="145" height="48" rx="6" fill="#fff" stroke="#e4e4e4" strokeWidth="1"/>
            <text x="121" y="184" fontSize="9"  fontWeight="600" fill="#0f0f0f" textAnchor="middle">Guest Flow</text>
            <text x="121" y="197" fontSize="8"  fill="#9a9a9a" textAnchor="middle">QR → Menu → Order</text>
            <text x="121" y="208" fontSize="8"  fill="#9a9a9a" textAnchor="middle">→ Payment</text>
            <rect x="208" y="165" width="145" height="48" rx="6" fill="#fff" stroke="#e4e4e4" strokeWidth="1"/>
            <text x="281" y="184" fontSize="9"  fontWeight="600" fill="#0f0f0f" textAnchor="middle">Operator Portal</text>
            <text x="281" y="197" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Multi-tenant config</text>
            <text x="281" y="208" fontSize="8"  fill="#9a9a9a" textAnchor="middle">AI catalog builder</text>
            <rect x="368" y="165" width="145" height="48" rx="6" fill="#fff" stroke="#e4e4e4" strokeWidth="1"/>
            <text x="441" y="184" fontSize="9"  fontWeight="600" fill="#0f0f0f" textAnchor="middle">Order Engine</text>
            <text x="441" y="197" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Real-time routing</text>
            <text x="441" y="208" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Kitchen push</text>
            <rect x="528" y="165" width="145" height="48" rx="6" fill="#fff" stroke="#e4e4e4" strokeWidth="1"/>
            <text x="601" y="184" fontSize="9"  fontWeight="600" fill="#0f0f0f" textAnchor="middle">API Routes</text>
            <text x="601" y="197" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Webhooks · Stripe</text>
            <text x="601" y="208" fontSize="8"  fill="#7c3aed" textAnchor="middle">MCP or API (v2)</text>
            <rect x="688" y="165" width="124" height="48" rx="6" fill="#fff" stroke="#e4e4e4" strokeWidth="1"/>
            <text x="750" y="184" fontSize="9"  fontWeight="600" fill="#0f0f0f" textAnchor="middle">UI Layer</text>
            <text x="750" y="197" fontSize="8"  fill="#9a9a9a" textAnchor="middle">shadcn/ui</text>
            <text x="750" y="208" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Tailwind CSS</text>

            <line x1="190" y1="224" x2="190" y2="278" stroke="#e86c2c" strokeWidth="1.5" markerEnd="url(#arrowOrange)"/>
            <line x1="441" y1="224" x2="441" y2="278" stroke="#e86c2c" strokeWidth="1.5" markerEnd="url(#arrowOrange)"/>
            <line x1="601" y1="224" x2="601" y2="278" stroke="#e86c2c" strokeWidth="1.5" markerEnd="url(#arrowOrange)"/>

            <text x="30"  y="276" fontSize="8" fontWeight="700" fill="#9a9a9a" letterSpacing="2">DATA LAYER</text>
            <text x="450" y="276" fontSize="8" fontWeight="700" fill="#9a9a9a" letterSpacing="2">EXTERNAL SERVICES</text>
            <rect x="30"  y="284" width="185" height="66" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="123" y="306" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Supabase</text>
            <text x="123" y="320" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Dev / Staging</text>
            <text x="123" y="332" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Auth · RLS · Realtime</text>
            <text x="123" y="344" fontSize="7.5" fill="#16a34a" textAnchor="middle" fontWeight="600">Row-Level Security</text>
            <rect x="230" y="284" width="185" height="66" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="323" y="306" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Neon</text>
            <text x="323" y="320" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Production</text>
            <text x="323" y="332" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Serverless Postgres</text>
            <text x="323" y="344" fontSize="7.5" fill="#16a34a" textAnchor="middle" fontWeight="600">RLS · Branching</text>
            <rect x="450" y="284" width="120" height="66" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="510" y="306" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Stripe</text>
            <text x="510" y="320" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Connect</text>
            <text x="510" y="332" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Apple/Google Pay</text>
            <text x="510" y="344" fontSize="7.5" fill="#16a34a" textAnchor="middle" fontWeight="600">Webhooks</text>
            <rect x="585" y="284" width="110" height="66" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="640" y="306" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Resend</text>
            <text x="640" y="320" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Transactional</text>
            <text x="640" y="332" fontSize="8"  fill="#9a9a9a" textAnchor="middle">email</text>
            <rect x="710" y="284" width="120" height="66" rx="8" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="770" y="306" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Cloudflare</text>
            <text x="770" y="320" fontSize="8"  fill="#9a9a9a" textAnchor="middle">DNS · SSL</text>
            <text x="770" y="332" fontSize="8"  fill="#9a9a9a" textAnchor="middle">CDN proxy</text>

            <text x="30" y="376" fontSize="8" fontWeight="700" fill="#9a9a9a" letterSpacing="2">AI LAYER</text>
            <rect x="30"  y="384" width="185" height="66" rx="8" fill="#fdf0e8" stroke="#e86c2c" strokeWidth="1.5"/>
            <text x="123" y="406" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">AI Menu Builder</text>
            <text x="123" y="420" fontSize="8"  fill="#9a9a9a" textAnchor="middle">{'Upload → catalog <2 min'}</text>
            <text x="123" y="444" fontSize="7.5" fill="#e86c2c" textAnchor="middle" fontWeight="600">Live · Claude API</text>
            <rect x="230" y="384" width="185" height="66" rx="8" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="323" y="406" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">Voice Agent</text>
            <text x="323" y="420" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Drive-through ordering</text>
            <text x="323" y="432" fontSize="8"  fill="#9a9a9a" textAnchor="middle">STT / TTS / NLU</text>
            <text x="323" y="444" fontSize="7.5" fill="#7c3aed" textAnchor="middle" fontWeight="600">Planned v2 · ElevenLabs</text>
            <rect x="430" y="384" width="185" height="66" rx="8" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" strokeDasharray="5,3"/>
            <text x="523" y="406" fontSize="10" fontWeight="600" fill="#0f0f0f" textAnchor="middle">POS Integration</text>
            <text x="523" y="420" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Regional POS API</text>
            <text x="523" y="432" fontSize="8"  fill="#9a9a9a" textAnchor="middle">Webhook write-back</text>
            <text x="523" y="444" fontSize="7.5" fill="#d97706" textAnchor="middle" fontWeight="600">Next · In progress</text>

            <rect x="650" y="384" width="180" height="80" rx="6" fill="#fafaf9" stroke="#e4e4e4" strokeWidth="1"/>
            <text x="662" y="402" fontSize="8" fontWeight="700" fill="#9a9a9a" letterSpacing="1.5">LEGEND</text>
            <rect x="662" y="410" width="9" height="9" rx="2" fill="#fdf0e8" stroke="#e86c2c" strokeWidth="1.5"/>
            <text x="677" y="419" fontSize="8.5" fill="#4a4a4a">Live in production</text>
            <rect x="662" y="426" width="9" height="9" rx="2" fill="#f5f3ff" stroke="#7c3aed" strokeWidth="1.5" strokeDasharray="3,2"/>
            <text x="677" y="435" fontSize="8.5" fill="#4a4a4a">Planned (v2)</text>
            <rect x="662" y="442" width="9" height="9" rx="2" fill="#f0fdf4" stroke="#16a34a" strokeWidth="1.5"/>
            <text x="677" y="451" fontSize="8.5" fill="#4a4a4a">External service</text>
            <rect x="662" y="458" width="9" height="9" rx="2" fill="#fffbeb" stroke="#d97706" strokeWidth="1.5" strokeDasharray="3,2"/>
            <text x="677" y="467" fontSize="8.5" fill="#4a4a4a">In progress</text>
          </svg>
        </div>
      </div>

      {/* ARCHITECTURE */}
      <div className="section">
        <div className="section-label">Technical Architecture</div>
        <div className="context-grid arch-grid">
          <div className="ctx-card">
            <div className="ctx-label">Frontend &amp; Hosting</div>
            <div className="ctx-value" style={{fontSize:'9.5pt', fontWeight:400, color:'var(--mid)'}}>
              <strong style={{color:'var(--ink)'}}>Next.js (App Router)</strong>: fullstack framework with React frontend, server components, and API routes for backend logic.<br/><br/>
              <strong style={{color:'var(--ink)'}}>TypeScript</strong> across the stack. <strong style={{color:'var(--ink)'}}>Tailwind CSS</strong> for styling. <strong style={{color:'var(--ink)'}}>shadcn/ui</strong> as component library.<br/><br/>
              <strong style={{color:'var(--ink)'}}>Vercel</strong>: edge deployment, CI/CD from GitHub, preview environments per branch.
            </div>
          </div>
          <div className="ctx-card">
            <div className="ctx-label">Database</div>
            <div className="ctx-value" style={{fontSize:'9.5pt', fontWeight:400, color:'var(--mid)'}}>
              <strong style={{color:'var(--ink)'}}>Supabase</strong> for development and staging: auth, row-level security for multi-tenant isolation, real-time subscriptions for kitchen order updates.<br/><br/>
              <strong style={{color:'var(--ink)'}}>Neon</strong> in production: serverless Postgres with branching, scales to zero between service hours, lower cost profile for a pilot-stage product.
            </div>
          </div>
          <div className="ctx-card">
            <div className="ctx-label">Payments &amp; Integrations</div>
            <div className="ctx-value" style={{fontSize:'9.5pt', fontWeight:400, color:'var(--mid)'}}>
              <strong style={{color:'var(--ink)'}}>Stripe Connect</strong>: per-tenant payment routing, Apple Pay and Google Pay support, webhook-driven order confirmation events.<br/><br/>
              <strong style={{color:'var(--ink)'}}>Resend</strong>: transactional email for order confirmations and operator notifications.<br/><br/>
              <strong style={{color:'var(--ink)'}}>POS integration</strong>: Regional POS API (in progress). Open decision for v2: <strong>MCP server</strong> for AI-native POS environments, or <strong>webhook REST API</strong> for legacy systems — chosen based on target POS compatibility.
            </div>
          </div>
        </div>
        <div className="badge-row" style={{marginTop:'14px', display:'flex', gap:'10px', flexWrap:'wrap', alignItems:'center'}}>
          <span style={{fontSize:'8pt', color:'var(--muted)', fontFamily:"'IBM Plex Mono',monospace", letterSpacing:'1px', textTransform:'uppercase'}}>Stack</span>
          {['Next.js','TypeScript','Tailwind CSS','shadcn/ui','Vercel','Supabase','Neon (prod)','Stripe Connect','Resend'].map(b => (
            <span key={b} className="flow-badge badge-live" style={{fontSize:'8pt', padding:'3px 10px'}}>{b}</span>
          ))}
          <span className="flow-badge badge-ai" style={{fontSize:'8pt', padding:'3px 10px'}}>Cloudflare DNS</span>
          <span className="flow-badge badge-planned" style={{fontSize:'8pt', padding:'3px 10px'}}>POS Integration</span>
          <span className="flow-badge badge-planned" style={{fontSize:'8pt', padding:'3px 10px'}}>ElevenLabs (v2)</span>
        </div>
      </div>

      {/* TECHNICAL CONSTRAINT */}
      <div className="section">
        <div className="section-label">Technical Constraint: Multi-Tenant Data Isolation</div>
        <div className="decision-block">
          <div className="decision-header">
            <span>The problem</span>
            <span className="pill pill-blue">Architecture Decision</span>
          </div>
          <div className="decision-body">
            <div className="decision-row">
              <div className="dr-key">Constraint</div>
              <div className="dr-val">A multi-tenant hospitality platform requires strict data isolation between restaurants. A query leak that surfaces one tenant&apos;s orders, menu pricing, or payment data to another is a critical trust failure — not a bug.</div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Decision</div>
              <div className="dr-val">Implemented Row-Level Security (RLS) policies at the database layer in both Supabase (dev/staging) and Neon (production). Every table with tenant-scoped data enforces isolation at the Postgres level, independent of application logic. No query reaches another tenant&apos;s rows regardless of how the application layer behaves.</div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Why not app-layer only</div>
              <div className="dr-val">Application-layer tenant filtering (e.g. WHERE tenant_id = X on every query) is fragile — one missed filter, one ORM misconfiguration, or one raw query bypasses it entirely. RLS makes isolation a database guarantee, not a developer discipline problem.</div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Tradeoff accepted</div>
              <div className="dr-val">RLS policies add complexity to schema migrations and require careful policy design for service roles vs. anon roles. Debugging policy failures is harder than debugging application filters. Worth it at this stage given the trust requirements of a payments-enabled multi-tenant product.</div>
            </div>
          </div>
        </div>
      </div>

      {/* KEY DECISION */}
      <div className="section">
        <div className="section-label">Key Product Decision: Where Does AI Live in v1?</div>
        <div className="decision-block">
          <div className="decision-header">
            <span>The constraint</span>
            <span className="pill pill-amber">Tradeoff: Speed vs. Completeness</span>
          </div>
          <div className="decision-body">
            <div className="decision-row">
              <div className="dr-key">Context</div>
              <div className="dr-val">Ordna had a clear AI vision: a voice agent that takes orders verbally, like a drive-through experience, surfaced on the guest-facing QR flow. The question was whether to build that first or ship a working product.</div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Options</div>
              <div className="dr-val">
                (A) Build voice agent before launch, higher technical complexity, delayed validation<br/>
                (B) Ship QR-based ordering to production first, add voice as a distinct next surface
              </div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Decision</div>
              <div className="dr-val">Shipped QR ordering without voice in v1. Integrated AI for catalog loading and menu structuring to accelerate onboarding, not guest interaction.</div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Reasoning</div>
              <div className="dr-val">Voice ordering requires reliable STT accuracy, language/accent handling, noise tolerance in a restaurant environment, and graceful fallback when the agent fails mid-order. Getting those wrong in a paying client&apos;s restaurant is a trust problem, not just a UX problem. Deferring voice preserved launch velocity and gave us real usage data before designing the agent&apos;s scope.</div>
            </div>
            <div className="decision-row">
              <div className="dr-key">Risk accepted</div>
              <div className="dr-val">Differentiation delayed. Competitors with voice-first surfaces could move faster if the market becomes aware of the use case.</div>
            </div>
          </div>
        </div>
        <div className="tradeoff-grid">
          <div className="tradeoff-card tc-chose">
            <div className="tc-title">Chose: AI for onboarding (live)</div>
            <div className="tc-body">AI-assisted catalog ingestion lets operators upload a menu and get a structured, categorized product catalog in under 2 minutes. Manual entry of the same catalog takes approximately 2 hours. Lower technical risk, immediate operator value, and unlocks faster multi-tenant onboarding at scale.<br/><br/><strong style={{color:'#16a34a'}}>Result: 98% reduction in operator onboarding time for catalog setup.</strong></div>
          </div>
          <div className="tradeoff-card tc-rejected">
            <div className="tc-title">Deferred: AI for guest ordering (voice)</div>
            <div className="tc-body">Voice agent for real-time order taking. Compelling UX: drive-through-style ordering without a screen. Requires STT, intent parsing, menu-aware NLU, and robust fallback design. Correct scope for v2 once the base service layer has proven reliability with pilot clients.</div>
          </div>
        </div>
      </div>

      {/* WHAT SHIPPED */}
      <div className="section">
        <div className="section-label">What Shipped</div>
        <div className="status-grid">
          <div className="status-card">
            <div className="sc-header">
              <div className="sc-title">Guest Experience</div>
              <span className="flow-badge badge-live">LIVE</span>
            </div>
            <ul className="sc-list">
              <li>QR table-bound menu access</li>
              <li>Real-time order placement</li>
              <li>Stripe Connect payments</li>
              <li>Apple Pay / Google Pay</li>
            </ul>
          </div>
          <div className="status-card">
            <div className="sc-header">
              <div className="sc-title">Operator Tools</div>
              <span className="flow-badge badge-live">LIVE</span>
            </div>
            <ul className="sc-list">
              <li>Multi-tenant configuration</li>
              <li>AI-assisted catalog setup</li>
              <li>Kitchen order routing</li>
              <li>Menu and pricing management</li>
            </ul>
          </div>
          <div className="status-card">
            <div className="sc-header">
              <div className="sc-title">Infrastructure</div>
              <span className="flow-badge badge-live">LIVE</span>
            </div>
            <ul className="sc-list">
              <li>Vercel edge deployment</li>
              <li>Supabase multi-tenant DB</li>
              <li>Webhook-driven payment events</li>
              <li>Cloudflare DNS + SSL</li>
            </ul>
          </div>
        </div>
      </div>

      {/* NEXT */}
      <div className="section">
        <div className="section-label">What I Would Build Next</div>
        <div className="next-grid">
          <div className="next-card ai-card">
            <div className="next-title">Voice Ordering Agent</div>
            <div className="next-body">Drive-through-style voice interface on the guest QR flow, powered by <strong>ElevenLabs</strong> for voice synthesis and STT. Design constraints to solve first: accuracy in noisy restaurant environments, graceful degradation when confidence is low (fallback to screen), and menu-aware intent mapping that handles partial or ambiguous orders without blocking the kitchen queue.</div>
          </div>
          <div className="next-card">
            <div className="next-title">POS Write-back Integration</div>
            <div className="next-body">Native sync with regional POS systems. Key open decision: expose a <strong>webhook API</strong> for POS systems that support it, or implement an <strong>MCP server</strong> for AI-native POS environments that support the Model Context Protocol. The right answer depends on what the target POS system supports — MCP unlocks agentic workflows (voice agent reading live menu state, dynamic pricing), while a REST webhook API maximizes compatibility with legacy systems. For v2, the decision gates the analytics and loyalty feature roadmap.</div>
          </div>
        </div>
      </div>

      {/* AI USAGE */}
      <div className="section">
        <div className="section-label">How AI Was Used in This Work</div>
        <div className="context-grid">
          <div className="ctx-card">
            <div className="ctx-label">Catalog Ingestion</div>
            <div className="ctx-value" style={{fontSize:'9.5pt', fontWeight:400, color:'var(--mid)'}}>AI processes a raw menu upload and structures it into the tenant catalog schema. I defined the data model, edge case rules (missing prices, ambiguous modifiers, duplicate items), and validation logic. The model accelerated the transformation layer; the product decisions were mine.</div>
          </div>
          <div className="ctx-card">
            <div className="ctx-label">Spec &amp; Flow Drafting</div>
            <div className="ctx-value" style={{fontSize:'9.5pt', fontWeight:400, color:'var(--mid)'}}>Used Claude to generate first-draft technical specs for the Stripe Connect payment flow and webhook architecture. I reviewed each against Stripe&apos;s actual documentation, corrected assumptions, and adjusted scope based on what the pilot client environment could support.</div>
          </div>
          <div className="ctx-card">
            <div className="ctx-label">Voice Agent Research</div>
            <div className="ctx-value" style={{fontSize:'9.5pt', fontWeight:400, color:'var(--mid)'}}>Used Claude to map technical risks of STT in noisy restaurant environments (accent handling, mid-order dropout, latency). I validated those risks against real field observations and used that input to make the deferral decision, not the model.</div>
          </div>
        </div>
        <div style={{marginTop:'12px', padding:'12px 16px', background:'var(--chip-bg)', borderRadius:'6px', fontSize:'9.5pt', color:'var(--mid)', borderLeft:'3px solid #7c3aed'}}>
          <strong style={{color:'var(--ink)'}}>Dev toolchain:</strong> Google Antigravity for coding, Claude Code (Opus) for targeted debugging; Opus selected deliberately over faster models to maximize reasoning depth while controlling token cost at the debugging layer.<br/><br/>
          AI accelerated research, prototyping, and synthesis. Architecture decisions, scope tradeoffs, and client-facing calls were made by me based on production context and direct operator feedback that no model had access to.
        </div>
      </div>

      {/* FOOTER */}
      <div className="footer">
        <span>Ordna.app | Service Operations Platform</span>
        <span>TPM Candidate Exercise · 2026</span>
      </div>
    </>
  );
}
