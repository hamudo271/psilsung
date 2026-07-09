import { useState, useRef } from "react";
import s from "./QuoteForm.module.css";

// 첨부 총 용량 제한 (Resend 이메일 크기 여유)
const MAX_TOTAL_BYTES = 20 * 1024 * 1024; // 20MB

const readAsBase64 = (file) =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(String(r.result).split(",")[1]); // data URL 접두어 제거
    r.onerror = reject;
    r.readAsDataURL(file);
  });

export default function QuoteForm() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState("");
  const [files, setFiles] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setErrMsg("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    const fileList = Array.from(inputRef.current?.files || []);
    const totalBytes = fileList.reduce((sum, f) => sum + f.size, 0);
    if (totalBytes > MAX_TOTAL_BYTES) {
      setErrMsg("첨부 파일 총 용량은 20MB를 넘을 수 없습니다.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const filePayload = [];
      for (const file of fileList) {
        filePayload.push({ filename: file.name, content: await readAsBase64(file) });
      }

      const payload = {
        name: fd.get("성함"),
        company: fd.get("업체명"),
        email: fd.get("email"),
        phone: fd.get("연락처"),
        message: fd.get("내용"),
        company_website: fd.get("company_website"), // 허니팟
        files: filePayload,
      };

      const r = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(data.error || "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");

      setStatus("success");
    } catch (err) {
      setErrMsg(err.message || "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <section className={s.section} id="quote">
        <div className="container">
          <div className={s.success}>
            <span className={s.checkIcon} aria-hidden>
              ✓
            </span>
            <h2 className={s.title}>문의가 접수되었습니다</h2>
            <p className={s.lead}>빠르게 검토 후 연락드리겠습니다. 감사합니다.</p>
            <a href="/" className={s.homeLink}>
              홈으로 돌아가기
            </a>
          </div>
        </div>
      </section>
    );
  }

  const sending = status === "sending";

  return (
    <section className={s.section} id="quote">
      <div className="container">
        <div className={`${s.head} reveal`}>
          <span className="eyebrow">CONTACT</span>
          <h2 className={s.title}>간략 견적 문의</h2>
          <p className={s.lead}>
            제작 품목·수량과 도면을 남겨주시면 빠르게 검토 후 견적을 안내드립니다.
          </p>
        </div>

        <form className={`${s.card} reveal`} onSubmit={handleSubmit} noValidate>
          {/* 허니팟 (봇 차단용, 사람에게는 숨김) */}
          <input
            type="text"
            name="company_website"
            tabIndex={-1}
            autoComplete="off"
            style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
            aria-hidden
          />

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
                autoComplete="email"
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
                autoComplete="tel"
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

          {status === "error" && (
            <p className={s.error} role="alert">
              {errMsg}
            </p>
          )}

          <button type="submit" className={s.submit} disabled={sending} aria-busy={sending}>
            {sending ? "전송 중…" : "보내기"}
          </button>
        </form>
      </div>
    </section>
  );
}
