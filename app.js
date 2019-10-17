const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const router = require("./routes/Router");
const WindowMock = require("window-mock");

global.navigator = () => null;

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// defining router
app.use("/", router);

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
