import "dotenv/config";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";
import { port } from "./contants.js";

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running on PORT:${port}`);
    });
  })
  .catch((err) => {
    consoole.log("MONGODB Connection FAILED !!! ", err);
  });
