"use client";

import { FormEvent, useRef, useState } from "react";
import { CalendarCheck, Mail, MessageCircle, ShieldCheck, X } from "lucide-react";
import { contact } from "@/lib/site-data";

type ContactDetails = typeof contact;

type FormElements = HTMLFormElement & {
  elements: HTMLFormControlsCollection & {
    name: HTMLInputElement;
    company: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    service: HTMLSelectElement;
    sample: HTMLInputElement;
    appointment: HTMLInputElement;
    payment: HTMLSelectElement;
    message: HTMLTextAreaElement;
  };
};

type BookingInquiryFormProps = {
  contactInfo?: ContactDetails;
};

const consentTerms = [
  "Bilex provides gold testing, assaying and consultation services.",
  "Test results are based on the sample presented for analysis.",
  "Bilex does not guarantee the origin, ownership or future market value of any gold or mineral sample.",
  "The client confirms they have the legal right to present the sample for testing.",
  "Payments made to Bilex are strictly for testing, assaying, consultation or related professional services and are not influenced by the outcome of the test results.",
  "Accepted payment methods include bank transfer, USDT, cryptocurrency and cash.",
  "Appointment times are subject to confirmation by the Bilex team.",
];

export function BookingInquiryForm({
  contactInfo = contact,
}: BookingInquiryFormProps) {
  const [sent, setSent] = useState(false);
  const [showConsent, setShowConsent] = useState(false);
  const [consentChecked, setConsentChecked] = useState(false);
  const [consentAccepted, setConsentAccepted] = useState(false);
  const pendingFormRef = useRef<FormElements | null>(null);

  function submitForm(form: FormElements) {
    const fields = form.elements;
    const subject = "Bilex Minerals gold testing appointment request";
    const body = [
      "Bilex Minerals gold testing appointment request",
      "",
      `Name: ${fields.name.value}`,
      `Company / Representative: ${fields.company.value}`,
      `Email: ${fields.email.value}`,
      `Phone / WhatsApp: ${fields.phone.value}`,
      `Service needed: ${fields.service.value}`,
      `Sample or material details: ${fields.sample.value}`,
      `Preferred appointment: ${fields.appointment.value}`,
      `Preferred payment: ${fields.payment.value}`,
      `consentAccepted: true`,
      "",
      "Message:",
      fields.message.value,
    ].join("\n");

    window.location.href = `${contactInfo.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
              Book Gold Testing Appointment.
            </h3>
            <p className="mt-2 text-sm leading-7 text-white/56">
              Form details are prepared for {contactInfo.email}. Consent terms
              are required before the booking request can continue.
            </p>
          </div>
        </div>

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
            Company / Representative
            <input
              name="company"
              type="text"
              required
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Company, trader or individual"
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
              required
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="+254..."
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Service Needed
            <select
              name="service"
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
              defaultValue="Gold testing"
            >
              <option className="bg-[#0b0907]">Gold testing</option>
              <option className="bg-[#0b0907]">Gold assaying</option>
              <option className="bg-[#0b0907]">Purity analysis</option>
              <option className="bg-[#0b0907]">Verification consultation</option>
              <option className="bg-[#0b0907]">Testing report consultation</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Sample / Material Details
            <input
              name="sample"
              type="text"
              required
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Dore, nugget, raw material, jewelry..."
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Appointment Window
            <input
              name="appointment"
              type="text"
              required
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Preferred date, time and location"
            />
          </label>
          <label className="grid gap-2 text-sm text-white/68">
            Preferred Payment
            <select
              name="payment"
              className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
              defaultValue="Bank transfer"
            >
              <option className="bg-[#0b0907]">Bank transfer</option>
              <option className="bg-[#0b0907]">USDT</option>
              <option className="bg-[#0b0907]">Cryptocurrency</option>
              <option className="bg-[#0b0907]">Cash</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
            Message
            <textarea
              name="message"
              rows={5}
              required
              className="resize-none rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
              placeholder="Share your appointment need, sample context, consultation request and any timing notes."
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
          Consent accepted: {consentAccepted ? "true" : "required before booking"}
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
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d8bd6a]">
                  Required Consent
                </p>
                <h2
                  id="consent-title"
                  className="mt-3 font-display text-3xl text-[#fff7e7] md:text-4xl"
                >
                  Consent terms before booking.
                </h2>
              </div>
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
                Before booking an appointment, please confirm that you
                understand and agree to the following:
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
              <span>I have read and agree to the consent terms</span>
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
