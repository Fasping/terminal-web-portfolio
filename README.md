# Terminal Web Portfolio

A portfolio website that behaves like a terminal: type a command, get an answer.
Built with React, TypeScript and CSS Modules, with eight themes, tab completion,
command history and a content layer you can swap for your own in a few minutes.

**Live demo:** [terminal-nando-web-portfolio.vercel.app](https://terminal-nando-web-portfolio.vercel.app/)

[![CI](https://github.com/Fasping/terminal-web-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Fasping/terminal-web-portfolio/actions/workflows/ci.yml)

## Commands

| Command | Description |
| --- | --- |
| `about` | Short introduction |
| `experience` | Work history |
| `skills` | Tech stack and tools |
| `education` | Education background |
| `resume` / `cv` | Open the CV (PDF) |
| `socials` | Links, opened with `socials go 1` |
| `email` | Opens the mail client |
| `themes` | Switch theme, `themes set ubuntu` |
| `help` | List every command |
| `history`, `echo`, `clear`, `welcome`, `whoami` | Terminal utilities |

## Features

- **Responsive:** works from phones to ultrawide screens.
- **8 themes:** saved to `localStorage` and applied before first paint, so there is no flash on reload.
- **Tab completion:** for commands and their arguments, via TAB or Ctrl + i.
- **Command history:** arrow keys to navigate, `history` to list it.
- **Search-engine friendly:** the content is also emitted as plain HTML and JSON-LD at build time.
- **Self-hosted font:** IBM Plex Mono, latin subset only.

## Tech stack

- **Frontend:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules + CSS custom properties — a theme is one `data-theme` attribute on `<html>`
- **Build:** [Vite](https://vite.dev/)
- **State:** React Context API
- **Testing:** [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/), run on every PR by GitHub Actions

No runtime UI dependencies: no CSS-in-JS, no utility library.

## Project structure

```
src/
├── commands/registry.tsx   single source of truth: name, description, component, arguments
├── components/             terminal shell + one component per command
├── context/                terminal context (history, args, rerender)
├── data/                   the content: experience, skills, education, socials, profile
├── hooks/                  useTheme
└── styles/                 global.css, themes.css and one *.module.css per area
```

## Running locally

```bash
git clone https://github.com/Fasping/terminal-web-portfolio.git
cd terminal-web-portfolio/web-terminal
npm install
npm run dev
```

Other scripts: `npm run lint`, `npm test`, `npm run build`.

## Make it yours

Fork it and edit these files — no component code needed:

| What | Where |
| --- | --- |
| Name, role, email, prompt host, resume URL, site URL | `src/data/profile.ts` |
| Work history | `src/data/experience.ts` |
| Skills | `src/data/skills.ts` |
| Education | `src/data/education.ts` |
| Social links | `src/data/socials.ts` |
| The CV itself | drop your PDF in `public/` and point `profile.resumeUrl` at it |
| ASCII banner | `src/components/commands/Welcome.tsx` — generate one at [patorjk.com](https://patorjk.com/software/taag/) |
| Colours | `src/styles/themes.css`: one `[data-theme="…"]` block per theme, plus its `--swatch-…` |
| Favicon and social preview | `public/favicon.svg`, `public/og-image.png` |
| Meta tags and canonical URL | `index.html` |
| Domain | `public/robots.txt` and `public/sitemap.xml` |

The `<noscript>` fallback and the JSON-LD that search engines read are generated
at build time from `src/data` by `vite-plugin-seo.ts`, so they follow your edits
on their own.

**Adding a command** is one entry in `src/commands/registry.tsx`:

```tsx
{ cmd: "projects", desc: "things I've built", element: <Projects /> },
```

`help`, argument validation and tab completion all read from that array.
