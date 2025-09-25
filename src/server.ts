import { Server as SocketIOServer } from "socket.io";
import { buildApp } from "./app";
import registerGameSocket from "./sockets/game.socket";
const app = buildApp();

const PORT = process.env.PORT || 8800;

const server = app.server;
const io = new SocketIOServer(server, {
  cors: {
    origin: "*",
  },
});

registerGameSocket(io);

// Inicia o Fastify normalmente
app.listen({ port: Number(PORT), host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`🚀 Server running on ${address}`);
});
