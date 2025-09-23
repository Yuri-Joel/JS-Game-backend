import { FastifyInstance } from "fastify";
import { GameController } from "./game.controller";

export async function GameRoutes(app: FastifyInstance) {
  app.post("/", GameController.create);
  app.get("/", GameController.list);
  app.get("/game", GameController.get);
  app.delete("/", GameController.delete);
}
