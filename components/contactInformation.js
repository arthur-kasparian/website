/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

const template = document.createElement('template');
template.innerHTML = `
	<address>
		<a href="https://linkedin.com/in/arthurkasparian" target="_blank">LinkedIn</a>
		<a href="mailto:contact@career.arthur.kasparian.ro">E-mail</a>
	</address>
`;

class ContactInformation extends HTMLElement {
	
	connectedCallback() {
		this.replaceWith(template.content)
	}
}

window.customElements.define('contact-information', ContactInformation)