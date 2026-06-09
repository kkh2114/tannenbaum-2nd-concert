import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://tannenbaum-2nd-concert.vercel.app";
const OG_DESC =
  "남성중창단의 깊은 울림에 젖어 듭니다 — 2026.6.27(토) 오후 4시, 성답교회 대예배당";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "제2회 탄넨바움 정기연주회 | 탄넨바움 남성중창단",
  description:
    "탄넨바움 남성중창단 제2회 정기연주회 — 2026년 6월 27일(토) 오후 4시, 성답교회 대예배당. 남성중창단의 깊은 울림에 젖어 듭니다.",
  openGraph: {
    title: "제2회 탄넨바움 정기연주회",
    description: OG_DESC,
    url: SITE_URL,
    siteName: "탄넨바움 남성중창단",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "제2회 탄넨바움 정기연주회",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "제2회 탄넨바움 정기연주회",
    description: OG_DESC,
    images: ["/og.jpg"],
  },
};

// 핀치 줌(두 손가락 확대/축소) 항상 작동 — userScalable:true, maximumScale 미설정
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
  themeColor: "#3a171c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200;300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
