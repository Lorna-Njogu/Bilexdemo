import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  FileText,
  FlaskConical,
  Gem,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { visuals } from "@/lib/site-data";

export const metadata = {
  title: "Gold Testing and Assaying Services",
  description:
    "Gold testing, assaying, purity review, result documentation and private consultation for clients presenting gold samples by appointment.",
};

const services = [
  {
    icon: FlaskConical,
    title: "Gold Assaying",
    text: "Assay support for submitted samples, with review based on the tested material.",
    points: ["Sample review", "Assay support", "Private handling"],
  },
  {
    icon: Microscope,
    title: "Gold Testing Services",
    text: "Testing support for clients who need sample review before buying, selling or proceeding.",
    points: ["Appointment", "Sample review", "Result discussion"],
  },
  {
    icon: Gem,
    title: "Gold Purity Testing",
    text: "Purity review to help clients understand the quality and condition of the submitted sample.",
    points: ["Purity review", "Material condition", "Result guidance"],
  },
  {
    icon: ShieldCheck,
    title: "Result Review",
    text: "Private review of test results, documentation context and next steps.",
    points: ["Result discussion", "Document context", "Next steps"],
  },
  {
    icon: FileText,
    title: "Result Documentation",
    text: "A written result summary or service record where required.",
    points: ["Result summary", "Service record", "Client copy"],
  },
];

const standards = [
  "Results are based on the material submitted for testing.",
  "Bilex does not confirm origin, ownership or future market value.",
  "Clients confirm they have the legal right to present material for testing.",
  "Payments are for testing, assaying, consultation or related services and are not affected by test results.",
];

export default function TestingAssayingPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Testing & Assaying"
          title="Gold Testing and Assaying Services"
          text="Testing, assaying, purity review and result guidance for clients presenting gold samples by appointment."
          image={visuals.assay}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Services
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Gold testing services in one place.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Clients can book one appointment for testing, assaying, result
                review or consultation, depending on the service required.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="rounded-sm border border-white/10 bg-[#11100d] p-7"
                  >
                    <Icon className="text-[#d8bd6a]" size={25} />
                    <h2 className="mt-7 font-display text-3xl text-[#fff7e7]">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-sm leading-7 text-white/58">
                      {service.text}
                    </p>
                    <div className="mt-6 grid gap-3">
                      {service.points.map((point) => (
                        <div key={point} className="flex gap-3 text-sm text-white/58">
                          <BadgeCheck className="shrink-0 text-[#d8bd6a]" size={16} />
                          {point}
                        </div>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Appointment Terms
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Clear terms before every appointment.
              </h2>
            </div>

            <div className="grid gap-3">
              {standards.map((standard) => (
                <div
                  key={standard}
                  className="flex gap-4 rounded-sm border border-white/10 bg-white/[0.035] p-5 text-sm leading-7 text-white/60"
                >
                  <ShieldCheck className="mt-1 shrink-0 text-[#d8bd6a]" size={18} />
                  <span>{standard}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Book Appointment
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Book a testing appointment.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Send your details and preferred time. The Bilex team will
                confirm availability directly.
              </p>
            </div>
            <BookingInquiryForm />
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <ClipboardCheck className="text-[#d8bd6a]" size={25} />
              <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
                Not sure which service to book?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Start with a private consultation and the team will guide you
                on the next step.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Book Consultation
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
