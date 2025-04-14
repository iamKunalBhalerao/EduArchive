import "dotenv/config";
import { connectDB } from "./db/db.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on PORT:${process.env.PORT}`);
    });
  })
  .catch((err) => {
    consoole.log("MONGODB Connection FAILED !!! ", err);
  });
