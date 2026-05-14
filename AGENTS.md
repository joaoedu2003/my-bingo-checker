# AI Agent Instructions

This repository is a React + Vite + Tailwind CSS workshop app for a social bingo game.

## Quick start
- Run locally with: `npm install` and `npm run dev`
- Build with: `npm run build`
- Lint with: `npm run lint`
- Test with: `npm run test`
- The project uses Vite, React 19, Tailwind CSS v4, TypeScript, and Vitest.
- A devcontainer exists in `.devcontainer/`.

## What this repo is for
- `src/` contains the playable bingo app.
- `workshop/` contains guided lab content and multi-agent workshop exercises.
- `.github/agents/` contains specialized prompt agents for workshop tasks.

## Key files
- `src/App.tsx` – app entry point and screen routing.
- `src/components/` – UI components for the bingo board, start screen, modal, and game screen.
- `src/hooks/useBingoGame.ts` – game state and interaction logic.
- `src/utils/bingoLogic.ts` – bingo validation helpers and unit tests.
- `vite.config.ts` – Vite config, Tailwind plugin, and Vitest setup.
- `package.json` – dependency and script definitions.

## Project conventions
- Tailwind CSS v4 is enabled through `@tailwindcss/vite`; use native CSS variables and `@theme` when editing styles.
- Prefer component-driven, accessible UI for in-person game interactions.
- Keep changes aligned with the workshop’s learning goals: simple UI, testable game logic, and readable React structure.

## When to use existing instructions
- For frontend UI design, consult `.github/instructions/frontend-design.instructions.md`
- For Tailwind v4 styling, consult `.github/instructions/tailwind-4.instructions.md`

## Notes for agents
- Do not assume backend services; this is a static client app.
- Preserve the learning/workshop experience by keeping the app easy to understand.
- If asked to add or modify prompts, inspect `.github/agents/*.agent.md` first.
