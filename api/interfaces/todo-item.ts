export interface ITodoItem {
	title: string;
	description: string;
	isActive: boolean;
}

export interface ITodoItemRepository {
	getAll(): Promise<ITodoItem[]>;
	create(newItem: ITodoItem): Promise<void>;
}
