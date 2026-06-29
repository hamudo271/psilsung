import s from "./Process.module.css";

const steps = [
  {
    no: "01",
    title: "상담 · 견적",
    desc: "도면과 샘플을 검토해 소재와 사양을 제안하고, 명확한 견적을 안내합니다.",
  },
  {
    no: "02",
    title: "금형 제작",
    desc: "제품 형상에 맞춘 정밀 진공성형 금형을 설계·제작합니다.",
  },
  {
    no: "03",
    title: "진공성형",
    desc: "PET·PS·PP 시트를 성형해 다품종 소량부터 양산까지 대응합니다.",
  },
  {
    no: "04",
    title: "재단 · 검수 · 납품",
    desc: "정밀 재단과 품질 검수를 거쳐 약속한 납기에 정확히 납품합니다.",
  },
];

export default function Process() {
  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">PROCESS</span>
          <h2 className={s.title}>진공성형 제작 공정</h2>
          <p className={s.lead}>
            상담부터 납품까지, 일성테크가 전 과정을 책임지고 관리합니다.
          </p>
        </div>

        <ol className={s.grid}>
          {steps.map((st, i) => (
            <li
              key={st.no}
              className={`${s.card} reveal`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <span className={s.no}>{st.no}</span>
              <h3 className={s.cardTitle}>{st.title}</h3>
              <p className={s.cardDesc}>{st.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
