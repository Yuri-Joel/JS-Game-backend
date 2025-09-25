import Fastify from "fastify";
import errorHandler from "./middlewares/errorHandler";
import { GameRoutes } from "./modules/games/game.routes";
import { PlayerRoutes } from "./modules/players/player.routes";
import { QuestionRoutes } from "./modules/questions/question.routes";
import { logger } from "./observability/logger";
import { httpRequests } from "./observability/metrics";

export function buildApp() {
  const app = Fastify();

  // Middleware global de erros
  app.setErrorHandler(errorHandler);
  app.addHook("onRequest", async (req) => {
    httpRequests.inc();
    logger.info({ url: req.url }, "Nova requisição");
  });

  // Rotas
  app.register(PlayerRoutes, { prefix: "/players" });
  app.register(GameRoutes, { prefix: "/games" });
  app.register(QuestionRoutes, { prefix: "/questions" });
  app.get("/", async () => ({ msg: "API Online!" }));

  return app;
}
