import s from "./ProductService.module.css";

// 카테고리별 생산 제품. 실제 제품 사진은 public/images/products/ 에 넣고
// item.img 경로를 지정하면 플레이스홀더 대신 사진이 표시됩니다.
const groups = [
  {
    label: "PLASTIC-PET",
    items: [
      { cat: "PET", name: "부품 트레이" },
      { cat: "PET", name: "부품 트레이" },
      { cat: "PET", name: "인형 블리스터" },
      { cat: "PET", name: "부품 트레이" },
    ],
  },
  {
    label: "PLASTIC-PS/PP",
    items: [
      { cat: "PS", name: "자동차 부품 트레이" },
      { cat: "PP", name: "자동차 부품 트레이" },
      { cat: "PP", name: "자동차 부품 트레이" },
      { cat: "PP", name: "자동차 부품 트레이" },
    ],
  },
];

export default function ProductService() {
  return (
    <section className={s.section} id="product">
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">PRODUCT SERVICE</span>
          <h2 className={s.title}>진공성형 생산 제품</h2>
          <p className={s.lead}>
            PET·PS·PP 소재의 부품 트레이부터 블리스터 포장까지, 용도에 맞춰
            정밀하게 성형합니다.
          </p>
        </div>

        {groups.map((g) => (
          <div key={g.label} className={s.group}>
            <p className={s.groupLabel}>
              [<span className={s.groupAccent}>{g.label}</span>]
            </p>
            <div className={s.grid}>
              {g.items.map((it, i) => (
                <article
                  key={i}
                  className={`${s.card} reveal`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <div className={s.thumb}>
                    {it.img ? (
                      <img src={it.img} alt={`${it.cat} ${it.name}`} />
                    ) : (
                      <span className={s.watermark}>{it.cat}</span>
                    )}
                    <span className={s.tag}>{it.cat}</span>
                  </div>
                  <p className={s.name}>{it.name}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
