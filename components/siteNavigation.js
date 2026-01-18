/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

const pageLabels = {
	HOME: {
		en: "Home"
	},
	TEST: {
		en: "Test"
	}
}

const pages = [
	{ label: pageLabels.HOME, url: "" },
	{ label: pageLabels.TEST, url: "" }
]

const locale = document.documentElement.lang
const template = document.createElement("template")

template.innerHTML = `
	<nav>
		${pages.map(page => (
			`<a href="/${locale}/${page.url}">${page.label[locale] ?? page.label.en}</a>`
		)).join("")}
	</nav>
`

class SiteNavigation extends HTMLElement {
	connectedCallback() {
		this.replaceWith(template.content)
	}
}

window.customElements.define('site-navigation', SiteNavigation)