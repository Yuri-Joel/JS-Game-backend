import { GameModel } from "./game.model";
import { CreateGameInput } from "./game.schema";

export const GameService = {
  async createGame(data: CreateGameInput) {
    return GameModel.create({
      data: {
        status: data.status,
        players: data.players
          ? { connect: data.players.map((id) => ({ id })) }
          : undefined,
        questions: data.questions
          ? { connect: data.questions.map((id) => ({ id })) }
          : undefined,
      },
    });
  },

  async getGames() {
    return GameModel.findMany({
      include: { players: true, questions: true },
    });
  },

  async getGameById(id: string) {
    return GameModel.findUnique({
      where: { id },
      include: { players: true, questions: true },
    });
  },

  async deleteGame(id: string) {
    return GameModel.delete({ where: { id } });
  },
};
