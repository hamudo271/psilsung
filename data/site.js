// 사이트 전역 상수 — 메뉴, 회사 정보, 외부 링크, 이미지 매핑
// 아직 만들지 않은 내부 페이지는 "#" placeholder 로 둔다.

export const nav = [
  { label: "인사말", href: "/greeting" },
  { label: "회사소개", href: "/company" },
  { label: "서비스소개", href: "/service" },
  { label: "견적문의", href: "/contact" },
];

export const externalLinks = {
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

// 메인 히어로 슬라이드 (자동 순환 배경)
export const heroSlides = [
  { src: "/images/hero-1.jpg", label: "진공성형 생산 라인" },
  { src: "/images/hero-2.webp", label: "정밀 성형 제품" },
  { src: "/images/hero-3.jpg", label: "일성테크 본사 공장" },
];
