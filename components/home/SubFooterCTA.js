import Button from "@/components/ui/Button";
import s from "./SubFooterCTA.module.css";

// 상담 사진을 쓰려면 public/images/ 에 사진을 넣고 BG_IMAGE 에 경로를 지정하세요.
// 예: const BG_IMAGE = "/images/consult-bg.jpg";
const BG_IMAGE = null;

export default function SubFooterCTA() {
  return (
    <section
      className={s.section}
      style={BG_IMAGE ? { backgroundImage: `url(${BG_IMAGE})` } : undefined}
    >
      {BG_IMAGE && <div className={s.overlay} aria-hidden />}
      <div className={`container ${s.inner} reveal`}>
        <h2 className={s.title}>
          평일, 주말 언제가 됐든 언제든 답변을 드립니다.
          <br />
          상담을 통해 편하게 결정하세요.
        </h2>
        <div className={s.cta}>
          <Button href="#quote" variant="accent">
            간략 견적 바로가기
          </Button>
        </div>
      </div>
    </section>
  );
}
