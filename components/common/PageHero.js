import s from "./PageHero.module.css";

// 서브페이지 공통 상단 배너
export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className={s.hero}>
      <div className={`container ${s.inner}`}>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1 className={s.title}>{title}</h1>
        {subtitle && <p className={s.subtitle}>{subtitle}</p>}
      </div>
    </section>
  );
}
