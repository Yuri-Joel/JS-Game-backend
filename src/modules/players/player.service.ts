import { PlayerModel } from "./player.model";
import { CreatePlayerInput } from "./player.schema";

export const PlayerService = {
  async createPlayer(data: CreatePlayerInput) {
    return PlayerModel.create({ data });
  },

  async getPlayers() {
    return PlayerModel.findMany();
  },

  async getPlayerById(id: string) {
    return PlayerModel.findUnique({ where: { id } });
  },

  async deletePlayer(id: string) {
    return PlayerModel.delete({ where: { id } });
  },
};
