/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

import {websiteLanguages, preferredLanguage} from "./utils/i18n.js"

console.log(preferredLanguage)

const navigateToLanguage = () =>
	setTimeout(() => window.location.pathname = preferredLanguage || websiteLanguages[0],
		4000
	)

// First time navigation
navigateToLanguage()

// Fixes issues with bfcache not re-executing above script
window.addEventListener('pageshow', (event) => {
	if (event.persisted) navigateToLanguage()
})