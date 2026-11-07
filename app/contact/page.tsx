
"use client";

import { useState } from "react";
import type { FormEvent, MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDownRight,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
  MessageCircle,
} from "lucide-react";

const email = "rjdelcastillo@gbox.ncf.edu.ph";
const phone = "+63 956 823 5910";
const location = "Ocampo, Camarines Sur, Philippines";

export default function Contact() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const senderEmail = String(formData.get("email") || "");
    const subject = String(formData.get("subject") || "Portfolio message");
    const message = String(formData.get("message") || "");

    const body = [
      `Name: ${name}`,
      `Email: ${senderEmail}`,
      "",
      message,
    ].join("\n");

    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.065), transparent 28%)`,
      }}
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-14 md:px-10 lg:py-20">
        <section className="animate-[fadeUp_.8s_ease-out_both]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Let's connect
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
                Have something to say?
              </p>
              <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-9xl">
                LET'S
                <br />
                <span className="text-transparent [-webkit-text-stroke:1px_white] transition-colors hover:text-white">
                  TALK.
                </span>
              </h1>
            </div>

            <div className="max-w-xs border-l border-white/20 pl-5">
              <p className="text-sm leading-7 text-gray-400">
                Have a question, an idea, or just want to say hello?
                Feel free to reach out.
              </p>
              <p className="mt-4 text-xs tracking-widest text-gray-600">
                FIG. 005 — GET IN TOUCH
              </p>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-12 border-t border-white/10 pt-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* CONTACT DETAILS */}
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-gray-500">
              01 / Contact information
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="group flex items-center gap-4 border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 transition group-hover:bg-white group-hover:text-black">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Email address
                  </span>
                  <span className="mt-2 block break-all text-sm text-gray-200">
                    {email}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </a>

              <a
                href={`tel:${phone.replaceAll(" ", "")}`}
                className="group flex items-center gap-4 border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/40 hover:bg-white/[0.06]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 transition group-hover:bg-white group-hover:text-black">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Phone number
                  </span>
                  <span className="mt-2 block text-sm text-gray-200">
                    {phone}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
              </a>

              <div className="flex items-center gap-4 border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/40 hover:bg-white/[0.06]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20">
                  <MapPin className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-500">
                    Location
                  </span>
                  <span className="mt-2 block text-sm text-gray-200">
                    {location}
                  </span>
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="mt-5 flex items-center gap-3 border border-white/20 px-5 py-3 text-xs font-semibold tracking-widest text-gray-300 transition hover:bg-white hover:text-black"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4" />
                  EMAIL COPIED
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4" />
                  COPY EMAIL ADDRESS
                </>
              )}
            </button>

            <div className="mt-12 border-t border-white/10 pt-6">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 text-gray-500" />
                <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                  Open to conversations
                </p>
              </div>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                I'm always interested in learning, sharing ideas, and
                connecting with people who enjoy technology.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <div>
            <p className="mb-7 text-xs uppercase tracking-[0.3em] text-gray-500">
              02 / Send me a message
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                  >
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="w-full border border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                  >
                    Your email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    className="w-full border border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white focus:bg-white/[0.07]"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="What is this about?"
                  required
                  className="w-full border border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white focus:bg-white/[0.07]"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-widest text-gray-500"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  required
                  className="w-full resize-y border border-white/15 bg-white/[0.03] px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-white focus:bg-white/[0.07]"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-between bg-white px-6 py-4 text-xs font-bold tracking-[0.2em] text-black transition hover:bg-gray-300 sm:w-auto sm:min-w-[220px]"
              >
                SEND MESSAGE
                <Send className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>

              <p className="text-xs leading-6 text-gray-600">
                Submitting opens your default email application with your
                message prepared. It does not send automatically.
              </p>
            </form>
          </div>
        </section>

        <section className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-10 sm:flex-row sm:items-center">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.3em] text-gray-500">
              Thanks for visiting
            </p>
            <h2 className="text-2xl font-bold sm:text-4xl">
              Let's create something meaningful.
            </h2>
          </div>

          <Link
            href="/"
            className="group flex w-fit items-center gap-3 border border-white/30 px-5 py-4 text-xs font-bold tracking-widest transition hover:bg-white hover:text-black"
          >
            BACK TO HOME
            <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </section>

        <footer className="mt-16 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:flex-row">
          <p>© 2026 RICK JOSHUA DEL CASTILLO</p>
          <p>CONTACT — FIG. 005</p>
        </footer>
      </div>
    </main>
  );
}
