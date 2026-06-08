import Section from "../ui/Section";
import SectionTitle from "../ui/SectionTitle";
import Reveal from "../ui/Reveal";
import { conductorProfile, pianistProfile, type Profile } from "@/content/profiles";

export default function Profiles() {
  return (
    <Section id="profiles" tone="light" density="heavy">
      <SectionTitle eyebrow="Artists" title="지휘자 · 반주자" />
      <div className="mt-14 grid gap-[clamp(28px,5vw,56px)] md:grid-cols-2">
        <ProfileCard p={conductorProfile} />
        <ProfileCard p={pianistProfile} />
      </div>
    </Section>
  );
}

function ProfileCard({ p }: { p: Profile }) {
  return (
    <Reveal>
      <article
        className="h-full"
        style={{
          padding: "clamp(28px,4vw,40px)",
          background: "color-mix(in srgb, var(--cream) 55%, var(--bg-ivory))",
          borderTop: "2px solid var(--gold)",
        }}
      >
        <div className="flex items-baseline gap-3">
          <span className="eyebrow" style={{ color: "var(--burgundy)" }}>
            {p.role}
          </span>
          <h3
            className="font-serif"
            style={{ fontSize: "clamp(20px,3vw,26px)", color: "var(--ink)" }}
          >
            {p.name}
          </h3>
        </div>

        <div className="mt-7 flex flex-col gap-6">
          {p.groups.map((grp) => (
            <div key={grp.label}>
              <div
                className="mb-2.5 flex items-center gap-3"
              >
                <span
                  style={{ color: "var(--gold)", fontSize: 12, fontWeight: 700, letterSpacing: "0.1em" }}
                >
                  {grp.label}
                </span>
                <span className="gold-line flex-1" style={{ opacity: 0.35 }} />
              </div>
              <ul className="flex flex-col gap-1.5">
                {grp.items.map((it, i) => (
                  <li
                    key={i}
                    className="relative pl-4"
                    style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink)" }}
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 top-[0.7em]"
                      style={{ width: 4, height: 4, background: "var(--gold)", transform: "rotate(45deg)" }}
                    />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </Reveal>
  );
}
