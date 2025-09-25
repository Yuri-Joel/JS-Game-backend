import client from "prom-client";

export const httpRequests = new client.Counter({
  name: "http_requests_total",
  help: "Total de requisições HTTP",
});
