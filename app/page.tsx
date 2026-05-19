export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] text-[#58a6ff] text-sm font-medium border border-[#30363d]">
          For Independent Restaurant Owners
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Optimize Your Menu for{" "}
          <span className="text-[#58a6ff]">Maximum Profit</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your sales data, enter food costs, and get AI-powered recommendations
          on what to promote, reprice, or remove — so every dish earns its place.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start Optimizing — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        {/* Feature highlights */}
        <div className="mt-16 grid sm:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Profit Margin Analysis",
              desc: "See exactly which items drain margin and which ones drive revenue."
            },
            {
              title: "Pricing Recommendations",
              desc: "Get data-backed price suggestions to boost profit without losing guests."
            },
            {
              title: "Menu Pruning Insights",
              desc: "Identify low-performers to cut complexity and reduce food waste."
            }
          ].map((f) => (
            <div
              key={f.title}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20" id="pricing">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">
            Pro Plan
          </p>
          <p className="text-5xl font-bold text-white mb-1">$17</p>
          <p className="text-[#8b949e] mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited menu item analysis",
              "AI pricing & promotion recommendations",
              "Food cost ratio tracking",
              "CSV sales data upload",
              "Monthly optimization reports",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-base"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24" id="faq">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "What data do I need to get started?",
              a: "Just a CSV export of your sales (item name, quantity sold, sale price) and your food cost per item. Most POS systems can export this in minutes."
            },
            {
              q: "How does the AI generate recommendations?",
              a: "The system calculates profit margins, food cost percentages, and popularity scores for each item, then applies menu engineering principles to surface actionable changes."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel with one click from your account dashboard. You keep access until the end of your billing period — no questions asked."
            }
          ].map((item) => (
            <div
              key={item.q}
              className="bg-[#161b22] border border-[#30363d] rounded-xl p-5"
            >
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center pb-10 text-[#6e7681] text-xs">
        © {new Date().getFullYear()} Menu Profit Optimizer. All rights reserved.
      </footer>
    </main>
  );
}
