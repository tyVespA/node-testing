const express = require("express");
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());
app.use(express.static("public"));
// for using react..
app.use(require("cors")());
app.use(mw);

function mw(req, res, next) {
  console.log("middleware");
  const { id } = req.params;
  if (id != 8) {
    return res.sendStatus(403);
  }
  next();
}

// TEMP DATABASE
const db = [];

// app.get("/", (req, res) => {
//   console.log("You have reached the home route: GET");
//   res.sendStatus(200);
// });

app.post("/api/info", (req, res) => {
  const { information } = req.body;
  console.log("THE POSTED MSG WAS:", information);
  db.push(information);
  console.log(db);
  res.status(201).json({ "your message:": information });
});

app.put("/api/", (req, res) => {
  const { word, test } = req.query;
  console.log(word, test);
  res.sendStatus(200);
});

app.delete("/delete/:id/", mw, (req, res) => {
  const { id } = req.params;
  console.log("What do you want to delete?", id);
  res.sendStatus(200);
});

app.listen(4000, () => console.log(`Server has started on port: ${PORT}`));

// GET POST PATCH PUT DELETE

// app.get("/", (req, res) => {});

// app.delete("/", (req, res) => {});
