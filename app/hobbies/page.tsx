
"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowDownRight,
  Camera,
  Gamepad2,
  Music,
  BookOpen,
  Headphones,
  Sparkles,
} from "lucide-react";

const hobbies = [
  {
    title: "Photography",
    category: "CREATIVE",
    number: "01",
    description:
      "Capturing street landscapes and urban architecture during evening walks. I enjoy finding interesting details and moments through photography.",
    icon: Camera,
    detail: "Capturing everyday moments.",
  },
  {
    title: "Gaming",
    category: "ENTERTAINMENT",
    number: "02",
    description:
      "I'm an enthusiast of FPS games. Gaming gives me a fun way to challenge myself, develop teamwork, and enjoy time with friends.",
    icon: Gamepad2,
    detail: "Strategy, teamwork, and fun.",
  },
  {
    title: "Music",
    category: "LIFESTYLE",
    number: "03",
    description:
      "I enjoy listening to rock, OPM, and old songs. Music is part of my everyday routine and helps set the mood for different moments.",
    icon: Music,
    detail: "Rock, OPM, and old songs.",
  },
  {
    title: "Reading",
    category: "PERSONAL INTEREST",
    number: "04",
    description:
      "I enjoy romance, science fiction, and mystery novels. Reading lets me explore different stories, ideas, and imaginative worlds.",
    icon: BookOpen,
    detail: "Stories, imagination, and discovery.",
  },
];

export default function Hobbies() {
  const [activeHobby, setActiveHobby] = useState<number | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
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

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 lg:py-24">
        <section className="animate-[fadeUp_.8s_ease-out_both]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
              Outside the classroom
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
                Things I enjoy
              </p>
              <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-9xl">
                MY
                <br />
                <span className="text-transparent [-webkit-text-stroke:1px_white] transition-colors hover:text-white">
                  HOBBIES.
                </span>
              </h1>
            </div>

            <div className="max-w-xs border-l border-white/20 pl-5">
              <p className="text-sm leading-7 text-gray-400">
                The activities and interests that make my time outside
                studying more enjoyable and meaningful.
              </p>
              <p className="mt-4 text-xs tracking-widest text-gray-600">
                FIG. 004 — PERSONAL INTERESTS
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 border-t border-white/10 pt-12">
          <div className="mb-10 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-gray-400" />
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              01 / Things I enjoy
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {hobbies.map((hobby, index) => {
              const Icon = hobby.icon;
              const isActive = activeHobby === index;

              return (
                <button
                  key={hobby.title}
                  type="button"
                  onClick={() =>
                    setActiveHobby(isActive ? null : index)
                  }
                  aria-expanded={isActive}
                  className={`group relative min-h-[270px] overflow-hidden border p-7 text-left transition duration-500 sm:p-9 ${
                    isActive
                      ? "border-white/50 bg-[#171717]"
                      : "border-white/10 bg-[#0b0b0b] hover:border-white/30 hover:bg-[#121212]"
                  }`}
                >
                  <span className="absolute -right-5 -top-8 text-[130px] font-black leading-none text-white/[0.025] transition duration-500 group-hover:scale-110">
                    {hobby.number}
                  </span>

                  <div className="relative flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center border transition duration-300 ${
                        isActive
                          ? "border-white bg-white text-black"
                          : "border-white/20 text-gray-400 group-hover:border-white group-hover:text-white"
                      }`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <span className="text-xs tracking-widest text-gray-600">
                      {hobby.number}
                    </span>
                  </div>

                  <div className="relative mt-12">
                    <p className="mb-3 text-[10px] tracking-[0.25em] text-gray-500">
                      {hobby.category}
                    </p>

                    <div className="flex items-center justify-between gap-3">
                      <h2 className="text-3xl font-bold transition group-hover:translate-x-1">
                        {hobby.title}
                      </h2>
                      <ArrowUpRight
                        className={`h-5 w-5 transition duration-300 ${
                          isActive
                            ? "rotate-45 text-white"
                            : "text-gray-600 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                        }`}
                      />
                    </div>

                    <p className="mt-3 text-sm text-gray-500">
                      {hobby.detail}
                    </p>

                    <div
                      className={`grid transition-all duration-500 ${
                        isActive
                          ? "mt-4 grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="border-t border-white/15 pt-4 text-sm leading-7 text-gray-300">
                          {hobby.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <span
                    className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
            Click a card to discover more
          </p>
        </section>

        <section className="mt-20 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              A little bit of everything
            </p>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Interests that
              <br />
              <span className="text-gray-500">inspire me.</span>
            </h2>
          </div>

          <Link
            href="/contact"
            className="group flex w-fit items-center gap-4 border border-white/30 px-6 py-4 text-xs font-bold tracking-widest transition hover:bg-white hover:text-black"
          >
            GET IN TOUCH
            <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:translate-y-1" />
          </Link>
        </section>

        <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:flex-row">
          <p>© 2026 RICK JOSHUA DEL CASTILLO</p>
          <p>HOBBIES — FIG. 004</p>
        </footer>
      </div>
    </main>
  );
}
