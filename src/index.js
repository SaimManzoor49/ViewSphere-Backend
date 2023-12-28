import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./db/index.js";
import { app } from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8080, () => {
      console.log("app is listning on : " + (process.env.PORT || 8080));
    });
    app.on("error", () => {
      console.log("Failed to connect app with DB");
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed", err);
  });
