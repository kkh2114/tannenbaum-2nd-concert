"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// 데스크톱 휠 스무스 스크롤만 적용. 터치는 브라우저 기본에 위임 →
// 두 손가락 핀치 줌/패닝이 정상 작동(syncTouch 미사용).
export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false, // 터치 제스처(핀치 줌)는 네이티브
    });

    let raf = 0;
    const loop = (t: number) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return null;
}
