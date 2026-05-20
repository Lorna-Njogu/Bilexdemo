import Link from "next/link";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader variant="solid" />
      <main className="min-h-screen bg-basalt px-6 pb-24 pt-36 text-white">
        <section className="mx-auto max-w-3xl border border-white/10 bg-white/[0.03] p-8 shadow-mineral md:p-12">
          <p className="text-sm uppercase tracking-[0.22em] text-gold-300">
            Page Not Found
          </p>
          <h1 className="mt-5 font-display text-4xl text-balance md:text-5xl">
            The page you requested is not available.
          </h1>
          <p className="mt-5 max-w-2xl text-white/68">
            Return to the homepage to explore Bilex Minerals services,
            compliance standards, and consultation options.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center bg-gold-300 px-5 py-3 text-sm font-semibold text-basalt transition hover:bg-gold-100"
          >
            Back to homepage
          </Link>
        </section>
      </main>
    </>
  );
}
