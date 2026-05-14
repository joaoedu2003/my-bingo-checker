---
name: create-skill
description: Create or update a workspace skill file in this repo when the user asks for a `SKILL.md`.
---

This skill helps agents make repository-specific skill files for `my-bingo-checker`.

## When to use
- The user asks to create a new skill file (`SKILL.md`).
- The user wants a reusable workflow or step-by-step guide for repo customization.
- You are writing workspace-scoped guidance for agent workflows in this app.

## What it produces
- A concise skill file with repository-specific instructions.
- A clear location for the skill in `.github/skills/`.
- Advice that preserves existing patterns from `AGENTS.md`, `.github/agents/`, and `.github/instructions/`.

## Workflow
1. Confirm the user’s intent.
   - If they want a workspace-scoped skill, proceed.
   - If they want a personal prompt or external helper, ask a clarifying question.
2. Inspect the repository for existing customization files.
   - `AGENTS.md`
   - `.github/agents/*.agent.md`
   - `.github/instructions/*.md`
3. Choose the skill location.
   - Prefer `.github/skills/` for new skill files.
   - If the user explicitly requests a root `SKILL.md`, create that file instead.
4. Draft a minimal skill.
   - Include metadata at the top.
   - Explain the purpose and when to use it.
   - Provide a step-by-step process.
   - Keep the content concise and actionable.
5. Save the file.
   - Use a descriptive name, such as `.github/skills/<topic>.skill.md`.
   - If the user asked for a generic `SKILL.md`, use that exact filename.

## Quality criteria
- Keep the skill focused on this repo’s conventions.
- Link to existing docs rather than duplicating them.
- Preserve workshop-oriented learning goals.
- Avoid calling a skill only when a generic prompt would suffice.

## Example prompts for this skill
- "Create a new repo skill for onboarding developers."
- "Generate a SKILL.md that documents the app setup workflow."
- "Make a workspace skill for adding Tailwind UI components."
