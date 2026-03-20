import api_url from "../../scripts.js";

class form extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `     
            <form id="contact-form">
                <label for="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required>
                <label for="email">E-mail:</label>
                <input type="email" id="email" name="email" required>
                <textarea id="message"></textarea>
                <button type="submit">Enviar</button>
            </form>
        `;

        const form = this.shadowRoot.querySelector("#contact-form");

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                nome: form.nome.value,
                email: form.email.value,
                message: form.message.value
            };

            try {
                const response = await fetch(api_url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    console.log("Enviado com sucesso!");
                } else {
                    console.error("Erro ao enviar");
                }

            } catch (err) {
                console.error("Erro na requisição:", err);
            }
        });
    }
}

customElements.define('my-form', form);
