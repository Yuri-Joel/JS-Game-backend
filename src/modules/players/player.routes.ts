import { FastifyInstance } from "fastify";
import { PlayerController } from "./player.controller";

export async function PlayerRoutes(app: FastifyInstance) {
  app.post("/", PlayerController.create);
  app.get("/", PlayerController.list);
  app.get("/player", PlayerController.get);
  app.delete("/", PlayerController.delete);
}
