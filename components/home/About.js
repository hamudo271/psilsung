import s from "./About.module.css";

const strengths = [
  {
    title: "자체 금형 설계·제작",
    desc: "상대물 도면을 분석해 제품에 꼭 맞는 진공성형 금형을 직접 설계·제작합니다.",
  },
  {
    title: "다품종 대응",
    desc: "소량 시제품부터 양산까지, 품목과 수량에 유연하게 대응합니다.",
  },
  {
    title: "전 공정 품질 관리",
    desc: "성형부터 재단·검수까지 한 곳에서 일관된 품질로 관리합니다.",
  },
  {
    title: "정확한 납기",
    desc: "공정 일정을 함께 관리해 약속한 납기를 지킵니다.",
  },
];

export default function About() {
  return (
    <section className={s.section} id="about">
      <div className={`container ${s.inner}`}>
        <div className={`${s.intro} reveal`}>
          <span className="eyebrow">ABOUT</span>
          <h2 className={s.title}>
            정밀 진공성형 파트너,
            <br />
            일성테크입니다.
          </h2>
          <p className={s.lead}>
            일성테크(ILSUNG TECHNOLOGY)는 PET·PS·PP 소재 플라스틱 진공성형 전문
            기업입니다. 도면 분석과 금형 설계부터 성형·후가공·검수·납품까지 전
            과정을 직접 관리하여, 자동차·전자·완구·포장 등 다양한 산업에 꼭 맞는
            부품 트레이와 블리스터를 공급합니다.
          </p>
        </div>

        <ul className={`${s.list} reveal`}>
          {strengths.map((it) => (
            <li key={it.title} className={s.item}>
              <span className={s.bar} aria-hidden />
              <div>
                <h3 className={s.itemTitle}>{it.title}</h3>
                <p className={s.itemDesc}>{it.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
