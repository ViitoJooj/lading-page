import apiUrl from "../../scripts.js";

class MyForm extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
        this.handleSubmit();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <form id="contact-form">
                <label>
                    Nome:
                    <input type="text" name="nome" required>
                </label>

                <label>
                    E-mail:
                    <input type="email" name="email" required>
                </label>

                <label>
                    Mensagem:
                    <textarea name="message" required></textarea>
                </label>

                <button type="submit">Enviar</button>
            </form>
        `;
    }

    handleSubmit() {
        const form = this.shadowRoot.querySelector("#contact-form");

        form.addEventListener("submit", this.onSubmit.bind(this));
    }

    async onSubmit(e) {
        e.preventDefault();

        const form = e.target;

        const data = Object.fromEntries(new FormData(form));

        try {
            const response = await fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error("Erro ao enviar");
            }

            console.log("Enviado com sucesso!");
            form.reset();

        } catch (error) {
            console.error("Erro:", error.message);
        }
    }
}

customElements.define("my-form", MyForm);