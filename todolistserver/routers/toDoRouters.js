import express from "express";
import toDoModel from "../models/toDoModel.js";
import mongoose from "mongoose";

const router = express.Router();

//getting all todolist
router.get("/", async (req, res) => {
  try {
    const todos = await toDoModel.find();
    return res.status(200).json(todos);
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
});

//get todo Item byID
router.get("/getById/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const IsvalidID = mongoose.Types.ObjectId.isValid(id);
    if (IsvalidID) {
      const toDo = await toDoModel.findById(id);
      return res.status(200).json(toDo);
    } else {
      return res.status(404).json("invalid todo id");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

//add new todo item
router.post("/", async (req, res) => {
  try {
    const toDo = await toDoModel.create(req.body);
    return res.status(201).json(toDo);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

//update todo item
router.put("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const IsvalidID = mongoose.Types.ObjectId.isValid(id);
    if (IsvalidID) {
      const { toDo, finishDate, priority, status, subDoTo } = req.body;
      const updatedToDo = await toDoModel.findByIdAndUpdate(
        id,
        {
          toDo,
          finishDate,
          priority,
          status,
          subDoTo,
        },
        { new: true }
      );
      return res.status(200).json(updatedToDo);
    } else {
      return res.status(404).json("invalid todo id");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

//delete todo item
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const IsvalidID = mongoose.Types.ObjectId.isValid(id);
    if (IsvalidID) {
      const deletedTodo = await toDoModel.findByIdAndDelete(id);
      return res.status(202).json(deletedTodo);
    } else {
      return res.status(404).json("invalid todo id");
    }
  } catch (error) {
    return res.status(500).json(error.message);
  }
});

export default router;
