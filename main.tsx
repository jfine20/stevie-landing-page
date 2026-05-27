// @ts-nocheck — Babel-standalone strips TS, no compile-time checking
// Stevie AI landing page — composed app

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Hero />
      <Marquee />
      <TryIt />
      <HowItWorks />
      <Features />
      <RewardsTeaser />
      <FAQ />
      <Dispatch />
      <Footer />
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
