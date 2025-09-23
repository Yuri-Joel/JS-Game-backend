import { FastifyReply, FastifyRequest } from "fastify";
import { createPlayerSchema } from "./player.schema";
import { PlayerService } from "./player.service";

export const PlayerController = {
  async create(req: FastifyRequest, reply: FastifyReply) {
    const parsed = createPlayerSchema.parse(req.body);
    const player = await PlayerService.createPlayer(parsed);
    reply.code(201).send(player);
  },

  async list(_: FastifyRequest, reply: FastifyReply) {
    const players = await PlayerService.getPlayers();
    reply.send(players);
  },

  async get(
    req: FastifyRequest<{ Querystring: { id: string } }>,
    reply: FastifyReply
  ) {
    const player = await PlayerService.getPlayerById(req.query.id);
    if (!player) return reply.code(404).send({ error: "Not found" });
    reply.send(player);
  },

  async delete(
    req: FastifyRequest<{ Querystring: { id: string } }>,
    reply: FastifyReply
  ) {
    await PlayerService.deletePlayer(req.query.id);
    reply.code(204).send();
  },
};
