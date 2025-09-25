import supertest from "supertest";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { buildApp } from "../../app";

let app: ReturnType<typeof buildApp>;

describe("Game routes", () => {
  beforeAll(async () => {
    app = buildApp();
    await app.ready(); // garante que rotas foram registradas
  });

  afterAll(async () => {
    await app.close();
  });
  it("deve criar partida", async () => {
    const res = await supertest(app.server)
      .post("/games/")
      .send({ status: "waiting" });
    expect(res.status).toBe(201);
  });
});
