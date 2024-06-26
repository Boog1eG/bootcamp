import express from "express";
import open from "open";
import path from "path";

import webpack from "webpack";
import config from "../webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";

const port = 3000;
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler));

app.use(express.static("src"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src/index.html"));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open("http://localhost:" + port);
  }
});
