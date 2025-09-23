import { QuestionModel } from "./question.model";
import { CreateQuestionInput } from "./question.schema";

export const QuestionService = {
  async createQuestion(data: CreateQuestionInput) {
    return QuestionModel.create({ data });
  },

  async getQuestions() {
    return QuestionModel.findMany();
  },

  async getQuestionById(id: string) {
    return QuestionModel.findUnique({ where: { id } });
  },

  async deleteQuestion(id: string) {
    return QuestionModel.delete({ where: { id } });
  },
};
