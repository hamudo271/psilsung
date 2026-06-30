# 일성테크 홈 — Next.js 사이트 설계/구성

일성테크(플라스틱 진공성형 전문)의 기업 홈페이지.
Next.js (Pages Router) + JavaScript + CSS Modules. Railway 배포.

## 정체성
- 업종: 플라스틱 진공성형 (PET·PS·PP 부품 트레이, 블리스터 포장)
- 브랜드 컬러: 레드(#e1380d, 로고 색) + 화이트/블랙 기반 라이트 테마
- 핵심 메시지: 최고의 품질 · 합리적인 가격 · 정확한 납기

## 구조
```
dotcle-next/
├── pages/        _app.js(reveal 애니메이션), _document.js, index.js
├── components/
│   ├── layout/   Header(로고+메뉴), Footer, Layout
│   ├── ui/       Button (solid/outline/accent — 레드)
│   └── home/     Hero, ProductService, Philosophy,
│                 Process, Applications, LocationContact, SubFooterCTA
├── public/       ilsung-mark.svg(로고/파비콘), images/
├── styles/       globals.css (디자인 토큰)
└── data/         site.js (메뉴/회사정보/연락처)
```

## 홈 섹션 순서
1. Hero — "정밀 플라스틱 진공성형, 일성테크가 만듭니다."
2. ProductService — PRODUCT SERVICE: PET / PS·PP 생산 제품
3. Philosophy — 최고의 품질 / 최저의 가격 / 정확한 납기일
4. Process — 진공성형 제작 공정 (상담 → 금형 → 성형 → 검수·납품)
5. Applications — 적용 분야 (자동차·전자·완구·포장재)
6. LocationContact — 오시는 길 (주소·연락처·지도)
7. SubFooterCTA — 상담 유도 배너

Header 메뉴: 인사말 · 회사소개 · 서비스소개 · 견적문의
Footer: 회사정보(일성테크/김남혁/사업자번호/주소/이메일/영업시간) · SNS · 약관 · 카피라이트 · Made by 웹스랩

## 배포
- GitHub `main` → Railway 자동 빌드·배포 (Nixpacks, `npm run build` / `npm run start`)

## 미구현 / 추후
- 인사말·회사소개·서비스소개·견적문의 개별 페이지 (현재 nav는 `#` placeholder)
- 실제 제품 사진 (현재 ProductService는 카테고리 플레이스홀더)
- 실제 로고 원본 파일 (현재 ilsung-mark.svg는 근사 재현)
