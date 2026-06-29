# 닷클 홈 — Next.js 재구현 설계/계획 (1차)

아임웹 빌더로 만든 dotcle.kr를 SiteSucker로 받은 정적 스냅샷 기준으로,
홈 페이지 + 공통 레이아웃을 Next.js로 깔끔하게 재구현한다.

## 결정 사항
- **스택**: Next.js (Pages Router) + JavaScript + CSS Modules
- **범위(1차)**: 홈(`/`) + 공통 Header/Footer. 나머지 7개 페이지는 다음 단계.
- **백엔드 없음**: 로그인/회원가입/장바구니/문의 제출은 UI 또는 placeholder 링크까지만.
- **이미지**: 아임웹 CDN 이미지를 `public/images/`로 받아 자체 호스팅.
- **미구현 페이지 링크**: `#` 또는 임시 라우트.
- **반응형**: 모바일까지 대응.
- 원본의 섹션 순서/카피/이미지/링크는 최대한 유지, 코드만 Next.js 구조로 재구성.

## 구조
```
dotcle-next/
├── pages/        _app.js, _document.js, index.js
├── components/
│   ├── layout/   Header, Footer, Layout
│   └── home/     Hero, PortfolioPreview, PostPayment,
│                 Differentiators, ServiceIntro, ReviewPreview, BookingCTA
├── public/images/
├── styles/       globals.css
└── data/         site.js   (메뉴/회사정보/연락처 상수)
```

## 홈 섹션 순서 (원본 기준)
1. Hero — "기업들의 마지막 홈페이지는 왜 결국 닷클일까요?" + 바로 문의하기
2. PortfolioPreview — PORTFOLIO 그리드 + "연매출 100억+…" + 더보기
3. PostPayment — "업계최초 100% 후불제"
4. Differentiators — 3가지 차이점(①기획가이드 ②견적메일 ③유지보수)
5. ServiceIntro — 맞춤형제작(닷클)/템플릿(템킷)
6. ReviewPreview — 후기 미리보기
7. BookingCTA — "7월 1주차까지 2건 예약 가능" + 바로 문의하기

Header: 로고 · COMPANY/SERVICE/PORTFOLIO/REVIEW/ARTICLE/Q&A/CONTACT · 로그인/회원가입/장바구니 · 모바일 메뉴
Footer: 회사정보(닷클/이진오/사업자번호/주소/이메일/영업시간) · SNS · 약관/개인정보 · 카피라이트

## 검증
- `npm run build` 통과, `npm run dev`로 렌더 확인, 모바일 폭에서 레이아웃 점검.
