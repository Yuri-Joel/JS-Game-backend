import { z } from "zod";

export const createGameSchema = z.object({
  status: z.enum(["waiting", "playing", "finished"]).default("waiting"),
  players: z.array(z.string()).optional(), // lista de IDs de players
  questions: z.array(z.string()).optional(), // lista de IDs de questions
});

export type CreateGameInput = z.infer<typeof createGameSchema>;
