import { createServer } from "http";
import { Server as SocketIOServer } from "socket.io";
import { buildApp } from "./app";
import registerGameSocket from "./sockets/game.socket";

const app = buildApp();

const PORT = process.env.PORT || 3000;

// Criamos servidor HTTP a partir do Fastify
const server = createServer(app.server);

// Socket.IO
const io = new SocketIOServer(server, {
  cors: {
    origin: "*", // 👉 em produção: restringir para o frontend
  },
});

// Registra eventos do jogo
registerGameSocket(io);

// Inicia servidor
server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
