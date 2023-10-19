import { z } from "zod";

export const newTodoItemSchema = z.object({
	title: z
		.string({ required_error: "Title field is required" })
		.min(1, "Title field is required"),
	description: z
		.string({ required_error: "Description field is required" })
		.min(1, "Description field is required"),
	isActive: z.boolean({ required_error: 'isActive field is required"' }),
});
