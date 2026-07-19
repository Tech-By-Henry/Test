const sharedRequest = {
  title: 'Modern Gym Website',
  category: 'Fitness / Gym',
  screenSizes: { desktop: '1440 × 900', mobile: '390 × 844 (iPhone 14)' },
}

const initialGymPrompt = `i want you to build a website for my gym i want something nice and sleek and very modern not a generic ai generated type of design do you understand use clean pictures and nice gym related icons and fonts`

const mobileFixPrompt = `this is nice but your only problem is that your mobile view is not very nice and this is because you are compressing the desktop view instead of reconstructing a design layout that works for phone screens and fro laptop screens.... that is the problem`

const emptyScreenshots = { firstDesktop: '', firstMobile: '', correctedDesktop: '', correctedMobile: '' }
const emptyComparison = { improvements: [], fixedProblems: [], remainingProblems: [] }

export const aiCaseStudies = [
  {
    id: 'v0',
    name: 'v0 by Vercel',
    shortName: 'v0',
    slug: 'v0',
    monogram: 'v0',
    accent: '#171717',
    description: 'A strong AI website build that translated the brief into more than a polished interface: it created a distinctive visual atmosphere and a convincing sense of energy for the gym brand.',
    cardDescription: 'An 8/10 gym website with a distinctive visual feel and one focused correction to its mobile layout.',
    ...sharedRequest,
    dateCreated: '18 July 2026',
    status: 'Mobile correction documented',
    originalPrompt: initialGymPrompt,
    firstOutput: {
      summary: 'v0 produced a polished gym website with a strong visual identity and a design that communicates the energy and character of the brand.',
      resultSummary: 'Bold typography, focused gym imagery, clear calls to action, and a confident dark visual direction give the website a strong identity.',
      notes: 'Its strongest quality is that it responds to the intended feel of the experience, not only the requested UI elements. The desktop design was already very good; the mobile layout was the only area that needed correction.',
      previewUrl: '',
    },
    screenshots: {
      firstDesktop: '',
      firstMobile: '/images/v0/v0 initial problematic mobile view.png',
      correctedDesktop: '',
      correctedMobile: '/images/v0/vo fixed mobile view.png',
    },
    problems: [
      {
        id: 'v0-mobile-layout',
        category: 'Mobile responsiveness',
        title: 'Desktop composition carried over too directly to mobile',
        description: 'The first mobile version felt like a compressed desktop layout rather than a composition designed specifically for a phone screen. This weakened an otherwise strong result.',
        severity: 'Medium',
        recommendedFix: 'Reconstruct the navigation, spacing, content flow, and responsive proportions for mobile while preserving the visual character of the desktop design.',
      },
    ],
    correctionPrompt: mobileFixPrompt,
    correctedOutput: {
      summary: 'v0 reconstructed the mobile presentation so it feels intentionally designed for a phone rather than compressed from the desktop version.',
      changes: ['Reworked the mobile navigation and header', 'Improved mobile spacing and content flow', 'Preserved the original visual identity across screen sizes'],
      fixed: 'The corrected mobile view retains the strength and atmosphere of the desktop design while fitting the smaller screen more naturally.',
      remainingLimitations: [],
      previewUrl: '',
    },
    finalComparison: {
      reviewTitle: 'A very good design AI with a distinctive sense of feel.',
      review: 'v0 stands out because it responds not only to layout and interface requirements, but also to the atmosphere the design should create. That gives the result a level of character that feels unique among the tools reviewed so far.',
      improvements: ['A purpose-built mobile composition', 'Stronger spacing and hierarchy on phone screens', 'The original desktop character was preserved'],
      fixedProblems: ['The desktop layout no longer feels compressed on mobile'],
      remainingProblems: [],
      score: 8,
    },
  },
  ...['Lovable', 'Bolt.new', 'Replit Agent', 'Framer AI'].map((name, index) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    name,
    shortName: name.split(/[ .]/)[0],
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    monogram: name[0],
    accent: ['#d94773', '#5d4af4', '#f26207', '#0878ff'][index],
    description: 'This gym website is awaiting a full design and usability review.',
    cardDescription: 'The initial and revised designs have not been evaluated yet.',
    ...sharedRequest,
    dateCreated: '18 July 2026',
    status: 'Awaiting owner observations',
    originalPrompt: initialGymPrompt,
    firstOutput: {
      summary: 'The first version has not been evaluated yet.',
      resultSummary: 'Design observations will appear after the website has been reviewed.',
      notes: 'A full visual and usability review is still pending.',
      previewUrl: '',
    },
    screenshots: emptyScreenshots,
    problems: [],
    correctionPrompt: mobileFixPrompt,
    correctedOutput: {
      summary: 'A revised version has not been evaluated yet.',
      changes: [],
      fixed: 'Correction results are not available yet.',
      remainingLimitations: [],
      previewUrl: '',
    },
    finalComparison: emptyComparison,
  })),
]

export const getCaseStudy = (slug) => aiCaseStudies.find((study) => study.slug === slug || (slug === 'vo' && study.slug === 'v0'))

export const caseStudySections = [
  { id: 'preview', label: 'Website Experience' },
  { id: 'original-prompt', label: 'Original Prompt' },
  { id: 'first-output', label: 'Initial Result' },
  { id: 'desktop-screenshot', label: 'Desktop Screenshot' },
  { id: 'mobile-screenshot', label: 'Mobile Screenshot' },
  { id: 'problems', label: 'Problems Found' },
  { id: 'correction-prompt', label: 'Correction Prompt' },
  { id: 'corrected-output', label: 'Revised Result' },
  { id: 'corrected-desktop', label: 'Corrected Desktop' },
  { id: 'corrected-mobile', label: 'Corrected Mobile' },
  { id: 'comparison', label: 'Final Comparison' },
]
