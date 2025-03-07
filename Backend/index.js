const express = require("express");

const connectDB = require("./db/db");
const adminRouter = require("./routes/admin.routes.js");
const studentRouter = require("./routes/student.routes.js");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/admin", adminRouter);
app.use("/api/student", studentRouter);

connectDB();
app.listen(3000, () => {
  console.log("server is on PORT:3000");
});
