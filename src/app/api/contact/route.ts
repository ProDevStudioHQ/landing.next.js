import { NextResponse } from "next/server";

const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
const TO_EMAIL = "digitalstudiolf@gmail.com";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";

type Payload = {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
};

function escape(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  let body: Partial<Payload>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { name, email, projectType, budget, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  if (!RESEND_API_KEY) {
    console.warn("[contact] RESEND_API_KEY not set — logging only", body);
    return NextResponse.json({ ok: true, dev: true });
  }

  const subject = `New inquiry — ${projectType || "Project"} (${budget || "no budget"})`;
  const html = `
    <h2>New project inquiry</h2>
    <p><strong>Name:</strong> ${escape(name)}</p>
    <p><strong>Email:</strong> ${escape(email)}</p>
    <p><strong>Project type:</strong> ${escape(projectType || "—")}</p>
    <p><strong>Budget:</strong> ${escape(budget || "—")}</p>
    <p><strong>Message:</strong></p>
    <p>${escape(message).replace(/\n/g, "<br>")}</p>
  `;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Digital Studio LF <${FROM_EMAIL}>`,
        to: TO_EMAIL,
        reply_to: email,
        subject,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("[contact] resend error", res.status, err);
      return NextResponse.json({ error: "Email service failed" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] send failed", e);
    return NextResponse.json({ error: "Send failed" }, { status: 500 });
  }
}
