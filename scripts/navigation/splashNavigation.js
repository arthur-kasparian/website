/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

const supportedLocales = ["en"]

const userLocales = window.navigator.languages.map(locale => locale.split('-')[0])

const preferredLocale = supportedLocales.find(locale => userLocales.includes(locale))

const navigateToLocale = () =>
	setTimeout(() => window.location.pathname = preferredLocale || supportedLocales[0],
		4000
	)

// First time navigation
navigateToLocale()

// Fixes issues with bfcache not re-executing above script
window.addEventListener('pageshow', (event) => {
	if (event.persisted) navigateToLocale()
})