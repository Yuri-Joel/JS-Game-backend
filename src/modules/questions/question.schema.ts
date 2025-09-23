import { z } from "zod";

export const createQuestionSchema = z.object({
  text: z.string().min(5),
  type: z.enum(["multiple_choice", "code", "true_false", "real_case"]),
  options: z.array(z.string()).optional(), // só usado no multiple_choice
  answer: z.string(),
  difficulty: z.enum(["easy", "medium", "hard"]),
});

export type CreateQuestionInput = z.infer<typeof createQuestionSchema>;
