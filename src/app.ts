import express from "express";
import createHttpError from "http-errors";
import exampleRoutes from "./routes/exampleRoutes";
import mongoose from "mongoose";
import { DB, PORT } from "./config";
import { errorHandler } from "./middleware/errorHandler";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello world",
//   });
// });
app.use("/", exampleRoutes);

app.use(() => {
  throw createHttpError(404, "Page Not Found");
});

app.use(errorHandler);

// app.listen(9000, () => {
//   console.log("Server start on port 9000");
// });
// console.log(DB);

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connect to db");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch(() => {
    throw createHttpError(501, "Unable to connect to database");
  });
