import {
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { BookingInquiryForm } from "@/components/booking-inquiry-form";
import { PageIntro } from "@/components/page-intro";
import { SiteHeader } from "@/components/site-header";
import { contact, visuals } from "@/lib/site-data";

export const metadata = {
  title: "Book Appointment",
  description:
    "Request a private gold testing, assaying or consultation appointment with Bilex Minerals. Bank transfer, USDT, cryptocurrency and cash accepted.",
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
  { icon: Clock, label: "Hours", value: `${contact.hours.weekdays}\n${contact.hours.sunday}` },
  { icon: MapPin, label: "Office", value: contact.primaryOffice },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="bg-[#050505] text-[#f8f1e4]">
        <PageIntro
          eyebrow="Appointment"
          title="Book Appointment"
          text="Send your details and preferred appointment time. The Bilex team will confirm availability directly."
          image={visuals.logistics}
        />

        <section className="px-5 py-24 md:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.36em] text-[#d8bd6a]">
                Appointment Desk
              </p>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-[#fff7e7] md:text-6xl">
                Speak with the Bilex team before presenting a sample.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/60">
                Use the form to request an appointment, or contact Bilex
                directly by WhatsApp, phone or email.
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
                        <p className="mt-2 whitespace-pre-line text-lg text-white/68">
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
      </main>
    </>
  );
}
