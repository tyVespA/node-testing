const express = require("express");
const app = express();
const PORT = 4000;

// middleware
app.use(express.json());

// TEMP DATABASE
const db = [];

app.get("/", (req, res) => {
  console.log("You have reached the home route: GET");
  res.status(200).json({ message: "hi" });
});

app.post("/api/info", (req, res) => {
  const { information } = req.body;
  console.log("THE POSTED MSG WAS:", information);
  db.push(information);
  console.log(db);
  res.status(201).json({ "your message:": information });
});

app.put("/api/", (req, res) => {
  const { information } = req.body;
  console.log(information);
  res.sendStatus(200);
});

app.delete("/delete:id", (req, res) => {
  console.log("What do you want to delete?");
  res.sendStatus(200);
});

app.listen(4000, () => console.log(`Server has started on port: ${PORT}`));

// GET POST PATCH PUT DELETE

// app.get("/", (req, res) => {});

// app.delete("/", (req, res) => {});
