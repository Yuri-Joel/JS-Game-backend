import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function PrismaConnection() {
  try {
    await prisma.$connect();

    console.log("Prisma conectado ao banco de dados com sucesso.");
  } catch (error) {
    console.error("❌ Erro ao conectar com o banco de dados:", error);
    process.exit(1); // Encerra a aplicação
  }
}
