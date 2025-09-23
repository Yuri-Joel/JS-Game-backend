import { FastifyReply, FastifyRequest } from "fastify";
import { createGameSchema } from "./game.schema";
import { GameService } from "./game.service";

export const GameController = {
  async create(req: FastifyRequest, reply: FastifyReply) {
    const parsed = createGameSchema.parse(req.body);
    const game = await GameService.createGame(parsed);
    reply.code(201).send(game);
  },

  async list(_: FastifyRequest, reply: FastifyReply) {
    const games = await GameService.getGames();
    reply.send(games);
  },

  async get(
    req: FastifyRequest<{ Querystring: { id: string } }>,
    reply: FastifyReply
  ) {
    const game = await GameService.getGameById(req.query.id);
    if (!game) return reply.code(404).send({ error: "Not found" });
    reply.send(game);
  },

  async delete(
    req: FastifyRequest<{ Querystring: { id: string } }>,
    reply: FastifyReply
  ) {
    await GameService.deleteGame(req.query.id);
    reply.code(204).send();
  },
};
