import express from "express";
import { getPayloadClient } from "./get-payload";
import { nextHandler } from "./next-utils";

const app = express();

const PORT = Number(process.env.PORT) || 3000;

const start = async () => {
  const payload = await getPayloadClient({
    initOptions: {
      express: app,
      onInit: async (cms) => {
        cms.logger.info(`Admin URL ${cms.getAdminURL()}`);
      },
    },
  });

  app.use((req, res) => nextHandler(req, res));
};

start();

const numbers = [33, 2, 8];
numbers.sort();
console.log(numbers[1]);
