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
    "Bilex Minerals is an East African mineral sourcing, trading, assaying, logistics, and exploration support company for qualified buyers and strategic partners.",
};

const capabilities = [
  {
    icon: ShieldCheck,
    title: "Private Transaction Desk",
    text: "Qualified buyer intake, controlled communication, and disciplined release of sensitive sourcing details.",
  },
  {
    icon: Microscope,
    title: "Verification Culture",
    text: "Assay coordination, sample custody, documentation review, and proof-led commercial engagement.",
  },
  {
    icon: Truck,
    title: "Movement Readiness",
    text: "CIF logistics support, freight planning, insurance coordination, and export documentation alignment.",
  },
];

const milestones = [
  ["Kenya", "Nairobi commercial desk and buyer coordination."],
  ["Tanzania", "Dar es Salaam export and regional corridor support."],
  ["East Africa", "Mineral sourcing, exploration access, and field relationships."],
];

export default function CompanyPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Company"
          title="Regional authority with verified mineral movement."
          text="Bilex Minerals is built for serious buyers, operators, and strategic partners who need disciplined access to East African mineral opportunities."
          image={visuals.mine}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Position
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Built for mineral trade where trust has to be earned.
              </h2>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                The company combines sourcing access, assay-led verification,
                export support, and field coordination across Kenya, Tanzania,
                and regional trade corridors. The result is a more controlled
                path from inquiry to documented mineral movement.
              </p>
            </div>

            <div className="relative min-h-[560px] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={visuals.assay}
                alt="Bilex Minerals assay and verification desk"
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
                  Verification before commitment.
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
                Serious access, careful process, documented movement.
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
                Nairobi and Dar es Salaam give the company regional gravity.
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
                Bilex Minerals begins sensitive sourcing and logistics
                conversations through private qualification and review.
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
