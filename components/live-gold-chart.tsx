"use client";

import { useEffect, useRef } from "react";
import { BadgeDollarSign, Clock3, LineChart, ShieldCheck } from "lucide-react";

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
  hide_side_toolbar: true,
  withdateranges: true,
  details: true,
  calendar: false,
  support_host: "https://www.tradingview.com",
  studies: ["STD;EMA"],
};

const symbolInfoConfig = {
  symbol: "OANDA:XAUUSD",
  width: "100%",
  locale: "en",
  colorTheme: "dark",
  isTransparent: true,
};

function TradingViewSymbolInfo() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;

    if (!container) {
      return;
    }

    container.innerHTML = "";

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";
    script.async = true;
    script.innerHTML = JSON.stringify(symbolInfoConfig);

    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div ref={ref} className="tradingview-widget-container min-h-[120px]" />;
}

export function GoldChartPanel({ compact = false }: { compact?: boolean }) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = ref.current;

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
    script.innerHTML = JSON.stringify({
      ...chartConfig,
      hide_top_toolbar: compact,
      withdateranges: !compact,
    });

    container.appendChild(widget);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, [compact]);

  return (
    <div
      ref={ref}
      className={`tradingview-widget-container h-full w-full ${
        compact ? "min-h-[260px]" : "min-h-[560px]"
      }`}
    />
  );
}

export function CompactGoldPriceCard() {
  return (
    <aside className="overflow-hidden rounded-sm border border-[#d8bd6a]/28 bg-[#080705]/94 shadow-[0_28px_90px_rgba(0,0,0,0.46)] backdrop-blur-xl">
      <div className="border-b border-white/10 px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8bd6a]">
          Live Gold Price
        </p>
        <h2 className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#fff7e7]">
          XAU/USD spot reference
        </h2>
      </div>
      <div className="border-b border-white/10 px-3 py-2">
        <TradingViewSymbolInfo />
      </div>
      <div className="h-[280px] w-full">
        <GoldChartPanel compact />
      </div>
      <div className="grid grid-cols-3 gap-px bg-white/10">
        {[
          [BadgeDollarSign, "Spot", "USD"],
          [LineChart, "24h", "Market move"],
          [Clock3, "Live", "TradingView"],
        ].map(([Icon, label, text]) => {
          const CardIcon = Icon as typeof BadgeDollarSign;

          return (
            <div key={label as string} className="bg-[#0f0d09] p-4">
              <CardIcon className="text-[#d8bd6a]" size={17} />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.14em] text-[#fff7e7]">
                {label as string}
              </p>
              <p className="mt-1 text-[11px] text-white/50">
                {text as string}
              </p>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

export function GoldPriceReferenceSection() {
  return (
    <section id="gold-price" className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
            Live XAU/USD
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-balance text-[#fff7e7] md:text-6xl">
            Live gold price reference for testing and consultation.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
            Gold market pricing is useful context before consultation, but
            Bilex test results are based only on the sample presented for
            analysis.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
            {[
              ["Market reference", "Live XAU/USD chart and current spot price context."],
              ["Professional boundary", "Final consultation depends on sample testing, not market speculation."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#11100d] p-5">
                <ShieldCheck className="text-[#d8bd6a]" size={21} />
                <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#fff7e7]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/54">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-sm border border-white/10 bg-[#0b0907] shadow-[0_24px_90px_rgba(0,0,0,0.42)]">
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
          <div className="h-[560px] w-full">
            <GoldChartPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
