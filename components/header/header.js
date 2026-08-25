class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
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
                <a>Sobre</a>
                <a>Stack</a>
                <a>Projetos</a>
                <a>Contato</a>
            </div>

            <button class="hire-me-button">Hire me</button>
        </header>
    `;
  }
}

customElements.define("component-header", Header);