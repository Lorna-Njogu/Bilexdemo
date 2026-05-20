import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gem, Microscope, ShieldCheck, Truck } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { mineralCategories, visuals } from "@/lib/site-data";

export const metadata = {
  title: "Minerals",
  description:
    "Bismuth, strategic minerals, industrial minerals, and processed material supply support from Bilex Minerals.",
};

const mineralImages = [
  visuals.hero,
  visuals.assay,
  visuals.assay,
  visuals.equipment,
];

const mineralStandards = [
  {
    icon: ShieldCheck,
    title: "Origin Review",
    text: "Mineral opportunities are reviewed through source context, partner screening, and commercial fit.",
  },
  {
    icon: Microscope,
    title: "Quality Assessment",
    text: "Selected mineral lots can move through sample handling, testing coordination, specification checks, and result review.",
  },
  {
    icon: Truck,
    title: "Export Planning",
    text: "Movement is planned around freight, cargo handling, export documentation, and buyer communication.",
  },
];

export default function MineralsPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Minerals"
          title="Bismuth and strategic minerals for industrial supply chains."
          text="Bilex Minerals supports bismuth, strategic minerals, industrial minerals and processed materials for manufacturing, processing and export markets."
          image={visuals.hero}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4 md:grid-cols-2">
              {mineralCategories.map((item, index) => (
                <article
                  key={item.title}
                  className="group relative min-h-[430px] overflow-hidden rounded-sm border border-white/10 bg-[#11100d] p-6"
                >
                  <Image
                    src={mineralImages[index] ?? visuals.hero}
                    alt={`${item.title} mineral category supported by Bilex Minerals`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover opacity-30 transition duration-700 group-hover:scale-105 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.16),rgba(5,5,5,0.94))]" />
                  <div className="relative flex h-full min-h-[382px] flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <Gem className="text-[#d8bd6a]" size={25} />
                      <p className="font-display text-3xl text-white/22">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </div>
                    <div>
                      <h2 className="font-display text-4xl text-[#fff7e7]">
                        {item.title}
                      </h2>
                      <p className="mt-5 max-w-xl leading-7 text-white/60">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Verification Lens
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                The mineral category matters less than the reliability of supply.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Every mineral conversation is treated as a commercial and
                operational review. Bilex prioritizes origin context, supplier
                reliability, documentation quality, processing requirements and
                export planning over unsupported claims.
              </p>
            </div>

            <div className="grid gap-4">
              {mineralStandards.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="grid gap-5 rounded-sm border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[auto_1fr]"
                  >
                    <div className="grid h-11 w-11 place-items-center rounded-sm border border-[#d8bd6a]/34 text-[#d8bd6a]">
                      <Icon size={19} />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-[#fff7e7]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-white/58">
                        {item.text}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="relative min-h-[560px] overflow-hidden rounded-sm border border-white/10">
              <Image
                src={visuals.assay}
                alt="Bismuth and strategic mineral sample review for industrial buyers"
                fill
                sizes="(min-width: 1024px) 52vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/22" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Buyer Readiness
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Industrial mineral supply is structured around requirements.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/60">
                Bilex Minerals works best with buyers and partners who can
                define mineral type, specification, volume expectations,
                processing needs, destination requirements, and documentation
                standards before supply discussions move forward.
              </p>
              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
              >
                Discuss mineral supply
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
