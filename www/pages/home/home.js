class Home extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="./pages/home/home.css">

            <main>
                <section>
                    <p class="cli-alt-1">$root@viitojooj: ~</p>
                    
                    <div class="subtitle">
                        <h2>Desenvolvedor</h2>
                        <h2 class="subtitle-alt">Full-Stack.</h2>
                    </div>

                    <div class="short-desc">
                        <p class="short-desc-alt">João Vitor</p>
                        <span>-</span>
                        <p>Desenvolvedor full stack focado em Golang</p>
                        <span>-</span>
                        <p>Infraestrutura</p>
                        <span>-</span>
                        <p>Sistemas distribuídos</p>
                    </div>
                </section>

                <section class="me">
                    <img class="my-photo" src="./assets/imgs/me.png" alt="Foto de João Vitor">

                    <div class="sender-buttons">
                        <div class="sender-icons">
                            <button aria-label="GitHub">
                                <img src="./assets/imgs/github.svg" alt="">
                            </button>
                            <button aria-label="LinkedIn">
                                <img src="./assets/imgs/linkedin.svg" alt="">
                            </button>
                        </div>

                        <button class="freela-button">
                            Precisa de um freela?
                        </button>
                    </div>
                </section>
            </main>
        `;
    }
}

customElements.define('my-home-page', Home);