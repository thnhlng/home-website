import { z } from "zod";

export const rsvpSchema = z.object({
  song: z.string().trim().max(140).optional().or(z.literal("")),
});

export type RsvpInput = z.infer<typeof rsvpSchema>;
