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
        {program.map((grp, gi) => (
          <div key={`${grp.genre}-${gi}`}>
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
                      className="group grid grid-cols-[auto_1fr] gap-x-4 border-b py-4 transition-colors"
                      style={{
                        borderColor:
                          "color-mix(in srgb, var(--muted) 22%, transparent)",
                      }}
                    >
                      <span
                        className="font-latin pt-1"
                        style={{ color: "var(--gold)", fontSize: 15, minWidth: 24 }}
                      >
                        {num}
                      </span>

                      <div className="min-w-0">
                        {/* title + credit */}
                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                          <span
                            className="font-serif"
                            style={{
                              fontSize: "clamp(16px,2.2vw,19px)",
                              color: "var(--ink)",
                              lineHeight: 1.35,
                            }}
                          >
                            {pc.title}
                          </span>
                          {pc.credit && (
                            <span
                              style={{
                                color: "var(--gold-soft)",
                                fontSize: 12.5,
                                letterSpacing: "0.01em",
                              }}
                            >
                              {pc.credit}
                            </span>
                          )}
                        </div>

                        {/* desc */}
                        {pc.desc && (
                          <p
                            className="mt-1.5"
                            style={{
                              color: "var(--muted)",
                              fontSize: 13.5,
                              lineHeight: 1.65,
                            }}
                          >
                            {pc.desc}
                          </p>
                        )}

                        {/* solo */}
                        {pc.solo && (
                          <p
                            className="mt-1.5"
                            style={{
                              color: "var(--burgundy)",
                              fontSize: 12.5,
                              lineHeight: 1.6,
                            }}
                          >
                            {pc.solo}
                          </p>
                        )}
                      </div>
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
