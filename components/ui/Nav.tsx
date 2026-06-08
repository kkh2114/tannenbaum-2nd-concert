"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#info", label: "공연안내" },
  { href: "#greetings", label: "인사말" },
  { href: "#members", label: "단원" },
  { href: "#program", label: "프로그램" },
  { href: "#participate", label: "참여" },
  { href: "#contact", label: "문의" },
];

export default function Nav() {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        transform: show ? "translateY(0)" : "translateY(-100%)",
        opacity: show ? 1 : 0,
        background: "color-mix(in srgb, var(--bg-burgundy) 92%, transparent)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid color-mix(in srgb, var(--gold) 28%, transparent)",
      }}
    >
      <nav className="mx-auto flex max-w-[1080px] items-center justify-between px-5 py-3">
        <a
          href="#hero"
          className="font-latin"
          style={{
            color: "var(--gold)",
            letterSpacing: "0.22em",
            fontSize: 14,
            fontWeight: 600,
          }}
        >
          TANNENBAUM
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="transition-colors"
                style={{ color: "var(--cream)", fontSize: 14 }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* mobile toggle */}
        <button
          aria-label="메뉴"
          className="md:hidden"
          onClick={() => setOpen((v) => !v)}
          style={{ color: "var(--gold)", fontSize: 20, lineHeight: 1 }}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <ul
          className="flex flex-col gap-1 px-5 pb-4 md:hidden"
          style={{ borderTop: "1px solid color-mix(in srgb, var(--gold) 18%, transparent)" }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-2"
                style={{ color: "var(--cream)", fontSize: 15 }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
