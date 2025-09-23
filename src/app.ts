import Fastify from "fastify";
import errorHandler from "./middlewares/errorHandler";
import { GameRoutes } from "./modules/games/game.routes";
import { PlayerRoutes } from "./modules/players/player.routes";
import { QuestionRoutes } from "./modules/questions/question.routes";

export function buildApp() {
  const app = Fastify();

  // Middleware global de erros
  app.setErrorHandler(errorHandler);

  // Rotas
  app.register(PlayerRoutes, { prefix: "/players" });
  app.register(GameRoutes, { prefix: "/games" });
  app.register(QuestionRoutes, { prefix: "/questions" });

  return app;
}
