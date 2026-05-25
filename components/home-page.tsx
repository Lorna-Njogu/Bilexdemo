"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Compass,
  Factory,
  FileCheck2,
  Gem,
  Globe2,
  Handshake,
  HardHat,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  Radar,
  Scale,
  ShieldCheck,
  Ship,
  Truck,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { BuyerQualificationSection } from "@/components/buyer-qualification-section";
import { HeroGoldChartBackground } from "@/components/live-gold-chart";
import {
  contact,
  mineralShowcase,
  services,
  visuals,
  workflow,
} from "@/lib/site-data";

const fadeUp = {
  initial: { opacity: 1, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.8, ease: "easeOut" },
} as const;

const trustBadges = [
  "Industrial Minerals",
  "Bulk Supply",
  "Export Ready",
  "Quality Focused",
];

const trustItems = [
  {
    icon: Globe2,
    title: "Mineral Portfolio",
    text: "Rare, strategic and industrial minerals for buyer demand.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Supply Chains",
    text: "Structured sourcing and export planning for consistency.",
  },
  {
    icon: Microscope,
    title: "Mineral Analysis",
    text: "Material verification, sample review and specification support.",
  },
  {
    icon: Ship,
    title: "Export Coordination",
    text: "Freight planning, cargo handling, and export paperwork support.",
  },
  {
    icon: Handshake,
    title: "Industrial Partnerships",
    text: "Long-term procurement relationships with supply partners.",
  },
];

const serviceIcons = [
  Gem,
  Scale,
  Microscope,
  Ship,
  Compass,
  HardHat,
  ClipboardCheck,
];

const serviceImages = [
  visuals.hero,
  visuals.assay,
  visuals.assay,
  visuals.logistics,
  visuals.equipment,
  visuals.equipment,
  visuals.hero,
];

const operations = [
  {
    icon: Radar,
    title: "Mineral sourcing",
    text: "Supply requirements are matched with reviewed mineral sources and qualified commercial partners.",
  },
  {
    icon: Microscope,
    title: "Mineral analysis",
    text: "Material is reviewed through sample handling, testing coordination, documentation, and specification checks.",
  },
  {
    icon: Factory,
    title: "Processing coordination",
    text: "Processing, preparation, sorting, and buyer-specific handling requirements are coordinated before shipment.",
  },
  {
    icon: FileCheck2,
    title: "Delivery and export",
    text: "Export paperwork, freight planning, cargo movement, and buyer communication are aligned for delivery.",
  },
];

const reasons = [
  ["Reliable Supply Chains", "Structured sourcing and logistics designed for consistency and timely delivery."],
  ["Industry-Focused Operations", "Built around the operational needs of industrial buyers and manufacturing partners."],
  ["Verified Quality Standards", "Mineral handling and assessment processes focused on commercial-grade consistency."],
  ["Strategic Partnerships", "Long-term relationships with suppliers, processors and industrial clients."],
  ["Export-Focused Operations", "Documentation, cargo handling and freight planning built into the supply workflow."],
  ["Industrial Applications", "Rare and strategic mineral support for manufacturing, refining, energy and technology markets."],
];

const gallery = [
  {
    image: visuals.hero,
    title: "Industrial Mineral Sourcing",
    label: "Reviewed supply corridors",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: visuals.assay,
    title: "Mineral Analysis",
    label: "Sample review and testing",
    className: "",
  },
  {
    image: visuals.logistics,
    title: "Export Coordination",
    label: "Cargo movement and freight",
    className: "",
  },
  {
    image: visuals.equipment,
    title: "Geological Field Support",
    label: "Survey and sampling support",
    className: "md:col-span-2",
  },
  {
    image: visuals.assay,
    title: "Processing Review",
    label: "Specification and handling",
    className: "",
  },
];

const equipment = [
  {
    icon: HardHat,
    title: "Field Support",
    specs: ["Exploration crews", "Site coordination", "Sampling support"],
  },
  {
    icon: Factory,
    title: "Processing Support",
    specs: ["Sorting support", "Material handling", "Specification review"],
  },
  {
    icon: Truck,
    title: "Logistics Assets",
    specs: ["Bonded transport", "Freight planning", "Export routing"],
  },
  {
    icon: Boxes,
    title: "Supply Handling",
    specs: ["Storage planning", "Cargo preparation", "Export readiness"],
  },
];

const industries = [
  "Manufacturing",
  "Industrial Processing",
  "Export Markets",
  "Metal Refining",
  "Technology Materials",
];

const regions = [
  {
    title: "Kenya",
    text: "Nairobi commercial desk, buyer intake, documentation review, and logistics coordination.",
    x: "47%",
    y: "44%",
  },
  {
    title: "Tanzania",
    text: "Dar es Salaam trade and export support for regional mineral movement.",
    x: "55%",
    y: "62%",
  },
  {
    title: "Regional Corridors",
    text: "Cross-border sourcing support, field access, and mineral movement planning.",
    x: "42%",
    y: "57%",
  },
];

const trustSignals = [
  {
    title: "Commercial-Grade Consistency",
    text: "We support consistent mineral handling through material review, documentation, and buyer specification checks.",
  },
  {
    title: "Traceable Sourcing",
    text: "Our operations prioritize reliability, supply partner review, and traceable sourcing before commercial movement.",
  },
  {
    title: "Export Documentation",
    text: "We support industrial buyers with dependable supply coordination, export paperwork, freight planning, and cargo communication.",
  },
];

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-[#f8f1e4]">
      <HeroSection />
      <TrustBar />
      <MineralPortfolioSection />
      <AboutSection />
      <ServicesSection />
      <OperationsSection />
      <MarketInsightSection />
      <WhyChooseSection />
      <IndustriesSection />
      <GallerySection />
      <ProcessSection />
      <EquipmentSection />
      <RegionalPresenceSection />
      <TrustSection />
      <BuyerQualificationSection />
      <PaymentBookingSection />
      <ContactSection />
      <FaqSection />
      <MobileContactDock />
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
      className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-4xl leading-[1.02] text-balance text-[#fff7e7] md:text-6xl">
        {title}
      </h2>
      {text ? (
        <p
          className={`mt-6 text-base leading-8 text-white/62 md:text-lg ${
            align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {text}
        </p>
      ) : null}
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section
      id="gold-market"
      className="relative min-h-[92svh] overflow-hidden bg-[#030303] px-5 pb-10 pt-28 md:px-8 lg:px-12"
    >
      <div className="absolute inset-0 bg-[#050505]">
        <div className="absolute inset-0 opacity-100">
          <HeroGoldChartBackground />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.96)_34%,rgba(3,3,3,0.42)_62%,rgba(3,3,3,0.08)_100%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.62)_0%,rgba(3,3,3,0.1)_45%,#050505_100%)]" />
        <div className="hero-grid pointer-events-none absolute inset-0 opacity-18" />
        <div className="noise-layer absolute inset-0" />
        {[8, 18, 30, 45, 58, 72, 84].map((left, index) => (
          <span
            key={left}
            className="floating-particle absolute h-1 w-1 rounded-full bg-[#d8bd6a]"
            style={{
              left: `${left}%`,
              top: `${18 + (index % 4) * 14}%`,
              animationDelay: `${index * 0.6}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(92svh-8rem)] max-w-7xl flex-col justify-between gap-12">
        <motion.div
          initial={{ opacity: 1, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: "easeOut" }}
          className="max-w-5xl pt-8 md:pt-14"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d8bd6a]">
            Industrial minerals Kenya / bulk supply / export
          </p>
          <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.92] text-balance text-[#fff7e7] md:text-7xl xl:text-8xl">
            Industrial Mineral Sourcing, Supply and Export
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Bilex Minerals supplies industrial minerals for construction,
            manufacturing and export markets, with reliable sourcing, quality
            focus and bulk supply capability.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d8bd6a]"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#quote"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#080706] transition hover:bg-[#f5df9a]"
            >
              Request a Quote
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-sm border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.85, ease: "easeOut" }}
          className="grid max-w-4xl gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur md:grid-cols-3"
        >
          {[
            { value: "Market", label: "Live XAU/USD chart" },
            { value: "Export", label: "Export-focused operations" },
            { value: "Bulk", label: "Bulk mineral supply" },
          ].map((item) => (
            <div key={item.label} className="bg-[#070605]/78 p-5 md:p-6">
              <p className="font-display text-3xl text-[#d8bd6a] md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/54">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="relative border-y border-white/10 bg-[#080806] px-5 py-8 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-5">
        {trustItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="bg-[#0d0c09] p-5 transition hover:bg-[#15120c]"
            >
              <Icon size={21} className="text-[#d8bd6a]" />
              <h3 className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-[#fff7e7]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/52">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function MineralPortfolioSection() {
  return (
    <section id="minerals" className="relative bg-[#050505] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeader
            eyebrow="Our Mineral Products"
            title="Industrial mineral products positioned around commercial demand."
            text="Industrial buyers care about mineral type, specification, availability, sourcing reliability and export capability. This portfolio is structured around those commercial requirements."
          />
          <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
            {mineralShowcase.map((mineral, index) => (
              <motion.article
                key={mineral.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className="bg-[#11100d] p-6"
              >
                <p className="font-display text-3xl text-[#d8bd6a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-7 font-display text-3xl text-[#fff7e7]">
                  {mineral.name}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {mineral.note}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="company" className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_22%,rgba(184,109,61,0.16),transparent_34%),linear-gradient(180deg,#050505,#0b0907)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
        <motion.div
          {...fadeUp}
          className="relative min-h-[520px] overflow-hidden rounded-sm border border-white/10 bg-white/[0.03]"
        >
          <Image
            src={visuals.assay}
            alt="Industrial mineral analysis and sample review workbench"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.86))]" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-px bg-white/10">
            {["Sourcing", "Processing", "Export"].map((item) => (
              <div key={item} className="bg-black/62 p-4 backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bd6a]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="About Bilex"
            title="Mineral sourcing, industrial supply and global trade."
            text="Bilex Minerals operates at the intersection of mineral sourcing, industrial supply and global trade, focusing on reliability, traceability and long-term partnerships."
          />

          <motion.div
            {...fadeUp}
            className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3"
          >
            {[
              ["Mineral sourcing", "Strategic sourcing of industrial and rare minerals through verified supply networks."],
              ["Processing support", "Material handling, preparation and specification review for commercial requirements."],
              ["Export partnerships", "Mineral transportation and export handling for regional and international markets."],
            ].map(([title, text]) => (
              <div key={title} className="bg-[#0d0b08] p-6">
                <p className="font-display text-2xl text-[#d8bd6a]">
                  {title}
                </p>
                <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-[#0a0907] px-5 py-28 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Core Services"
            title="Supply capabilities for mineral procurement and export."
            text="Each service is defined by the commercial outcome: sourcing, verification, processing coordination, logistics, supply partnerships and export readiness."
          />
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
          >
            View capabilities
            <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = serviceIcons[index] ?? Gem;
            const image = serviceImages[index] ?? visuals.hero;

            return (
              <motion.article
                key={service.slug}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: index * 0.04 }}
                className="group relative min-h-[360px] overflow-hidden rounded-sm border border-white/10 bg-[#11100d] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              >
                <Image
                  src={image}
                  alt={`${service.title} capability at Bilex Minerals`}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover opacity-24 transition duration-700 group-hover:scale-105 group-hover:opacity-34"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.28),rgba(5,5,5,0.96))]" />
                <div className="relative flex h-full min-h-[312px] flex-col justify-between">
                  <div className="flex items-center justify-between">
                    <div className="grid h-12 w-12 place-items-center rounded-sm border border-[#d8bd6a]/36 bg-black/40 text-[#d8bd6a]">
                      <Icon size={22} />
                    </div>
                    <p className="font-display text-3xl text-white/22">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8bd6a]">
                      {service.eyebrow}
                    </p>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-[#fff7e7]">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-white/62">
                      {service.summary}
                    </p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a]"
                    >
                      View capability
                      <ArrowRight
                        size={15}
                        className="transition group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function OperationsSection() {
  return (
    <section id="operations" className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505,#0e0c08_48%,#050505)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Operations & Logistics"
            title="A practical supply workflow from mineral source to export delivery."
            text="The operating model connects mineral sourcing, analysis, processing coordination, documentation, freight planning, and buyer communication."
          />

          <motion.div
            {...fadeUp}
            className="mt-10 divide-y divide-white/10 border-y border-white/10"
          >
            {operations.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="grid gap-5 py-6 sm:grid-cols-[auto_1fr]">
                  <div className="grid h-11 w-11 place-items-center rounded-sm border border-[#d8bd6a]/34 bg-[#d8bd6a]/8 text-[#d8bd6a]">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#fff7e7]">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-7 text-white/58">
                      {item.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="relative min-h-[620px] overflow-hidden rounded-sm border border-white/10 bg-[#0c0b08] p-6"
        >
          <Image
            src={visuals.logistics}
            alt="Secure mineral export logistics and cargo movement"
            fill
            sizes="(min-width: 1024px) 52vw, 100vw"
            className="object-cover opacity-42"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,4,0.28),#070604_92%)]" />
          <div className="regional-grid absolute inset-0" />

          <div className="relative z-10 flex h-full min-h-[560px] flex-col justify-between">
            <div className="max-w-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8bd6a]">
                Corridor Control
              </p>
              <h3 className="mt-4 font-display text-4xl leading-tight text-[#fff7e7]">
                Kenya to Tanzania trade movement.
              </h3>
            </div>

            <div className="relative mx-auto h-80 w-full max-w-xl">
              <div className="route-line route-line-one" />
              <div className="route-line route-line-two" />
              {[
                ["Source", "30%", "42%"],
                ["Assess", "49%", "54%"],
                ["Process", "67%", "70%"],
                ["Export", "82%", "36%"],
              ].map(([label, left, top], index) => (
                <div
                  key={label}
                  className="absolute"
                  style={{ left, top }}
                >
                  <span
                    className="route-pulse absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8bd6a]/30"
                    style={{ animationDelay: `${index * 0.5}s` }}
                  />
                  <span className="relative z-10 block h-3 w-3 rounded-full bg-[#d8bd6a] shadow-[0_0_28px_rgba(216,189,106,0.9)]" />
                  <span className="mt-3 block -translate-x-1/3 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-white/72">
                    {label}
                  </span>
                </div>
              ))}
            </div>

            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
              {["Source", "Assess", "Export"].map((item) => (
                <div key={item} className="bg-black/62 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d8bd6a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="bg-[#0a0907] px-5 py-28 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Choose Bilex"
          title="Dependable supply coordination for industrial mineral buyers."
          text="The work is direct and practical: reviewed sourcing channels, consistent handling, responsive communication, export planning, and long-term commercial relationships."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, text], index) => (
            <motion.div
              key={title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="group bg-[#0f0d09] p-7 transition hover:bg-[#17130c]"
            >
              <CheckCircle2 className="text-[#d8bd6a]" size={21} />
              <h3 className="mt-8 font-display text-2xl text-[#fff7e7]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MarketInsightSection() {
  return (
    <section id="market-insight" className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Live Market Insight"
          title="Gold price visibility for mineral supply discussions."
          text="The hero includes a live XAU/USD market chart to give buyers a current USD reference before quote discussions, documentation review and supply negotiation."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["XAU/USD reference", "Live TradingView market data for gold quoted against USD."],
            ["Quote context", "Useful for gold-related inquiries before formal pricing and documentation review."],
            ["Commercial review", "Final supply terms are confirmed only after buyer qualification and written engagement."],
          ].map(([title, text]) => (
            <article
              key={title}
              className="rounded-sm border border-white/10 bg-white/[0.035] p-7"
            >
              <h3 className="font-display text-3xl text-[#d8bd6a]">
                {title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section id="applications" className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Applications and industries served."
          text="Bilex Minerals supports mineral demand across manufacturing, processing, export markets, metal refining, energy, technology and industrial supply chains."
        />

        <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
          {industries.map((industry, index) => (
            <motion.div
              key={industry}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="bg-[#11100d] p-6"
            >
              <p className="font-display text-3xl text-[#d8bd6a]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#fff7e7]">
                {industry}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section id="gallery" className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[#050505]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Projects & Operations"
            title="Industrial mineral handling, processing and export environments."
            text="The visual language centers on mineral textures, analysis, processing support, field operations, and cargo movement."
          />
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Mineral sourcing, processing support, logistics handling, and
            field coordination are presented as one controlled supply workflow.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[260px] gap-4 md:grid-cols-4">
          {gallery.map((item, index) => (
            <motion.article
              key={`${item.title}-${index}`}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className={`group relative overflow-hidden rounded-sm border border-white/10 bg-[#11100d] ${item.className}`}
            >
              <Image
                src={item.image}
                alt={`${item.title} at Bilex Minerals`}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_25%,rgba(0,0,0,0.88)_100%)]" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d8bd6a]">
                  {item.label}
                </p>
                <h3 className="mt-2 font-display text-2xl text-[#fff7e7]">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="bg-[#0b0907] px-5 py-28 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Our Process"
          title="Four clear steps from sourcing to delivery and export."
          text="Industrial mineral supply needs a clear operating path. Bilex Minerals keeps the process focused on sourcing, mineral analysis, processing coordination, and export delivery."
          align="center"
        />

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {workflow.map((step, index) => (
            <motion.div
              key={step}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.05 }}
              className="relative rounded-sm border border-white/10 bg-[#11100d] p-5"
            >
              <div className="mb-8 flex items-center justify-between">
                <p className="font-display text-3xl text-[#d8bd6a]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                {index < workflow.length - 1 ? (
                  <ArrowRight className="hidden text-white/24 md:block" size={17} />
                ) : (
                  <BadgeCheck className="text-[#d8bd6a]" size={18} />
                )}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-[#fff7e7]">
                {step}
              </h3>
              <div className="mt-5 h-1 rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-[#d8bd6a]"
                  style={{ width: `${((index + 1) / workflow.length) * 100}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentSection() {
  return (
    <section className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505,#0d0b08)]" />
      <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          {...fadeUp}
          className="relative min-h-[620px] overflow-hidden rounded-sm border border-white/10"
        >
          <Image
            src={visuals.equipment}
            alt="Exploration support crew with mining equipment and field samples"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.05),rgba(5,5,5,0.9))]" />
        </motion.div>

        <div>
          <SectionHeader
            eyebrow="Processing & Field Capability"
            title="Practical support for mineral handling, fieldwork and export readiness."
            text="Bilex Minerals supports sourcing, geological review, processing coordination, mineral analysis, and mineral movement with field-aware operational support."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {equipment.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: index * 0.05 }}
                  className="rounded-sm border border-white/10 bg-white/[0.035] p-6 transition hover:border-[#d8bd6a]/42 hover:bg-[#17130c]"
                >
                  <Icon size={23} className="text-[#d8bd6a]" />
                  <h3 className="mt-6 font-display text-2xl text-[#fff7e7]">
                    {item.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {item.specs.map((spec) => (
                      <li
                        key={spec}
                        className="flex items-center gap-3 text-sm text-white/58"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-[#d8bd6a]" />
                        {spec}
                      </li>
                    ))}
                  </ul>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function RegionalPresenceSection() {
  return (
    <section id="regions" className="bg-[#080705] px-5 py-28 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionHeader
            eyebrow="Regional Presence"
            title="East African coordination for international mineral supply."
            text="Bilex Minerals coordinates mineral supply requirements through Kenya, Tanzania, cross-border sourcing relationships, field operations, and export routes."
          />

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {regions.map((region) => (
              <div key={region.title} className="py-6">
                <h3 className="font-display text-2xl text-[#d8bd6a]">
                  {region.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-white/58">
                  {region.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          {...fadeUp}
          className="relative min-h-[560px] overflow-hidden rounded-sm border border-white/10 bg-[#0f0d09] p-6"
        >
          <div className="absolute inset-0 regional-grid opacity-80" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(216,189,106,0.16),transparent_32%)]" />
          <div className="relative h-full min-h-[508px]">
            <div className="absolute left-[20%] top-[16%] h-[70%] w-[58%] rounded-[48%] border border-[#d8bd6a]/22 bg-[#d8bd6a]/5 shadow-[0_0_90px_rgba(216,189,106,0.08)]" />
            <div className="absolute left-[33%] top-[32%] h-[42%] w-[36%] rotate-12 rounded-[44%] border border-white/10 bg-black/16" />
            <div className="route-line route-line-map-one" />
            <div className="route-line route-line-map-two" />

            {regions.map((region, index) => (
              <div
                key={region.title}
                className="absolute"
                style={{ left: region.x, top: region.y }}
              >
                <span
                  className="route-pulse absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8bd6a]/28"
                  style={{ animationDelay: `${index * 0.6}s` }}
                />
                <span className="relative z-10 block h-3.5 w-3.5 rounded-full bg-[#d8bd6a] shadow-[0_0_32px_rgba(216,189,106,0.95)]" />
                <span className="mt-3 block -translate-x-1/3 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.18em] text-white/76">
                  {region.title}
                </span>
              </div>
            ))}

            <div className="absolute bottom-0 left-0 right-0 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3">
              {["Kenya", "Tanzania", "Export Routes"].map((item) => (
                <div key={item} className="bg-black/58 p-4 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d8bd6a]">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#050505,#0c0a07)]" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Supply Chain Standards"
          title="Built for buyers who need reliable supply, not unsupported claims."
          text="The trust layer is practical: commercial-grade consistency, traceable sourcing, documented processing support, and export-ready coordination."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {trustSignals.map((item, index) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.06 }}
              className="rounded-sm border border-white/10 bg-white/[0.035] p-7"
            >
              <LockKeyhole className="text-[#d8bd6a]" size={22} />
              <h3 className="mt-7 font-display text-3xl text-[#fff7e7]">
                {item.title}
              </h3>
              <p className="mt-5 text-sm leading-7 text-white/58">
                {item.text}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PaymentBookingSection() {
  return (
    <section id="quote" className="bg-[#050505] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <SectionHeader
          eyebrow="Request Supply Quote"
          title="Request a quote for industrial minerals, bulk supply or export support."
          text="Qualified buyers can submit mineral requirements, quantity or project details, documentation status, destination and appointment requirements before instructions are shared."
        />

        <BookingInquiryForm />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-28 md:px-8 lg:px-12"
    >
      <div className="absolute inset-0">
        <Image
          src={visuals.logistics}
          alt="Mineral export logistics operation for contact inquiries"
          fill
          sizes="100vw"
          className="object-cover opacity-28"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_46%,rgba(5,5,5,0.72)_100%)]" />
        <div className="noise-layer absolute inset-0" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeader
            eyebrow="Contact & Inquiry"
            title="Speak with our team about mineral supply requirements."
            text="Discuss mineral supply, sourcing partnerships or industrial procurement requirements with our team."
          />

          <div className="mt-10 grid gap-4">
            {[
              { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
              { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
              { icon: MapPin, label: "Offices", value: "Nairobi, Kenya / Dar es Salaam, Tanzania" },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-center gap-4 rounded-sm border border-white/10 bg-black/30 p-4 backdrop-blur">
                  <span className="grid h-11 w-11 place-items-center rounded-sm border border-[#d8bd6a]/34 text-[#d8bd6a]">
                    <Icon size={19} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                      {item.label}
                    </span>
                    <span className="mt-1 block text-sm text-white/72">
                      {item.value}
                    </span>
                  </span>
                </div>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="block">
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>

        <motion.form
          {...fadeUp}
          action={contact.emailHref}
          className="rounded-sm border border-white/10 bg-[#0b0907]/86 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm text-white/68">
              Name
              <input
                name="name"
                type="text"
                required
                className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                placeholder="Full name"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/68">
              Email
              <input
                name="email"
                type="email"
                required
                className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                placeholder="name@company.com"
              />
            </label>
            <label className="grid gap-2 text-sm text-white/68">
              Phone or WhatsApp
              <input
                name="phone"
                type="tel"
                className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                placeholder="+254..."
              />
            </label>
            <label className="grid gap-2 text-sm text-white/68">
              Inquiry Type
              <select
                name="inquiry"
                className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
                defaultValue="Mineral sourcing"
              >
                <option className="bg-[#0b0907]">Mineral sourcing</option>
                <option className="bg-[#0b0907]">Bismuth supply</option>
                <option className="bg-[#0b0907]">Processing support</option>
                <option className="bg-[#0b0907]">Mineral analysis</option>
                <option className="bg-[#0b0907]">Export coordination</option>
                <option className="bg-[#0b0907]">Supply partnership</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
              Requirement
              <textarea
                name="message"
                rows={5}
                required
                className="resize-none rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                placeholder="Tell us the mineral, specification, quantity range, destination, and partnership requirement."
              />
            </label>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Send inquiry
              <ArrowRight size={17} />
            </button>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-sm border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
            >
              WhatsApp
              <MessageCircle size={17} />
            </a>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function FaqSection() {
  const faqs = [
    [
      "What minerals does Bilex Minerals supply?",
      "Bilex Minerals supports industrial minerals, rare minerals, processed minerals, bismuth, strategic minerals and selected mineral lots for construction, manufacturing, processing and export markets.",
    ],
    [
      "Can Bilex handle bulk mineral supply?",
      "Yes. The quote process asks for quantity, destination and project details so the team can assess bulk mineral supply requirements and logistics planning.",
    ],
    [
      "Does Bilex Minerals support mineral export?",
      "Yes. Bilex supports export-focused operations including documentation coordination, freight planning, cargo movement and buyer communication.",
    ],
    [
      "How are mineral requirements reviewed?",
      "Requirements are reviewed through sourcing context, sample or specification details, documentation status, processing needs, destination and commercial fit.",
    ],
    [
      "Is the XAU/USD chart live?",
      "The hero uses a TradingView OANDA:XAUUSD widget that updates with market data supplied by TradingView/OANDA. It is a reference for gold-related discussions, not final transaction pricing.",
    ],
  ];

  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions about industrial mineral supply."
          text="Clear answers for mineral buyers, procurement teams and export partners before submitting a quote request."
          align="center"
        />
        <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
          {faqs.map(([question, answer]) => (
            <details key={question} className="group py-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left font-display text-2xl text-[#fff7e7] [&::-webkit-details-marker]:hidden">
                {question}
                <span className="text-[#d8bd6a] transition group-open:rotate-45">
                  +
                </span>
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

function MobileContactDock() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 md:hidden">
      <a
        href={contact.whatsapp}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-3 rounded-sm border border-[#d8bd6a]/38 bg-[#d8bd6a] px-5 py-4 text-xs font-bold uppercase tracking-[0.14em] text-black shadow-[0_20px_70px_rgba(0,0,0,0.5)]"
      >
        Talk to Bilex Minerals
        <MessageCircle size={16} />
      </a>
    </div>
  );
}
