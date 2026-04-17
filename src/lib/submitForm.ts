export type FormType = "contact" | "volunteer" | "help" | "general";

export async function submitForm(formType: FormType, data: Record<string, unknown>): Promise<void> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ formType, ...data }),
  });
  if (!res.ok) {
    const payload = await res.json().catch(() => ({}));
    throw new Error(payload.error || `Submission failed (${res.status})`);
  }
}
