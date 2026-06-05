# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Rohit Bansode. Single-page React app (with a couple of routed sub-pages) built with Vite, React 19, Tailwind CSS v4, and Framer Motion. No backend — the only external service is EmailJS for the contact form.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # Production build to dist/
npm run preview  # Serve the production build locally
npm run lint     # ESLint over the whole repo
```

There is no test suite.

## Environment

The contact form ([src/components/Contact.jsx](src/components/Contact.jsx)) reads EmailJS credentials from Vite env vars (must be prefixed `VITE_`, set in a `.env` file at the repo root):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Architecture

- **Routing** ([src/App.jsx](src/App.jsx)): three routes — `/` (Home), `/skills` (standalone Skills page), and `/projects/:id` (ProjectDetails). `BrowserRouter`, `Toaster`, and `StrictMode` are wired up in [src/main.jsx](src/main.jsx). `Navbar`, `ScrollProgress`, and `Footer` render outside `<Routes>` on every page.

- **Home is a section stack** ([src/pages/Home.jsx](src/pages/Home.jsx)): composes section components (Hero, Skills, Experience, Projects, Contact, Testimonials) in order. Navbar links are anchor jumps (`#skills`, `#experience`, etc.); each section component owns its matching `id`. Note `Skills` is imported both as a Home section and as the `/skills` route — same component, two contexts.

- **Content lives in [src/data/](src/data/)**: `projects.js`, `skills.js`, `experience.js`, `testimonials.js`, `socialLinks.js`. Components map over these arrays — to add/edit portfolio content, change the data file, not the component. Project images are imported into `projects.js` from [src/assets/projects/](src/assets/projects/) and referenced by `id`; `ProjectDetails` looks up the project via `projects.find(p => p.id === Number(id))`.

- **Dark mode** ([src/components/Navbar.jsx](src/components/Navbar.jsx)): toggled by adding/removing the `dark` class on `<html>`, persisted to `localStorage` under key `theme`. Tailwind's dark variant is wired to this class via `@custom-variant dark` in [src/index.css](src/index.css) (Tailwind v4 uses CSS-based config — `@theme` block in index.css, not a `tailwind.config.js`).

- **Animations**: shared Framer Motion variants (`fadeUp`, `fadeIn`, `staggerChildren`) live in [src/utils/motionVariants.js](src/utils/motionVariants.js). Sections animate on scroll with `whileInView` + `viewport={{ once: true }}`.

- **SEO/meta**: static tags in [index.html](index.html); `useMeta` hook ([src/utils/useMeta.js](src/utils/useMeta.js)) imperatively updates `<title>` and OG/Twitter meta tags per page (despite `react-helmet-async` being a dependency, this hand-rolled hook is the actual mechanism).

## Conventions

- `.jsx` files, ES modules, function components with hooks. No TypeScript.
- Styling is Tailwind utility classes inline; `clsx` for conditional classes. No CSS modules beyond the two global files ([src/index.css](src/index.css), [src/App.css](src/App.css)).
- Icons come from `react-icons` (`Fi`/Feather set is the norm).
- Heavy use of responsive (`md:`) and `dark:` variant pairs throughout — match existing breakpoints when editing layout.
