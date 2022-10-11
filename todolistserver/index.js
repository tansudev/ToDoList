import express from "express";
import cors from "cors";
import routers from "./routers/toDoRouters.js";

//import db
import { connectDB } from "./db.js";
const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/todos", routers);

app.listen(5000, () => {
  connectDB();
});
