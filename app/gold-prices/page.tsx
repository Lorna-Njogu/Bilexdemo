import Link from "next/link";
import { ArrowRight, BadgeDollarSign, LineChart, Scale, ShieldCheck } from "lucide-react";
import { GoldPriceReferenceSection } from "@/components/live-gold-chart";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { visuals } from "@/lib/site-data";

export const metadata = {
  title: "Live Gold Prices and XAU/USD Chart",
  description:
    "Live gold prices, XAU/USD chart, gold price chart USD, market trends and pricing explanation from Bilex Minerals.",
};

const insights = [
  {
    icon: BadgeDollarSign,
    title: "Live gold prices",
    text: "The XAU/USD chart provides a market reference for buyers, traders and investors before consultation.",
  },
  {
    icon: LineChart,
    title: "Gold market trends",
    text: "Market movement can be influenced by USD strength, liquidity, central bank policy and global risk sentiment.",
  },
  {
    icon: Scale,
    title: "Testing context",
    text: "Market price does not determine test results. Bilex results are based on the sample presented for analysis.",
  },
];

const explanations = [
  ["Spot price", "The live XAU/USD price is a reference for gold quoted against the United States dollar."],
  ["24h movement", "Short-term price change helps clients understand market direction before consultation."],
  ["Testing boundary", "Assaying and testing determine sample-related information, not future market value."],
  ["Professional consultation", "Bilex can discuss testing results and market context without making unsupported guarantees."],
];

export default function GoldPricesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Gold Prices"
          title="Live gold prices and XAU/USD market reference."
          text="Track a live gold price chart in USD, review market context and understand how spot pricing relates to professional gold testing and consultation."
          image={visuals.assay}
        />

        <GoldPriceReferenceSection />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Market Insight
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Gold price context for testing and consultation clients.
              </h2>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
              {insights.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={item.title} className="bg-[#100e0a] p-7">
                    <Icon size={24} className="text-[#d8bd6a]" />
                    <h2 className="mt-7 font-display text-3xl text-[#fff7e7]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {item.text}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Price Explanation
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                How live price relates to professional gold services.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Gold price data is useful, but testing, assaying and
                verification remain sample-based professional services.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {explanations.map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-4 py-7 md:grid-cols-[0.35fr_1fr]"
                >
                  <h3 className="font-display text-3xl text-[#d8bd6a]">
                    {title}
                  </h3>
                  <p className="leading-7 text-white/58">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <ShieldCheck className="text-[#d8bd6a]" size={25} />
              <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
                Need gold testing with market context?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Book a consultation to discuss sample testing, assaying and
                how current market pricing affects your questions.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Book Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
