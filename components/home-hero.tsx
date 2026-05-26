"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GoldSingleQuotePanel, HeroGoldChart } from "@/components/live-gold-chart";

export function HomeHero() {
  return (
    <section className="theme-dark-surface relative min-h-screen overflow-hidden bg-[#030303]">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_70%_18%,rgba(216,189,106,0.14),transparent_34%),linear-gradient(120deg,#030303_0%,#0b0907_46%,#17130c_100%)]" />

      <div className="relative z-[1] md:hidden">
        <MobileGoldMarketHero />
      </div>

      <div className="hero-chart-background relative z-[1] hidden h-[100svh] min-h-[760px] w-full md:block">
        <DesktopHeroGoldChart />
      </div>

      <div className="pointer-events-none absolute inset-0 z-[2] hidden md:block">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.78)_0%,rgba(3,3,3,0.5)_54%,rgba(3,3,3,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030303]/82 to-transparent" />
        <div className="hero-grid absolute inset-0 opacity-22" />
        <div className="noise-layer absolute inset-0" />
      </div>

      <div className="absolute inset-0 z-[3] hidden px-5 pb-16 pt-28 md:block md:px-8 lg:px-12">
        <div className="mx-auto flex h-full min-h-[calc(100svh-7rem)] max-w-7xl items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d8bd6a]">
              Gold Testing • Assaying • Consultation
            </p>
            <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.94] text-balance text-[#fff7e7] md:text-7xl xl:text-8xl">
              Precision in Every Test
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
              Bilex Minerals provides testing, assaying, purity review and private consultation for clients with gold samples requiring accurate results.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#booking"
                className="group inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#080706] transition hover:bg-[#f5df9a]"
              >
                Book Appointment
                <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
              <Link
                href="/testing-assaying"
                className="inline-flex items-center gap-3 rounded-sm border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopHeroGoldChart() {
  const shouldRenderChart = useMediaQuery("(min-width: 768px)");

  if (!shouldRenderChart) {
    return null;
  }

  return <HeroGoldChart />;
}

function MobileGoldMarketHero() {
  const shouldRenderQuote = useMediaQuery("(max-width: 767px)");

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-16 pt-24">
      <div className="mobile-market-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.12)_0%,rgba(3,3,3,0.72)_62%,#030303_100%)]" />
      <div className="noise-layer absolute inset-0 opacity-60" />

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#d8bd6a]/24 bg-black/28 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8bd6a] backdrop-blur-md">
          <span className="mobile-live-dot h-2 w-2 rounded-full bg-[#7dffca]" />
          TradingView live
        </div>

        <div className="mobile-market-price-glow relative mx-auto mt-9">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
            XAU/USD
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/48">
            Gold Spot
          </p>
          <div className="mobile-tradingview-quote mx-auto mt-8 h-32 w-full max-w-[340px] overflow-hidden rounded-sm border border-[#d8bd6a]/18 bg-black/18 backdrop-blur-sm">
            {shouldRenderQuote ? (
              <GoldSingleQuotePanel />
            ) : (
              <div className="flex h-full items-center justify-center text-xs font-semibold uppercase tracking-[0.18em] text-white/42">
                Loading live quote
              </div>
            )}
          </div>
        </div>

        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/42">
          Auto-updating market reference
        </p>
      </div>
    </div>
  );
}

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const updateMatches = () => setMatches(mediaQuery.matches);

    updateMatches();
    mediaQuery.addEventListener("change", updateMatches);

    return () => mediaQuery.removeEventListener("change", updateMatches);
  }, [query]);

  return matches;
}
