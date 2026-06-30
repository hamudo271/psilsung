import { company } from "@/data/site";
import s from "./Greeting.module.css";

export default function Greeting() {
  return (
    <section className={s.section}>
      <div className={`container ${s.inner}`}>
        <p className={`${s.lead} reveal`}>
          “고객의 제품을 가장 잘 담아내는 형(形)을 만듭니다.”
        </p>

        <div className={`${s.body} reveal`}>
          <p>
            안녕하십니까. 일성테크 홈페이지를 찾아주셔서 진심으로 감사합니다.
          </p>
          <p>
            저희 일성테크(ILSUNG TECHNOLOGY)는 PET·PS·PP 소재의 플라스틱
            진공성형을 전문으로 하는 기업입니다. 자동차 부품 트레이부터 전자 부품
            트레이, 인형 블리스터, 산업용 포장재까지 — 고객사의 제품을 안전하게
            담고 보호하는 ‘맞춤형 성형물’을 제작해 왔습니다.
          </p>
          <p>
            진공성형은 작은 차이가 품질을 좌우합니다. 그래서 저희는 도면 분석과
            금형 설계부터 성형, 후가공, 검수, 납품까지 전 과정을 직접 관리하며,
            <strong> 최고의 품질·합리적인 가격·정확한 납기</strong> 세 가지
            약속을 지키기 위해 노력합니다.
          </p>
          <p>
            앞으로도 고객 한 분 한 분의 요구를 깊이 연구하고, 신뢰할 수 있는
            파트너로 함께하겠습니다. 작은 시제품부터 대량 양산까지, 언제든 편하게
            문의해 주십시오.
          </p>
        </div>

        <div className={`${s.sign} reveal`}>
          <span>{company.brand} 대표</span>
          <strong>{company.ceo}</strong>
        </div>
      </div>
    </section>
  );
}
