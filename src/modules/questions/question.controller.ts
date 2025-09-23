import { FastifyReply, FastifyRequest } from "fastify";
import { createQuestionSchema } from "./question.schema";
import { QuestionService } from "./question.service";

export const QuestionController = {
  async create(req: FastifyRequest, reply: FastifyReply) {
    const parsed = createQuestionSchema.parse(req.body);
    const question = await QuestionService.createQuestion(parsed);
    reply.code(201).send(question);
  },

  async list(_: FastifyRequest, reply: FastifyReply) {
    const questions = await QuestionService.getQuestions();
    reply.send(questions);
  },

  async get(
    req: FastifyRequest<{ Querystring: { id: string } }>,
    reply: FastifyReply
  ) {
    const question = await QuestionService.getQuestionById(req.query.id);
    if (!question) return reply.code(404).send({ error: "Not found" });
    reply.send(question);
  },

  async delete(
    req: FastifyRequest<{ Querystring: { id: string } }>,
    reply: FastifyReply
  ) {
    await QuestionService.deleteQuestion(req.query.id);
    reply.code(204).send();
  },
};
