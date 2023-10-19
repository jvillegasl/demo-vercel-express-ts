import express from "express";
import getApiRouter from "./routes/api";
import { ITodoItemRepository } from "./interfaces";
import { TodoItemRepository } from "./repositories";

export type AppDependencies = {
	todoItemRepository: ITodoItemRepository;
};

export function getApp(
	dependencies: AppDependencies = {
		todoItemRepository: new TodoItemRepository(),
	},
) {
	const app = express();

	app.get("/", (req, res) => {
		res.send(
			"Express + Typescript server by jvillegasl from GitHub Actions",
		);
	});

	app.use("/api", getApiRouter(dependencies));

	return app;
}

const app = getApp();
export default app;
