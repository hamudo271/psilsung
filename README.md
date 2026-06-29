# 일성테크 (ILSUNG) — 플라스틱 진공성형 웹사이트

Next.js (Pages Router) 기반 기업 사이트. Railway 배포용.

## 로컬 실행
```bash
npm install
npm run dev      # http://localhost:3000
```

## 빌드 / 프로덕션
```bash
npm run build
npm run start    # PORT 환경변수를 사용 (Railway 자동 주입)
```

## 배포 (Railway)
- 빌드: Nixpacks (`npm run build`)
- 시작: `npm run start` → `next start -p $PORT`
- Node: 20.x (`.nvmrc`, `package.json#engines`)

GitHub `main` 브랜치에 push 하면 Railway가 자동 빌드·배포합니다.
