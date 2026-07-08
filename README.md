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

## 견적 문의 메일 (Resend)

견적문의 폼(`/contact`)은 `pages/api/contact.js` 서버 라우트에서 [Resend](https://resend.com)로 메일을 발송합니다.
아래 환경변수를 **Railway → Variables** 에 등록해야 실제 메일이 전송됩니다.

| 변수 | 필수 | 설명 |
|------|------|------|
| `RESEND_API_KEY` | ✅ | Resend 대시보드 → API Keys 에서 발급 |
| `MAIL_TO` | 선택 | 문의를 받을 주소 (기본 `psilsung@naver.com`) |
| `MAIL_FROM` | 선택 | 보내는 주소 (기본 `일성테크 문의 <noreply@psilsung.com>`) |

**도메인 인증**: `MAIL_FROM` 의 도메인(`psilsung.com`)을 Resend → Domains 에서 인증(DNS TXT/DKIM 등록)해야
스팸 처리 없이 발송됩니다. 인증 전 테스트는 `MAIL_FROM="onboarding@resend.dev"` 로 두면
Resend 가입 계정 본인 메일로만 발송됩니다.

- 키 미설정 시 폼은 "전화로 문의해 주세요" 안내를 노출하며 사이트는 정상 동작합니다.
- 문의자 이메일이 `reply_to` 로 들어가, 받은 메일에 바로 회신하면 문의자에게 답장됩니다.
- 첨부(도면·이미지)는 총 20MB 까지 지원합니다.
