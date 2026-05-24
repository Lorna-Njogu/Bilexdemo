import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ClipboardCheck,
  Compass,
  Gem,
  HardHat,
  Microscope,
  Scale,
  Ship,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { contact, services, visuals, workflow } from "@/lib/site-data";

export const metadata = {
  title: "Supply Capabilities",
  description:
    "Bilex Minerals supply capabilities for rare mineral sourcing, mineral analysis, processing support, export logistics, and industrial procurement partnerships.",
};

const serviceIcons = [Gem, Scale, Microscope, Ship, Compass, Boxes, HardHat];
const serviceImages = [
  visuals.hero,
  visuals.assay,
  visuals.assay,
  visuals.logistics,
  visuals.equipment,
  visuals.equipment,
  visuals.hero,
];

const serviceGroups = [
  ["Sourcing", "Rare and strategic mineral sourcing coordination."],
  ["Processing", "Material handling, preparation, and specification support."],
  ["Analysis", "Sample review, testing coordination, and documentation."],
  ["Export", "Freight planning, cargo coordination, and buyer communication."],
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Supply Capabilities"
          title="Mineral sourcing, analysis, processing support and export coordination."
          text="A practical capability desk for industrial buyers, processors, exporters and procurement partners working with rare and strategic minerals."
          image={visuals.refinery}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => {
                const Icon = serviceIcons[index] ?? Gem;
                const image = serviceImages[index] ?? visuals.hero;

                return (
                  <article
                    key={service.slug}
                    className="group relative min-h-[380px] overflow-hidden rounded-sm border border-white/10 bg-[#11100d] p-6"
                  >
                    <Image
                      src={image}
                      alt={`${service.title} at Bilex Minerals`}
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover opacity-24 transition duration-700 group-hover:scale-105 group-hover:opacity-34"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.24),rgba(5,5,5,0.96))]" />
                    <div className="relative flex h-full min-h-[330px] flex-col justify-between">
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
                        <h2 className="mt-3 font-display text-3xl leading-tight text-[#fff7e7]">
                          {service.title}
                        </h2>
                        <p className="mt-4 text-sm leading-7 text-white/62">
                          {service.summary}
                        </p>
                        <Link
                          href={`/services/${service.slug}`}
                          className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#d8bd6a]"
                        >
                          View capability
                          <ArrowRight
                            size={15}
                            className="transition group-hover:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Capability Model
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                One desk, four industrial supply lanes.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Buyers and partners can begin with a defined mineral requirement, then
                move into analysis, processing coordination,
                documentation and export support without losing operational
                continuity.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-2">
              {serviceGroups.map(([title, text]) => (
                <div key={title} className="bg-[#100e0a] p-6">
                  <h3 className="font-display text-3xl text-[#d8bd6a]">
                    {title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Engagement Flow
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Each service connects to a practical supply process.
              </h2>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {workflow.map((step, index) => (
                <div
                  key={step}
                  className="rounded-sm border border-white/10 bg-white/[0.035] p-5"
                >
                  <p className="font-display text-3xl text-[#d8bd6a]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.16em] text-[#fff7e7]">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 pb-24 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <ClipboardCheck className="text-[#d8bd6a]" size={25} />
              <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
                Need a custom industrial mineral supply workflow?
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Start with a defined requirement and the team will route your
                inquiry to the correct sourcing, processing, analysis or export
                support lane.
              </p>
            </div>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Request supply information
              <ArrowRight size={17} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
