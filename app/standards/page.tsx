import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileCheck2,
  LockKeyhole,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { operatingStandards, visuals, workflow } from "@/lib/site-data";

export const metadata = {
  title: "Standards",
  description:
    "Bilex Minerals operating standards for KYC, assaying, custody, documentation, and CIF export support.",
};

const standardCards = [
  {
    icon: LockKeyhole,
    title: "KYC and Buyer Review",
    text: "Sensitive sourcing details are handled after verified intent, buyer qualification, and responsible communication.",
  },
  {
    icon: Microscope,
    title: "Assay-Led Confidence",
    text: "Samples, testing coordination, and reviewable assay evidence support mineral quality discussions.",
  },
  {
    icon: FileCheck2,
    title: "Documentation Discipline",
    text: "Commercial movement is supported by transaction records, custody steps, export paperwork, and delivery coordination.",
  },
];

export default function StandardsPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Standards"
          title="Proof before promise."
          text="Bilex Minerals treats verification, custody, documentation, and export readiness as the foundation of every serious mineral engagement."
          image={visuals.refinery}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Operating Standard
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Verification comes before commitment.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                These standards help protect buyers, partners, and the company
                from unsupported claims, informal handling, and unclear movement
                paths.
              </p>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {operatingStandards.map((item) => (
                <div key={item} className="grid gap-4 py-6 sm:grid-cols-[auto_1fr]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#d8bd6a]/30 text-[#d8bd6a]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="leading-7 text-white/62">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
            {standardCards.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.title} className="rounded-sm border border-white/10 bg-white/[0.035] p-7">
                  <Icon size={24} className="text-[#d8bd6a]" />
                  <h2 className="mt-7 font-display text-3xl text-[#fff7e7]">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-white/58">
                    {item.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative min-h-[600px] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={visuals.logistics}
                alt="Secure mineral logistics and export documentation process"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.08),rgba(5,5,5,0.86))]" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Transaction Path
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                The process stays visible from inquiry to documentation.
              </h2>

              <div className="mt-10 grid gap-3">
                {workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.035] px-5 py-4"
                  >
                    <span className="text-sm font-bold uppercase tracking-[0.16em] text-white/76">
                      {step}
                    </span>
                    <span className="font-display text-2xl text-[#d8bd6a]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <ShieldCheck className="text-[#d8bd6a]" size={25} />
              <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
                Need documentation or assay support?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Start a private inquiry and define the verification requirement
                before commercial movement begins.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Request standards review
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
