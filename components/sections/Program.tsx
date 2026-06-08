import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import { RevealGroup, RevealItem } from "../ui/Reveal";
import { program } from "@/content/program";

export default function Program() {
  let n = 0;
  return (
    <Section id="program" tone="light" density="heavy" watercolor>
      <SectionTitle eyebrow="Program" title="공연 프로그램" />

      <div className="mt-14 flex flex-col gap-[clamp(28px,4vh,44px)]">
        {program.map((grp) => (
          <div key={grp.genre + grp.genreEn}>
            {/* genre header */}
            <div className="mb-4 flex items-baseline gap-3">
              <span
                className="font-serif"
                style={{ fontSize: "clamp(17px,2.2vw,21px)", color: "var(--burgundy)" }}
              >
                {grp.genre}
              </span>
              {grp.genreEn && (
                <span
                  className="font-latin italic"
                  style={{ fontSize: 14, color: "var(--muted)" }}
                >
                  {grp.genreEn}
                </span>
              )}
              <span className="gold-line flex-1" style={{ opacity: 0.4 }} />
            </div>

            <RevealGroup className="flex flex-col" stagger={0.05}>
              {grp.pieces.map((pc) => {
                n += 1;
                const num = String(n).padStart(2, "0");
                return (
                  <RevealItem key={pc.title}>
                    <div
                      className="group grid grid-cols-[auto_1fr] items-baseline gap-x-4 gap-y-1 border-b py-3.5 transition-colors sm:grid-cols-[auto_1fr_auto]"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--muted) 22%, transparent)",
                      }}
                    >
                      <span
                        className="font-latin"
                        style={{ color: "var(--gold)", fontSize: 15, minWidth: 24 }}
                      >
                        {num}
                      </span>
                      <span
                        className="font-serif"
                        style={{
                          fontSize: "clamp(16px,2.2vw,19px)",
                          color: "var(--ink)",
                          lineHeight: 1.4,
                        }}
                      >
                        {pc.title}
                        {pc.note && (
                          <span
                            style={{
                              color: "var(--muted)",
                              fontSize: 13,
                              marginLeft: 8,
                            }}
                          >
                            {pc.note}
                          </span>
                        )}
                      </span>
                      {pc.solo && (
                        <span
                          className="col-start-2 sm:col-start-3 sm:text-right"
                          style={{
                            color: "var(--burgundy)",
                            fontSize: 13,
                            lineHeight: 1.6,
                          }}
                        >
                          {pc.solo}
                        </span>
                      )}
                    </div>
                  </RevealItem>
                );
              })}
            </RevealGroup>
          </div>
        ))}
      </div>
    </Section>
  );
}
