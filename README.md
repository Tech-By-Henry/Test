# AI Failure and Correction Pairs

A responsive React portfolio for documenting the first and corrected website outputs produced by five AI website-building tools. Every case-study page is generated from one central data file and includes prompts, output summaries, screenshots, identified issues, and a final score.

## Run locally

Requirements: Node.js `^20.19.0` or `>=22.12.0`, plus npm.

```bash
npm install
npm run dev
```

Vite will print the local development URL, usually `http://localhost:5173`.

Create an optimized production build with:

```bash
npm run build
npm run preview
```

Check the project with:

```bash
npm run lint
```

## Edit case-study content

All five entries live in [`src/data/aiCaseStudies.js`](src/data/aiCaseStudies.js). Edit an entry there to change:

- Tool names, descriptions, colors, dates, and status
- Original and correction prompts
- First and corrected output notes
- Screenshot paths and screen sizes
- Problems, categories, severity, and recommended fixes
- Final improvements, remaining issues, and score

Pages are selected by each entry's `slug`. You do not need to create a separate page component for each tool.

## Add screenshots

Place image files in the matching folder under `public/images`:

```text
public/images/v0/
public/images/lovable/
public/images/bolt/
public/images/replit/
public/images/framer/
```

Then add the public path to the appropriate `screenshots` field. For example:

```js
screenshots: {
  firstDesktop: '/images/v0/first-desktop.webp',
  firstMobile: '/images/v0/first-mobile.webp',
  correctedDesktop: '/images/v0/corrected-desktop.webp',
  correctedMobile: '/images/v0/corrected-mobile.webp',
}
```

Empty paths and failed image requests automatically show a styled fallback instead of a broken image.

Recommended formats are WebP or AVIF. Use meaningful filenames and compress large captures before adding them.

## Add another AI tool

1. Duplicate one object in `src/data/aiCaseStudies.js`.
2. Give it a unique `id` and URL-safe `slug`.
3. Replace every content field and set the tool's accent color and monogram.
4. Add its image folder under `public/images/<slug>/`.
5. Visit `/ai/<slug>` to review the generated page.

The new entry automatically appears on the home page and uses the shared `CaseStudyPage` route.

## Project structure

```text
src/
  components/       Reusable cards, navigation, prompts, evidence, and comparison UI
  data/             Central editable case-study data
  hooks/            Active-section tracking
  pages/            Home, shared case-study, and 404 pages
  styles/           Global responsive design system
  App.jsx           Application routes and layout
  main.jsx          React entry point
public/images/      Local screenshot folders
```
