"use client";

import { useEffect, useState } from "react";

type Remain = { days: number; hours: number; mins: number; secs: number };

function remainUntil(target: number): Remain | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    mins: Math.floor((s % 3600) / 60),
    secs: s % 60,
  };
}

function Unit({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center" style={{ minWidth: 56 }}>
      <span
        className="font-latin tabular-nums"
        style={{
          fontWeight: 300,
          fontSize: "clamp(24px, 4vw, 34px)",
          lineHeight: 1.15,
          color: "var(--cream)",
        }}
      >
        {value}
      </span>
      <span
        style={{
          marginTop: 4,
          fontSize: "clamp(10px, 1.6vw, 11px)",
          letterSpacing: "0.3em",
          textIndent: "0.3em",
          color: "color-mix(in srgb, var(--gold) 75%, transparent)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <span
      aria-hidden
      style={{
        width: 1,
        height: 30,
        alignSelf: "center",
        background: "color-mix(in srgb, var(--gold) 30%, transparent)",
      }}
    />
  );
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const [remain, setRemain] = useState<Remain | null | "loading">("loading");

  useEffect(() => {
    const target = new Date(targetISO).getTime();
    const tick = () => setRemain(remainUntil(target));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetISO]);

  // 서버 렌더와의 불일치를 피하기 위해 마운트 전에는 자리만 잡는다
  if (remain === "loading") return <div style={{ height: 64 }} aria-hidden />;

  if (remain === null) {
    return (
      <p
        className="font-serif"
        style={{
          fontSize: "clamp(15px, 2.4vw, 19px)",
          color: "var(--gold)",
        }}
      >
        오늘, 무대의 막이 오릅니다
      </p>
    );
  }

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      role="timer"
      aria-label="공연까지 남은 시간"
      className="flex items-start justify-center gap-4 sm:gap-6"
    >
      <Unit value={String(remain.days)} label="DAYS" />
      <Divider />
      <Unit value={pad(remain.hours)} label="HOURS" />
      <Divider />
      <Unit value={pad(remain.mins)} label="MIN" />
      <Divider />
      <Unit value={pad(remain.secs)} label="SEC" />
    </div>
  );
}
