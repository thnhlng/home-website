import { z } from "zod";

export const PROTEIN_VALUES = ["pork", "beef", "chicken", "shrimp"] as const;

export const rsvpSchema = z.object({
  proteins: z.array(z.enum(PROTEIN_VALUES)).optional(),
});

export type RsvpInput = z.infer<typeof rsvpSchema>;
