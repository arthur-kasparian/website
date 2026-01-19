/************************************************
 * Copyright (c) 2026 Arthur Kasparian          *
 * All rights reserved.                         *
 ************************************************/

const script = document.createElement('script')

script.type = 'application/ld+json'
script.text = JSON.stringify({
	"@context": "https://schema.org",
	"@type": "Person",
	"name": "Arthur Kasparian",
	"jobTitle": "Back-end Developer",
	"url": "https://career.arthur.kasparian.ro",
	"sameAs": [
		"https://www.linkedin.com/in/arthurkasparian"
	]
})

document.head.appendChild(script)