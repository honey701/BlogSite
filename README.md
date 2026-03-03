# Nutraj Blog – React Project

A pixel-faithful React replica of the [Nutraj Blog page](https://www.nutraj.com/blogs/nutraj-blogs), built with Vite + plain CSS modules.

## 📁 Project Structure

```
nutraj-blog/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                 # Entry point
    ├── App.jsx                  # Root component
    ├── styles/
    │   └── globals.css          # CSS variables + base styles
    ├── data/
    │   └── blogData.js          # Blog posts, categories, tags, nav & footer data
    └── components/
        ├── AnnouncementBar.jsx  # Scrolling top promo bar
        ├── Header.jsx           # Sticky nav with mobile menu
        ├── HeroBanner.jsx       # Full-width hero with background image
        ├── BlogPage.jsx         # Main page layout (category filter + grid + sidebar)
        ├── CategoryNav.jsx      # Horizontal category tabs
        ├── BlogGrid.jsx         # 2-column grid of cards + pagination
        ├── BlogCard.jsx         # Individual blog card
        ├── Pagination.jsx       # Page navigation
        ├── Sidebar.jsx          # Sidebar wrapper
        ├── NewsletterWidget.jsx # Email signup with validation
        ├── TagsWidget.jsx       # Interactive tag cloud
        ├── SocialWidget.jsx     # Social media links
        └── Footer.jsx           # 4-column footer
```

## 🚀 Getting Started

```bash
# 1. Navigate into the project
cd nutraj-blog

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173)

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

## ✨ Features

- **Scrolling announcement bar** with marquee animation
- **Sticky header** with scroll shadow + mobile hamburger menu
- **Hero banner** with background image, badges, and scroll hint
- **Category filter tabs** — filter posts by category
- **2-column blog grid** with hover animations (lift + image zoom)
- **Pagination** with page state
- **Sticky sidebar** with:
  - Newsletter signup (with validation + success state)
  - Interactive tag cloud
  - Social media links
- **Fully responsive** — adapts to mobile/tablet
- **No dependencies** beyond React — plain CSS with CSS variables

## 🎨 Design

- **Fonts**: Playfair Display (headings) + DM Sans (body)
- **Palette**: Warm cream, deep brown, amber gold
- **CSS Variables** for consistent theming — easy to customize

## 🛠️ Customization

Update `src/data/blogData.js` to change posts, categories, tags, nav links, and footer links.
