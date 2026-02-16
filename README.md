# Portfolio - Ruben Rikkerink

Personal portfolio website built with Astro, React, and Tailwind CSS. Showcases projects and skills as a developer working with modern AI-assisted tooling.

Live at: [rubenrikk.nl](https://rubenrikk.nl)

## Built With

- [Astro 5](https://astro.build) - Static site framework
- [React 19](https://react.dev) - Interactive components
- [Tailwind CSS 4](https://tailwindcss.com) - Styling via PostCSS
- [Iconify](https://iconify.design) - Icon library
- [Cloudflare Pages](https://pages.cloudflare.com) - Hosting and CDN

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

The site runs at `http://localhost:4321` by default.

## Available Scripts

| Command           | Description                            |
|-------------------|----------------------------------------|
| `npm run dev`     | Start local development server         |
| `npm run build`   | Build for production (output: `dist/`) |
| `npm run preview` | Preview the production build locally   |

## Adding Portfolio Items

Portfolio items are defined in `src/components/data/portfolioData.js`. Each item follows this structure:

```js
{
    imgSrc: '/img/your-image.avif',
    title: 'Project Title',
    skills: ['Astro', 'TypeScript', 'Tailwind CSS'],
    descripcion: 'Short description of the project.',
    prodURL: 'https://your-project.example.com',
    anim: 'fade-left',
    averageBrightness: 0.1,
}
```

Supported skill keys and their icon mappings are defined in the `skillIcons` object in the same file.

## Deployment

The project deploys automatically to Cloudflare Pages via CI/CD. Pushes to `main` trigger a production deployment; pull requests get a preview environment.

## License

MIT - see [LICENSE](./LICENSE) for details.
