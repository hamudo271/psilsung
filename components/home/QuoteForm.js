import { useState } from "react";
import { company } from "@/data/site";
import s from "./QuoteForm.module.css";

export default function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const update = (key) => (e) =>
    setForm((f) => ({ ...f, [key]: e.target.value }));

  // 백엔드가 없으므로 입력값으로 메일을 작성해 고객의 메일 앱으로 보냅니다.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      alert("성함, 이메일, 연락처는 필수 항목입니다.");
      return;
    }
    const subject = `[간략 견적 문의] ${form.company || form.name}`;
    const body = [
      `성함: ${form.name}`,
      `업체명: ${form.company || "-"}`,
      `이메일: ${form.email}`,
      `연락처: ${form.phone}`,
      "",
      "내용:",
      form.message || "-",
    ].join("\n");
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className={s.section} id="quote">
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">CONTACT</span>
          <h2 className={s.title}>간략 견적 문의</h2>
          <p className={s.lead}>
            도면이나 요청사항을 남겨주시면 빠르게 검토 후 견적을 안내드립니다.
            평일·주말 언제든 답변드립니다.
          </p>
        </div>

        <form className={`${s.card} reveal`} onSubmit={handleSubmit} noValidate>
          <div className={s.row}>
            <label className={s.field}>
              <span className={s.label}>
                성함 <em>*</em>
              </span>
              <input
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="홍길동"
                required
              />
            </label>
            <label className={s.field}>
              <span className={s.label}>업체명</span>
              <input
                type="text"
                value={form.company}
                onChange={update("company")}
                placeholder="(주)일성"
              />
            </label>
          </div>

          <div className={s.row}>
            <label className={s.field}>
              <span className={s.label}>
                이메일 <em>*</em>
              </span>
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="name@example.com"
                required
              />
            </label>
            <label className={s.field}>
              <span className={s.label}>
                연락처 <em>*</em>
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="010-0000-0000"
                required
              />
            </label>
          </div>

          <label className={`${s.field} ${s.full}`}>
            <span className={s.label}>내용</span>
            <textarea
              rows={5}
              value={form.message}
              onChange={update("message")}
              placeholder="제작 품목, 수량, 희망 납기 등을 적어주세요."
            />
          </label>

          <p className={s.note}>
            * 도면·이미지 파일은 메일 작성 화면에서 첨부해 주세요. (
            {company.email})
          </p>

          <button type="submit" className={s.submit}>
            보내기
          </button>
        </form>
      </div>
    </section>
  );
}
