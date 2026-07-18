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
    id: 'vo',
    name: 'VO',
    shortName: 'VO',
    slug: 'vo',
    monogram: 'VO',
    accent: '#171717',
    description: 'A reviewed AI website build for a modern gym landing page, with emphasis on preserving the desktop quality while rebuilding the mobile layout.',
    cardDescription: 'Review the VO gym site, open the live page, and document mobile-specific observations after review.',
    ...sharedRequest,
    dateCreated: '18 July 2026',
    status: 'Awaiting owner observations',
    originalPrompt: initialGymPrompt,
    firstOutput: {
      summary: 'VO produced a gym website from the initial prompt. The desktop view is accepted; the mobile review is pending owner observations.',
      codeSummary: 'Generated website output to be reviewed through the attached live page instead of duplicate screenshots.',
      notes: 'No default observations are included. Add only the problems supplied after reviewing the live page.',
      previewUrl: '',
    },
    screenshots: emptyScreenshots,
    problems: [],
    correctionPrompt: mobileFixPrompt,
    correctedOutput: {
      summary: 'The correction request asks VO to reconstruct the mobile layout instead of compressing the desktop layout.',
      changes: [],
      fixed: 'Post-correction findings will be documented after the corrected mobile and desktop views are reviewed.',
      remainingLimitations: [],
      previewUrl: '',
    },
    finalComparison: emptyComparison,
  },
  ...['Lovable', 'Bolt.new', 'Replit Agent', 'Framer AI'].map((name, index) => ({
    id: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    name,
    shortName: name.split(/[ .]/)[0],
    slug: name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, ''),
    monogram: name[0],
    accent: ['#d94773', '#5d4af4', '#f26207', '#0878ff'][index],
    description: 'Case study shell ready for the gym prompt, live page link, and owner-supplied observations.',
    cardDescription: 'Open the case study structure and add only real observations when they are available.',
    ...sharedRequest,
    dateCreated: '18 July 2026',
    status: 'Awaiting owner observations',
    originalPrompt: initialGymPrompt,
    firstOutput: {
      summary: 'Initial output review has not been documented yet.',
      codeSummary: 'Attach the generated page link when available so it can be reviewed directly.',
      notes: 'No dummy observations are included.',
      previewUrl: '',
    },
    screenshots: emptyScreenshots,
    problems: [],
    correctionPrompt: mobileFixPrompt,
    correctedOutput: {
      summary: 'Corrected output review has not been documented yet.',
      changes: [],
      fixed: 'No correction findings have been documented yet.',
      remainingLimitations: [],
      previewUrl: '',
    },
    finalComparison: emptyComparison,
  })),
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
