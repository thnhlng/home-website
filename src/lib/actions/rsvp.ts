"use server";

import { revalidatePath } from "next/cache";
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

  revalidatePath("/");
  return { ok: true };
}

export type SongSubmission = { id: string; song: string };

export async function fetchSongSubmissions(): Promise<SongSubmission[]> {
  const { data, error } = await supabase
    .from("song_submissions")
    .select("id, song")
    .order("id", { ascending: true });

  if (error) {
    console.error("[rsvp] fetch songs error", error.message);
    return [];
  }

  return (data ?? [])
    .map((row) => ({
      id: String(row.id),
      song: typeof row.song === "string" ? row.song.trim() : "",
    }))
    .filter((row) => row.song.length > 0);
}
