const express = require("express");
const { PORT } = require("./config/env");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT:${PORT}`);
});
