/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/
import {getCurrentBreadcrumbs} from "../scripts/utils/navigation.js"

// Content & i18n
const pageLabels = {
	HOME: {
		en: "Home",
		ro: "Acasă"
	}
}

const pages = [
	{ label: pageLabels.HOME, url: "" },
]

// Templating
const locale = document.documentElement.lang
const template = document.createElement("template")

template.innerHTML = `
	<nav>
		${pages.map(page => (
			`<a
				href="/${locale}/${page.url}"
				class="${getCurrentBreadcrumbs()[0] === page.url ? "active" : null}"
			>${page.label[locale] ?? page.label.en}</a>`
		)).join("")}
	</nav>
`

class SiteNavigation extends HTMLElement {
	connectedCallback() {
		this.replaceWith(template.content)
	}
}

window.customElements.define('site-navigation', SiteNavigation)