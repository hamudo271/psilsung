// 견적 문의 → Resend 로 회사 이메일 발송
// 필요한 환경변수 (Railway 에 등록):
//   RESEND_API_KEY  : Resend API 키 (필수)
//   MAIL_TO         : 받는 주소 (선택, 기본 psilsung@naver.com)
//   MAIL_FROM       : 보내는 주소 (선택, 기본 "일성테크 문의 <noreply@psilsung.com>")
//                     ※ psilsung.com 도메인을 Resend 에서 인증해야 실제 발송됩니다.

export const config = {
  api: { bodyParser: { sizeLimit: "25mb" } }, // 도면 첨부 대응
};

const esc = (v = "") =>
  String(v).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(503).json({
      error: "메일 발송이 아직 설정되지 않았습니다. 전화(051-328-8988)로 문의해 주세요.",
    });
  }

  const {
    name,
    company,
    email,
    phone,
    message,
    files,
    company_website, // 허니팟(봇 차단용, 사람은 비워둠)
  } = req.body || {};

  // 봇이 숨김 필드를 채우면 성공한 척하고 무시
  if (company_website) return res.status(200).json({ ok: true });

  if (!name || !company || !email || !phone) {
    return res.status(400).json({ error: "필수 항목(성함·업체명·이메일·연락처)을 입력해 주세요." });
  }

  const to = process.env.MAIL_TO || "tmdfo302@naver.com";
  const from = process.env.MAIL_FROM || "일성테크 문의 <noreply@psilsung.com>";

  const rows = [
    ["성함", name],
    ["업체명", company],
    ["이메일", email],
    ["연락처", phone],
    ["내용", message || "(없음)"],
  ]
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 14px;background:#f6f6f9;font-weight:700;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 14px;white-space:pre-wrap">${esc(v)}</td></tr>`
    )
    .join("");

  const html = `
    <div style="font-family:sans-serif;max-width:640px;margin:0 auto;color:#16161a">
      <h2 style="margin:0 0 16px">일성테크 견적 문의</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid #eee">${rows}</table>
      <p style="margin-top:16px;font-size:12px;color:#84858f">홈페이지 견적문의 폼을 통해 접수되었습니다. 이 메일에 회신하면 문의자에게 바로 답장됩니다.</p>
    </div>`;

  const attachments = Array.isArray(files)
    ? files
        .filter((f) => f && f.filename && f.content)
        .slice(0, 10)
        .map((f) => ({ filename: f.filename, content: f.content }))
    : [];

  try {
    const r = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `[일성테크] 견적 문의 — ${company} ${name}`,
        html,
        attachments,
      }),
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      console.error("Resend 발송 실패", r.status, detail);
      return res.status(502).json({ error: "메일 발송에 실패했습니다. 잠시 후 다시 시도해 주세요." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Resend 요청 오류", err);
    return res.status(502).json({ error: "메일 발송 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." });
  }
}
