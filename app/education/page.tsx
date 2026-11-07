
"use client";

import { useState } from "react";
import type { MouseEvent } from "react";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  GraduationCap,
  Award,
  CalendarDays,
} from "lucide-react";

const educationList = [
  {
    degree: "BS Information Technology",
    institution: "Naga College Foundation, Inc.",
    period: "2025 - Present",
    description:
      "A degree program focused on IT concepts, programming languages, computer systems, and software development methodologies.",
    achievements: [
      "Dean's List (First Year First Semester)",
    ],
  },
  {
    degree: "Humanities and Social Sciences (HUMSS)",
    institution: "Ocampo National High School — Senior High School",
    period: "2023 - 2025",
    description:
      "A program focused on social studies, humanities, critical thinking, communication, and cultural awareness.",
    achievements: [
      "Consistent With Honors",
      "HUMSS Club Officer",
    ],
  },
  {
    degree: "Food Processing",
    institution: "Ocampo National High School — Junior High School",
    period: "2019 - 2023",
    description:
      "A program focused on food safety, quality control, and food production techniques.",
    achievements: [
      "With Honors",
      "Conduct Awardee",
    ],
  },
  {
    degree: "Elementary Education",
    institution: "Ocampo Central School",
    period: "2013 - 2019",
    description:
      "Completed my elementary education, building a strong foundation in basic academic subjects, communication, and personal development.",
    achievements: [
      "With Honors",
    ],
  },
];

export default function Education() {
  const [expanded, setExpanded] = useState<number | null>(null);
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
        {/* HEADER */}
        <section className="animate-[fadeUp_.8s_ease-out_both]">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-white" />
            <p className="text-xs uppercase tracking-[0.35em] text-gray-400">
              My academic background
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.2em] text-gray-500">
                The road so far
              </p>

              <h1 className="text-6xl font-black leading-[0.9] tracking-tight sm:text-7xl lg:text-9xl">
                MY
                <br />
                <span className="text-transparent transition-colors hover:text-white [-webkit-text-stroke:1px_white]">
                  EDUCATION.
                </span>
              </h1>
            </div>

            <div className="max-w-xs border-l border-white/20 pl-5">
              <p className="text-sm leading-7 text-gray-400">
                Every step in my education has helped me build knowledge,
                develop skills, and prepare for the future.
              </p>

              <p className="mt-4 text-xs tracking-widest text-gray-600">
                FIG. 003 — ACADEMIC JOURNEY
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION TIMELINE */}
        <section className="mt-20 border-t border-white/10 pt-12">
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap className="h-5 w-5 text-gray-400" />

            <p className="text-xs uppercase tracking-[0.3em] text-gray-500">
              01 / Learning timeline
            </p>
          </div>

          <div className="relative ml-2 border-l border-white/20 md:ml-6">
            {educationList.map((school, index) => {
              const isExpanded = expanded === index;

              return (
                <article
                  key={school.degree}
                  className="relative pb-12 pl-8 last:pb-0 md:pl-12"
                >
                  {/* TIMELINE DOT */}
                  <span
                    className={`absolute -left-[6px] top-2 h-3 w-3 rounded-full border transition duration-300 ${
                      isExpanded
                        ? "border-white bg-white shadow-[0_0_16px_rgba(255,255,255,.6)]"
                        : "border-gray-500 bg-black"
                    }`}
                  />

                  {/* SCHOOL HEADING */}
                  <button
                    type="button"
                    onClick={() =>
                      setExpanded(isExpanded ? null : index)
                    }
                    aria-expanded={isExpanded}
                    className="w-full text-left"
                  >
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                      <div>
                        <p className="mb-3 text-xs tracking-[0.25em] text-gray-500">
                          0{index + 1} / EDUCATION
                        </p>

                        <h2 className="text-2xl font-bold transition hover:text-gray-300 sm:text-3xl">
                          {school.degree}
                        </h2>

                        <p className="mt-2 text-sm text-gray-400">
                          {school.institution}
                        </p>
                      </div>

                      <div className="flex items-center justify-between gap-4 sm:justify-end">
                        <span className="flex items-center gap-2 border border-white/15 px-3 py-2 text-xs text-gray-400">
                          <CalendarDays className="h-3.5 w-3.5" />
                          {school.period}
                        </span>

                        <span className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:bg-white hover:text-black">
                          <ArrowDownRight
                            className={`h-4 w-4 transition ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          />
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* ALWAYS VISIBLE DESCRIPTION AND ACHIEVEMENTS */}
                  <div className="mt-6">
                    <div className="max-w-3xl border-l border-white/20 pl-5">
                      <p className="text-sm leading-7 text-gray-400">
                        {school.description}
                      </p>

                      <div className="mt-6">
                        <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500">
                          <Award className="h-4 w-4" />
                          Achievements
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {school.achievements.map((achievement) => (
                            <span
                              key={achievement}
                              className="border border-white/15 px-3 py-2 text-xs text-gray-300 transition hover:border-white hover:bg-white hover:text-black"
                            >
                              {achievement}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* CLOSING SECTION */}
        <section className="mt-20 border-t border-white/10 pt-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gray-500">
                The journey continues
              </p>

              <h2 className="text-3xl font-bold sm:text-5xl">
                Learning today.
                <br />
                <span className="text-gray-500">
                  Building tomorrow.
                </span>
              </h2>
            </div>

            <Link
              href="/hobbies"
              className="group flex w-fit items-center gap-4 border border-white/30 px-6 py-4 text-xs font-bold tracking-widest transition hover:bg-white hover:text-black"
            >
              EXPLORE MY HOBBIES

              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mt-20 flex flex-col justify-between gap-3 border-t border-white/10 pt-6 text-[10px] uppercase tracking-[0.2em] text-gray-600 sm:flex-row">
          <p>© 2026 RICK JOSHUA DEL CASTILLO</p>
          <p>EDUCATION — FIG. 003</p>
        </footer>
      </div>
    </main>
  );
}
