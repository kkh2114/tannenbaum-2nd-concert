"use client";

import { motion } from "framer-motion";
import Watercolor from "../ui/Watercolor";
import Countdown from "../ui/Countdown";
import { concert } from "@/content/concert";

const up = {
  hidden: { opacity: 0, y: 22 },
  show: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: d, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function Quote() {
  const [l1, l2] = concert.heroQuote;
  const em = concert.heroQuoteEmphasis;
  const parts = l2.split(em);
  return (
    <h1
      className="font-serif"
      style={{
        fontWeight: 300,
        lineHeight: 1.5,
        letterSpacing: "-0.01em",
        fontSize: "clamp(28px, 6vw, 60px)",
        color: "var(--cream)",
        textShadow: "0 1px 30px rgba(0,0,0,.35)",
      }}
    >
      {l1}
      <br />
      {parts[0]}
      <span style={{ color: "var(--gold)", fontWeight: 400 }}>{em}</span>
      {parts[1]}
    </h1>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      data-density="light"
      className="anchor relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden text-center"
      style={{ paddingInline: "clamp(20px,5vw,40px)", paddingBlock: "6vh 16vh" }}
    >
      <Watercolor variant="dark" />

      {/* gold hairline frame */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          inset: "clamp(14px, 2.5vw, 24px)",
          border: "1px solid color-mix(in srgb, var(--gold) 32%, transparent)",
        }}
      />

      <div className="relative z-[2] mx-auto max-w-[880px]">
        <motion.div
          custom={0.2}
          variants={up}
          initial="hidden"
          animate="show"
          className="font-latin"
          style={{
            color: "var(--gold)",
            letterSpacing: "0.55em",
            textIndent: "0.55em",
            textTransform: "uppercase",
            fontSize: "clamp(12px, 2vw, 16px)",
            fontWeight: 500,
          }}
        >
          {concert.ensembleEn}
        </motion.div>

        <motion.div
          custom={0.42}
          variants={up}
          initial="hidden"
          animate="show"
          className="mx-auto my-7 flex items-center justify-center gap-3.5"
          aria-hidden
        >
          <span
            style={{
              height: 1,
              width: 46,
              background: "linear-gradient(90deg, transparent, var(--gold))",
            }}
          />
          <span
            style={{
              width: 5,
              height: 5,
              border: "1px solid var(--gold)",
              transform: "rotate(45deg)",
            }}
          />
          <span
            style={{
              height: 1,
              width: 46,
              background: "linear-gradient(90deg, var(--gold), transparent)",
            }}
          />
        </motion.div>

        <motion.div custom={0.58} variants={up} initial="hidden" animate="show">
          <Quote />
        </motion.div>

        <motion.p
          custom={0.78}
          variants={up}
          initial="hidden"
          animate="show"
          className="font-latin mt-8 italic"
          style={{
            fontSize: "clamp(15px, 2.4vw, 20px)",
            color: "rgba(243,233,220,.6)",
          }}
        >
          {concert.heroSubtitle}
        </motion.p>

        <motion.div
          custom={1.0}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-10 flex flex-col items-center gap-2.5"
        >
          <span
            className="font-serif"
            style={{
              color: "var(--gold)",
              fontWeight: 500,
              fontSize: "clamp(22px, 4.4vw, 38px)",
              lineHeight: 1.3,
              letterSpacing: "clamp(0.04em, 1vw, 0.28em)",
              whiteSpace: "nowrap",
            }}
          >
            {concert.edition}
          </span>
          <span
            className="font-serif"
            style={{
              color: "var(--cream)",
              fontSize: "clamp(16px, 2.6vw, 22px)",
            }}
          >
            {concert.date} {concert.time}
          </span>
          <span style={{ color: "rgba(243,233,220,.6)", fontSize: "clamp(13px,2vw,15px)" }}>
            {concert.venue}
          </span>
        </motion.div>

        <motion.div
          custom={1.18}
          variants={up}
          initial="hidden"
          animate="show"
          className="mt-9"
        >
          <Countdown targetISO={concert.dateISO} />
        </motion.div>
      </div>

      {/* scroll hint */}
      <motion.a
        href="#info"
        custom={1.3}
        variants={up}
        initial="hidden"
        animate="show"
        className="absolute bottom-9 left-1/2 z-[2] flex -translate-x-1/2 flex-col items-center gap-2.5"
        style={{
          color: "rgba(243,233,220,.45)",
          fontSize: 11,
          letterSpacing: "0.3em",
          textIndent: "0.3em",
        }}
      >
        <span>SCROLL</span>
        <span
          className="pulse-bar"
          style={{
            width: 1,
            height: 46,
            background: "linear-gradient(var(--gold), transparent)",
          }}
        />
      </motion.a>
    </section>
  );
}
