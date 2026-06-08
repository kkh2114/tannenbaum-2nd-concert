import type { ReactNode } from "react";
import Watercolor from "./Watercolor";

type Props = {
  id?: string;
  tone?: "light" | "dark"; // 배경 톤
  /**
   * density="light": 텍스트 적음 → 모바일에서도 한 화면(100svh) 중앙 정렬
   * density="heavy": 텍스트/이미지 많음 → 자연 흐름 + 리플로우
   */
  density?: "light" | "heavy";
  watercolor?: boolean; // 수채 레이어 표시
  className?: string;
  innerClassName?: string;
  children: ReactNode;
};

export default function Section({
  id,
  tone = "light",
  density = "heavy",
  watercolor = false,
  className = "",
  innerClassName = "",
  children,
}: Props) {
  const isDark = tone === "dark";
  const isLight = density === "light";

  return (
    <section
      id={id}
      data-density={density}
      className={`anchor relative w-full overflow-hidden ${
        isDark ? "text-[var(--cream)]" : "text-[var(--ink)]"
      } ${
        isLight
          ? "flex min-h-[100svh] flex-col items-center justify-center"
          : ""
      } ${className}`}
      style={{
        background: isDark ? "var(--bg-deep)" : "var(--bg-ivory)",
        paddingBlock: isLight
          ? "clamp(48px, 8vh, 96px)"
          : "clamp(72px, 12vh, 150px)",
        paddingInline: "clamp(20px, 5vw, 40px)",
      }}
    >
      {watercolor && <Watercolor variant={isDark ? "dark" : "light"} />}
      <div
        className={`relative z-[2] mx-auto w-full max-w-[1080px] ${innerClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
