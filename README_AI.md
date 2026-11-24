# AI Agent Technical Guide & Architecture (README_AI.md)

This document provides a comprehensive technical guide for AI coding assistants and developers maintaining or extending this codebase.

---

## 📌 Project Overview

- **Project Name:** Loy Krathong & 6th Month Anniversary (`6m-anniv`)
- **Target Audience:** Romantic gift for "Milk" (มิ้ว) celebrating Loy Krathong & 6-month relationship anniversary.
- **Architecture:** Zero-dependency, single-file client-side application (`index.html`) using pure procedural SVG vector art, HTML5 Canvas particle physics, and Vanilla JS.
- **Deployment:** Static hosting (GitHub Pages, Cloudflare Pages, Netlify, or local HTTP server).

---

## 🏗️ Technical Architecture & Key Components

```
📁 6m-anniv/
├── 📁 images/
│   ├── 📸 photo1.jpg         # Couple portrait 1 (hiking / playful)
│   ├── 📸 photo2.jpg         # Couple portrait 2 (phone selfie / bandana)
│   └── 📸 photo3.jpg         # Portrait 3 (smile with sunflower gift)
├── 📄 index.html             # Consolidated single-file engine (HTML, CSS, SVG, Canvas, JS)
├── 🎵 music.mp3              # Romantic backing track (looping audio)
├── 📝 README.md              # User-facing documentation & run guide
├── 📝 README_AI.md           # This AI architecture & maintenance reference
└── 📝 context.md             # Project background, history, and user intent
```

---

## ⚙️ Core Modules Breakdown (`index.html`)

### 1. SVG Procedural Art & Filters (`<svg id="defs">`, lines ~174-205)
- **Filters:**
  - `#paper`: Hand-cut rough paper edge effect (`feTurbulence` + `feDisplacementMap` + `feDropShadow`).
  - `#float`: Floating elevation shadow for moon and clouds (`x="-60%" y="-60%" width="250%" height="250%"`).
  - `#star`: Specially scoped drop shadow for small star stickers (`x="-100%" y="-100%" width="300%" height="300%"`), avoiding bounding box clipping artifacts.
  - `#glow`: Radial gradient for candlelight, lantern warm glow, and moonlight.
- **Procedural SVGs:**
  - `krBanana()`: Classic banana leaf fold krathong with marigolds and lotus.
  - `krBread()`: Cute baked bread loaf krathong with sesame seeds and pastel sugar flowers.
  - `krCoconut()`: Coconut shell krathong with orchids and marigolds.
  - `village()`: Thai temple (อุโบสถ), Chedi stupa (พระเจดีย์), Spirit house (ศาลพระภูมิ), Banana tree, and festival lantern strings.

### 2. State Machine (`state`)
```javascript
const state = {
  type: null,        // "bread" | "banana" | "coconut"
  phase: "pick",     // "pick" -> "scene" -> "lit" -> "floating"
  night: false,      // toggles night overlay and moon glow opacity
  timers: []         // active timeout IDs for clean teardown on restart
};
```

### 3. Responsive Stage Positioning (`buildStatic` & `getPlayerRestPos`)
- **SVG ViewBox:** `0 0 1000 H`, where `H = Math.round(1000 * innerHeight / innerWidth)`.
- **Horizontal River Horizon:** `hy = Math.round(H * (portrait ? 0.5 : 0.56))`.
- **Water Bounds:** Begins at `wy = hy + 22` and extends to `H`.
- **Player Krathong Positioning (`getPlayerRestPos`):**
  - **Portrait (Mobile):** Situated at `x = W / 2`, `y = H - Math.min((H - wy) * 0.32, 480)`. Always placed comfortably in the lower water area above `#controls`, never in the sky.
  - **Dynamic Re-centering:** `buildStatic()` is called on every window resize, immediately re-anchoring `player.x`, `player.y`, and `player.s` if not floating.

### 4. Particle Firework Engine (`stepFireworks` & `textPoints`)
- **Offscreen Canvas Sampling (`textPoints`):**
  - Uses Google Font `'Mali', 'Itim', 'Sarabun', sans-serif`.
  - **Thai Typography Consideration:** Adds extra vertical headroom (`padY = fs * 1.0 + 50`) so high tone marks (e.g., ไม้โท `้` stacked on top of สระอิ `ิ` in "มิ้ว") are never clipped off by the top of the canvas.
  - Dynamically switches to 3 lines on mobile portrait viewports (`["สุขสันต์", "วันครบรอบ", "6 เดือน"]`) to ensure large, crisp, legible characters.
- **Sparkler Particle Rendering:**
  - Uses tight outer shimmers (`sz * 1.8` at `alpha * 0.15`) + sharp core sparks (`sz` at `alpha * 0.88`) + center pinpoint highlights (`sz * 0.42` at `alpha * 0.92`).
  - Avoids additive blending (`lighter`) blowout, preventing text from blurring into a solid blinding white mass.

### 5. Scrapbook Letter & Polaroid Gallery
- Displays when the firework sequence finishes (`27500ms`).
- Includes interactive polaroid card (`#polaroidCard`) with smooth photo transitions (`images/photo1.jpg`, `photo2.jpg`, `photo3.jpg`), interactive navigation arrows (`#photoPrev`, `#photoNext`), indicator dots (`#photoDots`), and touch support.
- Fully supports restart via `#againBtn`, which cleanly resets timers, removes dynamically spawned actors, and returns to `#pick`.

---

## 🛠️ How to Customize

1. **Firework Messages:**
   Edit the `CFG` object around line 238 in `index.html`:
   ```javascript
   const CFG = {
     firework1: ["รักนะมิ้ว"],
     firework2: ["สุขสันต์วันครบรอบ", "6 เดือน"],
     firework2Mobile: ["สุขสันต์", "วันครบรอบ", "6 เดือน"],
     noteTitle: "ถึง มิ้ว 💌",
     noteBody: [ ... ],
     noteSign: "จากเค้าเอง"
   };
   ```

2. **Photos:**
   Add or replace `.jpg` files inside `images/` and update `const photos` around line 880:
   ```javascript
   const photos = ["images/photo1.jpg", "images/photo2.jpg", "images/photo3.jpg"];
   ```

3. **Background Music:**
   Replace `music.mp3` with any `.mp3` file (keep filename as `music.mp3`).

---

## ⚠️ Important Rules for AI Assistants

- **Do NOT execute `git commit` or `git push` autonomously.** The user explicitly enforces that they commit their own code manually.
- **Keep all core logic self-contained in `index.html`** unless the user explicitly requests module splitting.
- **Preserve Thai tone mark headroom:** Always maintain adequate top padding (`padY >= fs * 0.9 + 40`) in offscreen canvas text measurement to prevent clipping Level-3 Thai tone marks (ไม้เอก, ไม้โท, ไม้ตรี, ไม้จัตวา).
- **Maintain responsive SVG aspect ratio:** Never hardcode fixed pixel offsets from the top of the canvas for the krathong; always compute relative to `H` and `hy`.
