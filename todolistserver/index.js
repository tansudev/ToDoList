import express from "express";
import routers from "./routers/toDoRouters.js";

//import db
import { connectDB } from "./db.js";
const app = express();

app.use(express.json());
app.use("/todos", routers);

app.listen(5000, () => {
  connectDB();
});
