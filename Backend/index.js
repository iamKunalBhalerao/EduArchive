const express = require("express");

const connectDB = require("./db/db");
const adminRouter = require("./routes/admin.routes.js");
const loginRouter = require("./routes/login.routes.js");
const registerRouter = require("./routes/register.routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/register", registerRouter);
app.use("/api/login", loginRouter);
app.use("/api/admin", adminRouter);

connectDB();
app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
