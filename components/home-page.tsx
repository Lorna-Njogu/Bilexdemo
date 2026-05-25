"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bitcoin,
  CheckCircle2,
  ClipboardCheck,
  CreditCard,
  FileText,
  FlaskConical,
  Gem,
  MessageCircle,
  Microscope,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import {
  CompactGoldPriceCard,
  GoldPriceReferenceSection,
} from "@/components/live-gold-chart";
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
    title: "Gold Assaying",
    text: "Professional assay support for gold samples presented for analysis.",
  },
  {
    icon: Microscope,
    title: "Gold Testing",
    text: "Structured testing and verification for buyers, traders and investors.",
  },
  {
    icon: Gem,
    title: "Purity Analysis",
    text: "Review of gold purity indicators, sample condition and commercial context.",
  },
  {
    icon: FileText,
    title: "Consultation",
    text: "Clear guidance on testing results, documentation and next steps.",
  },
];

const reasons = [
  ["Accurate Testing", "Testing is handled through a clear, sample-led process focused on the material presented."],
  ["Professional Handling", "Appointments, samples and client conversations are managed with discretion and care."],
  ["Transparent Process", "Clients understand what is being tested, how results are handled and what consultation covers."],
  ["Trusted Verification", "Bilex separates testing and consultation from unsupported ownership or market claims."],
  ["Consultation Support", "Results can be discussed with the team so clients understand the practical meaning of analysis."],
];

const process = [
  "Sample Submission",
  "Testing & Analysis",
  "Verification",
  "Results & Consultation",
];

const payments = [
  [CreditCard, "Bank Transfer"],
  [BadgeCheck, "USDT"],
  [Bitcoin, "Cryptocurrency"],
  [Banknote, "Cash Payments"],
];

const faqs = [
  [
    "How long does gold testing take?",
    "Timing depends on the sample, appointment schedule and analysis required. The team confirms expected timing before the appointment proceeds.",
  ],
  [
    "What testing methods are used?",
    "Bilex focuses on professional gold testing, assaying support, purity analysis and consultation based on the sample presented.",
  ],
  [
    "Is consultation available after testing?",
    "Yes. Consultation can help clients understand results, documentation context and appropriate next steps.",
  ],
  [
    "How are results provided?",
    "Results are shared through the agreed appointment or consultation process, based on the service requested and sample review.",
  ],
  [
    "What payment methods are accepted?",
    "Accepted payment methods include bank transfer, USDT, cryptocurrency and cash payments.",
  ],
];

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-[#f8f1e4]">
      <HeroSection />
      <ServicesSnapshot />
      <WhyChooseSection />
      <ProcessSection />
      <PaymentMethodsSection />
      <GoldPriceReferenceSection />
      <BookingSection />
      <FaqSection />
      <FinalCtaSection />
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
    <section className="theme-dark-surface relative min-h-screen overflow-hidden bg-[#030303] px-5 pb-16 pt-28 md:px-8 lg:px-12">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(216,189,106,0.16),transparent_34%),linear-gradient(120deg,#030303_0%,#0b0907_46%,#17130c_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-24" />
        <div className="noise-layer absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d8bd6a]">
            Gold testing / assaying / verification
          </p>
          <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.94] text-balance text-[#fff7e7] md:text-7xl xl:text-8xl">
            Professional Gold Testing and Assaying Services
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
            Reliable gold analysis, verification and consultation for buyers,
            traders and investors who need a professional sample-led testing
            process.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["Gold Testing", "Assaying", "Purity Analysis", "Consultation"].map((item) => (
              <span
                key={item}
                className="rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#d8bd6a]"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#booking"
              className="group inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[#080706] transition hover:bg-[#f5df9a]"
            >
              Book Appointment
              <ArrowRight size={17} className="transition group-hover:translate-x-1" />
            </a>
            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-sm border border-white/18 bg-white/[0.04] px-6 py-4 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
            >
              View Services
            </Link>
          </div>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="lg:justify-self-end"
        >
          <CompactGoldPriceCard />
        </motion.div>
      </div>
    </section>
  );
}

function ServicesSnapshot() {
  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Services Snapshot"
            title="Gold testing services built around clarity and trust."
            text="The homepage covers the core services clients ask for most often, while the Services page supports deeper SEO and service detail."
          />
          <Link
            href="/services"
            className="inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/40 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
          >
            Services
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

function WhyChooseSection() {
  return (
    <section className="px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Why Clients Choose Bilex"
          title="Professional verification without exaggerated promises."
          text="Bilex is positioned around testing, assaying and consultation. The process is clear about what testing can confirm and what it cannot guarantee."
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
          eyebrow="Simple Process"
          title="From sample submission to results and consultation."
          text="A concise appointment flow helps serious clients understand exactly what happens before booking."
          align="center"
        />

        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {process.map((step, index) => (
            <motion.div
              key={step}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: index * 0.04 }}
              className="rounded-sm border border-white/10 bg-[#11100d] p-6"
            >
              <p className="font-display text-4xl text-[#d8bd6a]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#fff7e7]">
                {step}
              </h3>
            </motion.div>
          ))}
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
          eyebrow="Accepted Payment Methods"
          title="Convenient payment options for testing and consultation."
          text="Payments made to Bilex are strictly for gold testing, assaying, consultation or related professional services."
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
          title="Request gold testing, assaying or consultation."
          text="Submit your details, preferred appointment window, sample type and payment method. Consent terms must be accepted before the form can proceed."
        />
        <BookingInquiryForm />
      </div>
    </section>
  );
}

function FaqSection() {
  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Frequently asked questions before gold testing."
          text="Clear answers replace unnecessary extra pages and help clients understand the booking process."
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

function FinalCtaSection() {
  return (
    <section className="px-5 py-20 md:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 p-7 md:flex-row md:items-center md:justify-between">
        <div>
          <ClipboardCheck className="text-[#d8bd6a]" size={25} />
          <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
            Book a consultation with the Bilex team.
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
            Request gold testing, speak with our team or confirm appointment
            availability before presenting a sample.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#booking"
            className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
          >
            Book Appointment
            <ArrowRight size={17} />
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-3 rounded-sm border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
          >
            Speak With Our Team
            <MessageCircle size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
