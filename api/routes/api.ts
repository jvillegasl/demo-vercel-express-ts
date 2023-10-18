import express, { Router } from "express";
import { TodoItemsController } from "@/controllers";
import { AppDependencies } from "..";

export default function getApiRouter({ todoItemRepository }: AppDependencies) {
	const apiRouter = Router();

	const todoItemsController = new TodoItemsController(todoItemRepository);

	apiRouter.use(express.json());

	apiRouter.get("/", (req, res) => res.send("API Route"));
	apiRouter.get("/todo-items", (req, res) =>
		todoItemsController.getAll(req, res),
	);
	apiRouter.post('/todo-items', (req, res) => todoItemsController.create(req, res))

	return apiRouter;
}
