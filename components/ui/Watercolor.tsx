// 수채 워시 배경 레이어. 부모는 position:relative + overflow:hidden 필요.
// variant="dark": 다크 베이스 위 와인/모스/클레이 워시 + 그레인
// variant="light": 아이보리 위 미세 종이 그레인 + 옅은 워시

export function WatercolorFilter() {
  // 유기적 번짐을 위한 SVG 필터(페이지당 1회 렌더). page.tsx 최상단에 둠.
  return (
    <svg width="0" height="0" aria-hidden style={{ position: "absolute" }}>
      <filter id="wcbleed">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012 0.016"
          numOctaves={3}
          seed={7}
          result="n"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="n"
          scale={90}
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

export default function Watercolor({
  variant = "dark",
}: {
  variant?: "dark" | "light";
}) {
  if (variant === "light") {
    return (
      <div aria-hidden className="absolute inset-0 overflow-hidden">
        <div className="wc-washes">
          <div
            className="wc float-wash"
            style={{
              width: "60%",
              height: "60%",
              left: "-10%",
              top: "-15%",
              background:
                "radial-gradient(circle at 50% 50%, var(--wash-wine), transparent 65%)",
              opacity: 0.06,
              filter: "blur(60px)",
              mixBlendMode: "multiply",
            }}
          />
          <div
            className="wc float-wash"
            style={{
              width: "55%",
              height: "55%",
              right: "-12%",
              bottom: "-18%",
              background:
                "radial-gradient(circle at 50% 50%, var(--wash-clay), transparent 65%)",
              opacity: 0.06,
              filter: "blur(60px)",
              mixBlendMode: "multiply",
              animationDelay: "-6s",
            }}
          />
        </div>
        <div className="paper-grain" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{
        background:
          "radial-gradient(120% 90% at 50% 0%, #2b2522 0%, var(--bg-deep) 55%, #141211 100%)",
      }}
    >
      <div className="wc-washes">
        <div
          className="wc float-wash"
          style={{
            width: "60%",
            height: "62%",
            left: "-6%",
            top: "-14%",
            background:
              "radial-gradient(circle at 42% 42%, var(--wash-wine), transparent 62%)",
            opacity: 0.8,
            filter: "blur(55px)",
          }}
        />
        <div
          className="wc float-wash"
          style={{
            width: "52%",
            height: "55%",
            right: "-8%",
            top: "2%",
            background:
              "radial-gradient(circle at 50% 50%, var(--wash-moss), transparent 63%)",
            opacity: 0.68,
            filter: "blur(55px)",
            animationDelay: "-5s",
          }}
        />
        <div
          className="wc float-wash"
          style={{
            width: "56%",
            height: "56%",
            left: "12%",
            bottom: "-24%",
            background:
              "radial-gradient(circle at 50% 50%, var(--wash-clay), transparent 60%)",
            opacity: 0.66,
            filter: "blur(55px)",
            animationDelay: "-9s",
          }}
        />
        <div
          className="wc"
          style={{
            width: "34%",
            height: "34%",
            left: "50%",
            top: "40%",
            transform: "translate(-50%,-50%)",
            background:
              "radial-gradient(circle at 50% 50%, var(--gold-soft), transparent 58%)",
            opacity: 0.22,
            filter: "blur(50px)",
          }}
        />
      </div>
      {/* bleed vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(130% 120% at 50% 45%, transparent 52%, rgba(15,13,12,.55) 100%)",
          pointerEvents: "none",
        }}
      />
      <div className="wc-grain" />
    </div>
  );
}
