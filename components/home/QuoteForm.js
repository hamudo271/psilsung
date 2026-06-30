import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { company } from "@/data/site";
import s from "./QuoteForm.module.css";

// FormSubmit: 가입 없이 폼 제출을 회사 이메일로 전달(파일 첨부 지원).
// 최초 1회 활성화 메일 승인 필요.
const ENDPOINT = `https://formsubmit.co/${company.email}`;

export default function QuoteForm() {
  const router = useRouter();
  const sent = router.query.sent === "1";
  const [nextUrl, setNextUrl] = useState("");
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    setNextUrl(`${window.location.origin}/contact?sent=1`);
  }, []);

  const syncNames = (fileList) =>
    setFiles(Array.from(fileList || []).map((f) => f.name));

  const onDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    if (e.dataTransfer.files?.length && inputRef.current) {
      inputRef.current.files = e.dataTransfer.files;
      syncNames(e.dataTransfer.files);
    }
  };

  if (sent) {
    return (
      <section className={s.section} id="quote">
        <div className="container">
          <div className={s.success}>
            <span className={s.checkIcon} aria-hidden>
              ✓
            </span>
            <h2 className={s.title}>문의가 접수되었습니다</h2>
            <p className={s.lead}>
              빠르게 검토 후 연락드리겠습니다. 감사합니다.
            </p>
            <a href="/" className={s.homeLink}>
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={s.section} id="quote">
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">CONTACT</span>
          <h2 className={s.title}>간략 견적 문의</h2>
          <p className={s.lead}>
            제작 품목·수량과 도면을 남겨주시면 빠르게 검토 후 견적을
            안내드립니다. 평일·주말 언제든 답변드립니다.
          </p>
        </div>

        <form
          className={`${s.card} reveal`}
          action={ENDPOINT}
          method="POST"
          encType="multipart/form-data"
        >
          {/* FormSubmit 설정 */}
          <input type="hidden" name="_subject" value="[일성테크] 간략 견적 문의" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" style={{ display: "none" }} />
          {nextUrl && <input type="hidden" name="_next" value={nextUrl} />}

          <div className={s.row}>
            <label className={s.field}>
              <span className={s.label}>
                성함 <em>*</em>
              </span>
              <input type="text" name="성함" placeholder="홍길동" required />
            </label>
            <label className={s.field}>
              <span className={s.label}>
                업체명 <em>*</em>
              </span>
              <input type="text" name="업체명" placeholder="(주)일성" required />
            </label>
          </div>

          <div className={s.row}>
            <label className={s.field}>
              <span className={s.label}>
                이메일 <em>*</em>
              </span>
              <input
                type="email"
                name="email"
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
                name="연락처"
                placeholder="010-0000-0000"
                required
              />
            </label>
          </div>

          <label className={`${s.field} ${s.full}`}>
            <span className={s.label}>내용</span>
            <textarea
              name="내용"
              rows={5}
              placeholder="제작 품목, 수량, 희망 납기 등을 적어주세요."
            />
          </label>

          <div className={`${s.field} ${s.full}`}>
            <span className={s.label}>첨부 파일</span>
            <label
              className={`${s.dropzone} ${dragOver ? s.dropzoneActive : ""}`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={onDrop}
            >
              <input
                ref={inputRef}
                type="file"
                name="attachment"
                multiple
                accept="image/*,.pdf,.dwg,.dxf,.ai,.zip"
                onChange={(e) => syncNames(e.target.files)}
                className={s.fileInput}
              />
              <span className={s.dropIcon} aria-hidden>
                ⬆
              </span>
              {files.length ? (
                <span className={s.fileNames}>{files.join(", ")}</span>
              ) : (
                <span className={s.dropText}>
                  도면·이미지 파일을 끌어다 놓거나 <b>클릭하여 선택</b>
                </span>
              )}
            </label>
          </div>

          <button type="submit" className={s.submit}>
            보내기
          </button>
        </form>
      </div>
    </section>
  );
}
