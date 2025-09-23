import { FastifyError, FastifyReply, FastifyRequest } from "fastify";

export default function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  request.log.error(error);

  if (error.validation) {
    reply.status(400).send({
      error: "Validation Error",
      details: error.validation,
    });
  } else {
    reply.status(error.statusCode || 500).send({
      error: error.message || "Internal Server Error",
    });
  }
}
