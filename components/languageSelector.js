/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

import { websiteLanguages } from "../scripts/utils/i18n.js"

const currentLanguage = document.documentElement.lang
const finalLanguages = websiteLanguages.filter(language => language !== currentLanguage)

const template = document.createElement('template')
template.innerHTML = `
	<nav>
		${finalLanguages.map(language => (
			`<a href="${document.location.pathname.replace(currentLanguage, language)}">${language}</a>`
		)).join("")}
	</nav>
`

class LanguageSelector extends HTMLElement {
	connectedCallback() {
		this.replaceWith(template.content)
	}
}

window.customElements.define('language-selector', LanguageSelector)