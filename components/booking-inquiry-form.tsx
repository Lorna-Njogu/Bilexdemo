"use client";

import { FormEvent, useState } from "react";
import { CalendarCheck, Mail, MessageCircle } from "lucide-react";
import { contact } from "@/lib/site-data";

type FormElements = HTMLFormElement & {
  elements: HTMLFormControlsCollection & {
    name: HTMLInputElement;
    company: HTMLInputElement;
    email: HTMLInputElement;
    phone: HTMLInputElement;
    inquiry: HTMLSelectElement;
    mineral: HTMLInputElement;
    quantity: HTMLInputElement;
    destination: HTMLInputElement;
    payment: HTMLSelectElement;
    appointment: HTMLInputElement;
    documentation: HTMLSelectElement;
    message: HTMLTextAreaElement;
  };
};

export function BookingInquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget as FormElements;
    const fields = form.elements;
    const subject = "Bilex Minerals buyer intake / appointment request";
    const body = [
      "Bilex Minerals buyer intake",
      "",
      `Name: ${fields.name.value}`,
      `Company / Representative: ${fields.company.value}`,
      `Email: ${fields.email.value}`,
      `Phone / WhatsApp: ${fields.phone.value}`,
      `Inquiry type: ${fields.inquiry.value}`,
      `Mineral / Product: ${fields.mineral.value}`,
      `Quantity / Volume: ${fields.quantity.value}`,
      `Destination: ${fields.destination.value}`,
      `Preferred payment: ${fields.payment.value}`,
      `Appointment window: ${fields.appointment.value || "Not requested"}`,
      `Documentation status: ${fields.documentation.value}`,
      "",
      "Requirement:",
      fields.message.value,
    ].join("\n");

    window.location.href = `${contact.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
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
            Buyer intake and appointment request.
          </h3>
          <p className="mt-2 text-sm leading-7 text-white/56">
            Form details are prepared for {contact.email}. Include company
            information and documentation status for faster review.
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
            placeholder="Company or mandate holder"
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
          Inquiry Type
          <select
            name="inquiry"
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
            defaultValue="Gold / XAU inquiry"
          >
            <option className="bg-[#0b0907]">Gold / XAU inquiry</option>
            <option className="bg-[#0b0907]">Bismuth supply</option>
            <option className="bg-[#0b0907]">Strategic minerals</option>
            <option className="bg-[#0b0907]">Export coordination</option>
            <option className="bg-[#0b0907]">Processing support</option>
            <option className="bg-[#0b0907]">Partnership review</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          Mineral / Product
          <input
            name="mineral"
            type="text"
            required
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
            placeholder="Gold, bismuth, concentrate..."
          />
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          Quantity / Volume
          <input
            name="quantity"
            type="text"
            required
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
            placeholder="Example: 5kg, 20MT, monthly volume"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          Destination
          <input
            name="destination"
            type="text"
            required
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
            placeholder="Country, port or buyer location"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          Preferred Payment
          <select
            name="payment"
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
            defaultValue="USD bank transfer"
          >
            <option className="bg-[#0b0907]">USD bank transfer</option>
            <option className="bg-[#0b0907]">Crypto settlement review</option>
            <option className="bg-[#0b0907]">Book cash appointment</option>
            <option className="bg-[#0b0907]">To be discussed</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-white/68">
          Appointment Window
          <input
            name="appointment"
            type="text"
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
            placeholder="Date, time, city if cash meeting is needed"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
          Documentation Status
          <select
            name="documentation"
            className="h-12 rounded-sm border border-white/10 bg-white/[0.04] px-4 text-white outline-none transition focus:border-[#d8bd6a]"
            defaultValue="Company documents available"
          >
            <option className="bg-[#0b0907]">Company documents available</option>
            <option className="bg-[#0b0907]">Buyer mandate available</option>
            <option className="bg-[#0b0907]">Proof of funds available</option>
            <option className="bg-[#0b0907]">Need guidance on documents</option>
          </select>
        </label>
        <label className="grid gap-2 text-sm text-white/68 md:col-span-2">
          Requirement
          <textarea
            name="message"
            rows={5}
            required
            className="resize-none rounded-sm border border-white/10 bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-white/32 focus:border-[#d8bd6a]"
            placeholder="Share specification, target price if relevant, delivery requirement, documentation available and any settlement notes."
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          type="submit"
          className="inline-flex items-center gap-3 rounded-sm bg-[#d8bd6a] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-black transition hover:bg-[#f5df9a]"
        >
          Send details by email
          <Mail size={17} />
        </button>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-3 rounded-sm border border-white/14 px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white transition hover:border-[#d8bd6a] hover:text-[#d8bd6a]"
        >
          WhatsApp
          <MessageCircle size={17} />
        </a>
        {sent ? (
          <p className="flex items-center text-sm leading-7 text-[#d8bd6a]">
            Email draft prepared for {contact.email}.
          </p>
        ) : null}
      </div>

      <p className="mt-5 text-xs leading-6 text-white/42">
        Bank, wallet and cash meeting details are released only after
        qualification and written confirmation.
      </p>
    </form>
  );
}
