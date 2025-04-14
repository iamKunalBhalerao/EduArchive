const express = require("express");
const connectDB = require("./db/db");

const { PORT } = require("./config/env.config");

const studentRouter = require("./routes/student.routes");
const teacherRouter = require("./routes/teacher.routes");
const organizationRouter = require("./routes/organization.routes");
const errorMiddleware = require("./middleware/error.middleware");

const app = express();

app.use(express.json());

app.use("/api/orgs", organizationRouter);
app.use("/api/teacher", teacherRouter);
app.use("/api/student", studentRouter);

app.get("/", (req, res) => {
  res.send("Hello Wolrd");
});

app.use(errorMiddleware);

app.listen(PORT, async () => {
  console.log(`Server is running on PORT:${PORT}`);
  await connectDB();
});
