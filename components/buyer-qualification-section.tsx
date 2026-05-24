import {
  AlertTriangle,
  Banknote,
  Bitcoin,
  Bot,
  CalendarCheck,
  CircleDollarSign,
  FileCheck2,
  ShieldCheck,
  UserCheck,
  Wallet,
} from "lucide-react";

const botReplies = [
  {
    icon: UserCheck,
    label: "Priority",
    title: "Ready for commercial review",
    text: "Buyer provides company name, mineral, target quantity, destination, payment route and documentation readiness.",
  },
  {
    icon: FileCheck2,
    label: "Verify first",
    title: "More information required",
    text: "Inquiry has intent, but needs company details, buyer mandate, sample requirements, proof of funds or export destination.",
  },
  {
    icon: CalendarCheck,
    label: "Appointment",
    title: "Cash meeting by booking only",
    text: "Cash discussions move through scheduled appointments, identity review and written confirmation before any meeting.",
  },
  {
    icon: AlertTriangle,
    label: "Not a fit",
    title: "Unqualified inquiry",
    text: "Vague messages, pressure tactics, no documentation or requests to bypass verification are not escalated.",
  },
];

const paymentOptions = [
  {
    icon: Banknote,
    title: "USD settlement",
    text: "Bank transfer or documented USD settlement for qualified commercial transactions.",
  },
  {
    icon: Bitcoin,
    title: "Crypto settlement",
    text: "USDT, USDC or agreed digital settlement can be reviewed after compliance checks.",
  },
  {
    icon: Wallet,
    title: "Cash appointment",
    text: "Cash discussions require appointment booking, identity review and written meeting confirmation.",
  },
];

export function BuyerQualificationSection() {
  return (
    <section className="relative overflow-hidden bg-[#0a0907] px-5 py-28 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(184,109,61,0.12),transparent_32%),linear-gradient(180deg,#050505,#0a0907)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#d8bd6a]">
              Buyer qualification desk
            </p>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] text-balance text-[#fff7e7] md:text-6xl">
              Serious enquiries move faster when the details are clear.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/62 md:text-lg">
              The intake flow separates qualified buyers from incomplete
              enquiries by looking for specification, volume, destination,
              payment method and documentation readiness.
            </p>
          </div>

          <div className="grid gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 sm:grid-cols-2">
            {botReplies.map((reply) => {
              const Icon = reply.icon;

              return (
                <article key={reply.title} className="bg-[#11100d] p-6">
                  <div className="flex items-center justify-between gap-5">
                    <Bot size={22} className="text-[#d8bd6a]" />
                    <span className="rounded-sm border border-[#d8bd6a]/24 bg-[#d8bd6a]/8 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d8bd6a]">
                      {reply.label}
                    </span>
                  </div>
                  <Icon size={22} className="mt-8 text-white/42" />
                  <h3 className="mt-5 font-display text-2xl text-[#fff7e7]">
                    {reply.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-white/58">
                    {reply.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {paymentOptions.map((option) => {
            const Icon = option.icon;

            return (
              <article
                key={option.title}
                className="rounded-sm border border-white/10 bg-white/[0.035] p-7 transition hover:border-[#d8bd6a]/36 hover:bg-[#15120c]"
              >
                <Icon size={24} className="text-[#d8bd6a]" />
                <h3 className="mt-7 font-display text-3xl text-[#fff7e7]">
                  {option.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/58">
                  {option.text}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-8 rounded-sm border border-[#d8bd6a]/24 bg-[#d8bd6a]/8 p-5">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-[#d8bd6a]/34 text-[#d8bd6a]">
                <ShieldCheck size={20} />
              </span>
              <p className="max-w-3xl text-sm leading-7 text-white/62">
                Wallet details, bank instructions and appointment addresses are
                shared only after buyer qualification and written confirmation.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-3 rounded-sm bg-[#d8bd6a] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f5df9a]"
            >
              Start intake
              <CircleDollarSign size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
