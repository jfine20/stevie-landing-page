// @ts-nocheck — Babel-standalone strips TS, no compile-time checking
// All sections of the Stevie landing page

function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Brand />
          <div className="nav-links">
            <a href="#how">How it works</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
          </div>
        <a href="#book" className="btn btn-primary">
          Book a Trip <Arrow />
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-left">
          <span className="eyebrow">Your AI Travel Concierge</span>
          <h1 style={{ marginTop: 24 }}>
            One prompt.<br />
            <em>The whole trip.</em>
          </h1>
          <p className="hero-sub">
            Tell Stevie where you're going — it books your flights, hotels, transfers, and the dinners in between, all from a single chat. One conversation, no tabs, no spreadsheets.
          </p>
          <div className="hero-ctas">
            <a href="#book" className="btn btn-primary">
              Book a Trip <Arrow />
            </a>
            <a href="#how" className="btn btn-ghost">
              See how it works
            </a>
          </div>

          <div className="hero-meta">
            <div className="hero-meta-item">
              <div className="num">1<span className="num-suffix">prompt</span></div>
              <div className="lbl">Books your whole trip</div>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <div className="num">All-<span className="num-suffix">in-one</span></div>
              <div className="lbl">Flights, hotels, transfers</div>
            </div>
            <div className="hero-meta-divider" />
            <div className="hero-meta-item">
              <div className="num">0<span className="num-suffix">agent fees</span></div>
              <div className="lbl">Best rates online, always</div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <BoardingPass />
        </div>
      </div>
    </section>
  );
}

function BoardingPass() {
  return (
    <div className="boarding-pass">
      <div className="bp-head">
        <span className="bp-airline">Stevie</span>
        <span className="bp-class">Boarding Pass</span>
      </div>
      <div className="bp-body">
        <div className="bp-route">
          <div className="iata">
            JFK
            <span className="city">New York</span>
          </div>
          <div className="plane">
            <PlaneIcon size={28} color="var(--cobalt)" />
          </div>
          <div className="iata right">
            LIS
            <span className="city">Lisbon</span>
          </div>
        </div>
        <div className="bp-fields">
          <div className="bp-field">
            <div className="k">Passenger</div>
            <div className="v">A. Reyes</div>
          </div>
          <div className="bp-field">
            <div className="k">Flight</div>
            <div className="v">SV 218</div>
          </div>
          <div className="bp-field">
            <div className="k">Gate</div>
            <div className="v">B14</div>
          </div>
        </div>
      </div>
      <div className="bp-foot">
        <div className="barcode" />
        <div className="seat">
          <span className="lbl">Seat</span>
          12A
        </div>
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "Lisbon", "Tokyo", "Mexico City", "Reykjavík", "Marrakech", "Buenos Aires",
    "Bangkok", "Cape Town", "Kyoto", "Oaxaca", "Hanoi", "Istanbul", "Seoul",
    "Athens", "Cartagena", "Sydney", "Porto", "Copenhagen", "Marrakech", "Nairobi",
  ];
  const track = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {track.map((d, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-dot" />
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

function TryIt() {
  const prompts = [
    "Long weekend somewhere warm, under $900, leaving Friday after work.",
    "Tokyo in cherry-blossom season, 8 days, mid-budget.",
    "Quiet beach week in November, direct flights only.",
    "Family ski trip in Colorado, mid-March, kid-friendly hotel.",
    "Romantic anniversary in Lisbon — old town, walkable, near the water.",
  ];

  const [pi, setPi] = React.useState(0);
  const [text, setText] = React.useState("");
  const [phase, setPhase] = React.useState("typing"); // typing | pausing | deleting

  React.useEffect(() => {
    const current = prompts[pi];
    let timeout;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 38 + Math.random() * 35);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), 1600);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 800);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 18);
      } else {
        setPi((pi + 1) % prompts.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [text, phase, pi]);

  return (
    <section className="tryit">
      <div className="container">
        <div className="tryit-head">
          <span className="eyebrow">Try it</span>
          <h2>Describe your trip. <em>Stevie finds it.</em></h2>
          <p className="lede">
            Tell Stevie exactly what you want — quiet, walkable, under budget, near the water. It searches every airline and hotel at once, and books in a tap.
          </p>
        </div>

        <div className="prompt-card">
          <div className="prompt-row">
            <div className="prompt-text">
              {text}
              <span className="prompt-caret" />
            </div>
            <button className="prompt-send" aria-label="Send">
              <Arrow size={18} />
            </button>
          </div>

          <div className="prompt-chips">
            <span className="prompt-chip active">
              <span className="dot" />
              Hotels · live
            </span>
            <span className="prompt-chip">
              <span className="dot" />
              Flights · soon
            </span>
            <span className="prompt-chip">
              <span className="dot" />
              Transfers · soon
            </span>
            <span className="prompt-chip">
              <span className="dot" />
              Restaurants · soon
            </span>
            <span className="prompt-chip">
              <span className="dot" />
              Activities · soon
            </span>
          </div>
        </div>

        <p className="prompt-foot">
          Hotels are bookable today. Flights, transfers, and the rest are rolling out next — your whole trip, one conversation.
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  return (
    <section id="how" className="how">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">How it works</span>
            <h2 style={{ marginTop: 18 }}>One sentence in,<br /><em>a whole trip out.</em></h2>
          </div>
        </div>

        <div className="steps">
          <Step
            num="01"
            title="Type one sentence."
            body="Tell Stevie what you want, in plain English."
          />
          <Step
            num="02"
            title="See every option that fits."
            body="Stevie lays out every trip that matches your ask — flights, hotels, and the full price upfront."
          />
          <Step
            num="03"
            title="Confirm. Pack. Go."
            body="One tap books the itinerary. Stevie keeps watch on every leg after."
          />
        </div>
      </div>
    </section>
  );
}

function Step({ num, title, body }) {
  return (
    <div className="step">
      <span className="step-num">{num}</span>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}

function IlluPrompt() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div style={{
        background: "var(--paper)",
        border: "1px solid var(--rule)",
        borderRadius: 8,
        padding: "8px 11px",
        fontSize: 12,
        lineHeight: 1.35,
        color: "var(--cobalt-ink)",
        fontFamily: "var(--serif)",
      }}>
        “Long weekend somewhere warm, under $900.”
      </div>
      <div style={{
        alignSelf: "flex-end",
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "var(--cobalt)",
        color: "var(--cream)",
        borderRadius: 999,
        padding: "5px 10px",
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}>
        <span style={{ width: 5, height: 5, background: "var(--cream)", borderRadius: "50%" }} />
        Thinking…
      </div>
    </div>
  );
}

function IlluOptions() {
  const trips = [
    { city: "Oaxaca", price: "$689" },
    { city: "Lisbon", price: "$742" },
    { city: "Tulum", price: "$815" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
      {trips.map((t, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "auto 1fr auto",
          alignItems: "center",
          gap: 10,
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderRadius: 6,
          padding: "6px 10px",
        }}>
          <span style={{ width: 6, height: 6, background: "var(--cobalt)", borderRadius: "50%" }} />
          <span style={{ fontFamily: "var(--serif)", fontSize: 14, color: "var(--cobalt-ink)" }}>{t.city}</span>
          <span style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 500 }}>{t.price}</span>
        </div>
      ))}
      <div style={{
        textAlign: "center",
        fontSize: 10,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        color: "var(--ink-soft)",
        fontWeight: 600,
        marginTop: 2,
      }}>
        + 38 more
      </div>
    </div>
  );
}

function IlluConfirm() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{
        background: "var(--cobalt-ink)",
        color: "var(--cream)",
        borderRadius: 8,
        padding: "9px 12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600, color: "var(--cream)" }}>Confirmed</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 13, marginTop: 2 }}>JFK → OAX</div>
        </div>
        <div style={{
          width: 22, height: 22, borderRadius: "50%", background: "var(--cream)",
          display: "grid", placeItems: "center",
        }}>
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M2 6.5l2.5 2.5L10 3.5" stroke="var(--cobalt-ink)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RewardsTeaser() {
  return (
    <section className="rewards-teaser-section">
      <div className="container">
        <a href="rewards.html" className="rewards-teaser-card">
          <span className="rewards-teaser-tag">Coming soon</span>
          <span className="rewards-teaser-text">
            Rewards that don't lose value to inflation — <em>they grow with it.</em>
          </span>
          <span className="rewards-teaser-link">
            Learn more <Arrow size={14} />
          </span>
        </a>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">What's inside</span>
            <h2 style={{ marginTop: 18 }}>An agent in your pocket.<br /><em>Honest prices on every leg.</em></h2>
          </div>
          <p className="lede">
            Stevie fixes the two things travelers actually complain about: planning takes forever, and agents cost a fortune.
          </p>
        </div>

        <div className="feature-grid">
          <div className="feature f-half">
            <div className="feature-head">
              <span className="f-tag">Concierge chat</span>
              <h3>Plan like you would with a friend who knows every airline schedule.</h3>
              <p>Speak naturally — "beaches in November, no 12-hour flights" — and Stevie handles the rest. It remembers what you liked last time, too.</p>
            </div>
          </div>

          <div className="feature f-half">
            <div className="feature-head">
              <span className="f-tag">Best rates</span>
              <h3>Lowest fares online, with no agent fee.</h3>
              <p>Most travel agents charge $50–$100 per booking. Stevie earns from airline and hotel commissions — so you get the best rate available, and nothing extra to us.</p>
            </div>
            <div className="feature-body">
              <SavingsBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SavingsBar() {
  return (
    <div style={{
      background: "var(--cream-warm)",
      border: "1px solid var(--rule)",
      borderRadius: 12,
      padding: "18px 22px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 600 }}>
          Same trip
        </span>
        <span style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-soft)", fontWeight: 600 }}>
          Total cost
        </span>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontSize: 13.5, color: "var(--ink-soft)" }}>Typical travel agent</span>
          <span style={{ fontFamily: "var(--serif)", fontSize: 18, color: "var(--ink-soft)", textDecoration: "line-through", textDecorationColor: "var(--rule-strong)" }}>
            $1,201
          </span>
        </div>
        <div style={{ height: 6, background: "var(--paper)", borderRadius: 999, overflow: "hidden", border: "1px solid var(--rule)" }}>
          <div style={{ width: "100%", height: "100%", background: "var(--rule-strong)", opacity: 0.5 }} />
        </div>
      </div>

      <div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 6 }}>
          <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--cobalt-ink)" }}>With Stevie</span>
          <span style={{ fontFamily: "var(--serif)", fontSize: 24, color: "var(--cobalt-ink)" }}>
            $1,026
          </span>
        </div>
        <div style={{ height: 6, background: "var(--paper)", borderRadius: 999, overflow: "hidden", border: "1px solid var(--rule)" }}>
          <div style={{ width: "85.4%", height: "100%", background: "var(--cobalt)" }} />
        </div>
      </div>

      <div style={{
        marginTop: 4,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "baseline",
        paddingTop: 12,
        borderTop: "1px dashed var(--rule)",
      }}>
        <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--cobalt)", fontWeight: 700 }}>
          You save
        </span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 20, color: "var(--cobalt)" }}>$175</span>
      </div>
    </div>
  );
}

function PricingReceipt() {
  return (
    <div className="feature-body" style={{
      background: "rgba(240, 237, 230, 0.06)",
      border: "1px dashed rgba(240, 237, 230, 0.3)",
      borderRadius: 10,
      padding: "16px 18px",
      fontFamily: "var(--sans)",
    }}>
      <div style={{
        fontSize: 9.5, letterSpacing: "0.22em", textTransform: "uppercase",
        color: "rgba(240, 237, 230, 0.55)", fontWeight: 600, marginBottom: 14,
        display: "flex", justifyContent: "space-between",
      }}>
        <span>Same trip, two prices</span>
        <span>USD</span>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        padding: "8px 0",
        fontSize: 13,
        color: "rgba(240, 237, 230, 0.55)",
      }}>
        <span>Typical travel agent</span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 16, textDecoration: "line-through", textDecorationColor: "rgba(240, 237, 230, 0.4)" }}>
          $1,201
        </span>
      </div>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "baseline",
        padding: "8px 0",
        fontSize: 13,
        color: "rgba(240, 237, 230, 0.85)",
        borderTop: "1px dotted rgba(240, 237, 230, 0.18)",
        borderBottom: "1px dotted rgba(240, 237, 230, 0.18)",
      }}>
        <span>Same fare, with Stevie</span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 16 }}>$1,026</span>
      </div>

      <div style={{
        marginTop: 14,
        background: "var(--cream)",
        color: "var(--cobalt-ink)",
        borderRadius: 8,
        padding: "10px 14px",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between",
      }}>
        <span style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700 }}>
          You save
        </span>
        <span style={{ fontFamily: "var(--serif)", fontSize: 22 }}>$175</span>
      </div>

      <div style={{
        marginTop: 10,
        fontSize: 11,
        color: "rgba(240, 237, 230, 0.55)",
        letterSpacing: "0.04em",
        textAlign: "center",
      }}>
        Best available rate · no agent fee
      </div>
    </div>
  );
}

function ChatPreview() {
  const bubbles = [
    { who: "me", text: "Warm weekend, under $900, leaving Friday after work." },
    { who: "stevie", text: "Oaxaca's the move — direct flight, great food, $689 all in." },
    { who: "me", text: "Book it." },
  ];
  return (
    <div style={{
      background: "var(--cream-warm)",
      border: "1px solid var(--rule)",
      borderRadius: 12,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      gap: 8,
    }}>
      {bubbles.map((b, i) => (
        <div
          key={i}
          style={{
            alignSelf: b.who === "me" ? "flex-end" : "flex-start",
            background: b.who === "me" ? "var(--cobalt)" : "var(--paper)",
            border: b.who === "stevie" ? "1px solid var(--rule)" : "none",
            color: b.who === "me" ? "var(--cream)" : "var(--cobalt-ink)",
            padding: "9px 14px",
            borderRadius: 14,
            borderBottomRightRadius: b.who === "me" ? 4 : 14,
            borderBottomLeftRadius: b.who === "stevie" ? 4 : 14,
            fontSize: 13.5,
            lineHeight: 1.4,
            maxWidth: "78%",
          }}
        >
          {b.text}
        </div>
      ))}
    </div>
  );
}

function BundleVisual() {
  const items = [
    { l: "Flight", v: "JFK → LIS", icon: "✈" },
    { l: "Hotel", v: "3 nights · Alfama", icon: "◇" },
    { l: "Transfer", v: "Airport · taxi", icon: "→" },
    { l: "Dinner", v: "Cervejaria Ramiro", icon: "•" },
  ];
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      gap: 6,
      background: "var(--cream-warm)",
      border: "1px solid var(--rule)",
      borderRadius: 12,
      padding: 14,
    }}>
      {items.map((it, i) => (
        <div key={i} style={{
          display: "grid",
          gridTemplateColumns: "28px 1fr auto",
          alignItems: "center",
          gap: 12,
          padding: "9px 12px",
          background: "var(--paper)",
          border: "1px solid var(--rule)",
          borderRadius: 8,
        }}>
          <span style={{
            width: 26, height: 26, borderRadius: "50%",
            background: "var(--cobalt)", color: "var(--cream)",
            display: "grid", placeItems: "center",
            fontSize: 12,
          }}>{it.icon}</span>
          <div>
            <div style={{ fontSize: 9, letterSpacing: "0.18em", fontWeight: 700, textTransform: "uppercase", color: "var(--cobalt)" }}>{it.l}</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: 15, color: "var(--cobalt-ink)", marginTop: 2 }}>{it.v}</div>
          </div>
          <span style={{ fontSize: 11, color: "var(--ink-soft)", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
            {["Booked", "Booked", "Auto", "Held"][i]}
          </span>
        </div>
      ))}
    </div>
  );
}

function ReroutingVisual() {
  const events = [
    { time: "9:42p", color: "var(--cobalt)", label: "Delay detected", detail: "TAP 218 · 2h 14m" },
    { time: "9:43p", color: "var(--cobalt)", label: "Searching alternatives", detail: "12 options found" },
    { time: "9:44p", color: "var(--cream)", label: "Rebooked", detail: "TAP 204 · earlier arrival, same row" },
    { time: "9:44p", color: "var(--cobalt-ink)", label: "Hotel notified", detail: "Late check-in confirmed" },
  ];
  return (
    <div style={{
      background: "var(--cream-warm)",
      border: "1px solid var(--rule)",
      borderRadius: 12,
      padding: "18px 20px",
      position: "relative",
    }}>
      <div style={{
        position: "absolute",
        top: 14,
        right: 16,
        fontSize: 10,
        letterSpacing: "0.18em",
        textTransform: "uppercase",
        fontWeight: 700,
        color: "var(--cobalt)",
        border: "1px solid var(--cobalt)",
        padding: "3px 8px",
        borderRadius: 999,
      }}>
        Auto-handled
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, position: "relative", paddingLeft: 18 }}>
        <span style={{
          position: "absolute",
          left: 5,
          top: 8,
          bottom: 8,
          width: 1,
          background: "var(--rule-strong)",
          borderRight: "1px dashed var(--rule-strong)",
        }} />
        {events.map((e, i) => (
          <div key={i} style={{ position: "relative", display: "flex", gap: 10, alignItems: "baseline" }}>
            <span style={{
              position: "absolute",
              left: -18,
              top: 4,
              width: 11,
              height: 11,
              background: e.color,
              borderRadius: "50%",
              border: "2px solid var(--cream-warm)",
            }} />
            <span style={{ fontSize: 10, color: "var(--ink-soft)", fontWeight: 600, letterSpacing: "0.06em", width: 36, flexShrink: 0 }}>{e.time}</span>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "var(--cobalt-ink)" }}>{e.label}</div>
              <div style={{ fontSize: 11.5, color: "var(--ink-soft)", marginTop: 1 }}>{e.detail}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Rewards() {
  return (
    <section id="rewards" style={{ padding: "0 0 80px" }}>
      <div className="container">
        <div className="rewards-card">
          <div>
            <span className="eyebrow" style={{ color: "var(--cream)" }}>The Rewards Rethink</span>
            <h3 style={{ marginTop: 18 }}>
              Points that <em>actually</em> pay you back.
            </h3>
            <p>
              Forget watching your miles depreciate. Every Stevie booking earns credit at a flat 4¢-per-dollar rate, redeemable as cash-style balance — toward your next trip, or sent straight to your bank.
            </p>
            <div style={{ marginTop: 28, display: "flex", gap: 28, flexWrap: "wrap" }}>
              <RewardStat k="4¢" v="per dollar, every booking" />
              <RewardStat k="0" v="blackout dates, ever" />
              <RewardStat k="Cash" v="redeemable, not points" />
            </div>
          </div>
          <div className="rewards-visual">
            <div className="coin-stack">
              <div className="coin coin-1">$</div>
              <div className="coin coin-2">$</div>
              <div className="coin coin-3">$</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function RewardStat({ k, v }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--serif)", fontSize: 32, color: "var(--cream)", lineHeight: 1 }}>{k}</div>
      <div style={{ marginTop: 6, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(240, 237, 230, 0.7)", fontWeight: 500 }}>{v}</div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = React.useState(0);
  const items = [
    {
      q: "How is Stevie different from a regular booking site?",
      a: "Booking sites give you a search box. Stevie acts like a friend who happens to know every flight schedule and hotel — planning the whole trip in plain English, and watching it after you book.",
    },
    {
      q: "Why are Stevie's rates so competitive?",
      a: "Stevie pulls live fares from every major airline and hotel at once — so you always see the lowest available rate. And unlike most travel agents (who charge $50–$100 per booking), Stevie never adds a fee. We earn the same way agencies have for 60 years: small commissions from airlines and hotels.",
    },
    {
      q: "Does Stevie have a rewards program?",
      a: "A rewards program is on the way. The idea: your points auto-invest into a money market fund or an S&P index, so they hold their value over time instead of losing it to inflation. We'll share details closer to launch.",
    },
    {
      q: "What happens if my flight gets delayed or cancelled?",
      a: "Stevie monitors your itinerary in real time. If something changes, it proposes a rebooking before the airline gets to you — and handles the rest after you tap confirm.",
    },
  ];
  return (
    <section id="faq" className="faq">
      <div className="container faq-grid">
        <div className="faq-side">
          <span className="eyebrow">FAQ</span>
          <h2 style={{ marginTop: 18 }}>Questions, <em>answered.</em></h2>
          <p>Still curious? Drop us a line — a real human (named Stevie, naturally) writes back within a day.</p>
        </div>
        <div className="faq-list">
          {items.map((it, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span>{it.q}</span>
                <span className="toggle">+</span>
              </button>
              <div className="faq-a">
                <p>{it.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Dispatch() {
  const [email, setEmail] = React.useState("");
  const [sent, setSent] = React.useState(false);
  return (
    <section className="dispatch">
      <div className="container">
        <div className="dispatch-card">
          <div>
            <span className="eyebrow" style={{ color: "var(--cream)" }}>The Stevie Dispatch</span>
            <h2 style={{ marginTop: 18 }}>Trip ideas, deals, and the occasional <em>postcard.</em></h2>
            <p className="lede">A short letter every other Friday — where to go next, what's quietly affordable, and what's worth your time.</p>
          </div>
          <form
            className="dispatch-form"
            onSubmit={(e) => { e.preventDefault(); if (email) setSent(true); }}
          >
            <div className="dispatch-form-row">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">{sent ? "Subscribed ✓" : "Subscribe"}</button>
            </div>
            <p className="dispatch-fine">26 issues a year · No spam · Unsubscribe in one click.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Brand />
            <p>Your AI travel concierge. Plan trips faster. Book at honest rates.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <ul>
              <li><a href="index.html#how">How it works</a></li>
              <li><a href="index.html#features">Features</a></li>
              <li><a href="rewards.html">Rewards</a></li>
              <li><a href="for-business.html">For business</a></li>
              <li><a href="mobile-app.html">Mobile app</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Legal</h5>
            <ul>
              <li><a href="privacy.html">Privacy</a></li>
              <li><a href="terms.html">Terms</a></li>
              <li><a href="rewards-terms.html">Rewards terms</a></li>
              <li><a href="security.html">Security</a></li>
              <li><a href="cookies.html">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div>© 2026 Stevie Travel, Inc. · Made for travelers.</div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">TikTok</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Marquee, TryIt, HowItWorks, RewardsTeaser, Features, Rewards, FAQ, Dispatch, Footer });
