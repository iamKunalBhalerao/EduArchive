const express = require("express");

const connectDB = require("./db/db");
const registerRouter = require("./routes/register.routes");

const app = express();

app.use(express.json());

app.use("/api/register", registerRouter);

connectDB();
app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
