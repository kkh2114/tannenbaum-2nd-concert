import Image from "next/image";
import Section from "../ui/Section";
import Reveal from "../ui/Reveal";
import {
  chairmanGreeting,
  conductorGreeting,
  type Greeting,
} from "@/content/greetings";

const list = [chairmanGreeting, conductorGreeting];

export default function Greetings() {
  return (
    <Section id="greetings" tone="light" density="heavy" watercolor>
      <div className="flex flex-col gap-[clamp(72px,12vh,120px)]">
        {list.map((g, i) => (
          <GreetingBlock key={g.role} g={g} flip={i % 2 === 1} />
        ))}
      </div>
    </Section>
  );
}

function GreetingBlock({ g, flip }: { g: Greeting; flip: boolean }) {
  return (
    <Reveal>
      <div
        className={`grid items-center gap-[clamp(28px,5vw,64px)] md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]`}
      >
        {/* portrait */}
        <div className={`group ${flip ? "md:order-2" : ""}`}>
          <div
            className="relative mx-auto w-full max-w-[300px] overflow-hidden"
            style={{
              aspectRatio: "3/4",
              border: "1px solid color-mix(in srgb, var(--gold) 45%, transparent)",
            }}
          >
            <Image
              src={`/members/${g.slug}.jpg`}
              alt={`${g.role} ${g.name}`}
              fill
              sizes="(max-width: 768px) 70vw, 300px"
              className="duotone object-cover"
            />
          </div>
        </div>

        {/* text */}
        <div className={flip ? "md:order-1" : ""}>
          <span className="eyebrow" style={{ color: "var(--burgundy)" }}>
            {g.title}
          </span>
          <span className="gold-line mt-3 block" style={{ width: 36 }} />
          <div className="mt-6 flex flex-col gap-4">
            {g.paragraphs.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: "clamp(15px, 1.9vw, 17px)",
                  lineHeight: 1.95,
                  color: "var(--ink)",
                  opacity: i === 0 ? 1 : 0.86,
                }}
              >
                {p}
              </p>
            ))}
          </div>
          <p
            className="font-serif mt-7"
            style={{ color: "var(--burgundy)", fontSize: "clamp(14px,1.8vw,16px)" }}
          >
            {g.sign}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
