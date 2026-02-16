import React, { useEffect, useMemo, useRef, useState } from 'react';
// reuse terminal styles to match the built-in prompt look
import terminalStyles from './skills/components/terminal/terminal.module.css';
import type { Category } from '../data/skills';
import { CATEGORIES } from '../data/skills';

type Mode = 'home' | 'detail';

function useTypewriter(text: string, deps: React.DependencyList, speed = 18) {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    let i = 0;
    setOutput('');
    setDone(false);
    const id = setInterval(() => {
      i++;
      setOutput(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(id);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { output, done } as const;
}

export default function TerminalSkills() {
  const [mode, setMode] = useState<Mode>('home');
  const [active, setActive] = useState<string | null>(null);
  const [clearing, setClearing] = useState(false);
  const [commandOverride, setCommandOverride] = useState<string | null>(null);
  const nextActionRef = useRef<(() => void) | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const promptBase = 'Rubenrikk@root: ~$ ';
  const { output: typed, done: typedDone } = useTypewriter(
    commandOverride
      ? `${commandOverride}`
      : mode === 'home'
        ? `. printskills`
        : `. printskills ${active ?? ''}`,
    [mode, active, commandOverride],
    28
  );

  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get('cat');
    if (q) {
      if (CATEGORIES.find((c) => c.key === q)) {
        setMode('detail');
        setActive(q);
      }
    }
  }, []);

  function simulateClear(next: () => void) {
    const el = containerRef.current;
    if (!el) return next();
    setClearing(true);
    setCommandOverride('. clear');
    nextActionRef.current = next;
  }

  // Wanneer ". clear" volledig is uitgetypt, pas dan fade-out + clear + vervolgactie
  useEffect(() => {
    if (commandOverride !== '. clear' || !typedDone) return;
    const el = containerRef.current;
    if (!el) {
      nextActionRef.current?.();
      setClearing(false);
      setCommandOverride(null);
      return;
    }
    el.style.transition = 'opacity 120ms linear';
    el.style.opacity = '0';
    const t = setTimeout(() => {
      // voer de volgende actie uit (mode/active aanpassen)
      nextActionRef.current?.();
      // content zichtbaar maken en terug naar normale prompt-typing
      el.style.opacity = '1';
      setClearing(false);
      setCommandOverride(null);
    }, 180);
    return () => clearTimeout(t);
  }, [commandOverride, typedDone]);

  function openCategory(key: string) {
    simulateClear(() => {
      setActive(key);
      setMode('detail');
    });
  }

  function goBack() {
    simulateClear(() => {
      setActive(null);
      setMode('home');
    });
  }

  const categories = useMemo(() => CATEGORIES, []);
  const current: Category | undefined = useMemo(
    () => categories.find((c) => c.key === (active ?? '')),
    [categories, active]
  );

  // Map bekende skill keys naar svg-bestanden in public/assets
  const SKILL_SVG: Record<string, string> = useMemo(
    () => ({
      // Development
      typescript: '/assets/typescript.svg',
      javascript: '/assets/javascript.svg',
      react: '/assets/reactjs.svg',
      astro: '/assets/Astro.svg',
      tailwindcss: '/assets/tailwindcss.svg',
      nodejs: '/assets/nodejs.svg',
      'ruby-on-rails': '/assets/ruby-on-rails.svg',

      // Ops & Delivery
      docker: '/assets/docker.svg',
      nginx: '/assets/NGINX.svg',
      apache: '/assets/apache.svg',
      openlitespeed: '/assets/openlitespeed.svg',
      gitlab: '/assets/gitlab.svg',

      // Editors & AI
      vscode: '/assets/vscode.svg',
      cursor: '/assets/cursor.svg',
      openai: '/assets/openai.svg',

      // Environments
      'home-assistant': '/assets/homeassistant.svg',
      macos: '/assets/macos.svg',
      ubuntu: '/assets/ubuntu.svg',
      fedora: '/assets/fedora.svg',
    }),
    []
  );

  function getSkillSvgPath(skillKey: string): string | null {
    const key = skillKey.toLowerCase();
    return SKILL_SVG[key] ?? null;
  }

  return (
    <div className="ts__root" aria-live="polite">
      <div className={terminalStyles.user__line}>
        <span className={terminalStyles.user__name}>Rubenrikk@root: </span>
        <span className={terminalStyles.separator}>~</span>$ {typed}
      </div>
      <div ref={containerRef} className="ts__content">
        {mode === 'home' && commandOverride === null && typedDone ? (
          <div className="ts__grid" role="list">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className="ts__tile"
                role="button"
                tabIndex={0}
                aria-label={`Open ${cat.label}`}
                onClick={() => openCategory(cat.key)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') openCategory(cat.key);
                }}
              >
                <div className="ts__icon" aria-hidden>{cat.icon}</div>
                <div className="ts__label">{cat.label}</div>
              </button>
            ))}
          </div>
        ) : null}
        {mode === 'detail' && commandOverride === null && typedDone ? (
          <div className="ts__detail">
            <button className="ts__back" aria-label="Back to categories" onClick={goBack}>
              ← back
            </button>
            <ul className="ts__skills" role="list">
              {current?.skills.map((s) => {
                const svg = getSkillSvgPath(s.key);
                return (
                  <li key={s.key} className="ts__skill">
                    {svg ? (
                      <img className="ts__skillLogo" src={svg} alt="" aria-hidden />
                    ) : (
                      <span className="ts__icon" aria-hidden>
                        {s.icon}
                      </span>
                    )}
                    <span className="ts__label">{s.label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>

      <style>{`
        .ts__root { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; }
        .ts__prompt { color: var(--primary-90); margin: 0 0 8px 0; }
        .ts__content { transition: opacity 120ms linear; }
        .ts__grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: .75rem; }
        @media (min-width: 768px) { .ts__grid { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; } }
        .ts__tile { 
          display: flex; 
          flex-direction: column;
          align-items: center; 
          justify-content: center;
          gap: 0.5rem; 
          padding: 12px 8px; 
          background: rgba(255,255,255,.03); 
          border: 1px solid rgba(255,255,255,.15); 
          color: var(--primary-95); 
          border-radius: 6px; 
          cursor: pointer; 
          text-align: center;
          transition: all 0.2s ease;
          position: relative;
          overflow: hidden;
        }
        .ts__tile::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.1), transparent);
          transition: left 0.5s ease;
        }
        .ts__tile:hover {
          background: rgba(255,255,255,.06);
          border-color: rgba(255,255,255,.25);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,.3);
        }
        .ts__tile:hover::before {
          left: 100%;
        }
        .ts__tile:active {
          transform: translateY(0);
        }
        .ts__tile:focus { outline: 2px solid var(--primary-60); outline-offset: 2px; }
        .ts__icon { 
          font-size: 2rem;
          line-height: 1;
          display: inline-block; 
          color: var(--primary-80);
          text-shadow: 0 0 8px rgba(213, 99, 99, .35);
          transition: all 0.2s ease;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,.3));
        }
        .ts__tile:hover .ts__icon {
          color: var(--primary-90);
          text-shadow: 0 0 12px rgba(255,205,210,.7);
          transform: scale(1.1);
        }
        .ts__label { 
          white-space: nowrap;
          font-size: 0.875rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .ts__tile:hover .ts__label {
          color: #ffffff;
        }
        .ts__back { 
          background: transparent; 
          color: var(--primary-90); 
          border: 1px dashed rgba(255,255,255,.3); 
          padding: 6px 12px; 
          border-radius: 6px; 
          margin-bottom: 12px; 
          cursor: pointer;
          font-family: inherit;
          transition: all 0.2s ease;
        }
        .ts__back:hover {
          background: rgba(255,255,255,.05);
          border-color: rgba(255,255,255,.4);
          color: #ffffff;
        }
        .ts__skills { list-style:none; padding:0; margin:0; display:grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: .75rem 1rem; }
        @media (min-width: 768px) { .ts__skills { grid-template-columns: repeat(3, minmax(0,1fr)); gap: 1rem 1.25rem; } }
        .ts__skill { 
          display:flex; 
          flex-direction: column;
          align-items:center; 
          justify-content: center;
          gap:.5rem; 
          color: var(--primary-95);
          padding: 8px 4px;
          text-align: center;
        }
        .ts__skill .ts__icon { font-size: 2.5rem; line-height: 1; }
        .ts__skillIcon {
          display: inline-block;
          width: 2.5rem;
          height: 2.5rem;
          background-color: currentColor;
          -webkit-mask-image: var(--svg);
          mask-image: var(--svg);
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-size: 100% 100%;
          mask-size: 100% 100%;
          filter: drop-shadow(0 1px 2px rgba(0,0,0,.35));
        }
        .ts__skillLogo { 
          width: 2.5rem; 
          height: 2.5rem; 
          display: block; 
          object-fit: contain; 
          filter: drop-shadow(0 1px 2px rgba(0,0,0,.25));
        }
        .ts__label { font-size: 0.95rem; }
      `}</style>
    </div>
  );
}


