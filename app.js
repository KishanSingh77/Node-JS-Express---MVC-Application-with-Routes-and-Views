const express = require("express");
const app = express();
const catalogRouter = require("./routes/catalogController");
const path = require("path");
//var favicon = require("serve-favicon");

app.set("view engine", "ejs");
app.use("/assets", express.static("assets"));
app.get("/", (req, res) => {
  res.render("index");
});
//app.use(favicon(path.join(__dirname, "/assets/Images/favicon.ico")));

app.use("/", catalogRouter);

app.get("/myItems", (req, res) => {
  res.render("myItems");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(8080, () => {
  "Server running";
});
