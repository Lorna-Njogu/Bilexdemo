import {
  Banknote,
  Bitcoin,
  Clock,
  CreditCard,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { contact, visuals } from "@/lib/site-data";

export const metadata = {
  title: "Contact and Consultation Booking",
  description:
    "Contact Bilex Minerals for gold testing, assaying, purity analysis, consultation booking, WhatsApp, email, phone and accepted payment methods.",
};

const contactItems = [
  { icon: Mail, label: "Email", value: contact.email, href: contact.emailHref },
  { icon: Phone, label: "Phone", value: contact.phone, href: contact.phoneHref },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Appointment support",
    href: contact.whatsapp,
  },
  { icon: Clock, label: "Hours", value: `${contact.hours.weekdays} / ${contact.hours.sunday}` },
  { icon: MapPin, label: "Office", value: contact.primaryOffice },
];

const payments = [
  [CreditCard, "Bank Transfer"],
  [ShieldCheck, "USDT"],
  [Bitcoin, "Cryptocurrency"],
  [Banknote, "Cash"],
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Contact"
          title="Book gold testing, assaying or consultation."
          text="Share your sample details, appointment preference and payment method so the Bilex team can confirm the booking."
          image={visuals.logistics}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Contact Desk
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Speak with the team before presenting a sample.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Use the form for appointment booking, or contact Bilex directly
                by WhatsApp, phone or email for gold testing and consultation
                availability.
              </p>

              <div className="mt-10 grid gap-4">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="grid gap-4 rounded-sm border border-white/10 bg-white/[0.035] p-5 sm:grid-cols-[auto_1fr]">
                      <div className="grid h-11 w-11 place-items-center rounded-sm border border-[#d8bd6a]/34 text-[#d8bd6a]">
                        <Icon size={19} />
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
                      className="block transition hover:opacity-86"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={item.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            <BookingInquiryForm />
          </div>
        </section>

        <section className="bg-[#0b0907] px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Accepted Payment Methods
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Payments for testing, assaying and consultation.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Payments are for professional services only and are not
                influenced by test outcomes.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
              {payments.map(([Icon, label]) => {
                const PaymentIcon = Icon as typeof CreditCard;

                return (
                  <div key={label as string} className="bg-[#11100d] p-7">
                    <PaymentIcon className="text-[#d8bd6a]" size={24} />
                    <h3 className="mt-7 font-display text-3xl text-[#fff7e7]">
                      {label as string}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
