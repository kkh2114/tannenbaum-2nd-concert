import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
};

export default function SectionTitle({
  eyebrow,
  title,
  align = "center",
  tone = "light",
}: Props) {
  const isDark = tone === "dark";
  const centered = align === "center";
  return (
    <Reveal
      className={`flex flex-col ${centered ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{ color: isDark ? "var(--gold)" : "var(--burgundy)" }}
        >
          {eyebrow}
        </span>
      )}
      <span
        className="gold-line mt-4"
        style={{ width: 40, opacity: 0.9 }}
        aria-hidden
      />
      <h2
        className="font-serif mt-5"
        style={{
          fontWeight: 500,
          letterSpacing: "-0.01em",
          fontSize: "clamp(26px, 4.2vw, 40px)",
          color: isDark ? "var(--cream)" : "var(--burgundy)",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h2>
    </Reveal>
  );
}
