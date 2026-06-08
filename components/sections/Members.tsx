import Image from "next/image";
import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { parts, conductor, pianist, type Member } from "@/content/members";

export default function Members() {
  return (
    <Section id="members" tone="light" density="heavy" watercolor>
      <SectionTitle eyebrow="Members" title="단원 소개" />

      {/* 지휘자 · 반주자 */}
      <RevealGroup className="mt-14 flex flex-wrap justify-center gap-[clamp(20px,4vw,48px)]">
        <RevealItem>
          <Lead m={conductor} role="지휘자 · Conductor" />
        </RevealItem>
        <RevealItem>
          <Lead m={pianist} role="반주자 · Pianist" />
        </RevealItem>
      </RevealGroup>

      {/* 파트별 */}
      <div className="mt-[clamp(48px,8vh,80px)] flex flex-col gap-[clamp(36px,6vh,56px)]">
        {parts.map((p) => (
          <div key={p.key}>
            <div className="mb-6 flex items-center gap-4">
              <h3
                className="font-latin"
                style={{
                  fontSize: "clamp(18px,2.4vw,24px)",
                  color: "var(--burgundy)",
                  letterSpacing: "0.04em",
                }}
              >
                {p.label}
              </h3>
              <span className="gold-line flex-1" style={{ opacity: 0.5 }} />
              <span style={{ color: "var(--muted)", fontSize: 13 }}>
                {p.labelKr}
              </span>
            </div>
            <RevealGroup
              className="grid grid-cols-2 gap-[clamp(12px,2.5vw,24px)] sm:grid-cols-3 md:grid-cols-4"
              stagger={0.06}
            >
              {p.members.map((m) => (
                <RevealItem key={m.slug}>
                  <Portrait m={m} />
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Portrait({ m }: { m: Member }) {
  return (
    <figure className="group">
      <div
        className="relative w-full overflow-hidden"
        style={{
          aspectRatio: "3/4",
          border: "1px solid transparent",
          transition: "border-color .5s",
        }}
      >
        <Image
          src={`/members/${m.slug}.jpg`}
          alt={m.name}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 240px"
          className="duotone object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <span
          aria-hidden
          className="absolute inset-x-0 bottom-0 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
          style={{ height: 2, background: "var(--gold)" }}
        />
      </div>
      <figcaption
        className="font-serif mt-3 text-center"
        style={{ fontSize: "clamp(14px,1.8vw,16px)", color: "var(--ink)" }}
      >
        {m.name}
      </figcaption>
    </figure>
  );
}

function Lead({ m, role }: { m: Member; role: string }) {
  return (
    <figure className="group text-center">
      <div
        className="relative mx-auto w-[clamp(140px,40vw,200px)] overflow-hidden rounded-full"
        style={{
          aspectRatio: "1/1",
          border: "1px solid color-mix(in srgb, var(--gold) 55%, transparent)",
        }}
      >
        <Image
          src={`/members/${m.slug}.jpg`}
          alt={m.name}
          fill
          sizes="200px"
          className="duotone object-cover"
          style={{ objectPosition: "top" }}
        />
      </div>
      <figcaption className="mt-4">
        <div
          className="eyebrow"
          style={{ color: "var(--gold)", fontSize: 11 }}
        >
          {role}
        </div>
        <div
          className="font-serif mt-2"
          style={{ fontSize: "clamp(16px,2.2vw,20px)", color: "var(--burgundy)" }}
        >
          {m.name}
        </div>
      </figcaption>
    </figure>
  );
}
