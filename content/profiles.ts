// 지휘자 · 반주자 약력 — 1회 내용 차용(TODO: 제2회 확인/갱신)

export type Profile = {
  role: string;
  name: string;
  slug: string;
  groups: { label: string; items: string[] }[];
};

export const conductorProfile: Profile = {
  role: "지휘자",
  name: "김건봉",
  slug: "kimgeonbong",
  groups: [
    {
      label: "학력",
      items: [
        "경원대학교 음악대학 성악과 졸업",
        "총신대학교 대학원 지휘 석사",
        "ITALY ROMA ARENA ACADEMIA DIPLOMA",
        "서울지휘아카데미 심화 과정 수료",
      ],
    },
    {
      label: "활동",
      items: [
        "국립합창단 단원 역임",
        "현 남양주시립합창단 단원",
        "진건합창단·탄넨바움남성중창단·성답교회 시온성가대 지휘",
        "YJ 싱어즈 · God bless 앙상블 대표",
        "이탈리아·중국·베트남 초청 연주",
      ],
    },
    {
      label: "수상",
      items: [
        "2019 경기도 장애인합창대회 대상",
        "2014 남양주 합창페스티벌 최우수상",
        "2007 대한민국찬양콩쿨 대상",
        "남양주시장 문화공로상 · 과천시장 표창장",
      ],
    },
  ],
};

export const pianistProfile: Profile = {
  role: "반주자",
  name: "손성희",
  slug: "sonsunghui",
  groups: [
    {
      label: "학력",
      items: ["한세대학교 피아노과 졸업"],
    },
    {
      label: "연주 경력",
      items: [
        "영산그레이스홀 · 콘서트하우스 다산홀 반주",
        "늘푸른마음합창단 반주",
        "창신제일교회 · 남부교회 반주",
      ],
    },
    {
      label: "현재 활동",
      items: [
        "창신제일교회 · 남부교회 반주",
        "탄넨바움중창단 반주",
        "남양주 진건지역 시민합창단 반주",
      ],
    },
  ],
};
