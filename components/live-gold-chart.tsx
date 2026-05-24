"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgeDollarSign, Clock3, ShieldCheck } from "lucide-react";

const chartConfig = {
  autosize: true,
  symbol: "OANDA:XAUUSD",
  interval: "15",
  timezone: "Etc/UTC",
  theme: "dark",
  style: "1",
  locale: "en",
  enable_publishing: false,
  allow_symbol_change: false,
  hide_side_toolbar: false,
  withdateranges: true,
  details: true,
  calendar: false,
  support_host: "https://www.tradingview.com",
  studies: ["STD;EMA", "STD;RSI"],
};

const heroChartUrl =
  "https://s.tradingview.com/widgetembed/?frameElementId=bilex-hero-xauusd&symbol=OANDA%3AXAUUSD&interval=15&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=0b0907&theme=dark&style=1&timezone=Etc%2FUTC&withdateranges=1&hideideas=1&locale=en&studies=%5B%22STD%3BEMA%22%2C%22STD%3BRSI%22%5D&hide_legend=0&hide_top_toolbar=0&allow_symbol_change=0&details=1&calendar=0&studies_overrides=%7B%7D&overrides=%7B%22paneProperties.background%22%3A%22%23050505%22%2C%22paneProperties.backgroundType%22%3A%22solid%22%2C%22mainSeriesProperties.showCountdown%22%3Atrue%7D&enabled_features=%5B%5D&disabled_features=%5B%22header_symbol_search%22%2C%22header_compare%22%5D";

export function HeroGoldChartBackground() {
  return (
    <iframe
      title="Live XAU/USD gold chart"
      src={heroChartUrl}
      loading="eager"
      className="h-full w-full border-0"
      allow="fullscreen"
    />
  );
}

export function LiveGoldChartSection() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = chartRef.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget h-full w-full";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify(chartConfig);

    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <section
      id="gold-market"
      className="relative overflow-hidden bg-[#070604] px-5 py-24 md:px-8 lg:px-12"
    >
      <div className="absolute inset-0 hero-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(216,189,106,0.13),transparent_34%),linear-gradient(180deg,#070604,#050505)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <motion.div
          initial={{ opacity: 1, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
            Live gold market
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-balance text-[#fff7e7] md:text-6xl">
            XAU/USD live reference for gold-related discussions.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            The chart gives qualified buyers and sellers a current gold market
            reference before commercial terms, documentation, verification and
            settlement are discussed.
          </p>

          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
            {[
              [BadgeDollarSign, "XAU/USD", "Gold quoted against USD."],
              [Clock3, "Live feed", "TradingView market widget."],
              [ShieldCheck, "Reference only", "Final terms require review."],
            ].map(([Icon, title, text]) => {
              const CardIcon = Icon as typeof BadgeDollarSign;

              return (
                <div key={title as string} className="bg-[#11100d] p-5">
                  <CardIcon size={21} className="text-[#d8bd6a]" />
                  <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#fff7e7]">
                    {title as string}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/54">
                    {text as string}
                  </p>
                </div>
              );
            })}
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/38 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
          >
            Discuss gold inquiry
            <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.08 }}
          className="overflow-hidden rounded-sm border border-white/10 bg-[#0b0907] shadow-[0_24px_90px_rgba(0,0,0,0.42)]"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 px-5 py-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bd6a]">
                OANDA:XAUUSD
              </p>
              <p className="mt-1 text-sm text-white/52">
                Spot gold chart and current trading reference
              </p>
            </div>
            <p className="rounded-sm border border-white/10 bg-white/[0.04] px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-white/56">
              Powered by TradingView
            </p>
          </div>
          <div className="h-[500px] w-full md:h-[600px]">
            <div
              ref={chartRef}
              className="tradingview-widget-container h-full min-h-[500px] w-full md:min-h-[600px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
