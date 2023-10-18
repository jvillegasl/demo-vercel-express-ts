import { ITodoItem, ITodoItemRepository } from "@/interfaces";
import randomstring from "randomstring";

export class MockTodoItemRepository implements ITodoItemRepository {
	constructor(public todoItems: ITodoItem[]) {}

	async create(newItem: ITodoItem): Promise<void> {
		this.todoItems.push(newItem);
	}

	async getAll(): Promise<ITodoItem[]> {
		return this.todoItems;
	}
}

export function mockTodoItem(): ITodoItem {
	return {
		description: randomstring.generate(),
		title: randomstring.generate(),
		isActive: Math.random() < 0.5,
	};
}

export function mockTodoItems(length: number): ITodoItem[] {
	const todoItems: ITodoItem[] = [];

	for (let i = 0; i < length; i++) {
		todoItems.push(mockTodoItem());
	}

	return todoItems;
}
