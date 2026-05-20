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
import { contact, services, visuals, workflow } from "@/lib/site-data";

const fadeUp = {
  initial: { opacity: 1, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-90px" },
  transition: { duration: 0.8, ease: "easeOut" },
} as const;

const heroStats = [
  { value: "EA", label: "Kenya and Tanzania corridors" },
  { value: "KYC", label: "Verified buyer intake" },
  { value: "CIF", label: "Export logistics support" },
];

const trustItems = [
  {
    icon: Globe2,
    title: "East Africa Operations",
    text: "Nairobi and Dar es Salaam commercial coordination.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed & Verified",
    text: "KYC-led access, document review, and controlled introductions.",
  },
  {
    icon: Microscope,
    title: "Assay Support",
    text: "Sample custody, testing coordination, and review packages.",
  },
  {
    icon: Ship,
    title: "Export Logistics",
    text: "CIF movement planning, freight support, and paperwork coordination.",
  },
  {
    icon: Handshake,
    title: "Trusted Partnerships",
    text: "Private engagement for qualified buyers and strategic operators.",
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
    title: "Origin review",
    text: "Regional networks are screened before buyers receive sensitive commercial details.",
  },
  {
    icon: Microscope,
    title: "Assay coordination",
    text: "Samples, results, and documentation are handled through controlled verification steps.",
  },
  {
    icon: Truck,
    title: "Secure movement",
    text: "Local transport, handling, insurance, and freight planning are aligned before release.",
  },
  {
    icon: FileCheck2,
    title: "Export readiness",
    text: "Documentation, compliance support, and delivery communication are coordinated end to end.",
  },
];

const reasons = [
  ["Trusted Mineral Networks", "Qualified access to gold and mineral channels across East Africa."],
  ["Verified Processes", "Documentation and assay review before commercial commitment."],
  ["Regional Market Expertise", "Practical operating knowledge across Kenya, Tanzania, and trade corridors."],
  ["Reliable Export Logistics", "CIF planning, freight support, and delivery communication."],
  ["Secure Transactions", "Private buyer intake, clear escalation paths, and disciplined custody steps."],
  ["Operational Professionalism", "A serious desk for sourcing, verification, logistics, and exploration support."],
];

const gallery = [
  {
    image: visuals.hero,
    title: "Gold Sourcing Corridors",
    label: "Extraction and origin access",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image: visuals.assay,
    title: "Assay Verification",
    label: "Testing and sample custody",
    className: "",
  },
  {
    image: visuals.logistics,
    title: "Export Logistics",
    label: "Secure movement and freight",
    className: "",
  },
  {
    image: visuals.equipment,
    title: "Exploration Support",
    label: "Field operations",
    className: "md:col-span-2",
  },
  {
    image: visuals.assay,
    title: "Mineral Lot Review",
    label: "Documentation-first trade",
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
    title: "Testing Capability",
    specs: ["Assay workflow", "Sample custody", "Result packages"],
  },
  {
    icon: Truck,
    title: "Logistics Assets",
    specs: ["Bonded transport", "Freight planning", "CIF coordination"],
  },
  {
    icon: Boxes,
    title: "Equipment Leasing",
    specs: ["Project assets", "Field deployment", "Operator alignment"],
  },
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
    title: "Buyer Qualification",
    text: "Sensitive mineral opportunities are introduced only after professional intake and verified intent.",
  },
  {
    title: "Assay-Led Confidence",
    text: "Transaction conversations are anchored by sample handling, independent testing, and reviewable documentation.",
  },
  {
    title: "Export Discipline",
    text: "Movement planning accounts for custody, freight, insurance, documentation, and buyer-side communication.",
  },
];

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-[#f8f1e4]">
      <HeroSection />
      <TrustBar />
      <AboutSection />
      <ServicesSection />
      <OperationsSection />
      <WhyChooseSection />
      <GallerySection />
      <ProcessSection />
      <EquipmentSection />
      <RegionalPresenceSection />
      <TrustSection />
      <ContactSection />
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
    <section className="relative min-h-[92svh] overflow-hidden bg-[#030303] px-5 pb-10 pt-28 md:px-8 lg:px-12">
      <div className="absolute inset-0">
        <Image
          src={visuals.hero}
          alt="Cinematic East African mining operation with gold-bearing ore and heavy equipment"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#030303_0%,rgba(3,3,3,0.92)_32%,rgba(3,3,3,0.52)_62%,rgba(3,3,3,0.78)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,3,3,0.42)_0%,rgba(3,3,3,0.12)_46%,#050505_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-45" />
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
            East African mineral trade excellence
          </p>
          <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.92] text-balance text-[#fff7e7] md:text-7xl xl:text-8xl">
            Bilex Minerals
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Trusted gold sourcing, mineral trading, assaying, CIF logistics,
            exploration support, and equipment capability across Kenya,
            Tanzania, and regional East African trade corridors.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#080706] transition hover:bg-[#f5df9a]"
            >
              Request consultation
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </a>
            <Link
              href="#services"
              className="inline-flex items-center gap-3 rounded-sm border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
            >
              Explore services
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 1, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.85, ease: "easeOut" }}
          className="grid max-w-4xl gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur md:grid-cols-3"
        >
          {heroStats.map((item) => (
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
            alt="Gold assaying and sample verification workbench"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.86))]" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-px bg-white/10">
            {["Assay", "Custody", "Export"].map((item) => (
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
            eyebrow="Company"
            title="A private mineral trade desk built for serious regional movement."
            text="Bilex Minerals operates at the intersection of sourcing, verification, export support, and field capability. The company serves qualified buyers, operators, and strategic partners who need disciplined access to East African mineral opportunities."
          />

          <motion.div
            {...fadeUp}
            className="mt-12 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-3"
          >
            {[
              ["Mission", "Build trusted mineral access through verified origin, clear documentation, and operational discipline."],
              ["Presence", "Coordinate mineral opportunities across Kenya, Tanzania, and regional corridors."],
              ["Integrity", "Move only through reviewable processes, private buyer intake, and controlled transaction steps."],
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
            title="Precious metal capability with industrial discipline."
            text="Each engagement is structured around qualification, verification, documentation, and clear operating responsibility."
          />
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
          >
            View all
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
                      Open service
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
            title="From verified origin to export-ready delivery."
            text="The operating model connects sourcing, assay support, documentation, freight planning, and buyer communication into one disciplined transaction path."
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
                ["Nairobi", "30%", "42%"],
                ["Arusha", "49%", "54%"],
                ["Dar es Salaam", "67%", "70%"],
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
              {["Origin", "Assay", "CIF Delivery"].map((item) => (
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
          title="Trust is engineered before the transaction begins."
          text="The Bilex process is built to reduce ambiguity: verified access, careful communication, reviewable documentation, and practical logistics control."
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

function GallerySection() {
  return (
    <section id="gallery" className="relative px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(216,189,106,0.12),transparent_32%),#050505]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Projects & Operations"
            title="A cinematic view of the work behind mineral confidence."
            text="The visual language centers on origin, assay, logistics, field capability, and export readiness."
          />
          <p className="max-w-xs text-sm leading-7 text-white/50">
            Gold sourcing, assay support, logistics handling, and exploration
            capability are presented as one controlled operating environment.
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
          eyebrow="Transaction Process"
          title="Seven controlled steps from inquiry to documentation."
          text="High-value mineral transactions need clarity. This process gives buyers and partners a plain operating path before commercial movement begins."
          align="center"
        />

        <div className="mt-16 grid gap-4 md:grid-cols-7">
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
            eyebrow="Equipment & Capabilities"
            title="Field capability for operators who need practical support."
            text="Bilex Minerals supports exploration, sourcing, verification, and mineral movement with field-aware coordination and access to project-ready capabilities."
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
            title="East African corridors with Nairobi and Dar es Salaam gravity."
            text="The site experience is designed to communicate regional strength: Kenya, Tanzania, cross-border sourcing, field operations, and export pathways."
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
          eyebrow="Client Trust"
          title="Built for buyers who need proof before promise."
          text="The trust layer is intentionally quiet: disciplined qualification, reviewable evidence, private communication, and measured delivery support."
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
            title="Begin with a private consultation."
            text="Share the sourcing, assaying, logistics, exploration, or equipment requirement. The team will route the inquiry through the right desk."
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
                defaultValue="Gold sourcing"
              >
                <option className="bg-[#0b0907]">Gold sourcing</option>
                <option className="bg-[#0b0907]">Mineral trading</option>
                <option className="bg-[#0b0907]">Assaying</option>
                <option className="bg-[#0b0907]">Export logistics</option>
                <option className="bg-[#0b0907]">Exploration support</option>
                <option className="bg-[#0b0907]">Equipment leasing</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
              Requirement
              <textarea
                name="message"
                rows={5}
                required
                className="resize-none rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                placeholder="Tell us what you need sourced, verified, moved, or supported."
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
