import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { concert } from "@/content/concert";

export default function ConcertInfo() {
  return (
    <Section id="info" tone="light" density="heavy" watercolor>
      <SectionTitle eyebrow="Concert Information" title="공연 안내" />

      <Reveal className="mt-14">
        <div
          className="grid overflow-hidden"
          style={{
            gridTemplateColumns: "1fr",
            border: "1px solid color-mix(in srgb, var(--muted) 30%, transparent)",
          }}
        >
          <div className="grid md:grid-cols-2">
            <InfoCell label="DATE & TIME" border>
              <p className="font-serif" style={bigStyle}>
                {concert.date}
                <br />
                {concert.time}
              </p>
              <p style={smallStyle}>입장은 공연 시작 30분 전부터 가능합니다.</p>
            </InfoCell>
            <InfoCell label="VENUE">
              <p className="font-serif" style={bigStyle}>
                {concert.venue}
              </p>
              <p style={smallStyle}>{concert.address}</p>
            </InfoCell>
          </div>

          {/* map */}
          <div
            style={{
              borderTop:
                "1px solid color-mix(in srgb, var(--muted) 30%, transparent)",
            }}
          >
            <div style={{ position: "relative", width: "100%", aspectRatio: "16/7" }}>
              <iframe
                title="오시는 길"
                src={concert.mapEmbedSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  border: 0,
                  filter: "grayscale(0.2) contrast(0.95)",
                }}
              />
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <a
            href={concert.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="eyebrow"
            style={{
              color: "var(--burgundy)",
              borderBottom: "1px solid var(--gold)",
              paddingBottom: 4,
              fontSize: 12,
            }}
          >
            지도에서 길찾기 →
          </a>
        </div>
      </Reveal>
    </Section>
  );
}

const bigStyle: React.CSSProperties = {
  fontSize: "clamp(20px, 3vw, 28px)",
  color: "var(--ink)",
  marginTop: 14,
  lineHeight: 1.45,
};
const smallStyle: React.CSSProperties = {
  fontSize: 14,
  color: "var(--muted)",
  marginTop: 12,
  lineHeight: 1.7,
};

function InfoCell({
  label,
  children,
  border,
}: {
  label: string;
  children: React.ReactNode;
  border?: boolean;
}) {
  return (
    <div
      style={{
        padding: "clamp(28px, 4vw, 40px)",
        background: "var(--bg-ivory)",
        borderBottom: "1px solid color-mix(in srgb, var(--muted) 30%, transparent)",
      }}
      className={border ? "md:border-r md:border-b-0" : "md:border-b-0"}
    >
      <div
        className="eyebrow"
        style={{ color: "var(--gold)", fontSize: 12 }}
      >
        {label}
      </div>
      {children}
    </div>
  );
}
