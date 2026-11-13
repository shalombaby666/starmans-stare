# Starman’s Stare Implementation Plan

> **For agentic workers:** Execute inline using executing-plans, following checked tasks below.

**Goal:** Deliver a working retro educational solar-system website.

**Architecture:** Static React application; typed content, reusable planet artwork, hash navigation and local progress. Scientific facts reference NASA; UI illustrations are original CSS.

**Tech Stack:** React, TypeScript, Vite, Node test runner.

**Spec:** docs/superpowers/specs/2026-11-13-starmans-stare-design.md

## Global Constraints
- Russian primary language; original 1990s web-club identity.
- Eight planets and 11 explicitly selected moons; sources visible.
- Keyboard support, responsive layout, reduced motion, no autoplay audio.

### Task 1: Atlas and content
Files: src/data.ts, src/domain.ts, tests/domain.test.ts.
- [x] Define Planet and Moon records with stable ids and source URLs.
- [x] Test comparison arithmetic, invalid saved progress and lookup behavior with Node test runner.
- [x] Populate rounded NASA planetary fact-sheet values, distinguish rotation period from solar day.

### Task 2: Interactive club
Files: src/main.tsx, src/App.tsx, src/styles.css.
- [x] Build home with navigable CSS planet illustrations and original starfield.
- [x] Add planet/moon atlas, detail routes, comparison selectors, VHS resource library and local journal.
- [x] Add motion switch, focus styling, storage fallback and narrow-screen layout.
- [x] Run npm run build and browser-check navigation, comparison and persistence.

### Task 3: Delivery
Files: README.md, LICENSE, .github/workflows/pages.yml.
- [x] Document setup, sources, data limitations, asset rights and honest resume wording.
- [x] Initialize isolated Git repo on codex/starmans-stare; commit verified source.
- [x] Check GitHub availability, publish when authenticated; otherwise report the precise blocker.
