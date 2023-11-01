import fastify from "fastify";
import { appRoutes } from "./http/controllers/routes";
import { ZodError } from "zod";
import { env } from "./env";
import { Console } from "console";

export const app = fastify();

app.register(appRoutes);

app.setErrorHandler((error, request, replay) => {
  if (error instanceof ZodError) {
    return replay
      .status(400)
      .send({ message: "Validation erro.", issues: error.format() });
  }

  if (env.NODE_ENV !== "production") {
    console.error(error);
  }

  return replay.status(500).send({ message: "Internal server error." });
});
