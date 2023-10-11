import express from "express";

const app = express();

app.get("/", (req, res) => {
	res.send("Express + Typescript server by jvillegasl");
});

app.get("/api", (req, res) => {
	res.send("API Route");
});

export default app;
