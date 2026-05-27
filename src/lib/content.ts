/**
 * Single source of truth for all copy on the Stevie landing page.
 * Components read from here — never hardcode strings in JSX.
 */

export const site = {
  name: "Stevie",
  url: "https://stevieai.io",
  tagline: "One prompt. The whole trip.",
  description:
    "Tell Stevie where you're going — it books your flights, hotels, transfers, and the dinners in between, all from a single chat.",
} as const;

export const nav = {
  links: [
    { label: "How it works", href: "#how" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Book a Trip", href: "#book" },
} as const;

export const hero = {
  eyebrow: "Your AI Travel Concierge",
  headlinePrefix: "One prompt.",
  headlineEmphasis: "The whole trip.",
  subhead:
    "Tell Stevie where you're going — it books your flights, hotels, transfers, and the dinners in between, all from a single chat. One conversation, no tabs, no spreadsheets.",
  primaryCta: { label: "Book a Trip", href: "#book" },
  secondaryCta: { label: "See how it works", href: "#how" },
  stats: [
    { num: "1", suffix: "prompt", label: "Books your whole trip" },
    { num: "All-in-one", suffix: "", label: "Flights, hotels, transfers" },
    { num: "$0", suffix: "fees", label: "Best rates, always" },
  ],
  boardingPass: {
    airline: "Stevie",
    from: { code: "JFK", city: "New York" },
    to: { code: "LIS", city: "Lisbon" },
    fields: [
      { k: "Passenger", v: "A. Reyes" },
      { k: "Flight", v: "SV 218" },
      { k: "Gate", v: "B14" },
    ],
    seat: "12A",
  },
} as const;

export const marqueeDestinations = [
  "Lisbon", "Tokyo", "Mexico City", "Reykjavík", "Marrakech",
  "Buenos Aires", "Bangkok", "Cape Town", "Kyoto", "Oaxaca",
  "Hanoi", "Istanbul", "Seoul", "Athens", "Cartagena",
  "Sydney", "Porto", "Copenhagen", "Nairobi", "Barcelona",
] as const;

export const tryIt = {
  eyebrow: "Try it",
  headingPrefix: "Describe your trip.",
  headingEmphasis: "Stevie finds it.",
  lede:
    "Tell Stevie exactly what you want — quiet, walkable, under budget, near the water. It searches every airline and hotel at once, and books in a tap.",
  prompts: [
    "Warm weekend under $900, leaving Friday.",
    "Tokyo, cherry-blossom season, 8 days.",
    "Quiet beach week in November, direct flights.",
    "Family ski trip, Colorado, mid-March.",
    "Anniversary in Lisbon — old town, near the water.",
  ],
  chips: [
    { label: "Hotels · live", active: true },
    { label: "Flights · soon", active: false },
    { label: "Transfers · soon", active: false },
    { label: "Restaurants · soon", active: false },
    { label: "Activities · soon", active: false },
  ],
  footer:
    "Hotels are bookable today. Flights, transfers, and the rest are rolling out next — your whole trip, one conversation.",
} as const;

export const howItWorks = {
  eyebrow: "How it works",
  headingPrefix: "One sentence in,",
  headingEmphasis: "a whole trip out.",
  steps: [
    {
      number: "01",
      title: "Type one sentence.",
      body: "Tell Stevie what you want, in plain English.",
    },
    {
      number: "02",
      title: "See every option that fits.",
      body: "Stevie lays out every trip that matches your ask — flights, hotels, and the full price upfront.",
    },
    {
      number: "03",
      title: "Confirm. Pack. Go.",
      body: "One tap books the itinerary. Stevie keeps watch on every leg after.",
    },
  ],
} as const;

export const features = {
  eyebrow: "What's inside",
  headingPrefix: "An agent in your pocket.",
  headingEmphasis: "Honest prices on every leg.",
  lede:
    "Stevie fixes the two things travelers actually complain about: planning takes forever, and agents cost a fortune.",
  cards: [
    {
      tag: "Concierge chat",
      title: "Plan like you would with a friend who knows every airline schedule.",
      body: "Speak naturally — \"beaches in November, no 12-hour flights\" — and Stevie handles the rest. It remembers what you liked last time, too.",
    },
    {
      tag: "Best rates",
      title: "Lowest fares online, with no agent fee.",
      body: "Most travel agents charge $50–$100 per booking. Stevie earns from airline and hotel commissions — so you get the best rate available, and nothing extra to us.",
    },
  ],
  savingsBar: {
    label: "Same trip",
    agentLabel: "Typical travel agent",
    agentPrice: "$1,201",
    stevieLabel: "With Stevie",
    steviePrice: "$1,026",
    savingsLabel: "You save",
    savings: "$175",
    steviePct: 85.4,
  },
} as const;

export const rewardsTeaser = {
  tag: "Coming soon",
  text: "Rewards that don't lose value to inflation —",
  emphasis: "they grow with it.",
  linkLabel: "Learn more",
  linkHref: "/rewards",
} as const;

export const portfolio = {
  eyebrow: "The Rewards Rethink",
  headingPrefix: "Points that",
  headingEmphasis: "actually pay you back.",
  body:
    "Forget watching your miles depreciate. Every Stevie booking earns credit at a flat 4¢-per-dollar rate, redeemable as cash-style balance — toward your next trip, or sent straight to your bank.",
  stats: [
    { k: "4¢", v: "per dollar, every booking" },
    { k: "0", v: "blackout dates, ever" },
    { k: "Cash", v: "redeemable, not points" },
  ],
} as const;

export const faq = {
  eyebrow: "FAQ",
  headingPrefix: "Questions,",
  headingEmphasis: "answered.",
  lede: "Still curious? Drop us a line — a real human (named Stevie, naturally) writes back within a day.",
  items: [
    {
      question: "How is Stevie different from a regular booking site?",
      answer:
        "Booking sites give you a search box. Stevie acts like a friend who happens to know every flight schedule and hotel — planning the whole trip in plain English, and watching it after you book.",
    },
    {
      question: "Why are Stevie's rates so competitive?",
      answer:
        "Stevie pulls live fares from every major airline and hotel at once — so you always see the lowest available rate. And unlike most travel agents (who charge $50–$100 per booking), Stevie never adds a fee. We earn the same way agencies have for 60 years: small commissions from airlines and hotels.",
    },
    {
      question: "Does Stevie have a rewards program?",
      answer:
        "A rewards program is on the way. The idea: your points auto-invest into a money market fund or an S&P index, so they hold their value over time instead of losing it to inflation. We'll share details closer to launch.",
    },
    {
      question: "What happens if my flight gets delayed or cancelled?",
      answer:
        "Stevie monitors your itinerary in real time. If something changes, it proposes a rebooking before the airline gets to you — and handles the rest after you tap confirm.",
    },
  ],
} as const;

export const dispatch = {
  eyebrow: "The Stevie Dispatch",
  headingPrefix: "Trip ideas, deals, and the occasional",
  headingEmphasis: "postcard.",
  lede:
    "A short letter every other Friday — where to go next, what's quietly affordable, and what's worth your time.",
  placeholder: "your@email.com",
  submit: "Subscribe",
  submitted: "Subscribed ✓",
  fine: "26 issues a year · No spam · Unsubscribe in one click.",
} as const;

export const footerContent = {
  tagline: "Your AI travel concierge. Plan trips faster. Book at honest rates.",
  copyright: "© 2026 Stevie Travel, Inc. · Made for travelers.",
  socials: [
    { label: "Twitter", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How it works", href: "/#how" },
        { label: "Features", href: "/#features" },
        { label: "Rewards", href: "/rewards" },
        { label: "For business", href: "/for-business" },
        { label: "Mobile app", href: "/mobile-app" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "Rewards terms", href: "/rewards-terms" },
        { label: "Security", href: "/security" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ],
} as const;

// ── Subpage content ────────────────────────────────────────────────────────

export const aboutContent = {
  eyebrow: "About",
  title: "Travel that",
  titleEmphasis: "works for you.",
  lede:
    "Stevie is the travel concierge most of us couldn't afford to have — built around one idea: planning a trip shouldn't take a weekend, and booking it shouldn't cost extra.",
  sections: [
    {
      heading: "Why we built Stevie",
      body: [
        "Most of us travel a handful of times a year. We spend hours comparing fares across tabs, second-guessing the timing, and trying to remember which card earns points on hotels. Then we get home and the miles sit unused for years.",
        "Travel agents used to fix the planning problem. A good agent knew schedules, prices, what was worth your money, and how to put a trip together fast. They charged a fee, and they were worth it — for people who could afford it.",
        "Stevie is that agent, for everyone. Describe the trip in plain English, get real options back, confirm in one tap. No fee, no markup, no redirects.",
      ],
    },
    {
      heading: "How we make money",
      body: [
        "Stevie earns small commissions from airlines and hotels — the same way travel agencies have for sixty years. We never mark up the price you pay, and we don't sell your data.",
      ],
    },
    {
      heading: "Where we're based",
      body: [
        "New York City. A small team, building carefully. We'd rather ship one thing that works than ten things that almost do.",
      ],
    },
  ],
} as const;

export type LegalSection = { id: string; heading: string; body: string[] };

export const privacyContent = {
  eyebrow: "Privacy",
  title: "Privacy",
  titleEmphasis: "policy.",
  updated: "May 1, 2026",
  sections: [
    {
      id: "intro",
      heading: "Introduction",
      body: [
        "Stevie AI LLC (\"Stevie\", \"we\") operates a travel concierge service. This policy explains what data we collect, how we use it, and the controls you have over it.",
        "We believe in collecting only what we need to plan and book your trips, and never selling that data to third parties.",
      ],
    },
    {
      id: "data-we-collect",
      heading: "Data we collect",
      body: [
        "Account information: your name, email, and password.",
        "Travel preferences: the trips you ask Stevie to plan, your past bookings, and any preferences you've shared (window seat, no red-eyes, etc).",
        "Payment: card details, handled by our PCI-compliant payment processor. We don't store full card numbers on Stevie's servers.",
      ],
    },
    {
      id: "how-we-use",
      heading: "How we use it",
      body: [
        "We use your data to plan trips, complete bookings, send confirmations, and improve Stevie's recommendations over time. That's it.",
        "We do not sell your personal data. We do not share it with advertisers.",
      ],
    },
    {
      id: "your-rights",
      heading: "Your rights",
      body: [
        "You can export your data, request deletion, or close your account at any time from Settings → Privacy. Deletion is permanent and effective within 30 days.",
      ],
    },
    {
      id: "contact",
      heading: "Contact",
      body: ["Questions? Email dev@stevieai.io and a real person will write back within a few days."],
    },
  ] satisfies LegalSection[],
} as const;

export const termsContent = {
  eyebrow: "Terms",
  title: "Terms of",
  titleEmphasis: "service.",
  updated: "May 1, 2026",
  sections: [
    {
      id: "agreement",
      heading: "The agreement",
      body: ["By using Stevie, you agree to these terms. If you don't, please don't use the service."],
    },
    {
      id: "the-service",
      heading: "The service",
      body: [
        "Stevie acts as a travel agent on your behalf — searching airlines and hotels, surfacing options, and completing bookings.",
        "The actual flight, hotel, or transfer is provided by a third party (the airline, hotel, etc.). Their own terms apply to your travel.",
      ],
    },
    {
      id: "fees",
      heading: "Fees",
      body: [
        "Stevie does not charge a booking fee. We earn from commissions paid by airlines and hotels. The price you see is the price you pay.",
      ],
    },
    {
      id: "cancellations",
      heading: "Cancellations & changes",
      body: [
        "Cancellation rules are set by the airline or hotel. Stevie will surface the cheapest path to a change or refund, but cannot override their policies.",
      ],
    },
    {
      id: "liability",
      heading: "Limitation of liability",
      body: [
        "Stevie is not liable for issues with the underlying travel provider (delays, lost baggage, etc.). We'll help you navigate them, but ultimately the airline or hotel is responsible.",
      ],
    },
  ] satisfies LegalSection[],
} as const;

export const rewardsTermsContent = {
  eyebrow: "Rewards terms",
  title: "Rewards",
  titleEmphasis: "program terms.",
  updated: "May 1, 2026",
  sections: [
    {
      id: "preview",
      heading: "A preview",
      body: [
        "Stevie's rewards program is in development. These terms describe how we expect it to work; final details will be confirmed before the program launches and may change between now and then.",
      ],
    },
    {
      id: "earning",
      heading: "Earning points",
      body: ["Points are earned on every paid Stevie booking by an account in good standing. Free or comped trips don't earn points."],
    },
    {
      id: "auto-invest",
      heading: "Auto-invest",
      body: [
        "Points are automatically set aside in an account of your choice, growing in value rather than sitting idle.",
        "The goal is to preserve and grow the value of your points relative to inflation. Like any investment, returns are not guaranteed and the value of your balance may fluctuate.",
      ],
    },
    {
      id: "redemption",
      heading: "Redemption",
      body: [
        "You can redeem your balance toward future Stevie bookings at face value, or transfer it to a connected bank account. Redemption may take a few business days to clear depending on the underlying fund.",
      ],
    },
    {
      id: "no-expiration",
      heading: "No expiration",
      body: ["Points don't expire as long as your account stays active."],
    },
    {
      id: "risk",
      heading: "Investment risk",
      body: [
        "Investing involves risk, including possible loss of principal. Stevie isn't an investment advisor; consult a professional if you have questions about whether this is right for you.",
      ],
    },
    {
      id: "changes",
      heading: "Changes",
      body: ["We may update these terms with at least 30 days' notice. Existing balances will be migrated, not devalued."],
    },
  ] satisfies LegalSection[],
} as const;

export const cookiesContent = {
  eyebrow: "Cookies",
  title: "Cookie",
  titleEmphasis: "policy.",
  updated: "May 1, 2026",
  sections: [
    {
      id: "what",
      heading: "What cookies do",
      body: [
        "Cookies are small text files stored in your browser. Stevie uses them to keep you signed in, remember your preferences, and understand how the site is being used.",
      ],
    },
    {
      id: "types",
      heading: "What we use",
      body: [
        "Strictly necessary cookies keep you logged in, remember your cart, and secure your session. These can't be turned off.",
        "Analytics cookies are anonymous and help us see what works and what doesn't. You can opt out in Settings → Privacy.",
        "We don't use advertising cookies.",
      ],
    },
    {
      id: "controls",
      heading: "Controls",
      body: [
        "You can clear or block cookies in your browser settings. Doing so may break parts of Stevie that rely on staying signed in.",
      ],
    },
    {
      id: "contact",
      heading: "Questions",
      body: ["Email dev@stevieai.io."],
    },
  ] satisfies LegalSection[],
} as const;

export const securityContent = {
  eyebrow: "Security",
  title: "How we protect",
  titleEmphasis: "your data.",
  updated: "May 1, 2026",
  sections: [
    {
      id: "encryption",
      heading: "Encryption",
      body: [
        "All data is encrypted in transit (TLS 1.3) and at rest (AES-256). Sensitive fields like payment tokens are encrypted with an additional layer.",
      ],
    },
    {
      id: "infrastructure",
      heading: "Infrastructure",
      body: [
        "Stevie runs on AWS in the US-East region. Production access is logged and limited to a small set of engineers under multi-factor authentication.",
      ],
    },
    {
      id: "payments",
      heading: "Payments",
      body: [
        "Card data is tokenized by our PCI-DSS Level 1 payment processor. Stevie's servers never store full card numbers.",
      ],
    },
    {
      id: "reporting",
      heading: "Reporting vulnerabilities",
      body: [
        "Found something? Email dev@stevieai.io and we'll respond within one business day. We pay bounties for valid reports.",
      ],
    },
  ] satisfies LegalSection[],
} as const;
