
"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Code2,
  Palette,
  Globe,
  Terminal,
  UserRound,
  Sparkles,
} from "lucide-react";

const skills = [
  {
    name: "HTML",
    category: "WEB DEVELOPMENT",
    description: "Building the structure of modern websites.",
    icon: Globe,
    number: "01",
  },
  {
    name: "CSS",
    category: "WEB DESIGN",
    description: "Creating layouts, styles, and responsive designs.",
    icon: Code2,
    number: "02",
  },
  {
    name: "Design",
    category: "CREATIVE",
    description: "Exploring visual ideas and user interface design.",
    icon: Palette,
    number: "03",
  },
  {
    name: "Node.js",
    category: "BACKEND DEVELOPMENT",
    description: "Learning server-side JavaScript and backend concepts.",
    icon: Terminal,
    number: "04",
  },
];

export default function About() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

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
              Get to know me
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
                A little introduction
              </p>
              <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-9xl">
                ABOUT
                <br />
                <span className="text-transparent transition-colors duration-500 hover:text-white [-webkit-text-stroke:1px_white]">
                  ME.
                </span>
              </h1>
            </div>

            <div className="max-w-xs border-l border-white/20 pl-5">
              <p className="text-sm leading-7 text-gray-400">
                A student, a technology enthusiast, and someone who is always
                looking for opportunities to learn and grow.
              </p>
              <p className="mt-4 text-xs tracking-widest text-gray-600">
                FIG. 002 — PERSONAL INTRODUCTION
              </p>
            </div>
          </div>
        </section>

        <section className="mt-24 grid gap-12 border-t border-white/10 pt-12 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <UserRound className="h-5 w-5 text-gray-400" />
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
                01 / My Story
              </p>
            </div>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              More than just
              <br />
              <span className="text-gray-500">a student.</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-8 text-gray-200 md:text-xl">
              I'm an Information Technology student with a passion for
              technology, computers, and web development. I enjoy learning
              new things, exploring different technologies, and discovering
              how digital solutions can make everyday life easier.
            </p>
            <p className="text-sm leading-8 text-gray-500 md:text-base">
              As I continue my journey, I'm focused on improving my
              programming and software development skills through projects,
              activities, and hands-on experiences. My goal is to become a
              skilled IT professional who can create useful, innovative,
              and meaningful solutions to real-world problems.
            </p>
            <div className="flex items-center gap-3 pt-3">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-xs uppercase tracking-[0.2em] text-gray-400">
                Always learning. Always improving.
              </span>
            </div>
          </div>
        </section>

        <section className="mt-24 border-t border-white/10 pt-12">
          <div className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gray-500">
                02 / What I'm learning
              </p>
              <h2 className="text-4xl font-black tracking-tight sm:text-6xl">
                MY <span className="text-gray-500">SKILLS.</span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-gray-500">
              Technologies and creative skills I'm currently exploring and
              developing.
            </p>
          </div>

          <div className="grid gap-px border border-white/10 bg-white/10 sm:grid-cols-2">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              const isActive = activeSkill === index;

              return (
                <button
                  key={skill.name}
                  type="button"
                  onClick={() =>
                    setActiveSkill(isActive ? null : index)
                  }
                  onMouseEnter={() => setActiveSkill(index)}
                  onMouseLeave={() => setActiveSkill(null)}
                  aria-expanded={isActive}
                  className="group relative min-h-[210px] bg-[#0b0b0b] p-7 text-left transition duration-300 hover:bg-[#171717] sm:p-9"
                >
                  <div className="flex items-start justify-between">
                    <Icon
                      className={`h-7 w-7 transition duration-300 ${
                        isActive ? "scale-110 text-white" : "text-gray-500"
                      }`}
                    />
                    <span className="text-xs tracking-widest text-gray-600">
                      {skill.number}
                    </span>
                  </div>

                  <div className="mt-10">
                    <p className="mb-2 text-[10px] tracking-[0.25em] text-gray-500">
                      {skill.category}
                    </p>
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-2xl font-bold">{skill.name}</h3>
                      <ArrowUpRight
                        className={`h-5 w-5 transition duration-300 ${
                          isActive
                            ? "translate-x-1 -translate-y-1 text-white"
                            : "text-gray-600"
                        }`}
                      />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-400">
                      {skill.description}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-px bg-white transition-all duration-500 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <p className="mt-4 text-[10px] uppercase tracking-[0.2em] text-gray-600">
            Select or hover over a skill to interact
          </p>
        </section>

        <section className="mt-24 flex flex-col justify-between gap-8 border-t border-white/10 pt-12 sm:flex-row sm:items-center">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
              What's next?
            </p>
            <h2 className="text-3xl font-bold sm:text-5xl">
              Still building.
              <br />
              <span className="text-gray-500">Still becoming.</span>
            </h2>
          </div>

          <Link
            href="/education"
            className="group flex w-fit items-center gap-4 border border-white/30 px-6 py-4 text-xs font-bold tracking-widest transition hover:bg-white hover:text-black"
          >
            EXPLORE MY JOURNEY
            <ArrowDownRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:translate-y-1" />
          </Link>
        </section>

        <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:flex-row">
          <p>© 2026 RICK JOSHUA DEL CASTILLO</p>
          <p>ABOUT ME — FIG. 002</p>
        </footer>
      </div>
    </main>
  );
}
