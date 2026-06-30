import s from "./Materials.module.css";

const materials = [
  {
    code: "PET",
    name: "투명·고강도 소재",
    desc: "투명도가 높아 제품이 잘 보이고 강도가 우수합니다. 부품 트레이와 인형·완구 블리스터 포장에 주로 사용됩니다.",
  },
  {
    code: "PS",
    name: "성형성·경제성 소재",
    desc: "성형성이 좋고 가격이 합리적입니다. 자동차·전자 부품 이송용 트레이 등 다양한 산업재에 활용됩니다.",
  },
  {
    code: "PP",
    name: "내구·내열 소재",
    desc: "내구성과 내열·내약품성이 뛰어납니다. 반복 사용이 필요한 부품 트레이와 산업용 용기에 적합합니다.",
  },
];

export default function Materials() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">MATERIALS</span>
          <h2 className={s.title}>취급 소재</h2>
          <p className={s.lead}>
            제품의 용도와 요구 조건에 맞춰 최적의 소재로 성형합니다.
          </p>
        </div>

        <div className={s.grid}>
          {materials.map((m, i) => (
            <article
              key={m.code}
              className={`${s.card} reveal`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className={s.code}>{m.code}</span>
              <h3 className={s.name}>{m.name}</h3>
              <p className={s.desc}>{m.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
