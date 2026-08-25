class Footer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open"})
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="./components/footer/footer.css">
        <footer>
            <p>© 2026 — feito com <3 e muito café</p>
            
            <div class="redirects">
                <a>Github</a>
                <a>Linkedin</a>
                <a>Instagram</a>
            </div>
        </footer>
        `
    }
}

customElements.define("component-footer", Footer);