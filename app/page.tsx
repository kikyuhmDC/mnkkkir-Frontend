
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  UserRound,
  GraduationCap,
  Camera,
  Mail,
  MousePointer2,
} from "lucide-react";

const roles = [
  "IT STUDENT",
  "WEB DEVELOPMENT ENTHUSIAST",
  "FUTURE IT PROFESSIONAL",
];

const quickLinks = [
  { name: "ABOUT", href: "/about", icon: UserRound },
  { name: "EDUCATION", href: "/education", icon: GraduationCap },
  { name: "HOBBIES", href: "/hobbies", icon: Camera },
  { name: "CONTACT", href: "/contact", icon: Mail },
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [time, setTime] = useState("--:--:--");
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [imageHovered, setImageHovered] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Intl.DateTimeFormat("en-PH", {
          timeZone: "Asia/Manila",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(new Date())
      );
    };

    updateTime();
    const timer = window.setInterval(updateTime, 1000);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRoleIndex((current) => (current + 1) % roles.length);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <main
      onMouseMove={handleMouseMove}
      className="relative isolate flex min-h-[calc(100svh-76px)] items-center overflow-hidden bg-[#080808] text-white"
      style={{
        backgroundImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.075), transparent 28%)`,
      }}
    >
      {/* BACKGROUND DETAILS */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="pointer-events-none absolute -right-40 top-1/2 -z-10 h-[600px] w-[600px] -translate-y-1/2 rounded-full border border-white/[0.05]" />
      <div className="pointer-events-none absolute -right-20 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full border border-white/[0.07]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-12 md:grid-cols-[1.2fr_0.8fr] md:px-10 lg:gap-20">

        {/* LEFT CONTENT */}
        <section className="order-2 animate-[fadeUp_.8s_ease-out_both] md:order-1">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Welcome to my digital space
            </p>
          </div>

          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-gray-500">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
            RICK
            <br />
            JOSHUA
            <br />
            <span className="text-transparent transition-colors duration-500 hover:text-white [-webkit-text-stroke:1px_white]">
              DEL CASTILLO.
            </span>
          </h1>

          {/* TYPING / ROLE DISPLAY */}
          <div className="mt-8 flex min-h-10 flex-wrap items-center gap-3">
            <Code2 className="h-5 w-5 text-gray-400" />

            <span
              key={roleIndex}
              className="animate-[fadeUp_.4s_ease-out_both] text-sm font-semibold tracking-[0.15em] text-white"
            >
              {roles[roleIndex]}
            </span>

            <span className="h-4 w-px animate-pulse bg-white" />
          </div>

          <p className="mt-6 max-w-lg text-sm leading-7 text-gray-400 md:text-base">
            Passionate about technology, computers, and web development.
            Constantly learning, exploring new ideas, and building
            skills to create something meaningful.
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="group flex items-center gap-4 bg-white px-7 py-4 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-gray-300 hover:shadow-[0_12px_40px_rgba(255,255,255,0.12)]"
            >
              EXPLORE MY PROFILE
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-3 border border-white/20 px-7 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-black"
            >
              CONTACT ME
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* QUICK LINKS */}
          <div className="mt-12">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-gray-600">
              Explore my portfolio
            </p>

            <div className="flex flex-wrap gap-2">
              {quickLinks.map((item) => {
                const Icon = item.icon;

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center gap-2 border border-white/10 px-3 py-2 text-[10px] tracking-widest text-gray-400 transition hover:border-white/50 hover:bg-white hover:text-black"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {item.name}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition group-hover:opacity-100" />
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* RIGHT PROFILE IMAGE */}
        <section className="order-1 flex justify-center md:order-2 md:justify-end">
          <div
            className="group relative w-full max-w-[340px] animate-[fadeUp_1s_ease-out_both]"
            onMouseEnter={() => setImageHovered(true)}
            onMouseLeave={() => setImageHovered(false)}
          >
            <div className="absolute -right-3 -top-3 h-full w-full border border-white/20 transition duration-500 group-hover:right-0 group-hover:top-0" />

            <div className="relative aspect-[4/5] overflow-hidden border border-white/20 bg-zinc-900">
              <Image
                src="/profile.jpg"
                alt="Rick Joshua Del Castillo"
                fill
                priority
                sizes="(max-width: 768px) 85vw, 340px"
                className={`object-cover object-center transition duration-700 ${
                  imageHovered
                    ? "scale-110 grayscale-0"
                    : "scale-100 grayscale"
                }`}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute left-5 top-5 border border-white/30 bg-black/50 px-3 py-2 backdrop-blur-sm">
                <p className="text-[10px] tracking-[0.2em] text-gray-300">
                  PERSONAL PROFILE
                </p>
              </div>

              <div className="absolute bottom-6 left-6">
                <p className="text-xs uppercase tracking-[0.3em] text-gray-400">
                  The person behind
                </p>

                <p className="mt-2 text-2xl font-bold">
                  Rick Joshua
                </p>
              </div>

              <div className="absolute bottom-5 right-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/40 backdrop-blur-sm transition group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                FIG. 001 — PROFILE
              </p>

              <p className="text-[10px] uppercase tracking-widest text-gray-500">
                {imageHovered ? "IMAGE ACTIVE" : "HOVER TO EXPLORE"}
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* BOTTOM STATUS */}
      <div className="absolute bottom-5 left-6 hidden items-center gap-3 lg:flex">
        <MousePointer2 className="h-3.5 w-3.5 text-gray-600" />
        <p className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
          Move your cursor to explore
        </p>
      </div>

      <div className="absolute bottom-5 right-6 hidden text-[10px] uppercase tracking-[0.25em] text-gray-600 lg:block">
        PH TIME — {time}
      </div>
    </main>
  );
}
