import { parentPort } from "worker_threads";

if (parentPort) {
  parentPort.on("message", (data) => {
    parentPort!.postMessage({ result: "Game backend" });
  });
}
