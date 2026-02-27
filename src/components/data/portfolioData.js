/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} prodURL Url de una pagina de producción
 * @property {string} [githubURL] Url van de GitHub repository (optioneel)
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/akkoordverklaring-generator.avif',
		title: 'Akkoordverklaring Generator',
		skills: ['React', 'TypeScript', 'Vite', 'Cloudflare Workers'],
		descripcion:
			'Een volledig client-side React applicatie om snel consistente akkoordverklaringen en bevestigingsmails te genereren op basis van een formulier. De gebruiker vult context in (type aanvraag, klantgegevens, etc.) en de app genereert direct twee kopieerklare teksten. Gedeployed op Cloudflare Workers.',
		prodURL: 'https://akkoordverklaring-generator.rubenrikk.workers.dev/',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/apenkooitoernooi.avif',
		title: 'Apenkooitoernooi',
		skills: ['Astro', 'TypeScript', 'Tailwind CSS', 'Cloudflare Pages', 'Zod'],
		descripcion:
			'Een snelle, toegankelijke Astro website voor het grootste apenkooitoernooi voor basisscholen. De website biedt inschrijfformulieren voor teams en individuele deelnemers, met geïntegreerde Cloudflare Turnstile captcha verificatie, rate limiting en FreeScout API voor e-mail verzending. Content wordt beheerd via JSON bestanden zonder CMS.',
		prodURL: 'https://apenkooitoernooi.nl',
		githubURL: 'https://github.com/Sportvereniging-H-G-V/apenkooitoernooi',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/hgv-signing.avif',
		title: 'HGV Signing',
		skills: ['Ruby on Rails', 'Vue.js', 'PostgreSQL', 'Tailwind CSS', 'Docker', 'JavaScript'],
		descripcion:
			'HGV Signing is een aangepaste versie van het open-source DocuSeal platform voor veilig en efficiënt digitaal document ondertekenen en verwerken. Maak PDF-formulieren met een WYSIWYG-builder en laat ze online invullen en ondertekenen op elk apparaat. Het platform biedt 12 verschillende veldtypes (handtekening, datum, bestand, checkbox, etc.), ondersteunt meerdere ondertekenaars per document, automatische e-mails via SMTP, en opslag op schijf of cloud providers zoals AWS S3, Google Storage en Azure. Met ingebouwde PDF eSignature-verificatie, gebruikersbeheer, mobiele optimalisatie, meertalige ondersteuning (7 UI-talen, 14 ondertekenings-talen), en uitgebreide API en webhooks voor integraties. Perfect voor bedrijven in Banking, Healthcare, Transport, Real Estate, eCommerce en andere sectoren die bulk document ondertekening nodig hebben.',
		prodURL: 'https://sign.hgvhengelo.nl',
		githubURL: 'https://github.com/Sportvereniging-H-G-V/hgv-signing',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/turnenhengelo.avif',
		title: 'Turnenhengelo',
		skills: ['Astro', 'TypeScript', 'CSS'],
		descripcion:
			'Eendelige landingspagina die turnen en verschillende turndisciplines bij Sportvereniging H.G.V. in Hengelo presenteert. Bezoekers krijgen direct de hero-copy met introductie, een "Over"-sectie met uitleg over turnen, verschillende sportvarianten (Rhönradturnen, Groepsspringen, Trampolinespringen, Airtrackspringen, Klimdoekturnen, Acrogym, Free-running), informatie over lesopbouw en kleding, en een contactblok met telefoon en e-mail.',
		prodURL: 'https://turnenhengelo.nl',
		githubURL: 'https://github.com/Sportvereniging-H-G-V/turnenhengelo',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/dansstudiohengelo.avif',
		title: 'Dansstudiohengelo',
		skills: ['Astro', 'TypeScript', 'Tailwind CSS'],
		descripcion:
			'Eendelige landingspagina die de dansstudio in de sportkantine van Sportvereniging H.G.V. presenteert. Bezoekers krijgen direct de hero-copy met locatie- en sfeerintro, een "Over"-sectie met uitleg over de ruimte, een kleine fotogalerij en een contactblok met routekaart en CTA richting hgvhengelo.nl voor roosters en inschrijvingen.',
		prodURL: 'https://dansstudiohengelo.nl',
		githubURL: 'https://github.com/Sportvereniging-H-G-V/dansstudiohengelo',
		anim: 'fade-left',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/lesrooster-plugin.avif',
		title: 'Lesrooster Plugin',
		skills: ['PHP', 'JavaScript', 'REST API', 'WordPress'],
		descripcion:
			'Een WordPress plugin die lesrooster data ophaalt via de AllUnited API en weergeeft in een responsive tabel. Inclusief geavanceerde filtering (dag en wijk), caching systeem, admin interface voor cursusbeheer, en volledig responsive design met mobile-optimized filters.',
		prodURL: 'https://hgvhengelo.nl/ons-aanbod/lesrooster/',
		githubURL: 'https://github.com/Rubenrikk/allunited-lesrooster-plugin',
		anim: 'fade-up',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/presentielijst-generator.avif',
		title: 'Presentielijst Generator',
		skills: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
		descripcion:
			'Een volledig client-side React applicatie om CSV-gegevens van lessen te importeren en presentielijsten te genereren. Alles gebeurt lokaal in de browser zonder server, zodat privacygevoelige data veilig blijft.',
		prodURL: 'https://presentie.hgvhengelo.nl',
		githubURL: 'https://github.com/Sportvereniging-H-G-V/presentielijst-generator',
		anim: 'fade-right',
		averageBrightness: 0.1,
	},
	{
		imgSrc: '/img/portfolio.avif',
		title: 'Portfolio Ruben Rikkerink',
		skills: ['Astro', 'React', 'TypeScript', 'Tailwind CSS'],
		descripcion:
			'Persoonlijke portfolio-site gebouwd met Astro en React componenten. Richt zich op performance, SEO en contentbeheer via Markdown-collecties en brengt projecten, skills en contactinformatie samen in één statische build.',
		prodURL: 'https://rubenrikk.nl',
		githubURL: 'https://github.com/Rubenrikk/portfolio',
		anim: 'fade-left',
		averageBrightness: 0.12,
	},
];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
	'Tailwind CSS': 'skill-icons:tailwindcss-dark',
	PHP: 'skill-icons:php-dark',
	'REST API': 'mdi:api',
	TypeScript: 'skill-icons:typescript',
	Vite: 'skill-icons:vite-dark',
	WordPress: 'skill-icons:wordpress',
	'Ruby on Rails': 'skill-icons:rails',
	'Vue.js': 'skill-icons:vuejs-dark',
	PostgreSQL: 'skill-icons:postgresql-dark',
	Docker: 'skill-icons:docker',
	'Cloudflare Workers': 'skill-icons:cloudflare-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		imgSrc: item.imgSrc,
		title: item.title,
		descripcion: item.descripcion,
		prodURL: item.prodURL,
		githubURL: item.githubURL,
		anim: item.anim,
		averageBrightness: item.averageBrightness,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill])
	};
});
