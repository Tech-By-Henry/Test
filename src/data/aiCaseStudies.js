const sharedRequest = {
  title: 'The Good Plate — Restaurant Landing Page',
  category: 'Hospitality / Restaurant',
  screenSizes: { desktop: '1440 × 900', mobile: '390 × 844' },
}

export const aiCaseStudies = [
  {
    id: 'v0',
    name: 'v0 by Vercel',
    shortName: 'v0',
    slug: 'v0',
    monogram: 'v0',
    accent: '#171717',
    description: 'An AI interface generator that creates React components and polished web layouts from natural-language prompts.',
    cardDescription: 'Examining how a strong visual first pass handled hierarchy, accessibility, and mobile navigation.',
    ...sharedRequest,
    dateCreated: '12 July 2026',
    status: 'Correction documented',
    originalPrompt: `Create a modern one-page website for “The Good Plate,” a neighborhood restaurant focused on seasonal, locally sourced food.

Include a hero with a reservation call-to-action, an about section, a featured menu with six dishes and prices, customer testimonials, opening hours, location details, and a footer. Use warm earth tones, editorial typography, and large food photography. The page should feel welcoming, premium, and work on desktop and mobile.`,
    firstOutput: {
      summary: 'v0 generated a polished React landing page with a large editorial hero, menu cards, testimonial blocks, and a full contact footer.',
      codeSummary: 'React components styled with utility classes, icon components, responsive grid layouts, and reusable buttons.',
      notes: 'The output established a convincing visual direction quickly, but the hero contrast and compact-screen navigation needed attention.',
      previewUrl: '',
    },
    screenshots: { firstDesktop: '', firstMobile: '', correctedDesktop: '', correctedMobile: '' },
    problems: [
      { id: 'v0-1', category: 'Accessibility', title: 'Hero copy lacks contrast', description: 'White text crosses bright areas of the photograph, making the supporting copy difficult to read.', severity: 'High', recommendedFix: 'Add a consistent dark overlay and verify a minimum 4.5:1 text contrast ratio.' },
      { id: 'v0-2', category: 'Mobile responsiveness', title: 'Navigation actions collide', description: 'The reservation button and menu links compete for limited width below 420px.', severity: 'High', recommendedFix: 'Replace the desktop navigation with an accessible mobile menu at the tablet breakpoint.' },
      { id: 'v0-3', category: 'Content', title: 'Dietary details are unclear', description: 'Featured dishes have descriptions but no vegetarian, vegan, or allergen indicators.', severity: 'Medium', recommendedFix: 'Add concise dietary labels and a short allergen disclaimer near the menu.' },
      { id: 'v0-4', category: 'Navigation', title: 'Current section is not indicated', description: 'Long-page navigation offers no feedback about the visitor’s position.', severity: 'Low', recommendedFix: 'Use section-aware navigation styles and visible keyboard focus states.' },
    ],
    correctionPrompt: `Revise the restaurant landing page without changing its warm editorial direction.

1. Add a dark image overlay so all hero text meets WCAG AA contrast.
2. Replace the navigation with a keyboard-accessible mobile menu below 768px.
3. Add vegetarian, vegan, and gluten-free labels to relevant menu items plus an allergen note.
4. Add visible focus states and indicate the active section in the navigation.
5. Check every section at 390px wide and remove horizontal overflow.`,
    correctedOutput: {
      summary: 'The revision retained the original visual character while making the hero, navigation, and menu information easier to use.',
      changes: ['Added a controlled hero overlay', 'Introduced a compact mobile menu', 'Added dietary tags and allergen guidance', 'Improved focus and active states'],
      fixed: 'All high-severity issues were resolved, and the mobile layout now maintains comfortable spacing at 390px.',
      remainingLimitations: ['Menu content is still static and does not reflect daily availability.'],
      previewUrl: '',
    },
    finalComparison: { improvements: ['More legible hero content', 'Reliable small-screen navigation', 'Clearer menu decision-making'], fixedProblems: ['Contrast failure', 'Mobile navigation collision', 'Missing dietary information'], remainingProblems: ['No live reservation integration'], score: 9 },
  },
  {
    id: 'lovable',
    name: 'Lovable',
    shortName: 'Lovable',
    slug: 'lovable',
    monogram: 'L',
    accent: '#d94773',
    description: 'A conversational full-stack product builder designed to turn written product ideas into usable web applications.',
    cardDescription: 'A review of a visually warm output with issues around menu scanning, form clarity, and motion preferences.',
    ...sharedRequest,
    dateCreated: '13 July 2026',
    status: 'Correction documented',
    originalPrompt: `Design and build a responsive landing page for “The Good Plate,” an independent farm-to-table restaurant.

The website needs a welcoming hero, a short brand story, six featured menu items with prices, three testimonials, opening hours, address, a simple reservation form, and a footer. Use a warm cream, terracotta, and deep green palette. Make it feel handmade but refined, and prioritize mobile usability.`,
    firstOutput: {
      summary: 'Lovable created a complete restaurant page with expressive typography, alternating content sections, a menu grid, and an embedded reservation form.',
      codeSummary: 'A component-based React page with responsive sections, decorative transitions, form controls, and a color-token system.',
      notes: 'The brand treatment felt distinctive, though form feedback and menu hierarchy were less resolved than the overall visual concept.',
      previewUrl: '',
    },
    screenshots: { firstDesktop: '', firstMobile: '', correctedDesktop: '', correctedMobile: '' },
    problems: [
      { id: 'lovable-1', category: 'Functional', title: 'Reservation form gives no feedback', description: 'Submitting the form neither confirms success nor explains incomplete fields.', severity: 'High', recommendedFix: 'Add inline validation, a clear submission state, and an accessible success message.' },
      { id: 'lovable-2', category: 'Layout', title: 'Menu prices are hard to scan', description: 'Prices sit at inconsistent positions because dish descriptions vary in length.', severity: 'Medium', recommendedFix: 'Use a stable card layout that aligns prices to a consistent edge or baseline.' },
      { id: 'lovable-3', category: 'Accessibility', title: 'Motion cannot be reduced', description: 'Section reveal animations run for every visitor and do not honor system preferences.', severity: 'Medium', recommendedFix: 'Disable non-essential motion within prefers-reduced-motion.' },
      { id: 'lovable-4', category: 'Content', title: 'Address is not actionable', description: 'The location is plain text, requiring mobile users to copy it into a maps app.', severity: 'Low', recommendedFix: 'Link the address to a map and provide a clear Get directions label.' },
    ],
    correctionPrompt: `Improve the current page while preserving its cream, terracotta, and green brand system.

Make the reservation form fully understandable: add labels, inline error messages, a loading state, and an accessible success confirmation. Align all menu prices consistently even when descriptions wrap. Respect prefers-reduced-motion and keep the page usable with animations disabled. Turn the restaurant address into a descriptive directions link. Recheck the complete experience at 390px and 768px.`,
    correctedOutput: {
      summary: 'The corrected version focused on task completion and scanning without flattening Lovable’s original visual personality.',
      changes: ['Added form validation and status messaging', 'Aligned the menu grid and pricing', 'Honored reduced-motion settings', 'Added a directions link'],
      fixed: 'The form now communicates errors and success to visual and assistive-technology users.',
      remainingLimitations: ['The demonstration form does not connect to a real booking service.'],
      previewUrl: '',
    },
    finalComparison: { improvements: ['Clear reservation flow', 'Faster menu scanning', 'More inclusive motion behavior'], fixedProblems: ['Silent form submission', 'Uneven menu prices', 'Uncontrolled animation'], remainingProblems: ['No production booking endpoint'], score: 8.7 },
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    shortName: 'Bolt',
    slug: 'bolt',
    monogram: 'B',
    accent: '#5d4af4',
    description: 'A browser-based AI development environment for prompting, running, editing, and deploying full web projects.',
    cardDescription: 'Testing a feature-rich first attempt for information structure, performance, and keyboard interaction.',
    ...sharedRequest,
    dateCreated: '14 July 2026',
    status: 'Correction documented',
    originalPrompt: `Build a premium responsive website for “The Good Plate,” a local seasonal restaurant.

Create a hero, story, featured food menu, testimonials, opening hours, contact details, and reservation call-to-action. Use natural colors, elegant type, generous photography, subtle animation, and a sticky navigation. The website should load quickly and be easy to use on phones.`,
    firstOutput: {
      summary: 'Bolt.new produced a feature-rich page with sticky navigation, layered imagery, animated statistics, menu filters, and multiple calls to action.',
      codeSummary: 'Vite and React with a single-page component tree, icon package, intersection-based animation, and image-heavy card layouts.',
      notes: 'The output felt complete, but decorative complexity introduced performance overhead and several interaction gaps.',
      previewUrl: '',
    },
    screenshots: { firstDesktop: '', firstMobile: '', correctedDesktop: '', correctedMobile: '' },
    problems: [
      { id: 'bolt-1', category: 'Accessibility', title: 'Menu filters are mouse-dependent', description: 'The custom filter controls do not expose selection state or work consistently from the keyboard.', severity: 'High', recommendedFix: 'Use native buttons with aria-pressed, logical tab order, and visible focus states.' },
      { id: 'bolt-2', category: 'Mobile responsiveness', title: 'Decorative images overflow', description: 'Layered hero images push the document wider than the viewport on small screens.', severity: 'High', recommendedFix: 'Remove the overlapping treatment on mobile and contain all media within the page grid.' },
      { id: 'bolt-3', category: 'Visual design', title: 'Too many competing accents', description: 'Badges, statistics, cards, and decorative marks compete with the reservation action.', severity: 'Medium', recommendedFix: 'Reduce secondary accents and establish one dominant action per section.' },
      { id: 'bolt-4', category: 'Functional', title: 'Images load at full size', description: 'Large photography is requested without responsive sources or lazy loading.', severity: 'Medium', recommendedFix: 'Add responsive image sources, dimensions, modern formats, and lazy loading below the fold.' },
    ],
    correctionPrompt: `Refine this implementation for accessibility, responsive stability, and speed.

Convert the menu filters to semantic buttons with aria-pressed state, full keyboard support, and visible focus. At widths below 640px, remove overlapping hero imagery and guarantee zero horizontal overflow. Simplify secondary decoration so the reservation action is visually dominant. Add responsive image sizing, explicit dimensions, lazy loading below the hero, and a reduced-motion fallback.`,
    correctedOutput: {
      summary: 'The second output simplified the visual system and rebuilt the filter interaction with semantic controls.',
      changes: ['Rebuilt filter buttons for keyboard use', 'Contained the mobile hero', 'Reduced decorative UI', 'Optimized below-fold images'],
      fixed: 'Keyboard navigation and mobile layout are now predictable, with a noticeably lighter initial page load.',
      remainingLimitations: ['Performance numbers remain estimates until tested with final production photography.'],
      previewUrl: '',
    },
    finalComparison: { improvements: ['Stable viewport at all sizes', 'Operable menu filters', 'Stronger CTA hierarchy'], fixedProblems: ['Keyboard exclusion', 'Horizontal overflow', 'Unoptimized image loading'], remainingProblems: ['Final media still requires production compression'], score: 9.1 },
  },
  {
    id: 'replit',
    name: 'Replit Agent',
    shortName: 'Replit',
    slug: 'replit',
    monogram: 'R',
    accent: '#f26207',
    description: 'An autonomous coding agent that plans, builds, and tests software projects inside the Replit workspace.',
    cardDescription: 'Assessing a structurally sound build with gaps in content fidelity, navigation, and touch sizing.',
    ...sharedRequest,
    dateCreated: '15 July 2026',
    status: 'Correction documented',
    originalPrompt: `Create a complete one-page restaurant website for “The Good Plate.” It is a neighborhood restaurant serving seasonal food from local farms.

Include navigation, a hero, our story, a six-item menu, testimonials, business hours, address, contact information, and a reservation button. The style should be modern, warm, and editorial. It must be responsive and accessible.`,
    firstOutput: {
      summary: 'Replit Agent returned a clean, conventional restaurant page with a clear section order, working anchors, menu cards, and a compact footer.',
      codeSummary: 'A Vite React app using modular content components, responsive CSS breakpoints, and a straightforward navigation system.',
      notes: 'The implementation was dependable but used generic copy and missed several details implied by the accessibility requirement.',
      previewUrl: '',
    },
    screenshots: { firstDesktop: '', firstMobile: '', correctedDesktop: '', correctedMobile: '' },
    problems: [
      { id: 'replit-1', category: 'Content', title: 'Testimonials feel fabricated', description: 'Generic names and vague quotes reduce credibility and are not labeled as sample content.', severity: 'Medium', recommendedFix: 'Use clearly marked placeholder testimonials until verified customer quotes are available.' },
      { id: 'replit-2', category: 'Navigation', title: 'Sticky header hides section titles', description: 'Anchor links position headings underneath the fixed navigation bar.', severity: 'Medium', recommendedFix: 'Apply scroll-margin-top to every anchor target based on the header height.' },
      { id: 'replit-3', category: 'Mobile responsiveness', title: 'Touch targets are undersized', description: 'Several navigation and social links are smaller than a comfortable touch target.', severity: 'High', recommendedFix: 'Give interactive controls at least a 44 × 44px activation area.' },
      { id: 'replit-4', category: 'Accessibility', title: 'Heading levels skip', description: 'Menu card titles use heading levels that do not follow the page outline.', severity: 'Low', recommendedFix: 'Use a sequential heading hierarchy based on section nesting.' },
    ],
    correctionPrompt: `Correct the current implementation while keeping its simple, editorial layout.

Label all unverified testimonials as sample content. Fix anchor scrolling so no heading is hidden by the sticky header. Ensure every link, menu control, and social button has at least a 44 by 44 pixel touch area. Audit the heading outline so levels are sequential. Also add a skip link and confirm that keyboard focus remains visible across the page.`,
    correctedOutput: {
      summary: 'The correction strengthened the page’s semantic structure and made navigation more comfortable on touch and keyboard devices.',
      changes: ['Added content-status labels', 'Corrected anchor offsets', 'Expanded touch targets', 'Repaired heading order and added a skip link'],
      fixed: 'The corrected build meets the interaction requirements more clearly while preserving the original restrained design.',
      remainingLimitations: ['Real testimonials and final business contact details still need client approval.'],
      previewUrl: '',
    },
    finalComparison: { improvements: ['More honest placeholder content', 'Reliable anchor navigation', 'Comfortable touch interaction'], fixedProblems: ['Hidden headings', 'Small controls', 'Inconsistent document outline'], remainingProblems: ['Client-supplied copy is pending'], score: 8.5 },
  },
  {
    id: 'framer',
    name: 'Framer AI',
    shortName: 'Framer',
    slug: 'framer',
    monogram: 'F',
    accent: '#0878ff',
    description: 'An AI-assisted visual website builder focused on responsive layouts, publishing, and expressive interaction design.',
    cardDescription: 'Reviewing a highly art-directed concept for readability, responsive order, and interaction restraint.',
    ...sharedRequest,
    dateCreated: '16 July 2026',
    status: 'Correction documented',
    originalPrompt: `Generate a visually striking one-page site for “The Good Plate,” a farm-to-table neighborhood restaurant.

Use editorial composition, oversized type, warm neutral colors, and immersive food imagery. Include a hero reservation action, restaurant story, seasonal menu, reviews, hours, location, and footer. Make the site responsive with tasteful scroll animation and a premium magazine feel.`,
    firstOutput: {
      summary: 'Framer AI created the most art-directed concept: oversized headlines, asymmetrical imagery, horizontal menu cards, and layered scroll effects.',
      codeSummary: 'A responsive Framer composition using positioned frames, breakpoint variants, scroll transforms, and component-level interactions.',
      notes: 'The strong art direction came at the expense of reading order and dependable behavior on narrow screens.',
      previewUrl: '',
    },
    screenshots: { firstDesktop: '', firstMobile: '', correctedDesktop: '', correctedMobile: '' },
    problems: [
      { id: 'framer-1', category: 'Mobile responsiveness', title: 'Reading order breaks on mobile', description: 'Visually repositioned story fragments appear in a confusing sequence when the layout stacks.', severity: 'High', recommendedFix: 'Match the DOM and visual reading order, then use a simple single-column mobile composition.' },
      { id: 'framer-2', category: 'Accessibility', title: 'Text is embedded in imagery', description: 'Two menu labels are part of background images and cannot resize or be read by assistive technology.', severity: 'High', recommendedFix: 'Recreate every label as live HTML text and provide meaningful image alternatives.' },
      { id: 'framer-3', category: 'Visual design', title: 'Display type overwhelms content', description: 'Very large headings force awkward line breaks and push practical information below the fold.', severity: 'Medium', recommendedFix: 'Use fluid but capped typography and reduce headline scale at intermediate widths.' },
      { id: 'framer-4', category: 'Navigation', title: 'Scroll effects obscure link targets', description: 'Moving layers can briefly overlap calls to action during scroll.', severity: 'Medium', recommendedFix: 'Keep interactive controls in a stable layer and reduce scroll transforms around them.' },
    ],
    correctionPrompt: `Preserve the premium editorial character but rebuild the responsive and semantic behavior.

Make the source order match the intended reading order and use a straightforward single column below 640px. Replace all text inside images with live HTML text. Use clamp() with sensible maximums for display headings. Keep every link and button on a stable layer, reduce scroll-linked motion near interactive elements, and fully disable decorative movement when reduced motion is requested.`,
    correctedOutput: {
      summary: 'The corrected composition keeps the dramatic typography and photography but uses a much clearer content order and safer interactions.',
      changes: ['Aligned DOM and visual reading order', 'Replaced image text with live content', 'Capped fluid heading sizes', 'Separated controls from scroll effects'],
      fixed: 'The mobile page now reads naturally and all core content remains accessible without relying on imagery.',
      remainingLimitations: ['Some editorial layouts still require manual breakpoint tuning when copy length changes.'],
      previewUrl: '',
    },
    finalComparison: { improvements: ['Logical mobile story flow', 'Accessible menu content', 'More controlled typography and motion'], fixedProblems: ['Broken reading order', 'Inaccessible image text', 'Obscured controls'], remainingProblems: ['Long copy may need breakpoint review'], score: 8.9 },
  },
]

export const getCaseStudy = (slug) => aiCaseStudies.find((study) => study.slug === slug)

export const caseStudySections = [
  { id: 'preview', label: 'Website Preview' },
  { id: 'original-prompt', label: 'Original Prompt' },
  { id: 'first-output', label: 'First Output' },
  { id: 'desktop-screenshot', label: 'Desktop Screenshot' },
  { id: 'mobile-screenshot', label: 'Mobile Screenshot' },
  { id: 'problems', label: 'Problems Found' },
  { id: 'correction-prompt', label: 'Correction Prompt' },
  { id: 'corrected-output', label: 'Corrected Output' },
  { id: 'corrected-desktop', label: 'Corrected Desktop' },
  { id: 'corrected-mobile', label: 'Corrected Mobile' },
  { id: 'comparison', label: 'Final Comparison' },
]
