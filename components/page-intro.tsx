import Image from "next/image";
import { visuals } from "@/lib/site-data";

type PageIntroProps = {
  eyebrow: string;
  title: string;
  text?: string;
  image?: string;
};

export function PageIntro({
  eyebrow,
  title,
  text,
  image = visuals.hero,
}: PageIntroProps) {
  return (
    <section className="relative min-h-[58svh] overflow-hidden bg-[#050505] px-5 pt-32 text-white md:px-8 lg:px-12">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-46"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050505_0%,rgba(5,5,5,0.9)_45%,rgba(5,5,5,0.48)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.16),#050505_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-32" />
        <div className="noise-layer absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(58svh-8rem)] max-w-7xl flex-col justify-end pb-14">
        <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d8bd6a]">
          {eyebrow}
        </p>
        <h1 className="mt-7 max-w-5xl font-display text-5xl leading-[0.96] text-balance text-[#fff7e7] md:text-7xl">
          {title}
        </h1>
        {text ? (
          <p className="mt-7 max-w-xl text-lg leading-8 text-white/62">
            {text}
          </p>
        ) : null}
      </div>
    </section>
  );
}
