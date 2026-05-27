/**
 * Single source of truth for all copy on the Stevie landing page.
 * Components read from here — never hardcode strings in JSX.
 */

export const site = {
  name: "Stevie",
  url: "https://stevieai.io",
  tagline: "Every trip builds your portfolio.",
  description:
    "Book hotels and flights through Stevie. A share of every booking buys you fractional S&P 500 stock in your own brokerage account.",
} as const;

export const nav = {
  links: [
    { label: "How it works", href: "#how-it-works" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Sign in", href: "https://stevieai.io/sign-in" },
} as const;

export const hero = {
  eyebrow: "Your AI Travel Concierge",
  headlinePrefix: "Every trip builds",
  headlineEmphasis: "your portfolio.",
  subhead:
    "Tell Stevie where and when. We book the hotel or flight and buy you fractional shares of the S&P 500 in your own brokerage account — every time.",
  primaryCta: { label: "Get started", href: "https://stevieai.io/sign-in" },
  secondaryCta: { label: "How it works", href: "#how-it-works" },
  stats: [
    { num: "35", suffix: "%", label: "Of our margin, back to you" },
    { num: "VOO", suffix: "· SPY", label: "S&P 500 index, in your name" },
    { num: "$0", suffix: "fees", label: "No booking fee, ever" },
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
    "Tell Stevie exactly what you want — quiet, walkable, under budget, near the water. It searches every option at once, books in a tap, and puts a share of our margin into your brokerage account.",
  prompts: [
    "Long weekend somewhere warm, under $900, leaving Friday after work.",
    "Tokyo in cherry-blossom season, 8 days, mid-budget.",
    "Quiet beach week in November, direct flights only.",
    "Family ski trip in Colorado, mid-March, kid-friendly hotel.",
    "Romantic anniversary in Lisbon — old town, walkable, near the water.",
  ],
  chips: [
    { label: "Hotels · live", active: true },
    { label: "Flights · soon", active: false },
    { label: "Transfers · soon", active: false },
    { label: "Restaurants · soon", active: false },
    { label: "Activities · soon", active: false },
  ],
  footer:
    "Hotels are live now. Every booking earns you fractional S&P 500 shares — flights, transfers, and the rest are rolling out soon.",
} as const;

export const howItWorks = {
  eyebrow: "How it works",
  headingPrefix: "Three steps.",
  headingEmphasis: "One loop.",
  steps: [
    {
      number: "01",
      title: "Describe the trip.",
      body: "Tell Stevie what you need. Dates, budget, a neighbourhood you like. Stevie searches, compares, and returns real options.",
    },
    {
      number: "02",
      title: "Book in one place.",
      body: "Hotels and flights, charged to your card. Stevie is the merchant of record — no redirects, no affiliate handoffs.",
    },
    {
      number: "03",
      title: "Own the upside.",
      body: "On each booking, 35% of our margin buys you fractional VOO or SPY in your own brokerage account. Every trip, every time.",
    },
  ],
} as const;

export const features = {
  eyebrow: "What's inside",
  headingPrefix: "An agent in your pocket.",
  headingEmphasis: "Real shares on every leg.",
  lede:
    "Stevie fixes the two things travelers actually complain about: planning takes forever, and the rewards you earn quietly lose their value.",
  cards: [
    {
      tag: "Concierge chat",
      title: "Plan like you'd talk to a friend who knows every airline and hotel.",
      body: "Speak naturally — \"3 nights in Lisbon mid-May\" — and Stevie handles the rest. It remembers your preferences, finds real options, and books in a tap.",
    },
    {
      tag: "35% back",
      title: "Every booking puts real shares in your account.",
      body: "We earn from commissions — same way travel agencies have for sixty years. The difference: we hand 35% of that margin back to you as fractional S&P 500 shares. The more you travel, the more you own.",
    },
  ],
  portfolioCard: {
    label: "Your portfolio",
    total: "$38.85",
    entries: [
      { trip: "Barcelona", fractional: "0.041 VOO", amount: "+$8.40" },
      { trip: "Miami", fractional: "0.087 VOO", amount: "+$17.80" },
      { trip: "Lisbon", fractional: "0.062 VOO", amount: "+$12.65" },
    ],
    caption: "35% of Stevie's margin · every trip",
  },
} as const;

export const rewardsTeaser = {
  tag: "Coming soon",
  text: "35% of every booking margin goes into your S&P 500 account —",
  emphasis: "not expiring miles.",
  linkLabel: "Learn more",
  linkHref: "/rewards",
} as const;

export const portfolio = {
  eyebrow: "The rewards rethink",
  headingPrefix: "Points expire.",
  headingEmphasis: "Shares don't.",
  body:
    "Airlines devalue miles on a schedule you don't control. Hotel rewards stop working when you need them most. Stevie runs the other way. Every booking puts a real asset in your name — something that grows while you're not looking, and that nobody can take back.",
  stats: [
    { k: "35%", v: "of our margin, every booking" },
    { k: "VOO · SPY", v: "fractional S&P 500, in your name" },
    { k: "Alpaca", v: "SEC-registered broker-dealer" },
  ],
} as const;

export const faq = {
  eyebrow: "FAQ",
  headingPrefix: "Questions,",
  headingEmphasis: "answered.",
  lede: "Still curious? Drop us a line — a real person writes back within a day.",
  items: [
    {
      question: "How does Stevie make money?",
      answer:
        "We book your travel at wholesale rates and charge a small margin, the way online travel agencies have for twenty years. The difference is we hand 35% of that margin back to you as S&P 500 shares instead of keeping it.",
    },
    {
      question: "Do I need to open a brokerage account?",
      answer:
        "We open one for you through Alpaca, an SEC-registered broker-dealer. Verification takes a few minutes and happens the first time you visit your portfolio — it doesn't block your first booking.",
    },
    {
      question: "Can I withdraw the shares?",
      answer:
        "Yes. The account is yours. You can transfer out to another brokerage, sell, or hold indefinitely — same as any other brokerage account.",
    },
    {
      question: "What happens if the market drops?",
      answer:
        "Share prices move up and down. Stevie does not guarantee returns. Unlike points, though, your shares cannot be devalued or expired by a loyalty program.",
    },
    {
      question: "When does this launch?",
      answer: "Q2 2026 in New York. Early access is open.",
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
  tagline: "Your AI travel concierge. Book trips, earn equity.",
  disclosure:
    "Securities are offered through Alpaca Securities LLC, member FINRA/SIPC. Stevie AI LLC is not a broker-dealer. Investing involves risk, including loss of principal.",
  copyright: `© ${new Date().getFullYear()} Stevie AI LLC · New York`,
  columns: [
    {
      heading: "Product",
      links: [
        { label: "How it works", href: "/#how-it-works" },
        { label: "Portfolio", href: "/#portfolio" },
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
  titleEmphasis: "pays you back.",
  lede:
    "Stevie is the travel concierge most of us couldn't afford to have — built around one idea: the rewards you earn should be worth something, and planning a trip shouldn't take a weekend.",
  sections: [
    {
      heading: "Why we built Stevie",
      body: [
        "Most of us travel a handful of times a year. We spend hours comparing fares across tabs, second-guessing the timing, and trying to remember whether our points expire. Then we get home, exhausted, and the miles sit unused for years — quietly losing value to inflation.",
        "Travel agents used to fix the planning problem. A good agent knew schedules, prices, what was worth your money, and how to put a trip together fast. They charged a fee, and they were worth it — for people who could afford it.",
        "Stevie is that agent, for everyone. Describe the trip in plain English, get real options back, confirm in one tap. And every booking earns you fractional S&P 500 shares in your own brokerage account — not miles, not points, not coupons. Real shares, in your name, that nobody can take away.",
      ],
    },
    {
      heading: "How we make money",
      body: [
        "Stevie earns small commissions from airlines and hotels — the same way travel agencies have for sixty years. We never mark up the price you pay, and we don't sell your data. On each booking, we hand 35% of our margin back to you as fractional VOO or SPY. The more you travel, the more you own.",
      ],
    },
    {
      heading: "The brokerage account",
      body: [
        "Shares go into a real account in your name, held through Alpaca Securities LLC, an SEC-registered broker-dealer and FINRA/SIPC member. You can check the balance, transfer out, sell, or hold indefinitely — same as any brokerage account. Stevie does not hold or control your shares.",
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
      body: ["Questions? Email hello@stevieai.io and a real person will write back within a few days."],
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
        "Points are automatically allocated to an investment vehicle of your choice — typically a money market fund or a low-cost S&P index fund — through a regulated brokerage partner.",
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
      body: ["Email hello@stevieai.io."],
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
        "Found something? Email hello@stevieai.io and we'll respond within one business day. We pay bounties for valid reports.",
      ],
    },
  ] satisfies LegalSection[],
} as const;
