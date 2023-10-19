import { Request, Response } from "express";
import { ITodoItemRepository } from "@/interfaces";
import { newTodoItemSchema } from "@/schemas";

export class TodoItemsController {
	constructor(private todoItemRepository: ITodoItemRepository) {}

	public async getAll(req: Request, res: Response) {
		const todoItems = await this.todoItemRepository.getAll();

		res.status(200).json(todoItems);
	}

	public async create(req: Request, res: Response) {
		const body = req.body;

		const validationResult = newTodoItemSchema.safeParse(body);

		if (!validationResult.success) {
			res.status(400).json({
				message: "Validation Error",
				details: validationResult.error,
			});
			return;
		}

		const newTodoItem = validationResult.data;

		await this.todoItemRepository.create(newTodoItem);

		res.sendStatus(201);
	}
}
