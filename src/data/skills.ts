export type Skill = { key: string; label: string; icon: string };
export type Category = { key: string; label: string; icon: string; skills: Skill[] };

export const ICONS = {
  development: "▣",
  opsDelivery: "◆",
  editorsAi: "✎",
  environments: "◧",
  skill: "•",
} as const;

export const CATEGORIES: Category[] = [
  {
    key: "editors-ai",
    label: "AI-Assisted Development",
    icon: ICONS.editorsAi,
    skills: [
      { key: "cursor", label: "Cursor", icon: ICONS.skill },
      { key: "claude", label: "Claude (Anthropic)", icon: ICONS.skill },
      { key: "openai", label: "OpenAI API", icon: ICONS.skill },
      { key: "github-copilot", label: "GitHub Copilot", icon: ICONS.skill },
      { key: "vscode", label: "VS Code", icon: ICONS.skill },
    ],
  },
  {
    key: "development",
    label: "Development",
    icon: ICONS.development,
    skills: [
      { key: "typescript", label: "TypeScript", icon: ICONS.skill },
      { key: "javascript", label: "JavaScript (ES6+)", icon: ICONS.skill },
      { key: "react", label: "React", icon: ICONS.skill },
      { key: "astro", label: "Astro", icon: ICONS.skill },
      { key: "tailwindcss", label: "TailwindCSS", icon: ICONS.skill },
      { key: "nodejs", label: "Node.js", icon: ICONS.skill },
      { key: "ruby-on-rails", label: "Ruby on Rails", icon: ICONS.skill },
    ],
  },
  {
    key: "ops-delivery",
    label: "Ops & Delivery",
    icon: ICONS.opsDelivery,
    skills: [
      { key: "docker", label: "Docker", icon: ICONS.skill },
      { key: "nginx", label: "Nginx", icon: ICONS.skill },
      { key: "apache", label: "Apache", icon: ICONS.skill },
      { key: "openlitespeed", label: "OpenLiteSpeed", icon: ICONS.skill },
      { key: "gitlab", label: "GitLab", icon: ICONS.skill },
    ],
  },
  {
    key: "environments",
    label: "Environments",
    icon: ICONS.environments,
    skills: [
      { key: "home-assistant", label: "Home Assistant", icon: ICONS.skill },
      { key: "macos", label: "macOS", icon: ICONS.skill },
      { key: "ubuntu", label: "Ubuntu", icon: ICONS.skill },
      { key: "fedora", label: "Fedora", icon: ICONS.skill },
    ],
  },
];


