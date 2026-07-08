import s from "./Applications.module.css";

const items = [
  {
    title: "자동차 부품",
    desc: "부품 이송·보관용 트레이. 내구성과 정밀 적재가 핵심입니다.",
  },
  {
    title: "전자 · IT 부품",
    desc: "정전기·손상에 민감한 부품을 위한 맞춤 트레이.",
  },
  {
    title: "완구 · 인형",
    desc: "제품을 돋보이게 하는 투명 인형 블리스터 포장.",
  },
  {
    title: "산업 · 포장재",
    desc: "다양한 산업 현장의 부품 트레이와 포장재를 소량부터 대응.",
  },
];

export default function Applications() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">APPLICATIONS</span>
          <h2 className={s.title}>적용 분야</h2>
          <p className={s.lead}>
            자동차·전자부터 완구·포장재까지, 다양한 산업의 진공성형 제품을
            제작합니다.
          </p>
        </div>

        <div className={s.grid}>
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`${s.card} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={s.bar} aria-hidden />
              <h3 className={s.cardTitle}>{it.title}</h3>
              <p className={s.cardDesc}>{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
