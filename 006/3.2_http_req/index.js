import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  console.log(req.rawHeaders);
  res.sendStatus(200);
});

app.get("/about", (req, res) => {
  res.send("<h2>About Page</h2>");
});

app.post("/reg", (req, res) => {
  res.sendStatus(201);
});

app.put("/user", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
