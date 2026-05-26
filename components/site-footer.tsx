import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { contact } from "@/lib/site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/testing-assaying", label: "Testing & Assaying" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Testing",
  "Assaying",
  "Private Consultation",
  "Sourcing",
  "Exporting",
  "Exploration",
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] px-5 py-14 text-white md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-4">
              <span className="relative h-14 w-14 overflow-hidden rounded-sm border border-[#d8bd6a]/40 bg-black/50">
                <Image
                  src="/bilex-logo.webp"
                  alt="Bilex Minerals logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </span>
              <span>
                <span className="block font-display text-xl uppercase tracking-[0.16em] text-[#fff7e7]">
                  Bilex
                </span>
                <span className="block text-xs uppercase tracking-[0.24em] text-[#d8bd6a]">
                  Minerals EA
                </span>
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/54">
              Gold testing, assaying, private consultation, sourcing, exporting
              and exploration support for clients who need clear
              sample-based guidance.
            </p>
            <p className="mt-4 max-w-sm text-xs leading-6 text-white/42">
              Payments are accepted for testing, assaying, consultation and
              related services only. Payment is not affected by test results.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8bd6a]">
              Navigation
            </h2>
            <nav className="mt-5 grid gap-3 text-sm text-white/58">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="transition hover:text-[#d8bd6a]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8bd6a]">
              Services
            </h2>
            <nav className="mt-5 grid gap-3 text-sm text-white/58">
              {serviceLinks.map((service) => (
                <Link
                  key={service}
                  href="/testing-assaying"
                  className="transition hover:text-[#d8bd6a]"
                >
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.22em] text-[#d8bd6a]">
              Contact
            </h2>
            <div className="mt-5 grid gap-4 text-sm text-white/58">
              <a
                href={contact.phoneHref}
                className="flex items-center gap-3 transition hover:text-[#d8bd6a]"
              >
                <Phone size={16} />
                {contact.phone}
              </a>
              <a
                href={contact.emailHref}
                className="flex items-center gap-3 transition hover:text-[#d8bd6a]"
              >
                <Mail size={16} />
                {contact.email}
              </a>
              <p className="flex items-center gap-3">
                <MapPin size={16} />
                Nairobi, Kenya / Dar es Salaam, Tanzania
              </p>
              <a
                href={contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex w-fit items-center gap-3 rounded-sm border border-[#d8bd6a]/36 px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#d8bd6a] transition hover:bg-[#d8bd6a] hover:text-black"
              >
                WhatsApp
                <MessageCircle size={15} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.18em] text-white/36 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Bilex Minerals EA</p>
          <p>
            Testing. Assaying. Private Consultation. Sourcing. Exporting.
            Exploration.
          </p>
        </div>
      </div>
    </footer>
  );
}
