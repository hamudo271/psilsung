import { company } from "@/data/site";
import s from "./CompanyInfo.module.css";

export default function CompanyInfo() {
  const rows = [
    { k: "상호", v: `${company.brand} (ILSUNG TECHNOLOGY)` },
    { k: "대표자", v: company.ceo },
    { k: "사업자등록번호", v: company.businessNumber },
    { k: "주소", v: company.addressDetail },
    { k: "전화 / 팩스", v: `${company.tel} / ${company.fax}` },
    { k: "이메일", v: company.email },
    { k: "영업시간", v: company.hours },
    { k: "사업분야", v: "플라스틱 진공성형 (ABS·PET·PS·PP 부품 트레이, 블리스터 포장)" },
  ];

  return (
    <section className={s.section}>
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">COMPANY INFO</span>
          <h2 className={s.title}>회사 정보</h2>
        </div>
        <dl className={`${s.table} reveal`}>
          {rows.map((r) => (
            <div key={r.k} className={s.row}>
              <dt>{r.k}</dt>
              <dd>{r.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
