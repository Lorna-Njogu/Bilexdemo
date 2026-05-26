import Link from "next/link";
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
  Globe2,
  Map,
  MessageSquareText,
  Microscope,
  PackageCheck,
  Plus,
  Search,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { HomeHero } from "@/components/home-hero";
import { homeFaqs } from "@/lib/seo";

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
    icon: FileText,
    title: "Private Consultation",
    text: "One-on-one review of your results and a clear discussion of next steps.",
  },
  {
    icon: Search,
    title: "Sourcing",
    text: "Gold sourcing support for buyers with specific grade, volume or origin requirements.",
  },
  {
    icon: Globe2,
    title: "Exporting",
    text: "Support for clients moving gold across borders. Documentation, compliance guidance and export coordination.",
  },
  {
    icon: Map,
    title: "Exploration",
    text: "Advisory and field support for clients with active or prospective exploration interests in East Africa.",
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

export function HomePage() {
  return (
    <main className="overflow-hidden bg-[#050505] text-[#f8f1e4]">
      <HomeHero />
      <ServicesSnapshot />
      <ProcessSection />
      <WhyChooseSection />
      <PaymentMethodsSection />
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
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}>
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
    </div>
  );
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

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceSnapshot.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-sm border border-white/10 bg-[#11100d] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
              >
                <Icon className="text-[#d8bd6a]" size={25} />
                <h3 className="mt-8 font-display text-3xl text-[#fff7e7]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {service.text}
                </p>
              </article>
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
          eyebrow="Appointment Handling"
          title="How appointments are run."
          text="Each appointment follows a defined process from submission through to result discussion."
          align="center"
        />

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-5">
          {reasons.map(([title, text]) => (
            <article
              key={title}
              className="bg-[#0f0d09] p-6"
            >
              <CheckCircle2 className="text-[#d8bd6a]" size={21} />
              <h3 className="mt-7 font-display text-2xl text-[#fff7e7]">
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
          {appointmentSteps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="rounded-sm border border-white/10 bg-[#11100d] p-6"
              >
                <Icon className="text-[#d8bd6a]" size={26} />
                <h3 className="mt-8 text-sm font-bold uppercase tracking-[0.18em] text-[#fff7e7]">
                  {step.title}
                </h3>
              </div>
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
