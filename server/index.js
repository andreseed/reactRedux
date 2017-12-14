import express from "express";
import path from "path";
import bodyParser from "body-parser";

import webpack from "webpack";
import webpackMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import webpackConfig from "../webpack.config.dev";

import users from "./routes/users";

let app = express();

// User Sign Up - Server-side validation
app.use(bodyParser.json());
app.use("/api/users", users);

//Hot automatic compiler
const compiler = webpack(webpackConfig);
app.use(
  webpackMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo: true
  })
);
app.use(webpackHotMiddleware(compiler));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(3000, () => console.log("Running on 192.168.0.18:3000"));
