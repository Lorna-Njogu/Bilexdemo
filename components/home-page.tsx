"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bitcoin,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  FileText,
  FlaskConical,
  Gem,
  MessageCircle,
  MessageSquareText,
  Microscope,
  PackageCheck,
  Plus,
  RefreshCw,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { HeroGoldChart } from "@/components/live-gold-chart";
import { homeFaqs } from "@/lib/seo";
import { contact } from "@/lib/site-data";

const fadeUp = {
  initial: { opacity: 1, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.75, ease: "easeOut" },
} as const;

const serviceSnapshot = [
  {
    icon: FlaskConical,
    title: "Testing",
    text: "Professional sample evaluation for clients preparing to buy, sell or proceed.",
  },
  {
    icon: Microscope,
    title: "Assaying",
    text: "Detailed chemical analysis of submitted gold samples, with results documented against the tested material.",
  },
  {
    icon: Gem,
    title: "Purity Review",
    text: "A precise assessment of sample grade and physical condition.",
  },
  {
    icon: FileText,
    title: "Private Consultation",
    text: "One-on-one review of your results and a clear discussion of next steps.",
  },
];

const reasons = [
  ["Accurate Testing", "Results are produced from the submitted sample. The methodology is consistent across all appointments."],
  ["Private Handling", "Appointments, samples and client discussions are handled with full discretion."],
  ["Clear Process", "The testing process is confirmed with the client before the appointment begins."],
  ["Defined Boundaries", "Bilex provides sample-based results. Origin, ownership and market value sit outside the scope of a testing appointment."],
  ["Result Review", "Results are reviewed with the client directly. Next steps are the client's to decide."],
];

const appointmentSteps = [
  { icon: CalendarCheck, title: "Book Appointment" },
  { icon: PackageCheck, title: "Submit Sample" },
  { icon: FlaskConical, title: "Testing & Assay Review" },
  { icon: MessageSquareText, title: "Result Discussion" },
];

const payments = [
  [CreditCard, "Bank Transfer"],
  [BadgeCheck, "USDT"],
  [Bitcoin, "Cryptocurrency"],
  [Banknote, "Cash"],
];

const goldPriceEndpoint = "https://api.gold-api.com/price/XAU/USD";
const fallbackGoldPrice = 4535.3;

type MarketDirection = "up" | "down" | "flat";
type FeedState = "connecting" | "live" | "offline";

type MarketState = {
  price: number;
  basePrice: number;
  low: number;
  high: number;
  direction: MarketDirection;
  feed: FeedState;
  updatedAt: Date | null;
  isUpdating: boolean;
  series: number[];
  flashKey: number;
};

function createInitialSeries(price: number) {
  return [
    price - 2.4,
    price - 1.2,
    price - 1.8,
    price - 0.6,
    price + 0.4,
    price - 0.2,
    price + 1.1,
    price + 0.7,
    price + 1.8,
    price + 1.3,
    price + 2.2,
    price + 1.7,
  ];
}

const initialMarketState: MarketState = {
  price: fallbackGoldPrice,
  basePrice: fallbackGoldPrice,
  low: fallbackGoldPrice - 2.4,
  high: fallbackGoldPrice + 2.2,
  direction: "flat",
  feed: "connecting",
  updatedAt: null,
  isUpdating: true,
  series: createInitialSeries(fallbackGoldPrice),
  flashKey: 0,
};

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-[#f8f1e4]">
      <HeroSection />
      <ServicesSnapshot />
      <ProcessSection />
      <WhyChooseSection />
      <PaymentMethodsSection />
      <GoldSalesSupportSection />
      <FaqSection />
      <BookingSection />
    </main>
  );
}

function SectionHeader({
  eyebrow,
  title,
  text,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      {...fadeUp}
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl leading-[1.02] text-balance text-[#fff7e7] md:text-6xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-6 text-base leading-8 text-white/60 md:text-lg">
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function HeroSection() {
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
          <motion.div {...fadeUp}>
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
          </motion.div>
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
  const [market, setMarket] = useState<MarketState>(initialMarketState);

  useEffect(() => {
    let active = true;

    async function loadGoldPrice() {
      setMarket((previous) => ({ ...previous, isUpdating: true }));

      try {
        const response = await fetch(goldPriceEndpoint, {
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Gold price feed unavailable");
        }

        const data = (await response.json()) as {
          price?: number;
          updatedAt?: string;
        };
        const nextPrice = Number(data.price);

        if (!Number.isFinite(nextPrice)) {
          throw new Error("Gold price feed returned an invalid price");
        }

        const nextUpdatedAt = data.updatedAt
          ? new Date(data.updatedAt)
          : new Date();
        const updatedAt = Number.isNaN(nextUpdatedAt.getTime())
          ? new Date()
          : nextUpdatedAt;

        if (!active) {
          return;
        }

        setMarket((previous) => {
          const isFirstLivePrice = previous.feed === "connecting";
          const direction: MarketDirection = isFirstLivePrice
            ? "flat"
            : nextPrice > previous.price + 0.01
              ? "up"
              : nextPrice < previous.price - 0.01
                ? "down"
                : "flat";
          const series = isFirstLivePrice
            ? createInitialSeries(nextPrice)
            : [...previous.series.slice(-17), nextPrice];
          const low = Math.min(isFirstLivePrice ? nextPrice : previous.low, nextPrice);
          const high = Math.max(isFirstLivePrice ? nextPrice : previous.high, nextPrice);

          return {
            price: nextPrice,
            basePrice: isFirstLivePrice ? nextPrice : previous.basePrice,
            low,
            high,
            direction,
            feed: "live",
            updatedAt,
            isUpdating: false,
            series,
            flashKey: direction === "flat" ? previous.flashKey : previous.flashKey + 1,
          };
        });
      } catch {
        if (!active) {
          return;
        }

        setMarket((previous) => ({
          ...previous,
          feed: previous.feed === "live" ? "live" : "offline",
          isUpdating: false,
        }));
      }
    }

    loadGoldPrice();
    const intervalId = window.setInterval(loadGoldPrice, 10000);

    return () => {
      active = false;
      window.clearInterval(intervalId);
    };
  }, []);

  const priceChange = market.price - market.basePrice;
  const percentChange = market.basePrice
    ? (priceChange / market.basePrice) * 100
    : 0;
  const isNegative = percentChange < 0;
  const sparklinePath = useMemo(
    () => buildSparklinePath(market.series),
    [market.series],
  );
  const priceFlashClass =
    market.direction === "up"
      ? "mobile-market-flash-up"
      : market.direction === "down"
        ? "mobile-market-flash-down"
        : "";
  const movementClass = isNegative ? "text-[#ff8f8f]" : "text-[#7dffca]";
  const feedLabel =
    market.feed === "live"
      ? "Live feed"
      : market.feed === "connecting"
        ? "Connecting"
        : "Reference feed";
  const lastUpdatedLabel = market.updatedAt
    ? formatLastUpdated(market.updatedAt)
    : "syncing";

  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pb-16 pt-24">
      <div className="mobile-market-gradient absolute inset-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.12)_0%,rgba(3,3,3,0.72)_62%,#030303_100%)]" />
      <div className="noise-layer absolute inset-0 opacity-60" />

      <div className="relative z-10 w-full max-w-md text-center">
        <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-[#d8bd6a]/24 bg-black/28 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d8bd6a] backdrop-blur-md">
          <span
            className={`h-2 w-2 rounded-full ${
              market.feed === "live" ? "bg-[#7dffca]" : "bg-[#d8bd6a]"
            }`}
          />
          {feedLabel}
          <RefreshCw
            aria-hidden="true"
            size={11}
            className={`mobile-update-indicator ${
              market.isUpdating ? "mobile-update-spin text-[#7dffca]" : "text-white/38"
            }`}
          />
        </div>

        <div className="mobile-market-price-glow relative mx-auto mt-9">
          <p className="text-sm font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
            XAU/USD
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/48">
            Gold Spot
          </p>
          <p
            key={market.flashKey}
            className={`mt-7 text-5xl font-semibold leading-none text-[#fff7e7] tabular-nums min-[390px]:text-6xl sm:text-7xl ${priceFlashClass}`}
          >
            {formatMarketPrice(market.price)}
          </p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-white/46">
            USD / Troy oz
          </p>
        </div>

        <div className="mt-7 flex items-center justify-center gap-3">
          <span
            className={`rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold tabular-nums ${movementClass}`}
          >
            {isNegative ? "▼" : "▲"} {formatPercent(percentChange)}
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white/54">
            Market Reference
          </span>
        </div>

        <div className="mx-auto mt-8 h-20 max-w-sm">
          <svg
            aria-hidden="true"
            viewBox="0 0 320 80"
            className="h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="mobileGoldLine" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor="#8f7650" />
                <stop offset="54%" stopColor="#d8bd6a" />
                <stop offset="100%" stopColor="#7dffca" />
              </linearGradient>
              <filter id="mobileGoldGlow" x="-20%" y="-80%" width="140%" height="260%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={sparklinePath}
              fill="none"
              stroke="rgba(216,189,106,0.16)"
              strokeWidth="12"
              strokeLinecap="round"
            />
            <path
              d={sparklinePath}
              className="mobile-sparkline-path"
              fill="none"
              filter="url(#mobileGoldGlow)"
              stroke="url(#mobileGoldLine)"
              strokeLinecap="round"
              strokeWidth="3"
            />
          </svg>
        </div>

        <p className="mt-5 text-sm font-medium text-white/62 tabular-nums">
          {formatMarketPrice(market.low)} — {formatMarketPrice(market.high)} Session range
        </p>
        <p className="mt-3 flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/42">
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              market.feed === "live" || market.isUpdating
                ? "mobile-live-dot bg-[#7dffca]"
                : "bg-[#d8bd6a]/70"
            }`}
          />
          Last updated: {lastUpdatedLabel}
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

function buildSparklinePath(points: number[]) {
  const width = 320;
  const height = 80;
  const padding = 8;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x =
        points.length === 1
          ? width / 2
          : (index / (points.length - 1)) * width;
      const y =
        height - padding - ((point - min) / range) * (height - padding * 2);

      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

function formatMarketPrice(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number) {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function formatLastUpdated(value: Date) {
  return new Intl.DateTimeFormat("en-US", {
    hour: "numeric",
    minute: "2-digit",
  }).format(value);
}

function ServicesSnapshot() {
  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Testing Services"
            title="Testing, assaying and purity review — handled in a single appointment."
            text="From a first pass test to a detailed assay with documented results. Choose the service that matches your needs."
          />
          <Link
            href="/testing-assaying"
            className="inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
          >
            View Testing Services
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {serviceSnapshot.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className="rounded-sm border border-white/10 bg-[#11100d] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
              >
                <Icon className="text-[#d8bd6a]" size={25} />
                <h3 className="mt-8 font-display text-3xl text-[#fff7e7]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {service.text}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GoldSalesSupportSection() {
  return (
    <section className="bg-[#050505] px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 border-y border-white/10 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
            Gold Sales Support
          </p>
          <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
            Gold sales and sourcing, by private inquiry.
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/58">
            Select sales and sourcing are available for qualifying clients. Inquiries are handled directly.
          </p>
        </div>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
        >
          Submit an Inquiry
          <MessageCircle size={16} />
        </a>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Appointment Handling"
          title="How appointments are run."
          text="Each appointment follows a defined process from submission through to result discussion."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([title, text], index) => (
            <motion.article
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="bg-[#0f0d09] p-6"
            >
              <CheckCircle2 className="text-[#d8bd6a]" size={21} />
              <h3 className="mt-7 font-display text-2xl text-[#fff7e7]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Appointment Process"
          title="A clear process for testing appointments."
          text="Appointments are confirmed before testing proceeds."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {appointmentSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className="rounded-sm border border-white/10 bg-[#11100d] p-6"
              >
                <Icon className="text-[#d8bd6a]" size={26} />
                <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#fff7e7]">
                  {step.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PaymentMethodsSection() {
  return (
    <section className="px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
        <SectionHeader
          eyebrow="Payment Methods"
          title="Accepted Payment Methods"
          text="Payments are for testing, assaying, consultation or related services. Payment is not affected by the test result."
        />

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
          {payments.map(([Icon, label]) => {
            const PaymentIcon = Icon as typeof CreditCard;

            return (
              <div key={label as string} className="bg-[#11100d] p-7">
                <PaymentIcon className="text-[#d8bd6a]" size={24} />
                <h3 className="mt-7 font-display text-3xl text-[#fff7e7]">
                  {label as string}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BookingSection() {
  return (
    <section id="booking" className="bg-[#050505] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeader
          eyebrow="Book Appointment"
          title="Book Appointment"
          text="Send your details and preferred appointment time. The Bilex team will confirm availability before testing proceeds."
        />
        <div>
          <p className="mb-4 text-sm leading-7 text-[#d8bd6a]">
            Appointments are confirmed directly by the Bilex team.
          </p>
          <BookingInquiryForm />
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="Questions Before Booking"
          title="Questions Before Booking"
          text="Quick answers before booking a testing or assaying appointment."
          align="center"
        />
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {homeFaqs.map(({ question, answer }) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-display text-2xl text-[#fff7e7] [&::-webkit-details-marker]:hidden">
                {question}
                <Plus
                  aria-hidden="true"
                  className="shrink-0 text-[#d8bd6a] transition group-open:rotate-45"
                  size={22}
                />
              </summary>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-white/58">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
