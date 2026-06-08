"use client";

import { useState } from "react";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { concert } from "@/content/concert";

function parseYouTubeId(input: string): string | null {
  if (!input) return null;
  // 이미 ID만 들어온 경우
  if (/^[\w-]{11}$/.test(input)) return input;
  try {
    const u = new URL(input);
    if (u.hostname.includes("youtu.be")) return u.pathname.slice(1) || null;
    if (u.searchParams.get("v")) return u.searchParams.get("v");
    const m = u.pathname.match(/\/(embed|shorts|live)\/([\w-]{11})/);
    if (m) return m[2];
  } catch {
    /* not a url */
  }
  return null;
}

export default function PastVideo() {
  const id = parseYouTubeId(concert.pastVideoUrl);
  const [play, setPlay] = useState(false);

  // 링크 미입력 시 섹션 숨김
  if (!id) return null;

  return (
    <Section id="video" tone="dark" density="heavy" watercolor>
      <SectionTitle eyebrow="Past Stage" title="지난 무대" tone="dark" />
      <Reveal className="mt-12">
        <div
          className="relative mx-auto w-full max-w-[920px] overflow-hidden"
          style={{
            aspectRatio: "16/9",
            border: "1px solid color-mix(in srgb, var(--gold) 40%, transparent)",
            boxShadow: "0 30px 80px rgba(0,0,0,.4)",
          }}
        >
          {play ? (
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0`}
              title={concert.pastVideoCaption}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              onClick={() => setPlay(true)}
              className="group absolute inset-0 h-full w-full"
              aria-label="영상 재생"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt={concert.pastVideoCaption}
                className="h-full w-full object-cover"
                style={{ filter: "brightness(0.62) saturate(0.9)" }}
              />
              <span
                className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
                style={{
                  width: 78,
                  height: 78,
                  border: "1.5px solid var(--gold)",
                  background: "color-mix(in srgb, var(--bg-burgundy) 55%, transparent)",
                }}
              >
                <span
                  style={{
                    marginLeft: 5,
                    borderTop: "11px solid transparent",
                    borderBottom: "11px solid transparent",
                    borderLeft: "18px solid var(--gold)",
                  }}
                />
              </span>
            </button>
          )}
        </div>
        <p
          className="mt-5 text-center"
          style={{ color: "rgba(243,233,220,.6)", fontSize: 14 }}
        >
          {concert.pastVideoCaption}
        </p>
      </Reveal>
    </Section>
  );
}
