import { Server, Socket } from "socket.io";

export default function registerGameSocket(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log("Novo jogador conectado:", socket.id);

    socket.on("joinRoom", (roomId) => {
      const room = io.sockets.adapter.rooms.get(roomId);

      if (room && room.size >= 4) {
        socket.emit("roomFull", roomId);
        return;
      }

      socket.join(roomId);
      console.log(`${socket.id} entrou na sala ${roomId}`);

      io.to(roomId).emit("playerJoined", socket.id);

      if (room && room.size === 4) {
        io.to(roomId).emit("game:start", { players: [...room] });
      }
    });

    socket.on("playerMove", ({ roomId, position }) => {
      socket.to(roomId).emit("playerMove", { playerId: socket.id, position });
    });

    // Desconectar
    socket.on("disconnect", () => {
      console.log(`❌ Player saiu: ${socket.id}`);
    });
  });
}
