import s from "./Process.module.css";

const steps = [
  {
    no: "01",
    title: "고객의 요구 파악",
    desc: "고객이 원하는 품목과 용도를 함께 연구하는 것이 가장 먼저입니다.",
  },
  {
    no: "02",
    title: "상대물 도면 접수",
    desc: "제작에 앞서 기획을 하기 전 단계입니다. 접수된 도면을 바탕으로 진행됩니다.",
  },
  {
    no: "03",
    title: "금형 설계 및 도면 제작",
    desc: "플라스틱 가공을 위해 틀을 설계하는 단계입니다. 도면을 기반으로 제작됩니다.",
  },
  {
    no: "04",
    title: "승인 후 금형 제작",
    desc: "설계가 끝나고 고객과 소통하며 확정하는, 작업을 위해 꼭 필요한 단계입니다.",
  },
  {
    no: "05",
    title: "생산",
    desc: "모든 준비가 끝난 상태에서 고객님을 위한 제품을 본격적으로 생산하는 단계입니다.",
  },
  {
    no: "06",
    title: "납품",
    desc: "정해진 납기를 지켜 검수를 마친 제품을 고객님께 안전하게 납품하는 단계입니다.",
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
