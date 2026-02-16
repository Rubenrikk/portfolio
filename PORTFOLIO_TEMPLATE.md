# Portfolio Item Template

Gebruik dit template om nieuwe portfolio items toe te voegen aan de portfolio website.

## Stappen

### 1. Afbeelding voorbereiden

- **Formaat**: Converteer je afbeelding naar AVIF formaat
- **Locatie**: Plaats de afbeelding in `/public/img/`
- **Naam**: Gebruik een duidelijke, kebab-case naam (bijv. `mijn-project.avif`)

**Conversie commando:**
```bash
npx --yes sharp-cli -i public/img/jouw-afbeelding.jpg -o public/img/jouw-afbeelding.avif
```

### 2. Portfolio data toevoegen

Voeg het volgende object toe aan de `portafolioData` array in `/src/components/data/portfolioData.js`:

```javascript
{
	imgSrc: '/img/jouw-afbeelding.avif',
	title: 'Project Titel',
	skills: ['Astro', 'TypeScript', 'CSS'],
	descripcion:
		'Uitgebreide beschrijving van het project. Beschrijf wat het project doet, welke functionaliteiten het heeft, en wat de belangrijkste kenmerken zijn. Gebruik Nederlands en wees specifiek over de features en doelgroep.',
	prodURL: 'https://jouw-project.nl',
	anim: 'fade-left',
	averageBrightness: 0.1,
},
```

## Template met uitleg

```javascript
{
	// Pad naar de afbeelding (altijd beginnen met /img/)
	imgSrc: '/img/projectnaam.avif',
	
	// Titel van het project (zoals het verschijnt op de kaart)
	title: 'Project Naam',
	
	// Array van gebruikte technologieën/skills
	// Zie onderstaande lijst voor beschikbare skills
	skills: ['Astro', 'TypeScript', 'CSS'],
	
	// Beschrijving van het project (in het Nederlands)
	// Beschrijf wat het project doet, belangrijke features, en doelgroep
	descripcion:
		'Uitgebreide beschrijving van het project. Beschrijf wat het project doet, welke functionaliteiten het heeft, en wat de belangrijkste kenmerken zijn. Gebruik Nederlands en wees specifiek over de features en doelgroep.',
	
	// URL naar de live productie versie
	prodURL: 'https://jouw-project.nl',
	
	// Animatie type bij het laden van de kaart
	// Opties: 'fade-up', 'fade-right', 'fade-left', 'fade-down'
	anim: 'fade-left',
	
	// Helderheid van de achtergrondkleur (0.1 = donker, 0.12 = iets lichter)
	// Meestal 0.1, pas aan als de afbeelding erg licht of donker is
	averageBrightness: 0.1,
},
```

## Beschikbare Skills

Gebruik alleen skills uit deze lijst (exact zoals hier geschreven):

- `JavaScript`
- `React`
- `Astro`
- `CSS`
- `Sass`
- `StyledComponents`
- `Bootstrap`
- `Tailwind` of `Tailwind CSS`
- `PHP`
- `REST API`
- `TypeScript`
- `Vite`
- `WordPress`

## Beschikbare Animaties

- `fade-up` - Fade in van onderen
- `fade-right` - Fade in van links
- `fade-left` - Fade in van rechts
- `fade-down` - Fade in van boven

## Voorbeeld

```javascript
{
	imgSrc: '/img/turnenhengelo.avif',
	title: 'Turnenhengelo',
	skills: ['Astro', 'TypeScript', 'CSS'],
	descripcion:
		'Eendelige landingspagina die turnen en verschillende turndisciplines bij Sportvereniging H.G.V. in Hengelo presenteert. Bezoekers krijgen direct de hero-copy met introductie, een "Over"-sectie met uitleg over turnen, verschillende sportvarianten (Rhönradturnen, Groepsspringen, Trampolinespringen, Airtrackspringen, Klimdoekturnen, Acrogym, Free-running), informatie over lesopbouw en kleding, en een contactblok met telefoon en e-mail.',
	prodURL: 'https://turnenhengelo.nl',
	anim: 'fade-left',
	averageBrightness: 0.1,
},
```

## Tips

- **Beschrijving**: Wees specifiek en beschrijf concrete functionaliteiten. Vermeld belangrijke features en de doelgroep.
- **Skills**: Gebruik alleen skills die daadwerkelijk gebruikt zijn in het project.
- **Afbeelding**: Zorg voor een goede kwaliteit afbeelding die het project goed representeert.
- **averageBrightness**: Start met `0.1`. Pas alleen aan als de achtergrondkleur niet goed werkt met de afbeelding.

## Locatie in codebase

Voeg het nieuwe item toe aan de `portafolioData` array in:
```
/src/components/data/portfolioData.js
```

Plaats het nieuwe object binnen de array, bijvoorbeeld na het laatste bestaande item.

