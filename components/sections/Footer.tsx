import { concert } from "@/content/concert";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-center"
      style={{
        background: "var(--bg-burgundy)",
        color: "var(--cream)",
        paddingBlock: "clamp(48px,8vh,80px)",
        paddingInline: 20,
      }}
    >
      <div
        className="font-latin"
        style={{
          color: "var(--gold)",
          letterSpacing: "0.5em",
          textIndent: "0.5em",
          fontSize: "clamp(14px,2.4vw,18px)",
        }}
      >
        TANNENBAUM
      </div>
      <p
        className="font-serif mt-5"
        style={{ fontSize: "clamp(15px,2.2vw,18px)", color: "var(--cream)" }}
      >
        {concert.slogan}
      </p>
      <span
        className="mx-auto mt-7 block gold-rule"
        style={{ width: 90, opacity: 0.6 }}
      />
      <p className="mt-7" style={{ color: "rgba(243,233,220,.5)", fontSize: 12.5 }}>
        © 2026 {concert.ensemble}. {concert.title}.
      </p>
    </footer>
  );
}
