import { Github, Linkedin, Instagram, Facebook } from 'lucide-react';

import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoNodejs from '/public/images/logos/icon-nodedotjs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextdotjs.svg';
import LogoNextjsLight from '/public/images/logos/icon-nextdotjs-light.svg';
import LogoAstro from '/public/images/logos/icon-astro.svg';
import LogoWordpress from '/public/images/logos/icon-wordpress.svg';
import LogoDocker from '/public/images/logos/icon-docker.svg';
import LogoGit from '/public/images/logos/icon-git.svg';
import LogoGithub from '/public/images/logos/icon-github.svg';
import LogoGithubLight from '/public/images/logos/icon-github-light.svg';

import LogoAntagonist from '/public/images/logos/logo-antagonist.png';
import LogoAntagonistLight from '/public/images/logos/logo-antagonist-light.png';
import LogoClubPresence from '/public/images/logos/logo-clubpresence.avif';
import LogoDrukwerkdeal from '/public/images/logos/logo-drukwerkdeal.svg';
import LogoDrukwerkdealLight from '/public/images/logos/logo-drukwerkdeal-light.svg';

import ProjectClubPresence from '/public/images/project-clubpresence.png';
import ProjectHgvHengelo from '/public/images/project-hgvhengelo.png';
import ProjectSportHengelo from '/public/images/project-sporthengelo.png';
import ProjectApenkooitoernooi from '/public/images/project-apenkooitoernooi.png';

import ProjectClubPresenceMobile from '/public/images/project-clubpresence-mobile.png';
import ProjectHgvHengeloMobile from '/public/images/project-hgvhengelo-mobile.png';
import ProjectSportHengeloMobile from '/public/images/project-sporthengelo-mobile.png';
import ProjectApenkooitoernooiMobile from '/public/images/project-apenkooitoernooi-mobile.png';

import {
  ExperienceDetails,
  ProjectDetails,
  SkillGroup,
  TechDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  GITHUB: 'https://github.com/Rubenrikk',
};

export const NAV_LINKS = [
  { label: 'Over mij', href: '#about' },
  { label: 'Werk', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS = [
  { icon: Github, url: 'https://github.com/Rubenrikk' },
  {
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/ruben-rikkerink-5b55bb228',
  },
  { icon: Instagram, url: 'https://www.instagram.com/rubenrikk/' },
  { icon: Facebook, url: 'https://www.facebook.com/rubenrikkerink' },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'TypeScript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'JavaScript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  { label: 'Node.js', logo: LogoNodejs, url: 'https://nodejs.org/' },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  { label: 'React', logo: LogoReact, url: 'https://react.dev/' },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    darkModeLogo: LogoNextjsLight,
    url: 'https://nextjs.org/',
  },
  { label: 'Astro', logo: LogoAstro, url: 'https://astro.build/' },
  { label: 'WordPress', logo: LogoWordpress, url: 'https://wordpress.org/' },
  { label: 'Docker', logo: LogoDocker, url: 'https://www.docker.com/' },
  { label: 'Git', logo: LogoGit, url: 'https://git-scm.com/' },
  {
    label: 'GitHub',
    logo: LogoGithub,
    darkModeLogo: LogoGithubLight,
    url: 'https://github.com/',
  },
];

// Vaardigheden zonder een grote icoon-tegel, gegroepeerd per categorie.
export const OTHER_SKILLS: SkillGroup[] = [
  {
    category: 'Web & hosting',
    items: [
      'Elementor',
      'MariaDB',
      'MySQL',
      'PostgreSQL',
      'SQLite',
      'Redis',
      'Nginx',
      'Apache',
      'Cloudflare',
      'Plesk',
      'cPanel',
      'DirectAdmin',
    ],
  },
  {
    category: 'Systemen & netwerk',
    items: [
      'macOS',
      'Windows',
      'Ubuntu',
      'Linux',
      'Raspberry Pi',
      'Home Assistant',
      'Ubiquiti',
      'Zigbee',
      'Z-Wave',
      'Matter',
      'Thread',
    ],
  },
  {
    category: 'Tools',
    items: ['GitLab', 'GitLab CI', 'JWT', 'ESLint', 'Bitwarden'],
  },
  {
    category: 'Eigenschappen',
    items: [
      'Communicatief',
      'Samenwerken',
      'Loyaal en betrokken',
      'Initiatief ontplooien',
      'Toegankelijk',
      'Sociaal',
      'Humoristisch',
      'Betrouwbaar',
      'Sportief',
      'Assertief',
    ],
  },
  {
    category: 'Talen',
    items: ['Nederlands', 'Engels'],
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoClubPresence,
    logoAlt: 'ClubPresence logo',
    position: 'Zelfstandig Ondernemer — ClubPresence',
    startDate: new Date(2026, 0),
    currentlyWorkHere: true,
    summary: [
      'Ontwikkelt en beheert ClubPresence, een SaaS-applicatie voor presentiebeheer bij sportverenigingen.',
      'Verantwoordelijk voor backend, database en deployment, van idee tot productie.',
    ],
  },
  {
    logo: LogoAntagonist,
    darkModeLogo: LogoAntagonistLight,
    logoAlt: 'Antagonist B.V. logo',
    position: 'Customer Support Medewerker — Antagonist B.V.',
    startDate: new Date(2025, 0),
    currentlyWorkHere: true,
    summary: [
      'Ondersteunt klanten van hostingprovider Antagonist B.V. bij technische vragen.',
      'Analyseert hostingpakketten en lost problemen op rond e-mail en malware.',
    ],
  },
  {
    logo: LogoDrukwerkdeal,
    darkModeLogo: LogoDrukwerkdealLight,
    logoAlt: 'Drukwerkdeal.nl logo',
    position: 'Customer Care Specialist — Drukwerkdeal.nl',
    startDate: new Date(2023, 6),
    endDate: new Date(2024, 11),
    summary: ['Klantcontact en probleemoplossing bij een grote online drukkerij.'],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'ClubPresence',
    description:
      'SaaS-applicatie voor presentiebeheer bij sportverenigingen, die ik vanuit mijn eigen onderneming ontwikkel.',
    url: 'https://clubpresence.nl',
    previewImage: ProjectClubPresence,
    previewImageMobile: ProjectClubPresenceMobile,
    technologies: ['SaaS', 'Node.js', 'TypeScript'],
  },
  {
    name: 'HGV Hengelo',
    description:
      'Officiële website van HGV Hengelo, een gymnastiek- en sportvereniging. Geeft leden een overzicht van het sportaanbod, een actueel lesrooster gekoppeld aan de AllUnited API, en formulieren voor inschrijving, wijzigingen en opzeggingen.',
    url: 'https://hgvhengelo.nl',
    previewImage: ProjectHgvHengelo,
    previewImageMobile: ProjectHgvHengeloMobile,
    technologies: ['Node.js', 'AllUnited API'],
  },
  {
    name: 'Sport Hengelo',
    description:
      'Sportgids voor Hengelo met een overzicht van reguliere en aangepaste sporten, informatie over het jeugdfonds en een contactformulier waarmee sportverenigingen zichzelf kunnen aanmelden.',
    url: 'https://sporthengelo.nl',
    previewImage: ProjectSportHengelo,
    previewImageMobile: ProjectSportHengeloMobile,
    technologies: ['Node.js'],
  },
  {
    name: 'Apenkooitoernooi',
    description:
      'Website voor het Apenkooitoernooi: een jaarlijks schoolsporttoernooi voor basisschoolleerlingen, georganiseerd door Sportvereniging H.G.V. Bevat toernooi-info, spelregels en een inschrijfformulier voor scholen.',
    url: 'https://apenkooitoernooi.nl',
    previewImage: ProjectApenkooitoernooi,
    previewImageMobile: ProjectApenkooitoernooiMobile,
    technologies: ['Node.js'],
  },
];
