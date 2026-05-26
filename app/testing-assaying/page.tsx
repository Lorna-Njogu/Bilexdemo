import type { Metadata } from "next";
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
import { createPageMetadata, testingAssayingSchema } from "@/lib/seo";
import { visuals } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "Gold Assaying, Purity Testing & Result Review | Bilex Minerals",
  description:
    "Professional gold assaying, purity testing and result documentation in Nairobi. Five services available by appointment, serving local and international clients across East Africa.",
  path: "/testing-assaying",
  imageAlt: "Gold assay laboratory equipment, Bilex Minerals Nairobi",
  openGraphDescription:
    "Professional gold assaying, purity testing and result documentation in Nairobi. Five services available by appointment, serving local and international clients across East Africa.",
});

const services = [
  {
    icon: FlaskConical,
    title: "Gold Assaying",
    text: "Detailed chemical analysis of submitted gold samples, with results documented against the tested material.",
    points: ["Sample review", "Assay support", "Private handling"],
  },
  {
    icon: Microscope,
    title: "Gold Testing Services",
    text: "Professional sample evaluation for clients preparing to buy, sell or proceed.",
    points: ["Appointment", "Sample review", "Result discussion"],
  },
  {
    icon: Gem,
    title: "Gold Purity Testing",
    text: "A precise assessment of sample grade and physical condition.",
    points: ["Purity review", "Material condition", "Result guidance"],
  },
  {
    icon: ShieldCheck,
    title: "Result Review",
    text: "One-on-one review of your results and a clear discussion of next steps.",
    points: ["Result discussion", "Document context", "Next steps"],
  },
  {
    icon: FileText,
    title: "Result Documentation",
    text: "Written documentation of test results, issued as a service record where required.",
    points: ["Result summary", "Service record", "Client copy"],
  },
];

const appointmentTerms =
  "Results reflect the material submitted for testing. Bilex does not assess origin, ownership or market value. Clients presenting material confirm their legal right to do so. Payment applies to the service rendered, independent of the test outcome.";

export default function TestingAssayingPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testingAssayingSchema),
        }}
      />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Testing & Assaying"
          title="Gold testing and assaying services."
          text="Comprehensive sample review — from initial testing through to documented results — by appointment."
          image={visuals.assay}
          imageAlt="Gold assay laboratory equipment, Bilex Minerals Nairobi"
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Services
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Available services.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Clients can book an appointment for testing, assaying, result
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
                Appointment terms.
              </h2>
            </div>

            <div className="rounded-sm border border-white/10 bg-white/[0.035] p-7">
              <p className="max-w-3xl text-base leading-8 text-white/62">
                {appointmentTerms}
              </p>
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
