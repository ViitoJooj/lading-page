class home extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML =`     
        
        <link rel="stylesheet" href="./pages/home/home.css">
        
        <main>
            <div>
                <p class="cli-alt-1">$root@viitojooj: ~</p>
                
                <div class="subtittle">
                    <h2>Desenvolvedor</h2>
                    <h2 class="subtittle-alt-2">Full-Stack.</h2>
                </div>

                <div class="short-desc">
                    <p class="short-desc-alt-1">João Vitor</p>
                    <p>-</p>
                    <p>Desenvolvedor full stack focado em Golang</p>
                    <p>-</p>
                    <p>Infraestrutura</p>
                    <p>-</p>
                    <p>Sistemas distribuidos</p>
                </div>
            </div>

            <div class="sender-buttons-div">
                <div class="sender-div">
                    <button><img src="./assets/imgs/github.svg" alt="github-icon"></button>
                    <button><img src="./assets/imgs/linkedin.svg" alt="github-icon"></button>
                </div>
                <button class="freela-button">Precisa de um freela ?</button>
            </div>
        </main>
        `;
    }
}

customElements.define('my-home-page', home);
