# Project Context & History (context.md)

This document tracks the background, design evolution, user requirements, and technical decisions for the **Loy Krathong & 6-Month Anniversary** web application.

---

## 🎯 Purpose & Goal

- **Recipient:** "Milk" (มิ้ว) ❤️
- **Occasion:** 6-Month Relationship Anniversary & Loy Krathong Festival
- **Vision:** A charming, heartwarming, and interactive paper-cutout scrapbook experience where the user can pick a handcrafted Krathong, light its candle, make a wish, float it into a paper river, watch personalized fireworks in the starry night sky, and read a sweet love letter featuring real couple photos.

---

## 📜 Development History & Iterations

### 1. Phase 1: Initial 3D & Raster Cutout Attempts (Deprecated)
- Began with Three.js drone-style 3D particle text and raster image cutouts (`krathong_banana.jpg`, `scene_paper.jpg`, etc.).
- **User Feedback:**
  - The photo cutouts felt messy and inconsistent.
  - Framing the scene inside a simulated notebook page with thick gray spiral borders felt too cramped on small screens.
  - The user requested: *"ลื้อใหม่เลย... นายก็ปั้นฉาก ปั้นกระทงอะไรเองสิ ไม่ต้องเอามาจากภาพที่เราให้"* (Redo from scratch, procedurally build the scene and krathongs directly in code rather than cropping photos).

### 2. Phase 2: Transition to 100% Procedural SVG Paper Cutout (Adopted)
- Rebuilt using pure procedural SVG vector geometry with paper texture filters (`feTurbulence`, `feDisplacementMap`, and `feDropShadow`).
- Full viewport background with repeating notebook lines (`repeating-linear-gradient`).
- 3 distinct vector Krathongs:
  1. Bread Krathong (`krBread`)
  2. Banana Leaf Krathong (`krBanana`)
  3. Coconut Shell Krathong (`krCoconut`)
- Riverside diorama consisting of a traditional Thai temple (อุโบสถ), Chedi (พระเจดีย์), Spirit house (ศาลพระภูมิ), Banana tree, and festival lantern garlands.

### 3. Phase 3: Interactive Experience & Timeline
- **Stage 1 (Pick Screen):** Scrapbook card carousel to pick a Krathong.
- **Stage 2 (Riverbank Stage):**
  - "จุดเทียน" (Light candle) triggers flame flicker and warm radial glow.
  - Prompt changes to "อธิษฐานในใจแล้วกดลอยเลย" (Make a wish in your heart and let it float).
  - "ลอยกระทง" (Float krathong) releases the Krathong down the river with animated water waves.
- **Stage 3 (Night Sky & Fireworks):**
  - Deep blue night overlay fades in.
  - Sky lanterns rise and NPC ambient krathongs drift by.
  - Two-stage canvas text fireworks:
    1. Rocket ascent -> particle explosion spelling **"รักนะมิ้ว"**
    2. Second burst spelling **"สุขสันต์วันครบรอบ 6 เดือน"**
- **Stage 4 (Love Letter & Gallery):**
  - Notebook note pops up with taped top border, heartfelt Thai message, and "ลอยอีกครั้ง" (Float again) restart button.

### 4. Phase 4: Polish, Mobile Optimization & Bug Fixes
- **Photo Gallery:** The user replaced the placeholder illustration with 3 real couple photos (`images/photo1.jpg`, `photo2.jpg`, `photo3.jpg`) inside an interactive polaroid frame with next/prev arrows, clickable card, and dot indicators.
- **Thai Typography Tone Mark Fix ("มิ้ว" มีไม้โท):**
  - The tone mark `้` (ไม้โท) sits above `ิ` (สระอิ) on Level 3 of Thai diacritics. In the offscreen canvas sampler, tight top bounds clipped the tone mark off.
  - **Resolution:** Added generous vertical headroom (`padY = fs * 1.0 + 50`), ensuring all stacked vowels and tone marks render with zero clipping.
- **Mobile Firework Legibility:**
  - On narrow screens, long text was compressed and additive blending (`lighter`) caused characters to bloom into a blinding white blur.
  - **Resolution:** Dynamically split into 3 vertical lines on mobile (`["สุขสันต์", "วันครบรอบ", "6 เดือน"]`), tightened outer particle bloom (`1.8x` instead of `3x`), and added sharp core points and center highlights for crisp letterform recognition.
- **Mobile Krathong Vertical Positioning:**
  - When switching from desktop to mobile portrait view, the krathong was appearing in the sky near the moon because desktop Y-coordinates were retained.
  - **Resolution:** Created `getPlayerRestPos()`, ensuring the krathong is always dynamically placed in the lower river section directly above the action buttons regardless of viewport aspect ratio.
- **Star Shadow Rectangular Artifact:**
  - Star stickers exhibited a sharp gray bounding box shadow due to small element dimensions relative to filter offsets.
  - **Resolution:** Created `#star` filter with expanded `300%` filter bounds and calibrated drop shadow.

---

## 🔒 Crucial Rules & Constraints

1. **Strict Git Commit Rule:**
   - **NEVER run `git commit` or `git push` autonomously.** The user explicitly stated *"ห้าม commit เอง"* and chooses when to commit their own changes.
2. **Single-File Architecture:**
   - Keep `index.html` self-contained (embedded styles, SVG definitions, canvas scripts) so it is trivial to deploy and maintain on static web hosts.
3. **No External Libraries:**
   - Do not add heavy npm packages, Webpack/Vite bundlers, or 3D frameworks. Vanilla HTML5 Canvas + SVG delivers superior performance, instant loading, and zero maintenance overhead.
