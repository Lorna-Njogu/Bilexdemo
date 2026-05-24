import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { contact, services, visuals } from "@/lib/site-data";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: service.title,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow={service.eyebrow}
          title={service.title}
          image={visuals.refinery}
        />

        <article className="px-5 py-20 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/50 transition hover:text-[#d8bd6a]"
              >
                <ArrowLeft size={16} />
                Supply capabilities
              </Link>
              <h2 className="mt-12 max-w-xl font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Practical execution for industrial-grade mineral demand.
              </h2>
              <p className="mt-6 max-w-xl leading-8 text-white/58">
                {service.description}
              </p>
            </div>

            <section className="divide-y divide-white/10 border-y border-white/10">
              {service.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="grid gap-4 py-6 sm:grid-cols-[auto_1fr]"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#d8bd6a]/30 text-[#d8bd6a]">
                    <CheckCircle2 size={18} />
                  </div>
                  <p className="leading-7 text-white/62">{highlight}</p>
                </div>
              ))}
              <div className="py-7">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
                >
                  Request supply information
                  <ArrowRight size={17} />
                </a>
              </div>
            </section>
          </div>
        </article>
      </main>
    </>
  );
}
