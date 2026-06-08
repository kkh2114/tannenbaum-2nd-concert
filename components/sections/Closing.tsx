import Reveal from "../ui/Reveal";

// 텍스트 적은 섹션 → 한 화면(density light)
export default function Closing() {
  return (
    <section
      className="anchor relative flex min-h-[60svh] flex-col items-center justify-center overflow-hidden text-center"
      data-density="light"
      style={{
        background: "var(--bg-ivory)",
        paddingInline: "clamp(20px,5vw,40px)",
        paddingBlock: "clamp(48px,8vh,96px)",
      }}
    >
      <Reveal className="flex flex-col items-center">
        <span
          className="font-latin italic"
          style={{ color: "var(--gold-soft)", fontSize: "clamp(15px,2.2vw,19px)" }}
        >
          Thank you
        </span>
        <p
          className="font-serif mt-5"
          style={{
            fontWeight: 300,
            fontSize: "clamp(22px,4vw,38px)",
            color: "var(--burgundy)",
            lineHeight: 1.6,
          }}
        >
          준비한 모든 노래로
          <br />
          여러분과 함께하겠습니다
        </p>
        <span className="gold-rule mt-8" style={{ width: 120 }} />
      </Reveal>
    </section>
  );
}
