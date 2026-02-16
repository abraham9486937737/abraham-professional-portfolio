# Abraham PonnuRaj – Premium Corporate Portfolio (React + Vite)

## 1) Project Setup (Step-by-step)

1. Open terminal in the project root:
   - `E:\Resume\abu_portfolio_mobile_friendly`
2. Install dependencies:
   - `npm install`
3. Start development server:
   - `npm run dev`
4. Open the URL shown by Vite (usually `http://localhost:5173`).
5. For production build:
   - `npm run build`
6. Preview production build locally:
   - `npm run preview`

## 2) Tech Stack

- React + Vite
- Tailwind CSS
- Framer Motion
- React Icons
- GitHub Pages deployment using `gh-pages`

## 3) Folder Structure

```text
src/
 ├── assets/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── Hero.jsx
 │    ├── About.jsx
 │    ├── Skills.jsx
 │    ├── Experience.jsx
 │    ├── Projects.jsx
 │    ├── Certifications.jsx
 │    ├── Contact.jsx
 │    └── Footer.jsx
 ├── data/
 │    ├── projects.js
 │    ├── experience.js
 │    └── skills.js
 ├── App.jsx
 ├── main.jsx
 └── styles.css
```

## 4) Tailwind Configuration

- Config file: `tailwind.config.js`
- Content scan:
  - `./index.html`
  - `./src/**/*.{js,jsx}`
- Theme extension includes:
  - Navy palette for premium dark UI
  - Blue accent palette
  - `Inter` font stack
  - `glass` shadow utility

## 5) UX/Performance Features Implemented

- Fully responsive layout (mobile to ultra-wide)
- Sticky navbar with mobile menu
- Smooth scroll section navigation
- Section fade-in animations on scroll
- Micro interactions on cards/buttons
- Animated skill progress bars
- Glassmorphism cards
- Minimal loading transition overlay
- Lazy-loaded sections using `React.lazy`
- Semantic structure + accessibility focus styles
- SEO metadata in `index.html`

## 6) GitHub Pages Deployment

### Option A: Quick deploy using relative base (already configured)

1. Ensure repo is committed and pushed.
2. Run:
   - `npm run deploy`
3. In GitHub repository settings:
   - Open **Pages**
   - Source should point to `gh-pages` branch.

### Option B: If you want explicit repo subpath base

1. Update `vite.config.js`:
   - `base: '/<your-repo-name>/'`
2. Rebuild and deploy:
   - `npm run deploy`

## 7) Build Optimization Notes

- Production build uses modern target (`es2018`) and no source maps for smaller output.
- Use optimized assets in `public/images`.
- Keep data-driven sections in `src/data` for maintainability and lower component complexity.
- Continue adding image compression (WebP/AVIF) for further performance gains.

## 8) Resume File

- Place your resume PDF at:
  - `public/Abraham_PonnuRaj_Resume.pdf`
- The Hero "Download Resume" button points to that file.
