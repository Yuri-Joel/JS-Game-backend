import { FastifyInstance } from "fastify";
import { QuestionController } from "./question.controller";

export async function QuestionRoutes(app: FastifyInstance) {
  app.post("/", QuestionController.create);
  app.get("/question", QuestionController.list);
  app.delete("/", QuestionController.delete);
}
