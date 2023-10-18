import express, { Router } from "express";
import { TodoItemsController } from "@/controllers";

const apiRouter = Router();

const todoItemsController = new TodoItemsController();

apiRouter.use(express.json());

apiRouter.get("/", (req, res) => res.send("API Route"));
apiRouter.get("/todo-items", todoItemsController.getAll);

export default apiRouter
