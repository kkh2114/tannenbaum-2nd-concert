import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { concert } from "@/content/concert";

export default function Contact() {
  const items = [
    {
      label: "전화 문의",
      value: concert.contactPhone,
      sub: concert.contactName,
      href: `tel:${concert.contactPhone.replace(/-/g, "")}`,
    },
    {
      label: "네이버 밴드",
      value: concert.bandName,
      sub: "소식과 사진을 함께 나눠요",
      href: concert.bandUrl || undefined,
    },
    {
      label: "연습장 위치",
      value: concert.practicePlace,
      sub: "",
      href: undefined,
    },
  ];

  return (
    <Section id="contact" tone="dark" density="heavy" watercolor>
      <SectionTitle eyebrow="Contact" title="문의 안내" tone="dark" />
      <RevealGroup className="mt-12 grid gap-[clamp(16px,3vw,28px)] sm:grid-cols-3">
        {items.map((it) => (
          <RevealItem key={it.label}>
            <div
              className="flex h-full flex-col items-center text-center"
              style={{
                padding: "clamp(24px,3.5vw,36px) 18px",
                border: "1px solid color-mix(in srgb, var(--gold) 26%, transparent)",
              }}
            >
              <span className="eyebrow" style={{ color: "var(--gold)" }}>
                {it.label}
              </span>
              {it.href ? (
                <a
                  href={it.href}
                  target={it.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-serif mt-4"
                  style={{ fontSize: "clamp(16px,2.2vw,19px)", color: "var(--cream)" }}
                >
                  {it.value}
                </a>
              ) : (
                <span
                  className="font-serif mt-4"
                  style={{ fontSize: "clamp(16px,2.2vw,19px)", color: "var(--cream)" }}
                >
                  {it.value}
                </span>
              )}
              {it.sub && (
                <span className="mt-2" style={{ color: "rgba(243,233,220,.55)", fontSize: 13 }}>
                  {it.sub}
                </span>
              )}
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
