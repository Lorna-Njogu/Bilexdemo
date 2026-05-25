import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { BuyerQualificationSection } from "@/components/buyer-qualification-section";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { contact, visuals } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description:
    "Discuss rare mineral supply, sourcing partnerships, industrial procurement requirements, export coordination, and payment or appointment review with Bilex Minerals.",
};

const contactItems = [
  { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Handled with discretion",
    href: contact.whatsapp,
  },
  { icon: MapPin, label: "Offices", value: "Nairobi / Dar es Salaam" },
  {
    icon: Clock,
    label: "Hours",
    value: `${contact.hours.weekdays} / ${contact.hours.sunday}`,
  },
];

const offices = [
  ["Nairobi Desk", contact.primaryOffice, "Supply requirements, buyer coordination, and documentation review."],
  ["Dar es Salaam Desk", contact.secondaryOffice, "Export support, cargo movement, and logistics coordination."],
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Supply Inquiry"
          title="Discuss mineral supply, sourcing partnerships or procurement requirements."
          text="Share the mineral, specification, volume, destination, documentation status and preferred settlement route so the team can review the requirement properly."
          image={visuals.logistics}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="border-y border-white/10 py-10">
                <h2 className="max-w-3xl font-display text-5xl leading-[1] text-[#fff7e7] md:text-7xl">
                  Tell us the mineral, specification, destination and supply requirement.
                </h2>
                <p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">
                  The clearer the requirement, the faster the team can route
                  the inquiry to mineral sourcing, analysis, processing
                  support, export coordination or partnership review.
                </p>
              </div>

              <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="grid gap-4 py-6 sm:grid-cols-[auto_1fr]">
                      <div className="flex h-10 w-10 items-center justify-center rounded-sm border border-[#d8bd6a]/30 text-[#d8bd6a]">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/38">
                          {item.label}
                        </p>
                        <p className="mt-2 text-lg text-white/68">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  );

                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("https") ? "_blank" : undefined}
                      rel={item.href.startsWith("https") ? "noreferrer" : undefined}
                      className="block transition hover:bg-white/[0.03]"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <form
              action={contact.emailHref}
              className="rounded-sm border border-white/10 bg-[#0b0907]/88 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] md:p-8"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm text-white/68">
                  Name
                  <input
                    name="name"
                    type="text"
                    required
                    className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                    placeholder="Full name"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Email
                  <input
                    name="email"
                    type="email"
                    required
                    className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                    placeholder="name@company.com"
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Phone or WhatsApp
                  <input
                    name="phone"
                    type="tel"
                    className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                    placeholder="+254..."
                  />
                </label>
                <label className="grid gap-2 text-sm text-white/68">
                  Inquiry Type
                  <select
                    name="inquiry"
                    className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
                    defaultValue="Mineral sourcing"
                  >
                    <option className="bg-[#0b0907]">Mineral sourcing</option>
                    <option className="bg-[#0b0907]">Bismuth supply</option>
                    <option className="bg-[#0b0907]">Processing support</option>
                    <option className="bg-[#0b0907]">Mineral analysis</option>
                    <option className="bg-[#0b0907]">Export coordination</option>
                    <option className="bg-[#0b0907]">Supply partnership</option>
                  </select>
                </label>
                <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
                  Requirement
                  <textarea
                    name="message"
                    rows={6}
                    required
                    className="resize-none rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
                    placeholder="Share the mineral, specification, quantity range, destination, timeline and partnership requirement."
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
                >
                  Send inquiry
                  <ArrowRight size={17} />
                </button>
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-sm border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
                >
                  WhatsApp
                  <MessageCircle size={17} />
                </a>
              </div>
            </form>
          </div>
        </section>

        <section id="quote" className="bg-[#050505] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Request Supply Quote
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Request a quote for industrial minerals, bulk supply or export support.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Qualified buyers can submit mineral requirements, quantity or
                project details, documentation status, destination and
                appointment requirements before instructions are shared.
              </p>
            </div>

            <BookingInquiryForm />
          </div>
        </section>

        <BuyerQualificationSection />

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            {offices.map(([title, address, text]) => (
              <article
                key={title}
                className="rounded-sm border border-white/10 bg-white/[0.035] p-7"
              >
                <MapPin className="text-[#d8bd6a]" size={24} />
                <h2 className="mt-7 font-display text-3xl text-[#fff7e7]">
                  {title}
                </h2>
                <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#d8bd6a]">
                  {address}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/58">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-5 py-20 md:px-8 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-sm border border-[#d8bd6a]/28 bg-[#d8bd6a]/10 p-7 md:flex-row md:items-center md:justify-between">
            <div>
              <ShieldCheck className="text-[#d8bd6a]" size={25} />
              <h2 className="mt-4 font-display text-3xl text-[#fff7e7] md:text-4xl">
                Handled with discretion.
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/58">
                Industrial mineral inquiries are handled with discretion,
                clear requirements, documentation discipline and responsive
                communication.
              </p>
            </div>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
            >
              Talk to our team
              <MessageCircle size={17} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
