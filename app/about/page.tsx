import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  FlaskConical,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { aboutPageSchema, createPageMetadata } from "@/lib/seo";
import { visuals } from "@/lib/site-data";

export const metadata: Metadata = createPageMetadata({
  title: "About Bilex Minerals EA | Accredited Gold Testing, Kenya and Tanzania",
  description:
    "Bilex Minerals EA is a family-owned, ISO/IEC 17025 accredited gold testing and assaying company founded in 2019, operating from Nairobi and Dar es Salaam.",
  path: "/about",
  imageAlt: "Bilex Minerals EA gold testing and assaying operations in East Africa",
  openGraphDescription:
    "Bilex Minerals EA is a family-owned, ISO/IEC 17025 accredited gold testing and assaying company operating from Nairobi and Dar es Salaam.",
});

const storySections = [
  {
    icon: Building2,
    eyebrow: "Our Story",
    title: "",
    text: "Bilex Minerals EA was founded in 2019, in the period that immediately followed the disruption of the COVID-19 pandemic. The founding family had seen the mineral trade in East Africa from the inside, and what they saw was a market operating largely without accountability. Fraud was systemic. Buyers could not verify what they were purchasing. Sellers had no independent reference point. Investors were operating on trust alone, and that trust was frequently misplaced. The company was founded to address that directly, not by policy or advocacy, but by providing a service: accurate, accredited, independent testing that anyone could access by appointment and leave with a result they could rely on.",
  },
  {
    icon: Users,
    eyebrow: "A Family Business",
    title: "",
    text: "Bilex is not a corporation. It is a family business, and that distinction matters in how it is run. The standards the company holds, the discretion it extends to every client and the reputation it has built in both Kenya and Tanzania are the direct responsibility of the people whose name is behind it. The next generation is now taking an active role in the company, bringing with them the same standards and a long-term commitment to the work. A family business does not cut corners on its own reputation.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Industry Position",
    title: "Independent testing ",
    text: "Fraud in the East African gold and mineral trade is not a peripheral issue. It affects buyers, legitimate operators and governments alike, and it has done so for years. Bilex operates as a direct counter to that reality. Our results are based solely on the material submitted, produced by certified staff using accredited methodology, with no interest in the transaction surrounding the sample. We support and cooperate with government-led efforts in both Kenya and Tanzania to bring accountability and traceability to the mineral trade, and we operate within the full regulatory frameworks of both countries.",
  },
  {
    icon: FlaskConical,
    eyebrow: "Our Team",
    title: "Certified in-house professionals.",
    text: "All testing and assaying at Bilex is carried out by certified in-house staff. No work is outsourced. Each member of the testing team holds qualifications in fire assay, XRF analysis, ICP-OES methodology or laboratory safety, and the laboratory itself holds ISO/IEC 17025 accreditation in both Kenya and Tanzania. ISO/IEC 17025 is the international standard for testing and calibration laboratories. It means our methodology, equipment and results chain are subject to independent verification against internationally recognised requirements. When a client receives a result from Bilex, it comes from a laboratory that has earned the right to issue it.",
  },
];

const certifications = [
  {
    country: "Kenya",
    groups: [
      {
        title: "Company certifications",
        items: [
          "ISO/IEC 17025 Laboratory Accreditation",
          "ISO 9001 Quality Management System",
          "ISO 14001 Environmental Management System",
          "ISO 45001 Occupational Health and Safety",
        ],
      },
      {
        title: "Mining and minerals",
        items: [
          "Mineral Dealer License",
          "Mineral Assay Laboratory Authorization",
          "Precious Metals Dealer License",
        ],
      },
      {
        title: "Staff certifications",
        items: [
          "Fire Assay Certification",
          "XRF Analyzer Operation Certification",
          "ICP-OES Laboratory Training",
          "Chemical Handling and Laboratory Safety",
        ],
      },
    ],
  },
  {
    country: "Tanzania",
    groups: [
      {
        title: "Government and regulatory",
        items: [
          "Mining Commission Registration",
          "Tanzania Bureau of Standards (TBS)",
          "National Environment Management Council (NEMC)",
        ],
      },
      {
        title: "Company certifications",
        items: [
          "ISO/IEC 17025 Laboratory Accreditation",
          "ISO 9001 Quality Management System",
          "ISO 14001 Environmental Management System",
          "ISO 45001 Occupational Health and Safety",
        ],
      },
      {
        title: "Mining and minerals",
        items: [
          "Mineral Dealer License",
          "Precious Metals Trading License",
          "Assaying Laboratory Approval",
          "Environmental Compliance Certification",
        ],
      },
      {
        title: "Staff certifications",
        items: [
          "Fire Assay Certification",
          "XRF Equipment Operation Training",
          "Laboratory Quality Control Training",
          "Chemical Safety Certification",
        ],
      },
    ],
  },
];

const familyQuotes = [
  {
    quote:
      "We started Bilex because we knew this market needed a place where the result was the only thing that mattered. That has not changed. What has changed is that our children are now part of building what comes next.",
    byline: "Founder, Bilex Minerals EA",
  },
  {
    quote:
      "Growing up around this business, you understand early that accuracy is not optional. It is the whole point. That is the standard I intend to keep.",
    byline: "Director, Bilex Minerals EA",
  },
];

const floorQuotes = [
  {
    role: "Fire Assayer",
    quote:
      "Fire assay is the oldest and most reliable method for determining gold content. Every step of the process, from the initial fusion through to the final weighing, has a defined procedure, and that procedure does not change based on what the client hopes the result will be. The number is the number.",
    byline: "Certified Fire Assayer, Bilex Minerals EA",
  },
  {
    role: "XRF Analyst",
    quote:
      "XRF gives you a fast, non-destructive read of what is in a sample. It is precise when the equipment is properly calibrated and the operator knows what they are reading. Both of those things are true here. Clients get an accurate result, not an approximation.",
    byline: "Certified XRF Analyst, Bilex Minerals EA",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema),
        }}
      />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="About Bilex Minerals EA"
          title="About Bilex Minerals EA"
          text="A family business. An accredited laboratory. A stake in the integrity of East Africa's mineral trade."
          image={visuals.assay}
          imageAlt="Bilex Minerals EA accredited gold testing laboratory"
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Who We Are
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Who we are
              </h2>
            </div>
            <p className="max-w-4xl text-base leading-8 text-white/62 md:text-lg">
              Bilex Minerals EA is a family-owned minerals company established
              in 2019, with operations in Nairobi, Kenya and Dar es Salaam,
              Tanzania. We specialise in gold testing and assaying, and provide
              supporting services in sourcing, export coordination and
              exploration across East Africa. We work with private investors,
              commodity buyers, artisanal miners and international clients who
              need accurate, documented results handled with discretion. The
              business was founded by the family that still runs it today, and
              is now being passed to the next generation to carry forward.
            </p>
          </div>
        </section>

        <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-4">
            {storySections.map((section) => {
              const Icon = section.icon;

              return (
                <article
                  key={section.title}
                  className="grid gap-8 border border-white/10 bg-[#11100d] p-7 md:grid-cols-[0.34fr_1fr] md:p-9"
                >
                  <div>
                    <Icon className="text-[#d8bd6a]" size={26} />
                    <p className="mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8bd6a]">
                      {section.eyebrow}
                    </p>
                    <h2 className="mt-4 font-display text-3xl leading-tight text-[#fff7e7] md:text-4xl">
                      {section.title}
                    </h2>
                  </div>
                  <p className="text-sm leading-8 text-white/62 md:text-base">
                    {section.text}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Certifications
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Accreditations and certifications
              </h2>
              <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">
                Bilex holds full laboratory accreditation and regulatory
                authorisation to operate in both Kenya and Tanzania. All
                certifications are maintained and current.
              </p>
            </div>

            <div className="mt-14 grid gap-5 lg:grid-cols-2">
              {certifications.map((country) => (
                <article
                  key={country.country}
                  className="rounded-sm border border-white/10 bg-[#11100d] p-7"
                >
                  <h3 className="font-display text-4xl text-[#fff7e7]">
                    {country.country}
                  </h3>
                  <div className="mt-8 grid gap-8">
                    {country.groups.map((group) => (
                      <div key={group.title}>
                        <h4 className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8bd6a]">
                          {group.title}
                        </h4>
                        <ul className="mt-4 grid gap-3">
                          {group.items.map((item) => (
                            <li
                              key={item}
                              className="flex gap-3 text-sm leading-6 text-white/60"
                            >
                              <BadgeCheck
                                className="mt-1 shrink-0 text-[#d8bd6a]"
                                size={16}
                              />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <QuoteSection
          eyebrow="From the Family"
          title="From the family"
          quotes={familyQuotes}
        />

        <QuoteSection
          eyebrow="From the Testing Floor"
          title="From the testing floor"
          intro="The people who carry out the work."
          quotes={floorQuotes}
        />
      </main>
    </>
  );
}

function QuoteSection({
  eyebrow,
  title,
  intro,
  quotes,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  quotes: Array<{ role?: string; quote: string; byline: string }>;
}) {
  return (
    <section className="bg-[#080705] px-5 py-24 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
            {eyebrow}
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-6 text-base leading-8 text-white/62 md:text-lg">
              {intro}
            </p>
          ) : null}
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {quotes.map((item) => (
            <figure
              key={item.byline}
              className="rounded-sm border border-white/10 bg-[#11100d] p-7"
            >
              <Quote className="text-[#d8bd6a]" size={25} />
              {item.role ? (
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#d8bd6a]">
                  {item.role}
                </p>
              ) : null}
              <blockquote className="mt-6 text-base leading-8 text-white/68">
                &quot;{item.quote}&quot;
              </blockquote>
              <figcaption className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-white/42">
                {item.byline}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
