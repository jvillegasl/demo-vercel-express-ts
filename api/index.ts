import moduleAlias from "module-alias";

moduleAlias.addAliases({
	"@": `${__dirname}`,
});

import express from "express";
import apiRouter from "./routes/api";

const app = express();

app.get("/", (req, res) => {
	res.send("Express + Typescript server by jvillegasl from GitHub Actions");
});

app.use("/api", apiRouter);

export default app;
