import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, MessageCircle } from "lucide-react";
import { contact } from "@/lib/site-data";

type SiteHeaderProps = {
  variant?: "transparent" | "solid";
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/testing-assaying", label: "Testing & Assaying" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const isTransparent = variant === "transparent";
  const chrome = isTransparent
    ? "border-white/10 bg-black/46 text-white"
    : "border-white/10 bg-[#050505]/90 text-white";

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b px-4 py-3 backdrop-blur-xl transition md:px-8 ${chrome}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <span className="relative h-12 w-12 overflow-hidden rounded-sm border border-[#d8bd6a]/40 bg-black/50">
            <Image
              src="/bilex-logo.webp"
              alt="Bilex Minerals logo"
              fill
              sizes="48px"
              className="object-contain p-1"
            />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-base uppercase tracking-[0.16em] text-[#fff7e7] md:text-lg">
              Bilex
            </span>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-[#d8bd6a] sm:block">
              Minerals EA
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/58 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-[#d8bd6a]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <details className="group relative xl:hidden">
            <summary
              aria-label="Open navigation menu"
              className="inline-flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-sm border border-white/14 bg-white/[0.04] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a] [&::-webkit-details-marker]:hidden"
            >
              <Menu size={18} />
            </summary>
            <div className="absolute right-0 top-14 w-64 rounded-sm border border-white/10 bg-[#050505]/96 p-3 shadow-mineral backdrop-blur-xl">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block border-b border-white/10 px-3 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/66 transition last:border-b-0 hover:text-[#d8bd6a]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            aria-label="Open WhatsApp consultation"
            className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/14 bg-white/[0.04] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
          >
            <MessageCircle size={18} />
          </a>
          <Link
            href="/#booking"
            className="hidden items-center gap-3 rounded-sm bg-[#d8bd6a] px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a] sm:inline-flex"
          >
            Book Appointment
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
