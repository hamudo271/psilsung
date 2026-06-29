// 사이트 전역 상수 — 메뉴, 회사 정보, 외부 링크, 이미지 매핑
// 아직 만들지 않은 내부 페이지는 "#" placeholder 로 둔다.

// 미구현 페이지는 "#" placeholder. 추후 /greeting, /company 등으로 연결.
export const nav = [
  { label: "인사말", href: "#" },
  { label: "회사소개", href: "#" },
  { label: "서비스소개", href: "#" },
  { label: "견적문의", href: "#" },
];

export const externalLinks = {
  templateKit: "https://www.temkit.kr", // 템킷 (템플릿 판매)
  kakao: "#",
  blog: "#",
  instagram: "#",
};

export const company = {
  brand: "일성테크",
  ceo: "김남혁",
  businessNumber: "617-04-39470",
  address: "부산 강서구 평강로345번길 53 일성테크",
  addressDetail: "부산광역시 강서구 대저1동 1062-14 번지 일성테크",
  email: "psilsung@naver.com",
  tel: "051-328-8988",
  fax: "051-328-8980",
  hours: "MON — FRI (10 AM ~ 5 PM)",
  copyright: "Copyright ⓒ 일성테크 All rights reserved.",
  // 구글 지도 임베드(키 불필요) 검색 질의
  mapQuery: "부산 강서구 평강로345번길 53 일성테크",
};

// public/images 아래 다운로드된 에셋의 의미 있는 별칭
export const img = {
  logoMark: "/images/e3b6fb0b3ba7c.png", // 닷클 로고 마크
  heroBg: "/images/e1bb5f76665f7.jpg", // 히어로 배경 (크롬 추상)
  portfolioBg: "/images/2c674c6709bff.jpg",
  postPaymentBg: "/images/3dae10ac3e9f6.jpg",
  guidePreview: "/images/d4b1dd2c50eae.png", // 기획가이드/견적서 미리보기
  estimatePreview: "/images/bf2e6d25c6e6f.png", // 견적 메일 미리보기
  maintenanceBg: "/images/3cdba15c2f4c4.jpg",
  serviceDotcleBg: "/images/c16da29dfeef6.jpg",
  serviceTemkitBg: "/images/1d3f73f2b10ea.jpg",
  serviceLogo: "/images/0837a1da7414c.png",
  reviewBg: "/images/53ce3221f44f7.jpeg",
  bookingBg: "/images/7d5d2539ac6c2.jpeg",
  portfolioItem1: "/images/889bcf846ead3.png",
  portfolioItem2: "/images/2fbddf353a824.png",
  textBg1: "/images/f21f4e4f7c1c2.jpg",
  textBg2: "/images/3484c9d9ee2b1.jpg",
};
