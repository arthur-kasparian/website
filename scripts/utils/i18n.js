/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

export const websiteLanguages = ["en", "ro"]
export const userLanguages = window.navigator.languages.map(language => language.split('-')[0])

// export const preferredLanguage = websiteLanguages.find(language => userLanguages.includes(language))

export const preferredLanguage = userLanguages.find(language => websiteLanguages.includes(language))