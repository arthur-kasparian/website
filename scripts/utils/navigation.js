/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

export const getCurrentBreadcrumbs = () => {
	return document.location.pathname.slice(4).split('/')
}

export const getCurrentPage = () => {
	const pages = getCurrentBreadcrumbs()
	return pages[pages.length - 1]
}