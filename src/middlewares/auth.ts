import { FastifyReply, FastifyRequest } from "fastify";

export async function authMiddleware(req: FastifyRequest, reply: FastifyReply) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return reply.status(401).send({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];

  try {
    // 👉 futuramente: validar JWT
    // const decoded = jwt.verify(token, process.env.JWT_SECRET!);
    // req.user = decoded;
  } catch (err) {
    return reply.status(401).send({ error: "Invalid Token" });
  }
}
