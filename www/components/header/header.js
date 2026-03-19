class header extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML =`        
        <link rel="stylesheet" href="./components/header/header.css">

        <header>
            <div class="home-name">
                <div class="icon">
                    <p>J</p>
                </div>
                <h1>ViitoJooj</h1>
            </div>


            <div class="nav-links">
                <a>Sobre mim</a>
                <a>Habilidades</a>
                <a>Experiencia</a>
                <a>Projetos</a>
                <a>Certificações</a>
                <a>Contato</a>
            </div>
        </header>
        `;
    }
}

customElements.define('my-header', header);
