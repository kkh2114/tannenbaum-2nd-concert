// 단원 명단 — 파트현황.md 정본 기준 (14명 + 지휘자 + 반주자)
// 사진: /public/members/<slug>.webp (이미지 파이프라인에서 생성)
// ⚠️ 파트현황 1행 "한상연"은 한용연 오기로 처리(프로그램에 Bass.한용연 반복).

export type Member = {
  name: string;
  slug: string; // 사진 파일명(영문)
};

export type Part = {
  key: string;
  label: string; // 화면 표기(라틴)
  labelKr: string;
  members: Member[];
};

export const parts: Part[] = [
  {
    key: "tenor1",
    label: "Tenor I",
    labelKr: "테너 1",
    members: [
      { name: "김길호", slug: "kimgilho" },
      { name: "신성운", slug: "shinseongwoon" },
      { name: "한상호", slug: "hansangho" },
      { name: "홍기호", slug: "hongkiho" },
    ],
  },
  {
    key: "tenor2",
    label: "Tenor II",
    labelKr: "테너 2",
    members: [
      { name: "김민규", slug: "kimminkyou" },
      { name: "이계원", slug: "leekyewon" },
      { name: "김태형", slug: "kimtaehyung" },
      { name: "윤인호", slug: "yooninho" },
    ],
  },
  {
    key: "bariton",
    label: "Bariton",
    labelKr: "바리톤",
    members: [
      { name: "남상흔", slug: "namsangheun" },
      { name: "전홍준", slug: "jeonhongjoon" },
      { name: "정기채", slug: "jeonggichae" },
    ],
  },
  {
    key: "bass",
    label: "Bass",
    labelKr: "베이스",
    members: [
      { name: "박인국", slug: "parkingook" },
      { name: "이택근", slug: "leetaekgeun" },
      { name: "한용연", slug: "hanyongyeon" },
    ],
  },
];

export const conductor: Member = { name: "김건봉", slug: "kimgeonbong" };
export const pianist: Member = { name: "손성희", slug: "sonsunghui" };
