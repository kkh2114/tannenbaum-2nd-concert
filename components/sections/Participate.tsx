import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { concert } from "@/content/concert";

export default function Participate() {
  return (
    <Section id="participate" tone="light" density="heavy" watercolor>
      <SectionTitle eyebrow="Participate" title="참여 안내" />
      <p
        className="mx-auto mt-6 max-w-[560px] text-center"
        style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.8 }}
      >
        여러분의 참여가 저희에게 큰 힘이 됩니다.
        <br className="hidden sm:block" />
        참석 여부를 알려주시고, 공연 후 소감도 남겨주세요.
      </p>

      <RevealGroup className="mx-auto mt-12 grid max-w-[760px] gap-[clamp(16px,3vw,28px)] md:grid-cols-2">
        <RevealItem>
          <Card
            eyebrow="RSVP"
            title="참석 여부 알려주기"
            desc="공연 준비에 큰 도움이 됩니다. 함께해 주실 분들을 미리 알려주세요."
            href={concert.rsvpFormUrl}
            cta="참석 여부 제출하기"
          />
        </RevealItem>
        <RevealItem>
          <Card
            eyebrow="Review"
            title="공연 소감 남기기"
            desc="공연을 보신 후 소중한 감상을 들려주세요. 큰 격려가 됩니다."
            href={concert.reviewFormUrl}
            cta="소감 남기기"
          />
        </RevealItem>
      </RevealGroup>
    </Section>
  );
}

function Card({
  eyebrow,
  title,
  desc,
  href,
  cta,
}: {
  eyebrow: string;
  title: string;
  desc: string;
  href: string;
  cta: string;
}) {
  const ready = Boolean(href);
  return (
    <div
      className="flex h-full flex-col"
      style={{
        padding: "clamp(28px,4vw,40px)",
        background: "var(--bg-ivory)",
        border: "1px solid color-mix(in srgb, var(--gold) 35%, transparent)",
      }}
    >
      <span className="eyebrow" style={{ color: "var(--gold)" }}>
        {eyebrow}
      </span>
      <h3
        className="font-serif mt-3"
        style={{ fontSize: "clamp(19px,2.6vw,23px)", color: "var(--burgundy)" }}
      >
        {title}
      </h3>
      <p
        className="mt-3 flex-1"
        style={{ color: "var(--ink)", opacity: 0.8, fontSize: 14.5, lineHeight: 1.75 }}
      >
        {desc}
      </p>
      {ready ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block text-center transition-colors"
          style={{
            padding: "13px 18px",
            background: "var(--burgundy)",
            color: "var(--cream)",
            fontSize: 14,
            letterSpacing: "0.04em",
            border: "1px solid var(--burgundy)",
          }}
        >
          {cta} →
        </a>
      ) : (
        <span
          className="mt-6 inline-block text-center"
          style={{
            padding: "13px 18px",
            border: "1px dashed color-mix(in srgb, var(--muted) 50%, transparent)",
            color: "var(--muted)",
            fontSize: 13,
          }}
        >
          준비 중입니다 (폼 연결 예정)
        </span>
      )}
    </div>
  );
}
