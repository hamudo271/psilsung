import Button from "@/components/ui/Button";
import s from "./Philosophy.module.css";

const items = [
  { en: "The highest quality", ko: "최고의 품질" },
  { en: "The lowest price", ko: "최저의 가격" },
  {
    en: "Exact delivery date",
    ko: "정확한 납기일",
    cta: { label: "간략 견적 바로가기", href: "#quote" },
  },
];

export default function Philosophy() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">TECHNICAL SERVICE</span>
          <h2 className={s.title}>일성테크는 다른 업체와 다릅니다.</h2>
          <p className={s.lead}>
            국내 플라스틱 분야에서 최상의 서비스와 품질을 제공합니다.
          </p>
        </div>

        <div className={s.grid}>
          {items.map((it, i) => (
            <article
              key={it.ko}
              className={`${s.card} reveal`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <p className={s.en}>{it.en}</p>
              <p className={s.ko}>{it.ko}</p>
              {it.cta && (
                <div className={s.cta}>
                  <Button href={it.cta.href} variant="accent">
                    {it.cta.label}
                  </Button>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
