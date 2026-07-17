# Portfolio - Ruben Rikkerink

Personal portfolio website built with Next.js (App Router), Tailwind CSS, and
Radix UI, based on the [Personal Portfolio Website Template](https://www.figma.com/community/file/1262992249991763120/personal-portfolio-website-template-mobile-desktop)
by Sagar Shah ([source](https://github.com/shahsagarm/sagarshah.dev), MIT licensed).

Live at: [rubenrikk.nl](https://rubenrikk.nl)

## Built With

- [Next.js 14](https://nextjs.org) - React framework (static export)
- [Tailwind CSS](https://tailwindcss.com) - Styling
- [Radix UI](https://www.radix-ui.com) - Accessible component primitives
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [Cloudflare Pages](https://pages.cloudflare.com) - Hosting and CDN

## Getting Started

```bash
npm install
npm run dev      # start dev server on http://localhost:3000
npm run build    # production build (static export to /out)
npm run start    # serve the production build
npm run lint     # eslint
```

Content lives in `src/lib/data.tsx` (nav links, socials, technologies,
experience, projects). Section components live in `src/components/sections/`.
