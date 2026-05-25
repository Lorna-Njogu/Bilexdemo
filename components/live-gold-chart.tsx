"use client";

const chartConfig = {
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
  autosize: true,
};

export function GoldChartPanel() {
  const chartUrl = `https://www.tradingview-widget.com/embed-widget/advanced-chart/?locale=en#${encodeURIComponent(
    JSON.stringify(chartConfig),
  )}`;

  return (
    <iframe
      title="Live XAU/USD market reference"
      src={chartUrl}
      className="h-full w-full border-0"
      loading="eager"
    />
  );
}

export function HeroGoldChart() {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 opacity-90">
        <GoldChartPanel />
      </div>
    </div>
  );
}
