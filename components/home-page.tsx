"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Bitcoin,
  CheckCircle2,
  CreditCard,
  FileText,
  FlaskConical,
  Gem,
  MessageCircle,
  Microscope,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { HeroGoldChart } from "@/components/live-gold-chart";
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
  ["Result Review", "Results are reviewed with the client directly. Next steps are at your discretion."],
];

const process = [
  "Book Appointment",
  "Submit Sample",
  "Testing & Assay Review",
  "Result Discussion",
];

const payments = [
  [CreditCard, "Bank Transfer"],
  [BadgeCheck, "USDT"],
  [Bitcoin, "Cryptocurrency"],
  [Banknote, "Cash"],
];

const faqs = [
  [
    "How long does gold testing take?",
    "Timing is confirmed at booking and depends on the service and sample. Most appointments are completed within the session.",
  ],
  [
    "What services can I book?",
    "You can book testing, assaying, purity review, result review, buying consultation or selling consultation.",
  ],
  [
    "Is consultation available after testing?",
    "Yes. Results can be reviewed with the team before you decide the next step.",
  ],
  [
    "How are results provided?",
    "Results are reviewed in person at the appointment. A written service record is provided where required.",
  ],
  [
    "What payment methods are accepted?",
    "Bank transfer, USDT, cryptocurrency and cash are accepted.",
  ],
  [
    "Does Bilex also sell gold?",
    "Gold sales and sourcing support are available through direct inquiry. Testing and assaying remain the main focus.",
  ],
  [
    "Does the test result affect payment?",
    "No. Payment is for the service. The result has no bearing on the fee.",
  ],
];

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
      <div className="hero-chart-background relative z-[1] h-[100svh] min-h-[760px] w-full">
        <HeroGoldChart />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[2]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,3,3,0.78)_0%,rgba(3,3,3,0.5)_54%,rgba(3,3,3,0.06)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#030303]/82 to-transparent" />
        <div className="hero-grid absolute inset-0 opacity-22" />
        <div className="noise-layer absolute inset-0" />
      </div>

      <div className="absolute inset-0 z-[3] px-5 pb-16 pt-28 md:px-8 lg:px-12">
        <div className="mx-auto flex h-full min-h-[calc(100svh-7rem)] max-w-7xl items-center">
          <motion.div {...fadeUp}>
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d8bd6a]">
              Gold Testing • Assaying • Consultation
            </p>
          
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

function ServicesSnapshot() {
  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeader
            eyebrow="Testing Services"
            title="Testing, assaying and purity review, handled in a single appointment."
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
