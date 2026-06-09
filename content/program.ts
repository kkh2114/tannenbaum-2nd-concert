// 제2회 프로그램 — 정본: "탄넨바움남성 중창단 연주회 순서 및 목록.md"
// 작사·작곡 정보와 곡 해설은 웹 검색으로 확인(2026-06). 공개 정보가 없는
// 성가곡·일부 지역 가곡은 장르로만 표기.

export type Piece = {
  title: string;
  credit?: string; // 작사/작곡 등
  solo?: string; // 솔로/특별 표기
  desc?: string; // 한두 줄 해설
};

export type ProgramGroup = {
  genre: string;
  genreEn?: string;
  pieces: Piece[];
};

export const program: ProgramGroup[] = [
  {
    genre: "오프닝",
    genreEn: "Opening",
    pieces: [
      {
        title: "O Tannenbaum",
        credit: "독일 민요 · 에른스트 안쉬츠 작사",
        desc: "변치 않는 푸른 전나무를 노래한 독일 민요로, 탄넨바움 중창단의 상징과도 같은 곡입니다.",
      },
    ],
  },
  {
    genre: "성가곡",
    genreEn: "Sacred",
    pieces: [
      {
        title: "주님의 택함이었소",
        credit: "성가곡",
        desc: "주님의 부르심과 택하심에 대한 감사와 헌신을 고백하는 찬양입니다.",
      },
      {
        title: "매일 주만 섬기리라",
        credit: "성가곡",
        desc: "날마다 주님만을 섬기며 살아가겠다는 신앙의 다짐을 노래합니다.",
      },
    ],
  },
  {
    genre: "한국가곡",
    genreEn: "Korean Art Songs",
    pieces: [
      {
        title: "별",
        credit: "이병기 시 · 이수인 곡",
        solo: "Solo. Ten. 이계원 · Bar. 정기채",
        desc: "밤하늘의 별에 그리움을 실어 보낸, 이수인의 대표 서정 가곡입니다.",
      },
      {
        title: "고향의 노래",
        credit: "김재호 시 · 이수인 곡",
        solo: "Solo. Ten. 김태형 · Ten. 한상호",
        desc: "떠나온 고향과 어머니를 향한 그리움을 담아 1968년 작곡된 한국 가곡의 명곡입니다.",
      },
      {
        title: "가지산 억새바람",
        credit: "이자역 작사 · 장일군·이수인 작곡",
        desc: "가을 가지산 능선을 가득 메운 은빛 억새와 바람의 정취를 노래한 가곡입니다.",
      },
    ],
  },
  {
    genre: "독창",
    genreEn: "Solo",
    pieces: [
      {
        title: "산아",
        credit: "신홍철 시 · 신동수 곡",
        solo: "Bass. 한용연",
        desc: "고향 산천을 향한 사무치는 그리움을 극적으로 토해내는, 깊은 저음의 가곡입니다.",
      },
    ],
  },
  {
    genre: "동요",
    genreEn: "Children's Songs",
    pieces: [
      {
        title: "섬집아기",
        credit: "한인현 시 · 이흥렬 곡 · 송정 편곡",
        desc: "엄마를 기다리는 섬마을 아기의 모습을 자장가처럼 그린 국민 동요입니다.",
      },
      {
        title: "과수원길",
        credit: "박화목 시 · 김공선 곡 · 백현주 편곡",
        desc: "아카시아 꽃 흩날리는 과수원길의 정겨운 풍경을 노래한 동요입니다.",
      },
    ],
  },
  {
    genre: "세계민요",
    genreEn: "Folk Songs of the World",
    pieces: [
      {
        title: "볼가강의 뱃노래",
        credit: "러시아 민요",
        solo: "Solo. Bass. 이택근",
        desc: "볼가강에서 배를 끄는 뱃사람들의 고된 노동과 한이 묵직하게 밴 러시아 민요입니다.",
      },
      {
        title: "경복궁타령",
        credit: "경기 민요 · 김희조 편곡",
        desc: "경복궁 중건 시절 백성들의 애환과 흥을 함께 담아낸 흥겨운 경기 민요입니다.",
      },
    ],
  },
  {
    genre: "대금연주",
    genreEn: "Daegeum Solo",
    pieces: [
      {
        title: "애니로리 (하늘 가는 밝은 길이)",
        credit: "스코틀랜드 민요",
        solo: "대금. 윤인호",
        desc: "스코틀랜드 민요 'Annie Laurie'의 선율을 대금의 청아한 음색으로 들려드립니다.",
      },
    ],
  },
  {
    genre: "복사중창",
    genreEn: "Double Quartet",
    pieces: [
      {
        title: "그대 떠난 빈들에 서서",
        credit: "심재경 곡 · 1983 대학가요제 대상",
        solo:
          "Ten1. 신성운·한상호 / Ten2. 김민규·이계원 / Bar. 남상흔·전홍준 / Bass. 이택근·한용연",
        desc: "떠난 이를 향한 애틋한 그리움을 여덟 남성의 깊은 화음으로 펼쳐냅니다.",
      },
    ],
  },
  {
    genre: "독창",
    genreEn: "Solo",
    pieces: [
      {
        title: "마중",
        credit: "허림 시 · 윤학준 곡",
        solo: "Bariton. 정기채",
        desc: "사랑하는 이를 마중 나가는 설렘과 그리움을 담은 창작 가곡입니다.",
      },
    ],
  },
  {
    genre: "가요",
    genreEn: "Popular",
    pieces: [
      {
        title: "가요반세기 2 (해방과 분단)",
        credit: "대중가요 메들리 · 조우현 편곡",
        solo: "Tp. 박인국",
        desc: "해방과 분단의 시대를 가로지른 한국 대중가요의 명곡들을 트럼펫과 함께 메들리로 엮었습니다.",
      },
      {
        title: "바람의 노래",
        credit: "김순곤 시 · 김정욱 곡 · 황소라 편곡",
        desc: "지나온 삶을 바람에 빗대어 관조하는, 조용필의 깊은 울림이 담긴 노래입니다.",
      },
    ],
  },
  {
    genre: "앵콜",
    genreEn: "Encore",
    pieces: [
      {
        title: "송축하리 내 영혼",
        credit: "Matt Redman 곡 · 10,000 Reasons",
        desc: "주님을 송축하는 벅찬 마음을 노래하는, 전 세계가 사랑하는 현대 찬양입니다.",
      },
      {
        title: "사랑이여",
        credit: "최용식 작사·작곡 · 조우현 편곡",
        desc: "유심초가 부른 불멸의 사랑 노래로, 못다 이룬 사랑의 애틋함을 담았습니다.",
      },
    ],
  },
];
