"use client";

import { useEffect, useState } from "react";
import { MessageCircle, Moon, Sun } from "lucide-react";
import { contact } from "@/lib/site-data";

type Theme = "dark" | "light";
type ContactDetails = typeof contact;

type FloatingSiteToolsProps = {
  contactInfo?: ContactDetails;
};

export function FloatingSiteTools({
  contactInfo = contact,
}: FloatingSiteToolsProps) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const requestedTheme = new URLSearchParams(window.location.search).get(
      "theme",
    );
    const savedTheme = window.localStorage.getItem("bilex-theme") as Theme | null;
    const initialTheme: Theme =
      requestedTheme === "light" || requestedTheme === "dark"
        ? requestedTheme
        : savedTheme === "light" || savedTheme === "dark" ? savedTheme : "dark";

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;

    if (requestedTheme === "light" || requestedTheme === "dark") {
      window.localStorage.setItem("bilex-theme", requestedTheme);
    }
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("bilex-theme", nextTheme);
  }

  const isLight = theme === "light";
  const ToggleIcon = isLight ? Moon : Sun;

  return (
    <div className="fixed bottom-24 right-4 z-[70] flex flex-col gap-3 md:bottom-6">
      <a
        href={contactInfo.whatsapp}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Bilex Minerals on WhatsApp"
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-[#d8bd6a]/40 bg-[#d8bd6a] text-black shadow-[0_18px_50px_rgba(0,0,0,0.36)] transition hover:bg-[#f5df9a]"
      >
        <MessageCircle size={21} />
        <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-sm border border-white/10 bg-[#050505]/94 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fff7e7] shadow-[0_18px_50px_rgba(0,0,0,0.36)] group-hover:block">
          WhatsApp
        </span>
      </a>

      <button
        type="button"
        aria-label={`Switch to ${isLight ? "dark" : "light"} mode`}
        aria-pressed={isLight}
        onClick={toggleTheme}
        className="group flex h-12 w-12 items-center justify-center rounded-full border border-white/14 bg-[#11100d]/92 text-[#d8bd6a] shadow-[0_18px_50px_rgba(0,0,0,0.36)] backdrop-blur transition hover:border-[#d8bd6a]"
      >
        <ToggleIcon size={20} />
        <span className="pointer-events-none absolute right-14 hidden whitespace-nowrap rounded-sm border border-white/10 bg-[#050505]/94 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#fff7e7] shadow-[0_18px_50px_rgba(0,0,0,0.36)] group-hover:block">
          {isLight ? "Dark mode" : "Light mode"}
        </span>
      </button>
    </div>
  );
}
