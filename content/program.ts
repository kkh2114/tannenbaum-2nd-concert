// 제2회 프로그램 — 정본: "탄넨바움남성 중창단 연주회 순서 및 목록.md"
// 장르별 그룹. 곡 해설은 정본에 없음(추후 추가 가능).

export type Piece = {
  title: string;
  composer?: string;
  solo?: string; // 솔로/특별 표기
  note?: string;
};

export type ProgramGroup = {
  genre: string; // 장르(한글)
  genreEn?: string;
  pieces: Piece[];
};

export const program: ProgramGroup[] = [
  {
    genre: "오프닝",
    genreEn: "Opening",
    pieces: [{ title: "O Tannenbaum", note: "오 탄넨바움 · 중창단 상징곡" }],
  },
  {
    genre: "성가곡",
    genreEn: "Sacred",
    pieces: [
      { title: "주님의 택함이었소" },
      { title: "매일 주만 섬기리라" },
    ],
  },
  {
    genre: "한국가곡",
    genreEn: "Korean Art Songs",
    pieces: [
      { title: "별", solo: "Solo. Ten. 이계원 · Bar. 정기채" },
      { title: "고향의 노래", solo: "Solo. Ten. 김태형 · Ten. 한상호" },
      { title: "가지산 억새바람" },
    ],
  },
  {
    genre: "독창",
    genreEn: "Solo",
    pieces: [{ title: "산아", solo: "Bass. 한용연" }],
  },
  {
    genre: "동요",
    genreEn: "Children's Songs",
    pieces: [{ title: "섬집아기" }, { title: "과수원길" }],
  },
  {
    genre: "세계민요",
    genreEn: "Folk Songs of the World",
    pieces: [
      { title: "볼가강의 뱃노래", solo: "Solo. Bass. 이택근" },
      { title: "경복궁타령" },
    ],
  },
  {
    genre: "대금연주",
    genreEn: "Daegeum",
    pieces: [
      {
        title: "애니로리 (하늘 가는 밝은 길이)",
        solo: "대금. 윤인호",
      },
    ],
  },
  {
    genre: "남성 8중창",
    genreEn: "Men's Octet",
    pieces: [
      {
        title: "그대 떠난 빈들에 서서",
        solo:
          "Ten1. 신성운·한상호 / Ten2. 이계원·김민규 / Bar. 남상흔·전홍준 / Bass. 한용연·이택근",
      },
    ],
  },
  {
    genre: "독창",
    genreEn: "Solo",
    pieces: [{ title: "마중", solo: "Bariton. 정기채" }],
  },
  {
    genre: "가요",
    genreEn: "Popular",
    pieces: [
      { title: "가요반세기", solo: "Tp. 박인국" },
      { title: "바람의 노래" },
    ],
  },
  {
    genre: "앵콜",
    genreEn: "Encore",
    pieces: [{ title: "송축하리 내 영혼" }, { title: "사랑이여" }],
  },
];
