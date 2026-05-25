"use client";

import { FormEvent, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { CalendarCheck, Mail, MessageCircle, ShieldCheck, X } from "lucide-react";
import { contact } from "@/lib/site-data";

const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

type ContactDetails = typeof contact;

type FormElements = HTMLFormElement & {
  elements: HTMLFormControlsCollection & {
    name: HTMLInputElement;
    email: HTMLInputElement;
    service: HTMLSelectElement;
    sample: HTMLInputElement;
    appointment: HTMLInputElement;
    message: HTMLTextAreaElement;
  };
};

type BookingInquiryFormProps = {
  contactInfo?: ContactDetails;
};

const consentTerms = [
  "Bilex provides gold testing, assaying, purity review and consultation. No other services are implied by this appointment.",
  "Results are based on the material submitted for testing.",
  "Bilex does not assess origin, ownership or market value.",
  "The material presented for testing is submitted under your legal authority to do so.",
  "Payment is for the service rendered and is not affected by the test outcome.",
  "Accepted payment methods: bank transfer, USDT, cryptocurrency and cash.",
  "Appointment times are confirmed directly by the Bilex team.",
];

export function BookingInquiryForm({
  contactInfo = contact,
}: BookingInquiryFormProps) {
  const [sent, setSent] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [phone, setPhone] = useState<string | undefined>();
  const pendingFormRef = useRef<FormElements | null>(null);

  function submitForm(form: FormElements) {
    const fields = form.elements;
    const subject = "Bilex Minerals gold testing appointment request";
    const body = [
      "Bilex Minerals gold testing appointment request",
      "",
      `Full Name: ${fields.name.value}`,
      `Phone / WhatsApp: ${phone ?? ""}`,
      `Appointment Type: ${fields.service.value}`,
      `Email Address: ${fields.email.value}`,
      `Preferred Appointment Date & Time: ${fields.appointment.value}`,
      `Sample Details: ${fields.sample.value}`,
      `Consent Accepted: true`,
      "",
      "Additional Message:",
      fields.message.value,
    ].join("\n");

    window.location.href = `${contactInfo.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!phone) {
      return;
    }

    const form = event.currentTarget as FormElements;

    if (!consentAccepted) {
      pendingFormRef.current = form;
      setConsentChecked(false);
      setShowConsent(true);
      return;
    }

    submitForm(form);
  }

  function acceptConsent() {
    if (!consentChecked) {
      return;
    }

    setConsentAccepted(true);
    setShowConsent(false);

    if (pendingFormRef.current) {
      submitForm(pendingFormRef.current);
      pendingFormRef.current = null;
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="rounded-sm border border-white/10 bg-[#0b0907]/88 p-5 shadow-[0_24px_90px_rgba(0,0,0,0.42)] backdrop-blur md:p-8"
      >
        <div className="mb-7 flex items-start gap-4 border-b border-white/10 pb-6">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-sm border border-[#d8bd6a]/34 text-[#d8bd6a]">
            <CalendarCheck size={20} />
          </span>
          <div>
            <h3 className="font-display text-3xl text-[#fff7e7]">
              Book Appointment
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/56">
              Consent terms must be accepted before submitting the booking
              request.
            </p>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-sm text-white/68">
            Full Name *
            <input
              name="name"
              type="text"
              required
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Full name"
            />
          </label>
          <label
            htmlFor="phone"
            className="grid gap-2 text-sm text-white/68"
          >
            Phone / WhatsApp *
            <PhoneInput
              id="phone"
              international
              name="phone"
              value={phone}
              onChange={setPhone}
              required
              placeholder="Enter phone number"
              className="phone-input h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white transition focus-within:border-[#d8bd6a]"
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Appointment Type *
            <select
              name="service"
              required
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
              defaultValue="Gold Testing"
            >
              <option className="bg-[#0b0907]">Gold Testing</option>
              <option className="bg-[#0b0907]">Gold Assaying</option>
              <option className="bg-[#0b0907]">Purity Review</option>
              <option className="bg-[#0b0907]">Result Review</option>
              <option className="bg-[#0b0907]">Buying Consultation</option>
              <option className="bg-[#0b0907]">Selling Consultation</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Email Address
            <input
              name="email"
              type="email"
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="name@example.com"
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Preferred Appointment Date & Time
            <input
              name="appointment"
              type="text"
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Preferred date and time"
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Sample Details
            <input
              name="sample"
              type="text"
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Dore, nugget, raw material, jewelry..."
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
            Additional Message
            <textarea
              name="message"
              rows={5}
              className="resize-none rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Share sample context, timing notes or questions."
            />
          </label>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="submit"
            className="inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
          >
            Book Appointment
            <Mail size={17} />
          </button>
          <a
            href={contactInfo.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 rounded-sm border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
          >
            WhatsApp
            <MessageCircle size={17} />
          </a>
          {sent ? (
            <p className="flex items-center text-sm leading-7 text-[#d8bd6a]">
              Email draft prepared for {contactInfo.email}.
            </p>
          ) : null}
        </div>

        <p className="mt-5 flex items-center gap-2 text-xs leading-6 text-white/42">
          <ShieldCheck size={14} />
          Consent {consentAccepted ? "accepted" : "required before submission"}
        </p>
      </form>

      {showConsent ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="consent-title"
          className="fixed inset-0 z-[90] grid place-items-center bg-black/72 px-4 py-8 backdrop-blur-md"
        >
          <div className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-sm border border-[#d8bd6a]/42 bg-[#080705] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.65)] md:p-7">
            <div className="flex items-start justify-between gap-5 border-b border-white/10 pb-5">
              <h2
                id="consent-title"
                className="font-display text-3xl text-[#fff7e7] md:text-4xl"
              >
                Booking consent
              </h2>
              <button
                type="button"
                aria-label="Close consent modal"
                onClick={() => setShowConsent(false)}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-sm border border-white/12 text-white/70 transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-6 text-sm leading-7 text-white/68">
              <p>
                By submitting a booking request, you confirm the following:
              </p>
              <ol className="mt-5 grid gap-3">
                {consentTerms.map((term, index) => (
                  <li key={term} className="grid grid-cols-[auto_1fr] gap-3">
                    <span className="font-bold text-[#d8bd6a]">
                      {index + 1}.
                    </span>
                    <span>{term}</span>
                  </li>
                ))}
              </ol>
            </div>

            <label className="mt-6 flex cursor-pointer items-start gap-3 rounded-sm border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/72">
              <input
                type="checkbox"
                checked={consentChecked}
                onChange={(event) => setConsentChecked(event.target.checked)}
                className="mt-1 h-4 w-4 accent-[#d8bd6a]"
              />
              <span>I have read and agree to the consent terms.</span>
            </label>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              <button
                type="button"
                onClick={() => setShowConsent(false)}
                className="rounded-sm border border-white/14 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
              >
                Cancel
              </button>
              <button
                type="button"
                disabled={!consentChecked}
                onClick={acceptConsent}
                className="rounded-sm bg-[#d8bd6a] px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-black transition hover:bg-[#f5df9a] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Accept and Continue
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
