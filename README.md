# Terminal Web Portfolio

Personal portfolio of **Fernando Cases (Nando)** — Frontend Developer & Technical Project Manager based in Madrid, Spain — designed as a terminal interface and built using React, TypeScript, and Styled-Components. It offers multiple themes, autocomplete functionality, command navigation, command history view, offline capability, and testing.

**Live:** [terminal-nando-web-portfolio.vercel.app](https://terminal-nando-web-portfolio.vercel.app/)

[![CI](https://github.com/Fasping/terminal-web-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/Fasping/terminal-web-portfolio/actions/workflows/ci.yml)

## Available Commands

| Command | Description |
| --- | --- |
| `about` | Who I am, in short |
| `experience` | Professional experience |
| `skills` | Tech stack and tools |
| `education` | Education background |
| `resume` / `cv` | Open my resume (PDF) |
| `socials` | GitHub & LinkedIn (`socials go 1`) |
| `email` | Send me an email |
| `themes` | Switch theme (`themes set ubuntu`) |
| `help` | List all commands |
| `history`, `echo`, `clear`, `welcome`, `whoami` | Terminal utilities |

## Features

- **Responsive design:** works from phones to ultrawide screens.
- **8 themes:** stored in `localStorage` and applied before first paint, so there's no flash on reload.
- **Autocomplete:** commands and their arguments, via TAB or Ctrl + i.
- **Command history:** arrow keys to navigate, `history` to list it.
- **Self-hosted font:** IBM Plex Mono, latin subset only.

## Tech Stack

- **Frontend:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules + CSS custom properties (themes are one `data-theme` attribute on `<html>`)
- **Build:** [Vite](https://vite.dev/)
- **State:** React Context API
- **Testing:** [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/), run on every PR by GitHub Actions

## Project structure

```
src/
├── commands/registry.tsx   single source of truth: name, description, component, arguments
├── components/             terminal shell + one component per command
├── context/                terminal context (history, args, rerender)
├── data/                   CV content: experience, skills, education, socials, profile
├── hooks/                  useTheme
└── styles/                 global.css, themes.css and one *.module.css per area
```

Adding a command means one entry in `commands/registry.tsx`; `help`, argument
validation and tab completion all read from it.

## Themes

`dark` · `light` · `blue-matrix` · `espresso` · `green-goblin` · `ubuntu` · `tokyo-night` · `catppuccin`

Switch with `themes set <name>`.

## Running Locally

To run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/Fasping/terminal-web-portfolio.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd web-terminal
   ```

3. **Remove the Remote Origin (Optional):**

   ```bash
   git remote remove origin
   ```

4. **Install Dependencies:**

   ```bash
   npm install
   ```

5. **Start the Development Server:**

   ```bash
   npm run dev
   ```
