import { z } from "zod";

export const ATTENDING_VALUES = ["yes", "maybe", "no"] as const;
export const PROTEIN_VALUES = ["pork", "beef", "chicken", "shrimp"] as const;

export const rsvpSchema = z.object({
  name: z.string().trim().min(1, "Sag mir, wer du bist."),
  attending: z.enum(ATTENDING_VALUES, {
    message: "Wähle eine Option.",
  }),
  proteins: z.array(z.enum(PROTEIN_VALUES)).optional(),
  diet: z.string().trim().max(280).optional().or(z.literal("")),
  song: z.string().trim().max(140).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type RsvpInput = z.infer<typeof rsvpSchema>;
