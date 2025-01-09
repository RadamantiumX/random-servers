// Separamos los HILOS en 4
// Para que cada uno compita en paralelo

import express from "express";
import { Worker, workerData } from "worker_threads";

const app = express();
const port = 3000;
const THREAD_COUNT = 4;

app.get("/non-blocking/", (req, res) => {
  res.status(200).send("This page is non-blocking");
});

// Funcion para los WORKERS
// Trabaja segun los THREAS disponibles en el ordenador que corre
function createWorker() {
  return new Promise((resolve, reject) => {
    const worker = new Worker(
      "./four-workers.js",
      { workerData: { thread_count: THREAD_COUNT } } // Enviamos los datos al WORKER
    );

    // Primer evento
    worker.on("message", (data) => {
      resolve(data);
    });

    // Segundo evento --> Capturamos algún error
    worker.on("error", (error) => {
      reject(`An error occurred ${error}`);
    });
  });
}

app.get("/blocking", async (req, res) => {
  const workerPromises = [];

  for (let i = 0; i < THREAD_COUNT; i++) {
    workerPromises.push(createWorker());
  }

  const thread_results = await Promise.all(workerPromises);
  const total =
    thread_results[0] +
    thread_results[1] +
    thread_results[2] +
    thread_results[3];
  res.status(200).send(`results is ${total}`);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
