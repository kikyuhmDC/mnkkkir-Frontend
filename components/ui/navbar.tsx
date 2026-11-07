
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Menu,
  X,
  Home,
  UserRound,
  GraduationCap,
  Gamepad2,
  Mail,
  Sparkles,
  Circle,
} from "lucide-react";

const navItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: UserRound },
  { name: "Education", href: "/education", icon: GraduationCap },
  { name: "Hobbies", href: "/hobbies", icon: Gamepad2 },
];

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  const handleMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    setMouse({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <header
      onMouseMove={handleMouseMove}
      className="sticky top-0 z-50 border-b border-white/10 bg-[#080808]/90 text-white backdrop-blur-2xl"
      style={{
        backgroundImage: `radial-gradient(circle at ${mouse.x}% ${mouse.y}%, rgba(255,255,255,0.09), transparent 30%)`,
      }}
    >
      {/* TOP PROGRESS LINE */}
      <div className="absolute left-0 top-0 h-[2px] w-full overflow-hidden bg-white/[0.05]">
        <div className="h-full w-1/3 animate-[navGlow_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-white to-transparent" />
      </div>

      <div className="mx-auto flex h-[88px] max-w-[1500px] items-center justify-between gap-5 px-6 md:px-10">

        {/* BRAND */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group relative flex shrink-0 flex-col"
        >
          <div className="flex items-center gap-2">
            <span className="text-lg font-black tracking-[0.16em] transition-all duration-500 group-hover:tracking-[0.25em] sm:text-xl">
              RICK JOSHUA
            </span>

            <ArrowUpRight className="h-4 w-4 text-gray-500 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white" />
          </div>

          <div className="mt-1 flex items-center gap-2">
            <span className="h-px w-5 bg-white/50 transition-all duration-500 group-hover:w-12" />
            <span className="text-[9px] tracking-[0.32em] text-gray-500">
              PERSONAL PORTFOLIO
            </span>
          </div>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1.5 lg:flex">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            const isHovered = hovered === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHovered(item.href)}
                onMouseLeave={() => setHovered(null)}
                className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.15)]"
                    : "text-gray-500 hover:bg-white/10 hover:text-white"
                }`}
              >
                <Icon
                  className={`h-3.5 w-3.5 transition-all duration-300 ${
                    isActive
                      ? "scale-100"
                      : isHovered
                        ? "scale-110 text-white"
                        : "scale-90 opacity-60"
                  }`}
                />

                <span>{item.name}</span>

                <span
                  className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-current transition-all duration-300 ${
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CONTACT CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <div className="group/status relative flex cursor-default items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>

            <span className="text-[9px] uppercase tracking-[0.15em] text-gray-500 transition group-hover/status:text-white">
              Open to connect
            </span>
          </div>

          <Link
            href="/contact"
            className="group relative flex items-center gap-3 overflow-hidden border border-white/30 px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-colors duration-300 hover:text-black"
          >
            <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-300 ease-out group-hover:translate-y-0" />

            <span className="relative z-10">Let's Talk</span>

            <ArrowUpRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:rotate-90 hover:bg-white hover:text-black lg:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`grid transition-all duration-500 ease-in-out lg:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <nav className="border-t border-white/10 bg-[#090909] px-6 py-5">
            {navItems.map((item, index) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  style={{ transitionDelay: menuOpen ? `${index * 60}ms` : "0ms" }}
                  className={`flex items-center justify-between border-b border-white/[0.08] py-5 transition-all duration-300 ${
                    menuOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  } ${isActive ? "text-white" : "text-gray-500 hover:pl-3 hover:text-white"}`}
                >
                  <span className="flex items-center gap-5">
                    <span className="text-[10px] text-gray-600">
                      0{index + 1}
                    </span>

                    <Icon className="h-4 w-4" />

                    <span className="text-sm font-semibold uppercase tracking-[0.2em]">
                      {item.name}
                    </span>
                  </span>

                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 hover:-translate-y-1 hover:translate-x-1" />
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-6 flex items-center justify-between bg-white px-5 py-4 text-xs font-bold uppercase tracking-widest text-black transition hover:bg-gray-300"
            >
              Let's Talk
              <ArrowUpRight className="h-4 w-4" />
            </Link>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
                Personal Portfolio — 2026
              </span>

              <Sparkles className="h-4 w-4 text-gray-500" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
