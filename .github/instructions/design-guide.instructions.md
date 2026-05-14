---
name: design-guide
description: Enforce skeuomorphic neon glow sticker aesthetic for the bingo app UI components. Apply to all visual elements to maintain a cohesive, immersive sticker-themed experience.
applyTo:
  - src/components/*.tsx
  - src/index.css
---

# Skeuomorphic Neon Glow Sticker Design Guide

This guide ensures the bingo app maintains its distinctive skeuomorphic neon glow sticker aesthetic, creating an immersive, playful experience that mimics physical glow-in-the-dark stickers.

## Core Principles
- **Skeuomorphism First**: All UI elements should resemble physical stickers with 3D depth, shadows, and realistic textures. Avoid flat, minimal designs.
- **Neon Glow Palette**: Use neon colors (hot pink #ff0080, cyan #00ffff, yellow #ffff00, green #00ff00) with dark backgrounds (#000000, #1a1a1a) for high contrast and futuristic appeal.
- **Interactive Animations**: Include peeling or lifting effects on user interactions, especially when marking bingo squares.
- **Typography**: Use Fredoka One font for playful, sticker-like text. Avoid generic sans-serif fonts.

## Color Usage
- **Primary Accent**: Neon pink (#ff0080) for buttons and highlights
- **Secondary Accent**: Cyan (#00ffff) for secondary text and accents
- **Marked State**: Neon yellow (#ffff00) with glow for marked stickers
- **Winning State**: Neon green (#00ff00) with pulsing glow for bingo lines
- **Backgrounds**: Dark gradients for atmospheric depth
- **Text**: White (#ffffff) primary, light gray (#cccccc) secondary

## Component Patterns
- **Bingo Squares**: Always use `.sticker` class with layered gradients, box-shadows for depth, and radial glows. Include peeling animation on mark.
- **Buttons**: Style as stickers with hover lift effects, glow on interaction.
- **Containers**: Use backdrop blur, rounded corners, and subtle borders for a glassy, modern feel.
- **Animations**: CSS-only keyframes for peeling (corner lift), pulsing glows, and smooth transitions.

## Prohibited Elements
- Flat buttons or squares without 3D effects
- Light backgrounds or muted color schemes
- Generic fonts like Inter, Roboto, or system fonts
- Static elements without hover/interaction feedback
- Minimalist or clean aesthetics that lack sticker realism

## Implementation Notes
- Leverage Tailwind v4 @theme for consistent color variables
- Use CSS gradients and box-shadows for skeuomorphic depth
- Ensure animations are performant (CSS-only, no JS libraries)
- Maintain accessibility with sufficient contrast ratios

## Examples
- Bingo squares: Layered with inset highlights, outer glows, and 3D transforms on hover
- Modals: Dark semi-transparent overlays with blurred backgrounds
- Text: Bold, playful typography with drop shadows for neon effect

This guide overrides generic design preferences to preserve the app's unique sticker theme.