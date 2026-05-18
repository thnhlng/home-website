"use server";

import { rsvpSchema, type RsvpInput } from "./rsvpSchema";

export type RsvpResult =
  | { ok: true }
  | {
      ok: false;
      formError?: string;
      fieldErrors?: Partial<Record<keyof RsvpInput, string>>;
    };

export async function submitRsvp(input: RsvpInput): Promise<RsvpResult> {
  const parsed = rsvpSchema.safeParse(input);

  if (!parsed.success) {
    const fieldErrors: Partial<Record<keyof RsvpInput, string>> = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (typeof key === "string" && !(key in fieldErrors)) {
        fieldErrors[key as keyof RsvpInput] = issue.message;
      }
    }
    return { ok: false, fieldErrors };
  }

  // No persistence yet — log the reply for now. Hook up a backend when ready.
  console.log("[rsvp]", parsed.data);

  return { ok: true };
}
