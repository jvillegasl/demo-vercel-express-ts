import { Request, Response } from "express";

export class TodoItemsController {
	constructor() {}

	public getAll(req: Request, res: Response) {
		res.json({ message: "It works!" });
	}
}
