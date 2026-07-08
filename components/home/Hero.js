import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import { heroSlides } from "@/data/site";
import s from "./Home.module.css";

const SLIDE_MS = 6000;

export default function Hero() {
  const [active, setActive] = useState(0);

  // 자동 순환 — 수동 선택 시 타이머가 리셋되도록 active 를 deps 에 포함
  useEffect(() => {
    const t = setInterval(
      () => setActive((i) => (i + 1) % heroSlides.length),
      SLIDE_MS
    );
    return () => clearInterval(t);
  }, [active]);

  return (
    <section className={s.hero} id="top">
      {heroSlides.map((slide, i) => (
        <div
          key={slide.src}
          className={`${s.heroSlide} ${i === active ? s.heroSlideActive : ""}`}
          style={{ backgroundImage: `url(${slide.src})` }}
          aria-hidden
        />
      ))}
      <div className={s.heroScrim} aria-hidden />

      <div className={`container ${s.heroInner} reveal`}>
        <span className={`eyebrow`}>ILSUNG · PLASTIC VACUUM FORMING</span>
        <h1 className={s.heroTitle}>
          플라스틱 진공성형,
          <br />
          일성테크가 만듭니다.
        </h1>
        <p className={s.heroSub}>
          ABS·PET·PS·PP 소재 부품 트레이부터 블리스터 포장까지, 최고의 품질과
          정확한 납기로 완성합니다.
        </p>
        <div className={s.actions}>
          <Button href="#quote">간략 견적 바로가기</Button>
        </div>
      </div>

      <div className={`container ${s.heroCtrls}`}>
        <p className={s.heroCaption}>
          <span className={s.heroCaptionNum}>
            {String(active + 1).padStart(2, "0")}
          </span>
          {heroSlides[active].label}
        </p>
        <div className={s.heroDots} role="tablist" aria-label="배경 슬라이드">
          {heroSlides.map((slide, i) => (
            <button
              key={slide.src}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-label={`${slide.label} 배경 보기`}
              className={`${s.heroDot} ${i === active ? s.heroDotActive : ""}`}
              onClick={() => setActive(i)}
            >
              <span />
            </button>
          ))}
        </div>
      </div>

      <div className={s.scrollCue} aria-hidden>
        <span />
        SCROLL
      </div>
    </section>
  );
}
