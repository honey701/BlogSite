# NutraHealth Blog

A full-featured health and wellness blog built with **React 18 + Vite**, featuring dynamic post routing, category filtering, tag-based search, company pages, and a fully responsive layout.

---

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Build for Production](#build-for-production)
- [Pages & Routes](#pages--routes)
- [Features](#features)
- [Design System](#design-system)
- [Customization](#customization)
- [Tech Stack](#tech-stack)

---

## Overview

NutraHealth Blog is a multi-page React application covering health topics including weight management, joint care, hair care, and diabetes. It includes a blog listing page with filters, individual blog post pages with a reading progress bar, company info pages, and a full site footer with navigation.

---

## 📁 Project Structure

```
nutrahealth-blog/
├── index.html
├── vite.config.js
├── package.json
│
├── public/
│   ├── back-image.png          # Hero banner background
│   ├── fat2fit.png
│   ├── fat2fit2.png
│   ├── fat2fit3.png
│   ├── Aveda.png
│   ├── Aveda2.png
│   ├── Diabatic.png
│   ├── joint-cap.png
│   ├── joint-pain-spray.jpg
│   ├── joint-revive-cap.jpg
│   └── joint-revive-cap2.jpg
│
└── src/
    ├── main.jsx                    # Entry point — mounts App, imports global CSS
    ├── App.jsx                     # Root — BrowserRouter, routes, ScrollToTop, Footer
    ├── App.css                     # Root-level reset
    ├── index.css                   # Imports globals.css
    │
    ├── styles/
    │   └── globals.css             # CSS variables, base resets, keyframe animations
    │
    ├── data/
    │   └── blogData.js             # All blog posts, categories, tags, nav & footer data
    │
    ├── components/
    │   ├── ScrollToTop.jsx         # Auto-scrolls to top on every route change
    │   ├── Header.jsx              # Sticky header with logo + mobile hamburger
    │   ├── Header.css
    │   ├── HeroBanner.jsx          # Full-width hero with overlay, badges, scroll hint
    │   ├── HeroBanner.css
    │   ├── BlogPage.jsx            # Main layout — category filter + blog grid + sidebar
    │   ├── BlogPage.css
    │   ├── CategoryNav.jsx         # Horizontal scrollable category tab bar
    │   ├── CategoryNav.css
    │   ├── BlogGrid.jsx            # 2-column responsive grid + pagination
    │   ├── BlogGrid.css
    │   ├── BlogCard.jsx            # Individual post card with image, tags, excerpt
    │   ├── BlogCard.css
    │   ├── Pagination.jsx          # Page navigation with ellipsis
    │   ├── Pagination.css
    │   ├── Sidebar.jsx             # Sidebar wrapper (tags + social)
    │   ├── Sidebar.css
    │   ├── Widget.css              # Shared widget base styles (title, border, shadow)
    │   ├── NewsletterWidget.jsx    # Email signup with validation + success state
    │   ├── NewsletterWidget.css
    │   ├── TagsWidget.jsx          # Clickable tag cloud — filters the blog grid
    │   ├── TagsWidget.css
    │   ├── SocialWidget.jsx        # Social media link buttons
    │   ├── SocialWidget.css
    │   ├── Footer.jsx              # 4-column footer with logo home link + company routes
    │   └── Footer.css
    │
    └── pages/
        ├── MainBlogPage.jsx        # Full blog post view with reading progress bar
        ├── BlogPost.css
        ├── CompanyPage.jsx         # Reusable company page layout (hero + sections)
        ├── CompanyPage.css
        ├── about.jsx               # /about
        ├── csr.jsx                 # /csr-policy
        ├── leadership.jsx          # /leadership
        ├── certifications.jsx      # /certifications
        └── awards.jsx              # /awards
```

---

## 🚀 Getting Started

**Prerequisites:** Node.js 18+ and npm

```bash
# 1. Clone the repository
git clone https://github.com/your-username/nutrahealth-blog.git

# 2. Navigate into the project
cd nutrahealth-blog

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## 🏗️ Build for Production

```bash
# Create optimised build
npm run build

# Preview the production build locally
npm run preview
```

Output goes to the `dist/` folder, ready to deploy to Vercel, Netlify, or any static host.

---

## 🗺️ Pages & Routes

| Route | Component | Description |
|---|---|---|
| `/` | `HeroBanner` + `BlogPage` | Homepage — hero, category filters, blog grid, sidebar |
| `/blog/:slug` | `MainBlogPage` | Individual blog post with reading progress bar |
| `/about` | `about.jsx` | About the platform |
| `/csr-policy` | `csr.jsx` | Corporate Social Responsibility |
| `/leadership` | `leadership.jsx` | Team and values |
| `/certifications` | `certifications.jsx` | Standards and certifications |
| `/awards` | `awards.jsx` | Recognition and achievements |

> All routes automatically scroll to the top on navigation via `ScrollToTop.jsx`.

---

## ✨ Features

**Blog Listing Page**
- Category filter tabs — filter posts by Health, Joint Care, Hair Care, Diabetes, Weight Management, Pain Relief, and Supplements
- Tag cloud in sidebar — click any tag to filter posts
- 2-column responsive blog grid with card hover animations (lift + image zoom + gradient overlay)
- Pagination with ellipsis for large post counts
- Combined category + tag filtering

**Blog Post Page**
- Dynamic routing via `/blog/:slug`
- Reading progress bar fixed at the top of the screen
- Structured content rendering (paragraphs, h2, h3, lists, quotes, inline images)
- Tag pills, author meta, back navigation

**Site-wide**
- Sticky header with glassmorphism blur effect and scroll shadow
- Hero banner with background image, grain texture, animated badges
- Scroll-to-top on every route change (including browser back button)
- Footer logo navigates home
- Company page links in footer use React Router (no `#` jumps)
- Newsletter signup with email validation and success state
- Fully responsive — mobile, tablet, and desktop layouts

---

## 🎨 Design System

**Fonts** (loaded via Google Fonts)
- `Playfair Display` — headings and display text
- `DM Sans` — body text and UI

**Colour Palette** — defined as CSS variables in `src/styles/globals.css`

| Variable | Value | Usage |
|---|---|---|
| `--cream` | `#faf6ef` | Page background |
| `--warm-white` | `#fff9f2` | Cards, widgets |
| `--brown` | `#3d2b1f` | Headings, footer background |
| `--brown-mid` | `#6b4226` | Subheadings |
| `--amber` | `#c4843a` | Primary accent, CTAs |
| `--amber-light` | `#e8a84a` | Highlights, hover states |
| `--amber-bg` | `#f0e6d3` | Tag backgrounds, nav hover |
| `--muted` | `#7a6558` | Secondary text |
| `--border` | `#e8d8c4` | Dividers, card borders |

**Animations** — defined in `globals.css`
- `fadeInUp` — page load card entrance
- `fadeIn` — subtle opacity entrance
- `slideDown` — mobile nav dropdown
- `bounce` — hero scroll hint arrow

---

## 🛠️ Customization

### Adding or editing blog posts

Open `src/data/blogData.js` and add an object to the `blogPosts` array:

```js
{
  id: 7,
  image: "/your-image.png",        // Place image in /public
  author: "Admin",
  date: "Mar 10, 2026",
  tags: ["Health", "Wellness"],
  title: "Your Post Title",
  excerpt: "Short description shown on the card.",
  slug: "your-post-slug",          // Must be unique — used in the URL
  content: [
    { type: "paragraph", text: "Introduction paragraph..." },
    { type: "h2", text: "A Section Heading" },
    { type: "list", items: ["Point one", "Point two"] },
  ],
}
```

**Supported content block types:** `paragraph`, `h2`, `h3`, `list`, `image`, `quote`

### Updating categories, tags, nav, and footer

All site data lives in `src/data/blogData.js`:

```js
export const categories = [ ... ]      // Category filter tabs
export const allTags     = [ ... ]      // Sidebar tag cloud
export const navLinks    = [ ... ]      // Header navigation
export const footerData  = { ... }      // Footer columns
```

### Changing colours

Edit the CSS variables at the top of `src/styles/globals.css`. Every component uses these variables, so changes apply site-wide.

---

## 🧰 Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| React Router DOM | 7.13 | Client-side routing |
| Vite | 5.4 | Dev server and bundler |
| Plain CSS | — | Scoped per-component styles |
| Google Fonts | — | Playfair Display + DM Sans |

No CSS frameworks, no UI libraries — just React and hand-written CSS with CSS custom properties.

---

## 📄 License

MIT — free to use, modify, and distribute.
