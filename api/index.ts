import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("New Home Route 2");
});

app.get("/api", (req, res) => {
	res.send("New API Route 2");
});

export default app;
