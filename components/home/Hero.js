import Button from "@/components/ui/Button";
import { img } from "@/data/site";
import s from "./Home.module.css";

export default function Hero() {
  return (
    <section className={s.hero} id="top">
      <div
        className={s.heroBg}
        style={{ backgroundImage: `url(${img.heroBg})` }}
        aria-hidden
      />
      <div className={`container ${s.heroInner} reveal`}>
        <span className={`eyebrow`}>ILSUNG · PLASTIC VACUUM FORMING</span>
        <h1 className={s.heroTitle}>
          정밀 플라스틱 진공성형,
          <br />
          일성테크가 만듭니다.
        </h1>
        <p className={s.heroSub}>
          PET·PS·PP 소재 부품 트레이부터 블리스터 포장까지, 최고의 품질과 정확한
          납기로 완성합니다.
        </p>
        <div className={s.actions}>
          <Button href="#quote">간략 견적 바로가기</Button>
        </div>
      </div>

      <div className={s.scrollCue} aria-hidden>
        <span />
        SCROLL
      </div>
    </section>
  );
}
