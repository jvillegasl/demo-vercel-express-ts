import { describe, it } from "node:test";
import assert from "node:assert";
import request from "supertest";

import { getApp } from "@/index";
import { getRandomInt } from "@/utils";

import {
	MockTodoItemRepository,
	mockTodoItem,
	mockTodoItems,
} from "@tests/mocks";

describe("GET /api/todo-items", () => {
	const todoItemsCount = getRandomInt(0, 10);
	const todoItems = mockTodoItems(todoItemsCount);
	const todoItemRepository = new MockTodoItemRepository(todoItems);

	const app = getApp({ todoItemRepository });

	it("should get all Todo Items", async () => {
		const response = await request(app).get("/api/todo-items");

		const body: unknown = response.body;

		assert.equal(response.status, 200);
		assert.equal(Array.isArray(body), true);
		assert.equal((body as unknown[]).length, todoItemsCount);

		assert.deepEqual(todoItems, body);
	});
});

describe("POST /api/todo-items", () => {
	const todoItemsCount = getRandomInt(0, 10);
	const todoItems = mockTodoItems(todoItemsCount);
	const todoItemRepository = new MockTodoItemRepository(todoItems);

	const app = getApp({ todoItemRepository });

	it("should create a new Todo Item", async () => {
		const newTodoItem = mockTodoItem();

		const response = await request(app)
			.post("/api/todo-items")
			.send(newTodoItem);

		assert.equal(response.status, 201);
		assert.equal(todoItemRepository.todoItems.length, todoItemsCount + 1);

		assert.deepEqual(todoItems.at(-1), newTodoItem);
	});

	it("should respond with 400 status code when body is not valid", async () => {
		const response = await request(app).post("/api/todo-items").send({});

		assert.equal(response.status, 400);
	});
});
