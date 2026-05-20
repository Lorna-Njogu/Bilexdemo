import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Globe2,
  MapPin,
  Microscope,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { companyPillars, visuals } from "@/lib/site-data";

export const metadata = {
  title: "Company",
  description:
    "Bilex Minerals supports bismuth and strategic industrial mineral sourcing, processing support, export coordination, and supply partnerships.",
};

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Supply Requirement Review",
    text: "Buyer requirements, mineral specifications, destination, and documentation needs are reviewed before sourcing begins.",
  },
  {
    icon: Microscope,
    title: "Quality Assessment",
    text: "Sample review, testing coordination, specification checks, and documentation support for industrial mineral supply.",
  },
  {
    icon: Truck,
    title: "Export Readiness",
    text: "Freight planning, cargo coordination, export and import documentation support, and buyer communication.",
  },
];

const milestones = [
  ["Kenya", "Nairobi commercial desk for supply requirements and buyer coordination."],
  ["Tanzania", "Dar es Salaam support for export corridors and cargo coordination."],
  ["Global Markets", "International supply partnerships for bismuth and strategic minerals."],
];

export default function CompanyPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Company"
          title="Industrial mineral supply built on reliability and documentation."
          text="Bilex Minerals works with industrial and strategic minerals for manufacturing, processing and export markets."
          image={visuals.mine}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Position
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Built for industrial buyers who need dependable supply.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                The company focuses on bismuth and strategic minerals,
                dependable supply chains, transparent operations and long-term
                business relationships. Each engagement is structured around
                sourcing requirements, quality assessment, processing support
                and export coordination.
              </p>
            </div>

            <div className="relative min-h-[560px] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={visuals.assay}
                alt="Bilex Minerals industrial mineral quality assessment desk"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(5,5,5,0.86))]" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#d8bd6a]">
                  Operational Standard
                </p>
                <h3 className="mt-3 font-display text-3xl text-[#fff7e7]">
                  Quality standards before shipment.
                </h3>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-3">
              {capabilities.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="bg-[#100e0a] p-7">
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
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Operating Pillars
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Traceable sourcing, supply reliability, export readiness.
              </h2>
            </div>

            <div className="divide-y divide-white/10 border-y border-white/10">
              {companyPillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="grid gap-4 py-7 md:grid-cols-[0.45fr_1fr]"
                >
                  <h3 className="font-display text-3xl text-[#d8bd6a]">
                    {pillar.title}
                  </h3>
                  <p className="max-w-xl leading-7 text-white/58">
                    {pillar.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Regional Desk
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                East African coordination for international mineral buyers.
              </h2>
            </div>

            <div className="grid gap-4">
              {milestones.map(([title, text]) => (
                <div
                  key={title}
                  className="grid gap-5 rounded-sm border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[auto_1fr]"
                >
                  <div className="grid h-11 w-11 place-items-center rounded-sm border border-[#d8bd6a]/34 text-[#d8bd6a]">
                    {title === "East Africa" ? <Globe2 size={19} /> : <MapPin size={19} />}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl text-[#fff7e7]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-white/58">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-white/10 bg-[#d8bd6a] p-7 text-black md:flex-row md:items-center md:justify-between">
            <div>
              <BadgeCheck size={25} />
              <h2 className="mt-4 font-display text-3xl md:text-4xl">
                Start with verified intent.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-black/70">
                Bilex Minerals begins supply conversations by defining the
                mineral, specification, destination, documentation and export
                requirements.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-black px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:bg-[#1a1710]"
            >
              Contact the desk
              <ArrowRight size={17} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
