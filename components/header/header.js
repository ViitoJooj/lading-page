class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.initNav();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/header/header.css">
        <header>
            <div class="logo">
                <p class="bar"><</p>
                <p class="dev">dev</p>
                <p class="bar">/></p>
            </div>

            <div class="navbar">
                <a data-target="sobre">Sobre</a>
                <a data-target="stacks">Stack</a>
                <a data-target="projetos">Projetos</a>
                <a data-target="contato">Contato</a>
            </div>

            <button class="hire-me-button" data-target="contato">Hire me</button>
        </header>
    `;
  }

  // As seções (#sobre, #stacks...) vivem no shadow DOM de <page-home>, um
  // custom element irmão deste — por isso não dá pra usar href="#id" normal,
  // precisa buscar o alvo no shadow root de lá e rolar até ele manualmente.
  initNav() {
    this.shadowRoot.querySelectorAll("[data-target]").forEach((el) => {
      el.addEventListener("click", () => {
        const home = document.querySelector("page-home");
        const target = home?.shadowRoot.getElementById(el.dataset.target);
        target?.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
}

customElements.define("component-header", Header);