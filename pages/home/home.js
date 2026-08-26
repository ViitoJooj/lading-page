class Home extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.initTypewriter();
    this.initScrollReveal();
    this.initModals();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="./pages/home/home.css" />

      <main>
      <div class="load-bar"><div class="load-bar-inner"></div></div>
      <section class="hero" id="hero">
        <div class="hero-tag">
          <span class="cursor-dot"></span>Fullstack Developer
        </div>
        <h1 class="hero-name">
          Olá, eu sou<br><em>João Vitor</em>
        </h1>
        <div class="hero-sub">
          &gt; construindo interfaces que
          <span id="typewriter"></span><span class="cursor"></span>
        </div>
        <div class="hero-btns">
          <button class="btn-primary">ver projetos</button>
          <button class="btn-outline">baixar cv</button>
        </div>
        <div class="hero-stats">
          <div><div class="stat-num">60+</div><div class="stat-label">PROJETOS</div></div>
          <div><div class="stat-num">5+</div><div class="stat-label">ANOS EXP</div></div>
          <div><div class="stat-num">5+</div><div class="stat-label">TECNOLOGIAS</div></div>
        </div>
      </section>

      <section class="section" id="sobre">
        <div class="sec-label">// 01</div>
        <h2 class="sec-title">sobre <span>mim</span></h2>
        <div class="about-grid">
          <div class="avatar">SN</div>
          <div>
            <p class="about-text">
              Desenvolvedor <strong>Fullstack</strong> apaixonado por criar soluções que unem design e performance.
              Do banco de dados até a interface, eu cuido de cada camada da aplicação.<br><br>
              Quando não estou codando, estou estudando novas tecnologias ou contribuindo para projetos <strong>open source</strong>.
            </p>
            <div class="about-badges">
              <span class="badge">open source</span>
              <span class="badge">clean code</span>
              <span class="badge">agile</span>
              <span class="badge">remote-first</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section" id="stacks">
        <div class="sec-label">// 02</div>
        <h2 class="sec-title">minhas <span>stacks</span></h2>
        <div class="stacks-grid">
          <div class="stack-card"><div class="stack-name">Go <span class="stack-pct">92%</span></div><div class="stack-bar"><div class="stack-fill" style="width:92%"></div></div></div>
          <div class="stack-card"><div class="stack-name">TypeScript <span class="stack-pct">85%</span></div><div class="stack-bar"><div class="stack-fill" style="width:85%"></div></div></div>
          <div class="stack-card"><div class="stack-name">Rust <span class="stack-pct">70%</span></div><div class="stack-bar"><div class="stack-fill" style="width:70%"></div></div></div>
          <div class="stack-card"><div class="stack-name">Svelte <span class="stack-pct">85%</span></div><div class="stack-bar"><div class="stack-fill" style="width:85%"></div></div></div>
          <div class="stack-card"><div class="stack-name">React <span class="stack-pct">78%</span></div><div class="stack-bar"><div class="stack-fill" style="width:78%"></div></div></div>
          <div class="stack-card"><div class="stack-name">Astro <span class="stack-pct">65%</span></div><div class="stack-bar"><div class="stack-fill" style="width:65%"></div></div></div>
          <div class="stack-card"><div class="stack-name">PostgreSQL <span class="stack-pct">80%</span></div><div class="stack-bar"><div class="stack-fill" style="width:80%"></div></div></div>
          <div class="stack-card"><div class="stack-name">MongoDB <span class="stack-pct">70%</span></div><div class="stack-bar"><div class="stack-fill" style="width:70%"></div></div></div>
          <div class="stack-card"><div class="stack-name">SQLite <span class="stack-pct">75%</span></div><div class="stack-bar"><div class="stack-fill" style="width:75%"></div></div></div>
          <div class="stack-card"><div class="stack-name">Docker <span class="stack-pct">80%</span></div><div class="stack-bar"><div class="stack-fill" style="width:80%"></div></div></div>
          <div class="stack-card"><div class="stack-name">AWS <span class="stack-pct">65%</span></div><div class="stack-bar"><div class="stack-fill" style="width:65%"></div></div></div>
          <div class="stack-card"><div class="stack-name">Terraform <span class="stack-pct">60%</span></div><div class="stack-bar"><div class="stack-fill" style="width:60%"></div></div></div>
          <div class="stack-card"><div class="stack-name">Linux <span class="stack-pct">85%</span></div><div class="stack-bar"><div class="stack-fill" style="width:85%"></div></div></div>
         </div>
      </section>

      <section class="section" id="projetos">
        <div class="sec-label">// 03</div>
        <h2 class="sec-title">meus <span>projetos</span></h2>
        <div class="proj-grid">
          <div class="proj-card" data-modal="modal1">
            <div class="proj-preview"><div class="proj-preview-code">const app = express()<br>app.use(cors())<br>app.listen(3000)</div></div>
            <div class="proj-info">
              <div class="proj-name">API Gateway</div>
              <div class="proj-desc">Sistema de roteamento e autenticação de microserviços.</div>
              <div class="proj-footer">
                <span class="proj-lang">TypeScript</span>
                <div class="proj-stats-mini"><span class="proj-stat">★ 42</span><span class="proj-stat">⑂ 8</span></div>
                <span class="proj-arrow">→</span>
              </div>
            </div>
          </div>
          <div class="proj-card" data-modal="modal2">
            <div class="proj-preview"><div class="proj-preview-code">function App(){<br>&nbsp;&nbsp;return &lt;Router&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Routes/&gt;<br>&nbsp;&nbsp;&lt;/Router&gt;<br>}</div></div>
            <div class="proj-info">
              <div class="proj-name">Dashboard SaaS</div>
              <div class="proj-desc">Painel de controle com analytics em tempo real.</div>
              <div class="proj-footer">
                <span class="proj-lang">React</span>
                <div class="proj-stats-mini"><span class="proj-stat">★ 67</span><span class="proj-stat">⑂ 15</span></div>
                <span class="proj-arrow">→</span>
              </div>
            </div>
          </div>
        </div>

        <div class="gh-modal" id="modal1">
          <div class="gh-modal-top">
            <span class="gh-repo-name">github.com/dev/api-gateway</span>
            <button class="gh-close" data-modal="modal1">✕</button>
          </div>
          <div class="gh-langs"><span class="gh-lang-pill">TypeScript</span><span class="gh-lang-pill">Node.js</span><span class="gh-lang-pill">Docker</span></div>
          <div class="gh-stats-row">
            <div class="gh-stat-box"><div class="gh-stat-val">42</div><div class="gh-stat-lbl">STARS</div></div>
            <div class="gh-stat-box"><div class="gh-stat-val">128</div><div class="gh-stat-lbl">COMMITS</div></div>
            <div class="gh-stat-box"><div class="gh-stat-val">8</div><div class="gh-stat-lbl">FORKS</div></div>
          </div>
          <div class="gh-readme"><strong># API Gateway</strong><br><br>Sistema centralizado de roteamento para microserviços. Inclui autenticação JWT, rate limiting e logs estruturados.<br><br><strong>## Como rodar</strong><br>$ docker-compose up</div>
        </div>

        <div class="gh-modal" id="modal2">
          <div class="gh-modal-top">
            <span class="gh-repo-name">github.com/dev/dashboard-saas</span>
            <button class="gh-close" data-modal="modal2">✕</button>
          </div>
          <div class="gh-langs"><span class="gh-lang-pill">React</span><span class="gh-lang-pill">Chart.js</span><span class="gh-lang-pill">Tailwind</span></div>
          <div class="gh-stats-row">
            <div class="gh-stat-box"><div class="gh-stat-val">67</div><div class="gh-stat-lbl">STARS</div></div>
            <div class="gh-stat-box"><div class="gh-stat-val">204</div><div class="gh-stat-lbl">COMMITS</div></div>
            <div class="gh-stat-box"><div class="gh-stat-val">15</div><div class="gh-stat-lbl">FORKS</div></div>
          </div>
          <div class="gh-readme"><strong># Dashboard SaaS</strong><br><br>Painel moderno com gráficos em tempo real, gestão de usuários e integração com Stripe para pagamentos.<br><br><strong>## Stack</strong><br>React + Vite + Recharts</div>
        </div>
      </section>

      <section class="section" id="contato">
        <div class="sec-label">// 04</div>
        <h2 class="sec-title">vamos <span>conversar</span></h2>
        <div class="contact-grid">
          <div class="contact-info">
            <div class="contact-line"><i class="ti ti-mail"></i> joaovitor819oqueres@gmail.com</div>
            <div class="contact-line"><i class="ti ti-brand-github"></i>https://github.com/ViitoJooj</div>
            <div class="contact-line"><i class="ti ti-brand-linkedin"></i>https://www.linkedin.com/in/viitojooj/</div>
            <div class="contact-line"><i class="ti ti-map-pin"></i> São Paulo, BR</div>
            <div class="status-box">
              <div class="status-label">STATUS</div>
              <div class="status-value"><span class="cursor-dot"></span>Disponível para projetos</div>
            </div>
          </div>
          <div class="contact-form">
            <input class="cf-input" type="text" placeholder="seu nome" />
            <input class="cf-input" type="email" placeholder="seu email" />
            <textarea class="cf-input cf-textarea" placeholder="sua mensagem..."></textarea>
            <button class="cf-btn">enviar mensagem →</button>
          </div>
        </div>
      </section>
      </main>
    `;
  }

  // Usa this.shadowRoot.getElementById em vez de document.getElementById
  initTypewriter() {
    const phrases = ["fazem sentido.", "impressionam.", "escalam.", "resolvem problemas."];
    let pi = 0, ci = 0, deleting = false;
    const el = this.shadowRoot.getElementById("typewriter");

    const loop = () => {
      const p = phrases[pi];
      if (!deleting) {
        ci++;
        el.textContent = p.slice(0, ci);
        if (ci === p.length) { deleting = true; setTimeout(loop, 1400); return; }
      } else {
        ci--;
        el.textContent = p.slice(0, ci);
        if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
      }
      setTimeout(loop, deleting ? 40 : 80);
    };
    loop();
  }

  initModals() {
    this.shadowRoot.addEventListener("click", (e) => {
      const card = e.target.closest("[data-modal]");
      if (card) {
        const id = card.dataset.modal;
        const modal = this.shadowRoot.getElementById(id);
        if (modal) modal.classList.toggle("open");
      }
    });
  }

  initScrollReveal() {
    const sections = this.shadowRoot.querySelectorAll(".section");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = "1";
          e.target.style.transform = "translateY(0)";
        }
      });
    }, { threshold: 0.1 });

    sections.forEach((sec) => {
      sec.style.opacity = "0";
      sec.style.transform = "translateY(24px)";
      sec.style.transition = "opacity .5s ease, transform .5s ease";
      observer.observe(sec);
    });
  }
}

customElements.define("page-home", Home);