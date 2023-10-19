import { ITodoItem, ITodoItemRepository } from "@/interfaces";

export class TodoItemRepository implements ITodoItemRepository {
	private todoItems: ITodoItem[] = [
		{
			description: "TEST-DESCRIPTION",
			isActive: true,
			title: "TEST-TITLE",
		},
	];

	async create(newItem: ITodoItem): Promise<void> {
		this.todoItems.push(newItem);
	}

	async getAll(): Promise<ITodoItem[]> {
		return this.todoItems;
	}
}
