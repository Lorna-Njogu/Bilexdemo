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
  title: "Gold Assaying and Testing Services",
  description:
    "Gold assaying Kenya, gold testing services, gold purity testing, verification, consultation and reporting from Bilex Minerals.",
};

const services = [
  {
    icon: FlaskConical,
    title: "Gold Assaying",
    text: "Professional assay support for samples presented for analysis, with a clear focus on the tested material.",
    points: ["Sample-led analysis", "Assay consultation", "Professional handling"],
  },
  {
    icon: Microscope,
    title: "Gold Testing Services",
    text: "Gold testing for buyers, traders and investors who need structured verification before making commercial decisions.",
    points: ["Testing appointment", "Sample review", "Result explanation"],
  },
  {
    icon: Gem,
    title: "Gold Purity Testing",
    text: "Purity-focused analysis that helps clients understand sample quality, limitations and practical context.",
    points: ["Purity indicators", "Material review", "Clear boundaries"],
  },
  {
    icon: ShieldCheck,
    title: "Verification Consultation",
    text: "Consultation around testing results, documentation context and professional next steps.",
    points: ["Result discussion", "Documentation review", "Client guidance"],
  },
  {
    icon: FileText,
    title: "Reporting Support",
    text: "Structured communication of testing outcomes for clients who need professional records and consultation notes.",
    points: ["Result summary", "Appointment notes", "Service record"],
  },
];

const standards = [
  "Results are based on the sample presented for analysis.",
  "Bilex does not guarantee sample origin, ownership or future market value.",
  "Clients confirm they have the legal right to present samples for testing.",
  "Payments are for testing, assaying, consultation or related professional services.",
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Services"
          title="Gold assaying, testing, purity analysis and consultation."
          text="A focused services page for gold assaying Kenya, gold testing services, gold purity testing, verification consultation and reporting."
          image={visuals.assay}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Service Detail
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                One clear service page instead of shallow subpages.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Bilex focuses the user journey around testing, consultation
                and appointment conversion. This page supports SEO without
                splitting attention across unnecessary service routes.
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
                Professional Boundaries
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Clear testing terms build trust before appointments.
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
                Request gold testing or consultation.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Submit your appointment details and accept the required consent
                terms before the request proceeds.
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
                Need to discuss the right testing service?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Start with a consultation if you are unsure which testing or
                assaying service fits your sample.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Contact Bilex
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
