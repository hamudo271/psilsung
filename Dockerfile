# 일성테크 Next.js 앱 — Railway 배포용 Dockerfile
FROM node:20-slim AS base
WORKDIR /app

# 의존성 설치 (lockfile 기반, 재현 가능한 설치)
COPY package.json package-lock.json ./
RUN npm ci

# 소스 복사 후 프로덕션 빌드
COPY . .
RUN npm run build

ENV NODE_ENV=production
# Railway가 PORT 환경변수를 주입 → start 스크립트가 사용
EXPOSE 3000
CMD ["npm", "run", "start"]
