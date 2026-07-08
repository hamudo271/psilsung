import s from "./ProductService.module.css";

// 카테고리별 생산 제품 사례. 사진은 public/images/products/ 에 위치.
// cat(소재 태그)·name 은 실제 제품에 맞게 자유롭게 수정하면 됩니다.
const groups = [
  {
    label: "PLASTIC-PET",
    items: [
      { cat: "PET", name: "부품 트레이", img: "/images/products/case-01.jpg" },
      { cat: "PET", name: "부품 트레이", img: "/images/products/case-10.jpg" },
      { cat: "PET", name: "인형 블리스터", img: "/images/products/case-12.jpg" },
      { cat: "PET", name: "부품 트레이", img: "/images/products/case-11.jpg" },
    ],
  },
  {
    label: "PLASTIC-PS/PP",
    items: [
      { cat: "PS", name: "자동차 부품 트레이", img: "/images/products/case-03.jpg" },
      { cat: "PP", name: "자동차 부품 트레이", img: "/images/products/case-04.jpg" },
      { cat: "PP", name: "부품 트레이", img: "/images/products/case-08.jpg" },
      { cat: "PP", name: "부품 트레이", img: "/images/products/case-06.jpg" },
      { cat: "PP", name: "부품 트레이", img: "/images/products/case-02.jpg" },
      { cat: "PP", name: "부품 트레이", img: "/images/products/case-07.jpg" },
      { cat: "PP", name: "부품 트레이", img: "/images/products/case-09.jpg" },
      { cat: "PP", name: "성형 부품", img: "/images/products/case-05.jpg" },
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
            ABS·PET·PS·PP 소재의 부품 트레이부터 블리스터 포장까지, 용도에 맞춰
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
                      <img
                        src={it.img}
                        alt={`${it.cat} ${it.name}`}
                        loading="lazy"
                      />
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
