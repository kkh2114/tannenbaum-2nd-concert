// 공연 기본 정보 — 단일 출처(Single Source of Truth)
// 제2회 정기연주회 확정 정보. 교체가 필요한 항목은 TODO 표시.

export const concert = {
  ensemble: "탄넨바움 남성중창단",
  ensembleEn: "Tannenbaum Men's Choir",
  title: "제2회 정기연주회",
  edition: "제 2 회 정 기 연 주 회",
  heroQuote: ["남성중창단의", "깊은 울림에 젖어 듭니다"],
  heroQuoteEmphasis: "울림",
  heroSubtitle: "We warmly welcome you to our second regular concert",
  slogan: "음악으로 하나되는 우리의 이야기",

  // 일시 (확정)
  date: "2026. 6. 27 (토)",
  time: "오후 4시",
  dateFull: "2026년 6월 27일 토요일 오후 4시",
  dateShort: "2026.6.27 SAT 16:00",

  // 장소 (확정)
  venue: "성답교회 대예배당",
  address: "서울특별시 성동구 용답중앙길 48",

  // 지도 임베드 — OpenStreetMap (API 키 불필요, 모바일·PC 모두 안정적으로 표시)
  // 좌표: 성답교회(서울 성동구 용답중앙길 48) 37.5635666, 127.0531542
  mapEmbedSrc:
    "https://www.openstreetmap.org/export/embed.html?bbox=" +
    "127.0491542%2C37.5610666%2C127.0571542%2C37.5660666" +
    "&layer=mapnik&marker=37.5635666%2C127.0531542",
  mapLink:
    "https://map.naver.com/p/search/" +
    encodeURIComponent("성답교회 용답중앙길 48"),

  // 1회 연주 실황 유튜브 — TODO: 실제 링크 입력 시 영상 섹션 자동 활성화
  // 예) "https://www.youtube.com/watch?v=XXXX" 또는 "XXXX"(영상 ID)
  pastVideoUrl: "https://www.youtube.com/watch?v=45T8z4dhK1o",
  pastVideoCaption: "지난 무대 — 제1회 창단연주회 (2025.6.14)",

  // 참여 구글폼
  rsvpFormUrl: "https://forms.gle/EaFDVjATGfGG29ZBA", // 참석 여부(RSVP) 구글폼
  reviewFormUrl: "https://forms.gle/unnh7CE2ddWBsa379", // 공연 소감 구글폼

  // 문의 — 1회 정보 차용(TODO: 제2회 확인)
  contactPhone: "010-9105-2944",
  contactName: "한용연 단무장",
  bandName: "탄넨바움 남성중창단 (네이버 밴드)",
  bandUrl: "https://band.us/n/acacb092K165d", // 네이버 밴드
  practicePlace: "화도 드림교회 (남양주시 화도읍)", // TODO: 제2회 확인
};

export type Concert = typeof concert;
