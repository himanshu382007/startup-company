# Startup Company Website
**Note**: This repository is **Private**. Do not share source code publicly.

## Overview
This is the modern, responsive landing page for **NeuroWings** — an AI-powered forensic intelligence and proactive security systems company. The interface is meticulously designed to project authority, deep technology, and polished brand aesthetics.

## Tech Stack
*   **Framework**: React 19 + TypeScript
*   **Bundler / Tooling**: Vite 6
*   **Styling**: TailwindCSS 4
*   **Animations**: Framer Motion
*   **3D Assets**: Spline (`@splinetool/react-spline`)
*   **Icons**: Lucide React

## Project Architecture & Structure
The project is architected as a modular, single-page application heavily reliant on isolated UI components.

*   **`src/App.tsx`**: The main entry point. It orchestrates the vertical layout of all major sections and injects the global ambient background styling.
*   **`src/components/ui/`**: Contains the core building blocks of the website:
    *   `navbar.tsx`: The sticky, frosted-glass top navigation. It manages mobile-menu states and anchor navigation to page IDs.
    *   `demo.tsx`: The Hero section (`SplineSceneBasic`), introducing the brand with an interactive 3D Spline model.
    *   `about-section.tsx`: The "About Us" 2-column description block.
    *   `products-section.tsx`: Displays the main product suite in premium bordered cards.
    *   `services-section.tsx`: An asymmetrical layout displaying the 3x2 services grid alongside a sticky "Why Choose Us" CTA sidebar.
    *   `schemes-section.tsx`: Highlights Government Aligned Schemes.
    *   `certifications-section.tsx`: Highlights various compliance and industry certifications.
    *   `flying-drone.tsx`: A persistent cursor-following 3D drone overlay (disabled on mobile).
    *   `footer-section.tsx`: The detailed bottom footer including social map links.

## Design System & Styling Rules
Future developers should adhere strictly to the established **Deep Blue Theme** to maintain brand consistency:

1.  **Colors**: 
    *   Backgrounds predominantly use soft ice-blue (`#f4f7ff`, `blue-50/30`).
    *   Primary Text: Deep marine blues (`blue-950` for headings, `blue-900/80` for body). 
    *   Accents/Gradients: Uses `blue-600` mixed with `cyan-500` for highlights.
2.  **Widths**: All major container blocks are globally constrained to `max-w-[1440px]`. Instead of full-width spans, elements should respect this constraint to look premium on modern ultrawide monitors.
3.  **Animations**: Always use the custom `AnimatedContainer` (often defined at the bottom of the section files or as a reusable component) to wrap grids and blocks. This provides the uniform `framer-motion` scroll-reveal (blur and slide-up) effect.

## Known Complexities & Mobile Handling
*   **3D Spline Elements**: The project uses heavy 3D canvases. On mobile platforms, 3D canvases capture touch events which break native vertical scrolling.
    *   *Rule*: Always ensure `pointer-events-none md:pointer-events-auto` is utilized on mobile wrappers for `SplineScene` elements to prevent scroll-trapping.
*   **Cursor Tracking**: Advanced features like the `<FlyingDrone />` rely on `window.addEventListener('mousemove')`. Since mobile has no cursor paradigm, these components must be hidden on mobile explicitly via CSS (`hidden md:flex`).
*   **Anchor Navigation**: Sections inside `App.tsx` are wrapped with `id="..."` attributes that match the `navbar.tsx` href links, allowing for simple native HTML smooth scrolling.

## Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the local development server**:
   ```bash
   npm run dev
   ```
   *By default, this spins up the Vite local server on port `3000` accessible via `0.0.0.0`.*

3. **Build for production**:
   ```bash
   npm run build
   ```
   *Vite compiles the static assets into the `/dist` directory.*
