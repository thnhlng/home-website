"use server";

import { rsvpSchema, type RsvpInput } from "./rsvpSchema";
import { supabase } from "@/lib/supabase";

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

  const { error } = await supabase
    .from("song_submissions")
    .insert({ song: parsed.data.song ?? "" });

  if (error) {
    console.error("[rsvp] supabase error", error.message);
    return { ok: false, formError: "Etwas ist schiefgelaufen. Versuch es gleich noch einmal." };
  }

  return { ok: true };
}
