# Starman’s Stare design notes

## Direction

A late-1990s pixel arcade for exploring the Solar System, with the excess and odd details of a personal fan site. It should feel like one little cabinet of games and discoveries, not a different decade or operating system in every section.

## Shared visual rules

- **Backdrop:** near-black navy with a quiet, repeating star field.
- **Main surfaces:** deep blue panels with sharp, raised steel-blue window frames and matching title bars.
- **Palette:** paper `#eee8d2`, quiet text `#b9c3dc`, signal aqua `#73e3d7`, notice yellow `#f2e77b`, and night `#080b1d`.
- **Type:** Times New Roman for reading, Impact for the wordmark, Tahoma for controls, Courier New for scoreboards and short technical labels.
- **Illustration:** original, chunky pixel sprites for planets and moons. Keep their surfaces individual while the interface around them stays in the shared palette.
- **Controls:** square, raised buttons that read like an arcade menu. The current page and selected option use yellow; hover and links use aqua.
- **Motion:** small and optional. Respect the site’s animation switch and reduced-motion setting.

## Keep the site from splitting into themes

Radio, video, archive, quiz, and comparison sections may use their own subject-specific objects. Their page backgrounds, panel colors, borders, type roles, and button states still come from the shared rules above. Avoid rainbow gradients, unrelated pastel palettes, glow effects, and a separate operating-system imitation for each tab.

The CSS tokens and shared overrides live in `src/house-style.css`. Keep this note in sync when those tokens or rules change.
