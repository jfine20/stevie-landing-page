// @ts-nocheck — Babel-standalone strips TS, no compile-time checking
// Subpage components — share Nav + Footer with the homepage

function PageShell({ children }) {
  return (
    <React.Fragment>
      <Nav />
      <main>{children}</main>
      <Footer />
    </React.Fragment>
  );
}

function PageHero({ eyebrow, title, titleItalic, lede }) {
  return (
    <section className="subpage-hero">
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>
          {title}{titleItalic && <><br /><em>{titleItalic}</em></>}
        </h1>
        {lede && <p className="subpage-lede">{lede}</p>}
      </div>
    </section>
  );
}

function ComingSoonPage({ eyebrow, title, titleItalic, lede, bullets = [] }) {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} titleItalic={titleItalic} lede={lede} />
      <section className="subpage-body">
        <div className="container subpage-grid">
          <div>
            <div className="coming-soon-tag">
              <span className="dot" />
              Coming soon
            </div>
            <h2 className="subpage-h2">
              We're building this <em>right now.</em>
            </h2>
            <p className="subpage-p">
              Add your email and we'll send a single note the day it's ready. No marketing in between.
            </p>
            <form
              className="cs-form"
              onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit">{sent ? "Got it ✓" : "Notify me"}</button>
            </form>
          </div>
          <div>
            <div className="cs-card">
              <span className="eyebrow">What's coming</span>
              <ul className="cs-list">
                {bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About"
        title="Travel that"
        titleItalic="pays you back."
        lede="Stevie is the travel concierge most of us couldn't afford to have — built around a single idea: planning a trip shouldn't take a weekend, and the rewards you earn should be worth something."
      />
      <section className="subpage-body">
        <div className="container subpage-prose">
          <h2>Why we built Stevie</h2>
          <p>Most of us travel a handful of times a year. We spend hours comparing fares across tabs, second-guessing the timing, and trying to remember whether our points expire. Then we get home, exhausted, and the points sit unused for years.</p>
          <p>Travel agents used to fix all of this. A good agent knew schedules, prices, what was worth your money, and how to put a trip together fast. They charged a fee, and they were worth it — for people who could afford it.</p>
          <p>Stevie is that agent, for everyone. Type one sentence, get a whole trip back. Earn rewards that turn into real money. And never pay an agent fee.</p>

          <h2>How we make money</h2>
          <p>Stevie earns small commissions from airlines and hotels — the same way travel agencies have for sixty years. We never mark up the price you pay, and we don't sell your data.</p>

          <h2>Where we're based</h2>
          <p>New York City. A small team, building carefully. We'd rather ship one thing that works than ten things that almost do.</p>
        </div>
      </section>
    </PageShell>
  );
}

function ContactPage() {
  const [form, setForm] = React.useState({ name: "", email: "", message: "" });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Drop us"
        titleItalic="a line."
        lede="A real person reads every message and writes back, usually within a day."
      />
      <section className="subpage-body">
        <div className="container subpage-grid">
          <div>
            <h2 className="subpage-h2">Get in touch</h2>
            <p className="subpage-p">For trip help, partnerships, press, or just to say hi.</p>
            <div className="contact-meta">
              <div>
                <span className="contact-k">Email</span>
                <span className="contact-v">jack@stevieai.io</span>
              </div>
              <div>
                <span className="contact-k">Press</span>
                <span className="contact-v">jack@stevieai.io</span>
              </div>
              <div>
                <span className="contact-k">Mail</span>
                <span className="contact-v">228 Park Ave S #12, New York, NY 10003</span>
              </div>
            </div>
          </div>
          <div>
            <form
              className="contact-form"
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            >
              <label>
                <span>Name</span>
                <input type="text" required value={form.name} onChange={update("name")} placeholder="Alex Reyes" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" required value={form.email} onChange={update("email")} placeholder="alex@email.com" />
              </label>
              <label>
                <span>How can we help?</span>
                <textarea rows="5" required value={form.message} onChange={update("message")} placeholder="Tell us what you need…" />
              </label>
              <button type="submit" className="btn btn-primary">
                {sent ? "Sent ✓" : "Send message"} <Arrow />
              </button>
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function LegalPage({ eyebrow, title, titleItalic, updated, sections }) {
  return (
    <PageShell>
      <PageHero eyebrow={eyebrow} title={title} titleItalic={titleItalic} lede={`Last updated ${updated}.`} />
      <section className="subpage-body">
        <div className="container legal-grid">
          <aside className="legal-toc">
            <span className="eyebrow">On this page</span>
            <ul>
              {sections.map((s, i) => (
                <li key={i}><a href={`#${s.id}`}>{s.h}</a></li>
              ))}
            </ul>
          </aside>
          <div className="subpage-prose legal-prose">
            {sections.map((s, i) => (
              <React.Fragment key={i}>
                <h2 id={s.id}>{s.h}</h2>
                {s.body.split("\n\n").map((para, j) => <p key={j}>{para}</p>)}
              </React.Fragment>
            ))}
            <p className="legal-foot">
              Questions about this policy? Email <a href="mailto:jack@stevieai.io">jack@stevieai.io</a>.
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

Object.assign(window, {
  PageShell, PageHero, ComingSoonPage, AboutPage, ContactPage, LegalPage,
});
