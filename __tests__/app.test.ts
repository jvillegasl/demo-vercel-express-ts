import { describe, it } from "node:test";
import assert from "node:assert";
import request from "supertest";

import app from "@/index";

describe("GET /", () => {
	it("should respond with a text", async () => {
		const response = await request(app).get("/");

		assert.equal(response.status, 200);
		assert.equal(
			response.text,
			"Express + Typescript server by jvillegasl from GitHub Actions",
		);
	});
});

describe("GET /api", () => {
	it("should respond with a text", async () => {
		const response = await request(app).get("/api");

		assert.equal(response.status, 200);
		assert.equal(response.text, "API Route");
	});
});
