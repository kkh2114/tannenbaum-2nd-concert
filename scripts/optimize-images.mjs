// 단원 사진·단체사진 최적화 → public/
// 실행: node scripts/optimize-images.mjs
import sharp from "sharp";
import { mkdir, access } from "node:fs/promises";
import { dirname, join } from "node:path";

const REF = "../image reperence"; // 원본 폴더(웹 루트 기준 상위)
const OUT_MEMBERS = "public/members";
const OUT_IMG = "public/img";

// 한글 원본 파일명 → slug (members.ts와 일치)
const members = {
  "김길호": "kimgilho",
  "신성운": "shinseongwoon",
  "한상호": "hansangho",
  "홍기호": "hongkiho",
  "김민규": "kimminkyou",
  "이계원": "leekyewon",
  "김태형": "kimtaehyung",
  "윤인호": "yooninho",
  "남상흔": "namsangheun",
  "전홍준": "jeonhongjoon",
  "정기채": "jeonggichae",
  "박인국": "parkingook",
  "한용연": "hanyongyeon",
  "이택근2": "leetaekgeun", // 정사각 보정본 우선
  "김건봉": "kimgeonbong",
  "손성희": "sonsunghui",
};

// 단체사진(히어로/액자용) — 가로형 1장
const groupPhotos = {
  "KO1_4171": "group-1",
};

async function exists(p) {
  try { await access(p); return true; } catch { return false; }
}

async function run() {
  await mkdir(OUT_MEMBERS, { recursive: true });
  await mkdir(OUT_IMG, { recursive: true });

  let ok = 0, miss = 0;
  for (const [kr, slug] of Object.entries(members)) {
    const src = join(REF, `${kr}.jpg`);
    if (!(await exists(src))) { console.warn("MISSING:", src); miss++; continue; }
    const dest = join(OUT_MEMBERS, `${slug}.jpg`);
    await sharp(src)
      .rotate() // EXIF 방향 보정
      .resize(900, 1200, { fit: "cover", position: "top" }) // 3:4, 상단(얼굴) 기준
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(dest);
    ok++;
    console.log("✓", slug);
  }

  for (const [kr, slug] of Object.entries(groupPhotos)) {
    const src = join(REF, `${kr}.jpg`);
    if (!(await exists(src))) { console.warn("MISSING group:", src); continue; }
    await sharp(src)
      .rotate()
      .resize(2000, 1334, { fit: "cover", position: "centre" })
      .jpeg({ quality: 80, mozjpeg: true })
      .toFile(join(OUT_IMG, `${slug}.jpg`));
    console.log("✓ group", slug);
  }

  console.log(`\nDone. members ok=${ok} miss=${miss}`);
}

run().catch((e) => { console.error(e); process.exit(1); });
